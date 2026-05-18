import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const googleAnalyticsId = 'G-2F4J7RG4E6';

function googleAnalyticsHtml() {
  const openScript = '<' + 'script';
  const closeScript = '</' + 'script>';

  return [
    '<!-- Google tag (gtag.js) -->',
    `${openScript} async src="https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}">${closeScript}`,
    `${openScript}`,
    '  window.dataLayer = window.dataLayer || [];',
    '  function gtag(){dataLayer.push(arguments);}',
    "  gtag('js', new Date());",
    `  gtag('config', '${googleAnalyticsId}');`,
    `${closeScript}`,
  ].join('\n');
}

export default defineConfig({
  site: 'https://www.manojteja.com',
  integrations: [sitemap()],
  vite: {
    plugins: [
      {
        name: 'inject-google-analytics',
        transformIndexHtml(html) {
          if (html.includes(googleAnalyticsId)) return html;
          return html.replace('</head>', `${googleAnalyticsHtml()}\n</head>`);
        },
      },
    ],
  },
});
