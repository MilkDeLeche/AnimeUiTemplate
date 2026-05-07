# Anime UI Template

An Astro portfolio template with an anime game-menu interface, animated theme backgrounds, a slash-style loading sequence, hover sounds, a theme randomizer, and a selected work page.

## Features

- Astro static site setup
- Animated anime hero background themes
- Theme picker and randomizer button
- Persona-inspired original loading sequence
- Cute illustrated menu card backgrounds
- Selected work page with staggered game-style project slots
- Web Audio hover/click sound effects
- Centralized template content for easy buyer edits

## Quick Start

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:4321/
```

Build:

```bash
npm run build
```

Preview a production build:

```bash
npm run preview
```

## Deploy To Netlify

This repo includes `netlify.toml`, so Netlify can use the correct Astro settings automatically.

```text
Build command: npm run build
Publish directory: dist
```

Set the site to deploy from the `main` branch.

## Most Common Edits

Start with the buyer-friendly content file:

```text
src/data/templateContent.ts
```

That file controls:

- top HUD buttons
- stats
- main menu cards
- card images
- theme labels
- selected work project slots

For a guided editing map, read:

```text
DESIGN.md
```

## Asset Folders

```text
public/assets/
  hero-background.mp4
  anime-rooftop-hero.png
  cards/
  sounds/
  themes/
  work/
```

Use `public/assets/work/` for portfolio project images.

Use `public/assets/themes/` for theme background videos and posters.

Use `public/assets/cards/` for cute menu-card art.

Use `public/assets/sounds/` for button click and hover sounds.

## Optional Mini Game

The selected work page includes a removable cozy mini game:

```text
src/components/CozyMiniGame.astro
```

To remove it, open `src/pages/work.astro` and delete or comment out:

```astro
<CozyMiniGame />
```

To reuse it somewhere else, import the component into another Astro page and place `<CozyMiniGame />` where you want it.

## Pages

```text
src/pages/index.astro
src/pages/work.astro
```

The home page uses:

```text
src/components/Hero.astro
```

## Notes For Resale

Before selling or distributing the template, make sure every included image, video, sound, and font has a license that allows resale or inclusion in a template product.

The current generated/supplied assets should be reviewed against your intended marketplace licensing rules.

## Repository

This template is prepared for:

```text
https://github.com/MilkDeLeche/AnimeUiTemplate.git
```
