import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const faviconTags = [
  '<link rel="icon" href="/favicon.svg" type="image/svg+xml" />',
  '<link rel="icon" href="/favicon.ico" sizes="any" />',
  '<link rel="apple-touch-icon" href="/apple-touch-icon.png" />',
].join('\n');

export default defineConfig({
  site: 'https://www.manojteja.com',
  integrations: [sitemap()],
  vite: {
    plugins: [
      {
        name: 'inject-favicon-tags',
        transformIndexHtml(html) {
          if (html.includes('href="/favicon.svg"')) return html;
          return html.replace('</head>', faviconTags + '\n</head>');
        },
      },
    ],
  },
});
