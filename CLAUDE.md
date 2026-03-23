# CLAUDE.md

## About

**www.cuberact.org** — Main Cuberact website. Astro 5.18 + Tailwind CSS, deployed via GitHub Pages.

## Structure

- **src/layouts/** — `BaseLayout.astro` (global layout), `BlogPost.astro` (blog post layout)
- **src/components/** — `Header`, `Footer`, `BlogPostCard`, `GodotEmbed` (iframe wrapper for Godot web exports)
- **src/pages/** — Astro pages:
  - `index.astro` — homepage with project cards and news
  - `about.astro` — about page
  - `404.astro` — redirects to homepage
  - `projects/` — project pages (`cuberact-library`, `planet-chunked-lod`)
  - `demo/` — interactive demo pages with embedded Godot exports (`crope2d`, `planet-chunked-lod`)
  - `blog/` — blog index + `[...slug].astro` for individual posts
- **src/content/blog/** — blog posts in Markdown (`how-cuberact-started`, `planet-reborn`)
- **public/images/** — all images (project screenshots, logos, icons)

## ⚠️ Externally linked URLs — do not break!

Files in `public/images/` are linked from external sources (Godot Asset Library, itch.io, GitHub READMEs, etc.). **Do not rename, move, or delete** any image files without verifying external dependencies first. Broken links = broken asset store listings, broken READMEs, etc.

The same applies to **demo and project page URLs** — they are linked from Reddit posts, YouTube descriptions, GitHub READMEs, blog articles, and other external sources. Do not change URL paths (e.g. `/demo/planet-chunked-lod/`, `/projects/cuberact-library/`).
