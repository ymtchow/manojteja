const fs = require('fs');
const file = 'dist/index.html';
if (fs.existsSync(file)) {
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('/favicon.svg')) {
    const tags = [
      '<link rel="icon" href="/favicon.svg" type="image/svg+xml" />',
      '<link rel="icon" href="/favicon.ico" sizes="any" />',
      '<link rel="apple-touch-icon" href="/apple-touch-icon.png" />'
    ].join('\n');
    html = html.split('</head>').join(tags + '\n</head>');
    fs.writeFileSync(file, html);
  }
}
