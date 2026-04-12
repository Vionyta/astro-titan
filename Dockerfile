FROM node:22-alpine AS base
WORKDIR /app
RUN npm install -g pnpm@10.33.0 && pnpm config set --global update-notifier false

FROM base AS builder
COPY package*.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --no-frozen-lockfile
COPY . .
RUN pnpm run build

FROM nginx:alpine AS runner
# Copy built static files
COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html
# Copy custom nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 4321

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:4321/ || exit 1

USER nginx
