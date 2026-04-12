FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN npm install -g pnpm@10.33.0 && pnpm config set --global update-notifier false && pnpm install --no-frozen-lockfile
COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html
RUN echo 'worker_processes 1;\nevents { worker_connections 1024; }\nhttp {\n  server {\n    listen 4321;\n    server_name _;\n    root /usr/share/nginx/html;\n    index index.html;\n    include /etc/nginx/mime.types;\n    gzip on;\n    gzip_min_length 1000;\n    gzip_proxied expired no-cache no-store private auth;\n    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n    error_page 404 /404.html;\n    location = /404.html { root /usr/share/nginx/html; internal; }\n    location / { try_files $uri $uri/index.html =404; }\n  }\n}' > /etc/nginx/nginx.conf
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1
USER nginx
