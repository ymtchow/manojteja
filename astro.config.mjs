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

function el(name, attrs, body) {
  const lt = String.fromCharCode(60);
  const gt = String.fromCharCode(62);
  const sp = attrs ? ' ' : '';
  return `${lt}${name}${sp}${attrs}${gt}${body}${lt}/${name}${gt}`;
}

function legalBlock(where) {
  const text = [
    'Important Notice:',
    'views shared here are personal and informational;',
    'not employer or organisation views;',
    'not legal, financial, regulatory, underwriting, or placement advice.'
  ].join(' ');
  const linkStyle = 'color:#e8b888;text-decoration:none;font-weight:600;';
  const links = [
    el('a', `href="/disclaimer/" style="${linkStyle}"`, 'Full disclaimer'),
    el('a', `href="/privacy-policy/" style="${linkStyle}"`, 'Privacy'),
    el('a', `href="/terms-and-conditions/" style="${linkStyle}"`, 'Terms')
  ].join(' · ');
  const topStyle = 'display:none;';
  const footStyle = 'max-width:980px;margin:18px auto 0;padding:18px 24px 0;border-top:1px solid rgba(232,184,136,.18);color:rgba(237,230,214,.68);font-size:12px;line-height:1.7;text-align:center;';
  return el('div', `class="${where}-legal-notice" style="${where === 'landing' ? topStyle : footStyle}"`, `${text} ${links}`);
}

export default defineConfig({
  site: 'https://www.manojteja.com',
  integrations: [sitemap()],
  vite: {
    plugins: [
      {
        name: 'inject-site-essentials',
        transformIndexHtml(html) {
          let output = html;
          if (!output.includes(googleAnalyticsId)) {
            output = output.replace('</head>', `${googleAnalyticsHtml()}\n</head>`);
          }
          if (!output.includes('hero-name-elevation.css')) {
            output = output.replace('</head>', '\n<link rel="stylesheet" href="/hero-name-elevation.css">\n</head>');
          }
          if (!output.includes('landing-legal-notice')) {
            output = output.replace('<main id="top">', `<main id="top">\n${legalBlock('landing')}`);
          }
          if (!output.includes('footer-legal-notice')) {
            output = output.replace('</footer>', `${legalBlock('footer')}\n</footer>`);
          }
          return output;
        },
      },
    ],
  },
});
