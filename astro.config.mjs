import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';

// Get the site URL from environment variable or use a default for local development
const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';
//const isProd = import.meta.env.PROD;
//const isDev = import.meta.env.DEV;


export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`
        }
      }
    },
    optimizeDeps: {
      include: ['aos']
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: [],
      transformers: [],
      showLineNumbers: false,
      lineNumbersPrefix: ''
    }
  },
  integrations: [
    icon(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'), // Only exclude 404 page
      entryLimit: 100, // Increase entry limit if you have many pages
    }),
  ],
  security: {
    checkOrigin: true
  },
  image: {
    // Allow all remote patterns (https and http)
    remotePatterns: [
      {
        protocol: "https"
      },
      {
        protocol: "http"
      }
    ]
  }
});