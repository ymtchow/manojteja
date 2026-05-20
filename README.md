# Manoj Teja Y — Premium Editorial Publication Platform

Astro website for Manoj Teja Y, positioned as a premium practitioner-led publication platform for cross-border insurance, liability, commercial risk, and audio-supported insights.

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

Each article uses Markdown frontmatter:

```md
---
title: "Article title"
description: "Short summary"
date: "2026-05-19"
category: "Cross-Border Risk"
pdf: "https://example.com/file.pdf"
audio: "https://example.com/audio.m4a"
featuredImage: "/assets/article-page-banner-19-may-2025.png"
draft: false
---
```

## Included launch features

- Premium editorial homepage
- Articles / Insights hub
- Flagship article page
- Cloudflare R2 audio integration
- Inline browser audio player
- PDF resource link
- Disclaimer and legal navigation
- Mobile-responsive layouts
- Decap CMS files retained for future `/admin` publishing setup

## Do not upload

Do not commit `node_modules/`, `dist/`, or `.netlify/`.
