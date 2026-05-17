# Manoj Teja Y Astro Practice Site

This is an Astro conversion of the original static HTML package.

## Local commands

```bash
npm install
npm run dev
npm run build
```

## Netlify settings

- Build command: `npm run build`
- Publish directory: `dist`

## Article publishing

Add articles in:

```text
src/content/articles/
```

Each article uses Markdown with frontmatter:

```md
---
title: "Article title"
description: "Short summary"
date: "2026-05-17"
category: "Property & Casualty"
pdf: "https://example.com/file.pdf"
audio: "https://example.com/audio.mp3"
draft: false
---

Article content here.
```

## Browser admin

The project includes Decap CMS files at `/admin`.
To use it on Netlify, enable Identity and Git Gateway in the Netlify site settings.
