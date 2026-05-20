const fs = require('fs');
const path = require('path');

const distDir = 'dist';
const faviconTags = [
  '<link rel="icon" href="/favicon.svg" type="image/svg+xml" />',
  '<link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />',
  '<meta name="theme-color" content="#0b1322" />'
].join('\n');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

for (const file of walk(distDir).filter((item) => item.endsWith('.html'))) {
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('/favicon.svg') && html.includes('</head>')) {
    html = html.replace('</head>', `${faviconTags}\n</head>`);
    fs.writeFileSync(file, html);
  }
}
