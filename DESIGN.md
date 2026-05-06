# Design And Customization Guide

This template is built so buyers can change content without digging through the component markup.

## Quick Editing Map

Most buyers should only need these files:

```text
src/data/templateContent.ts
styles.css
public/assets/
```

Use `src/data/templateContent.ts` for labels, links, button art, themes, and work slots. Use `styles.css` for layout, colors, loader timing visuals, and button shapes. Use `public/assets/` for replacing images and videos.

## 1. Edit Labels, Links, And Project Slots

Start here:

```text
src/data/templateContent.ts
```

### Top Buttons

Edit `quickActions`:

```ts
export const quickActions = [
  { label: "Intro", icon: "bell", aria: "Portfolio intro" }
];
```

Available built-in icon class names:

```text
bell
spark
grid
clock
```

### Stats

Edit `portfolioStats`:

```ts
{ label: "Projects", value: "24", icon: "gem" }
```

Available stat icon class names:

```text
gem
coin
crystal
```

### Main Menu Cards

Edit `menuCards`:

```ts
{
  eyebrow: "Selected",
  title: "Work",
  className: "tall social",
  image: "/assets/cards/work-neko.png",
  href: "/work",
  alert: true
}
```

Use `href` for the target page or section. Use `alert: true` to show the red badge.

## 2. Change The Selected Work Page

Edit `workProjects` in:

```text
src/data/templateContent.ts
```

Each slot is a clickable work button:

```ts
{
  title: "Project 01",
  image: "/assets/work/work-strip.png",
  className: "slot-1",
  objectPosition: "6% 12%"
}
```

To use a buyer's own image:

1. Put their image in `public/assets/work/`.
2. Change `image`.
3. Adjust `objectPosition` until the crop looks right.

Keep the `slot-1` through `slot-7` class names unless you are changing the layout.

## 3. Change Theme Backgrounds

Theme files live in:

```text
public/assets/themes/
```

Each animated theme uses a `.mp4` plus a `.png` poster fallback.

Current theme IDs:

```text
academy
neon
sakura
violet
solar
```

The loader colors are controlled in `styles.css` by:

```css
.hero-shell[data-theme="neon"] {
  --loader-dark: #010712;
  --loader-mid: #062d5c;
  --loader-accent: #13d7ff;
  --loader-glow: #67f0ff;
  --loader-card: #e9fbff;
}
```

## 4. Change The Loading Sequence

Look for these classes in `styles.css`:

```text
.loading-sequence
.loader-cut
.loader-card
.loader-dots
```

The loader timing is in `src/components/Hero.astro`:

```js
window.setTimeout(finishLoading, 2300);
```

## 5. Change Sounds

The current sounds are synthesized with Web Audio in:

```text
src/components/Hero.astro
```

Search for:

```js
playTone
playHover
playClick
```

If you replace them with audio files, put licensed files in:

```text
public/assets/sounds/
```

Recommended files:

```text
hover.mp3
click.mp3
confirm.mp3
loader-slash.mp3
```

## 6. CSS Map

Most visual styling lives in:

```text
styles.css
```

Useful areas to search:

```text
.top-hud
.menu-card
.theme-switcher
.work-page
.work-select
.work-button
```

## 7. Performance Notes

For marketplace templates, compress videos before shipping.

Good target sizes:

```text
Hero/theme videos: 1-3 MB each
Poster images: under 500 KB each if possible
Card images: under 300 KB each if possible
```

Keep posters for every video so pages still look good while videos load.
