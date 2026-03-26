# Portfolio 2026 — Claude Code Design System Rules

This document is the **single source of truth** for all styling and structure decisions when building pages in this project. Read it before writing any HTML or CSS.

---

## 1. File Architecture

Always import stylesheets in this exact order:

```html
<link rel="stylesheet" href="/styles/tokens.css">
<link rel="stylesheet" href="/styles/base.css">
<link rel="stylesheet" href="/styles/components.css">
<!-- Page-specific overrides last (if needed) -->
```

| File | Purpose |
|------|---------|
| `styles/tokens.css` | All CSS custom properties (colors, type, spacing). Source of truth from Figma. Never hardcode a value that exists here. |
| `styles/base.css` | Global reset, font imports, typography utility classes, layout primitives |
| `styles/components.css` | Ready-to-use UI patterns (nav, buttons, cards, grids, etc.) |

---

## 2. Colors — Never Hardcode

Use only these CSS variables. Never use raw hex values in page CSS.

### Base Palette (zinc — always available)
```
--color-white        #FFFFFF
--color-black        #000000
--color-zinc-200     #E4E4E7   ← light borders, backgrounds
--color-zinc-400     #9F9FA9   ← muted text, numbers, metadata
--color-zinc-600     #52525C   ← secondary text, captions
--color-zinc-900     #18181B   ← primary text, headings, nav
--color-line-stroke  (alias → zinc-200) ← all dividers and borders
```

### Accent Palette (theme-aware)
```
--accent-lighter     ← very light tint (section backgrounds)
--accent-light       ← medium tint (card borders, section backgrounds)
--accent-dark        ← strong accent (italic text, buttons, CTAs)
```

**The accent variables resolve differently per section** based on `data-theme`. Always set `data-theme` on section wrappers.

---

## 3. Accent Themes — Per Section

Apply accent modes with `data-theme` on the section wrapper. Do **not** apply them to the whole page.

```html
<!-- Home page sections -->
<section data-theme="home"> ... </section>

<!-- Fanatics case study -->
<section data-theme="fanatics"> ... </section>

<!-- Rolai case study -->
<section data-theme="rolai"> ... </section>

<!-- Portfoliyo case study -->
<section data-theme="portfoliyo"> ... </section>

<!-- RF case study -->
<section data-theme="rf"> ... </section>
```

| Theme | --accent-lighter | --accent-light | --accent-dark | Notes |
|-------|-----------------|----------------|---------------|-------|
| `home` | `#FBF4EF` | `#F3DFD4` | `#B85C2E` | Default — warm terracotta |
| `fanatics` | `#ECF1F9` | `#D9E5F5` | `#375A89` | Cool blue |
| `rolai` | `#ECF1F9` | `#D9E5F5` | `#375A89` | Cool blue |
| `portfoliyo` | `#ECF1F9` | `#D9E5F5` | `#375A89` | Same as above for now |
| `rf` | `#ECF1F9` | `#D9E5F5` | `#375A89` | Same as above for now |

---

## 4. Typography

### Font Families
- **Headings**: `var(--font-heading)` → Cormorant Garamond (high-contrast serif)
- **Body / UI**: `var(--font-body)` → DM Sans (geometric sans-serif)

### Utility Classes (apply directly to HTML elements)

```
.text-hero      → 72px / 52px lh  — Above-the-fold hero ONLY
.text-h1        → 40px / 52px lh  — Page-level headings
.text-h2        → 32px / 38px lh  — Section headings
.text-h3        → 20px / 26px lh  — Sub-section headings
.text-body-m    → 20px / 20px lh  — Large body copy
.text-body      → 18px / 28px lh  — Default paragraphs
.text-small     → 16px / 16px lh  — Secondary / supporting text
.text-caption   → 14px            — Metadata, labels
.text-menu      → 12px, uppercase — Nav links, tags (NEVER changes size)
```

All sizes are **responsive** — the CSS custom properties redefine at tablet (≤1220px) and mobile (≤799px) breakpoints automatically.

### Accent / Italic Text

Wrap emphasis words in headings with `<em class="accent">`:

```html
<h2 class="text-h2">
  Selected <em class="accent">Projects</em>
</h2>

<h1 class="text-hero">
  Hi I'm Divya<br>
  a <em class="accent">product designer</em>,
</h1>
```

`.accent` applies: `font-style: italic`, `color: var(--accent-dark)`, `font-family: var(--font-heading)`.

---

## 5. Layout — Section Pattern

**Every page section must follow this structure:**

```html
<section class="section" data-theme="home">
  <div class="section__inner">
    <!-- content here -->
  </div>
</section>
```

- `.section` applies `padding: var(--space-section-v) var(--space-section-h)` — never override this inline
- `.section__inner` enforces `max-width: 900px` and centers content
- For accent-colored background sections add `.section--accent` or `.section--accent-lighter`

**Case-study sections** (tighter padding):
```html
<section class="section section--cs" data-theme="fanatics">
  <div class="section__inner"> ... </div>
</section>
```

---

## 6. Spacing — Use Tokens, Not Magic Numbers

| Token | Desktop | Tablet | Mobile | Use for |
|-------|---------|--------|--------|---------|
| `--space-section-v` | 100px | 80px | 50px | Top/bottom padding on all sections |
| `--space-section-h` | 200px | 32px | 20px | Left/right padding on all sections |
| `--space-max-width` | 900px | 900px | 900px | Content inner container max-width |
| `--space-caption-head` | 20px | 20px | 12px | Gap between section label and heading |
| `--space-cs-v` | 50px | 32px | 20px | Padding for case-study content blocks |

---

## 7. Breakpoints

| Viewport | Breakpoint | Media Query |
|----------|-----------|-------------|
| Desktop | > 1220px | (no query — default) |
| Tablet | 800–1220px | `@media (max-width: 1220px)` |
| Mobile | ≤ 799px | `@media (max-width: 799px)` |

---

## 8. Components — Use the Existing Classes

Before writing custom CSS, check `components.css` for ready-made patterns:

### Navigation
Always wrap `<nav>` in `<header class="site-header">`. The sticky behaviour lives on `.site-header` (the full-document-height containing block), **not** on `.nav` itself.

```html
<header class="site-header" role="banner">
  <nav class="nav" aria-label="Main navigation">
    <div class="nav__inner">
      <a href="/" class="nav__logo" aria-label="Divya Vasudevan — home">Divya·Vasudevan</a>
      <ul class="nav__links" role="list">
        <li><a href="#work" class="nav__link">Work</a></li>
        <li><a href="#about" class="nav__link">About</a></li>
        <li><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
```
On mobile: the logo is automatically hidden via CSS; links center themselves.

### Section Header (label + rule)
```html
<div class="section-header">
  <span class="section-header__label">Work</span>
</div>
```

### Buttons
```html
<a href="#" class="btn btn--primary">View Case Studies</a>
<a href="#" class="btn btn--ghost">About Me →</a>
<a href="#" class="btn btn--outline">Learn More</a>
```

### Tags
```html
<span class="tag">Product Design</span>
<span class="tag">B2B</span>
```

### Project Card Grid
```html
<div class="projects-grid">
  <article class="project-card">
    <div class="project-card__meta">
      <span class="project-card__number">01</span>
      <div class="project-card__tags">
        <span class="tag">Product Design</span>
        <span class="tag">AI</span>
      </div>
    </div>
    <h3 class="project-card__title">
      Designing an <em class="accent">Enterprise AI</em> Platform
    </h3>
    <div class="project-card__image">
      <!-- img or placeholder -->
    </div>
  </article>
  <!-- repeat for each card -->
</div>
```

### Philosophy / Feature Grid
```html
<div class="philosophy-grid">
  <div class="philosophy-card">
    <span class="philosophy-card__number">01</span>
    <strong class="philosophy-card__title">Always be learning</strong>
    <p class="philosophy-card__body">Design evolves, and so should we.</p>
  </div>
  <!-- 5 more cards -->
</div>
```

### Contact Links
```html
<div class="contact-links">
  <div class="contact-link-row">
    <span class="contact-link-row__label">Email</span>
    <a href="mailto:hello@studiowork.co" class="contact-link-row__value">hello@studiowork.co</a>
  </div>
  <div class="contact-link-row">
    <span class="contact-link-row__label">LinkedIn</span>
    <a href="#" class="contact-link-row__value">/in/yourname</a>
  </div>
</div>
```

### Divider
```html
<hr class="divider">
```

---

## 9. Rules — Always Follow

1. **Never hardcode** a color, font size, or spacing value. Use CSS variables.
2. **Never rename** CSS variables defined in `tokens.css`.
3. **Always use `data-theme`** on section wrappers to activate the correct accent colors.
4. **`--space-max-width` is always 900px** regardless of breakpoint — it is the content constraint, not a responsive value.
5. **Menu text is always 12px** — never scale `.text-menu` at different breakpoints.
6. **Spacing uses px, not rem** — all token values are in px as extracted from Figma.
7. **Accent italic pattern** — use `<em class="accent">word</em>` inside headings, not custom spans.
8. **Section structure is mandatory** — always wrap content in `.section > .section__inner`.
9. **Do not add new breakpoints** — use only the two defined (1220px and 799px).
10. **Line stroke / dividers** — always use `var(--color-line-stroke)`, never a raw hex.

---

## 10. Page Template (Starter HTML)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Divya Vasudevan — Product Designer</title>
  <link rel="stylesheet" href="/styles/tokens.css">
  <link rel="stylesheet" href="/styles/base.css">
  <link rel="stylesheet" href="/styles/components.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <div class="nav__inner">
      <a href="/" class="nav__logo">Divya·Vasudevan</a>
      <ul class="nav__links">
        <li><a href="#work" class="nav__link">Work</a></li>
        <li><a href="#about" class="nav__link">About</a></li>
        <li><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
    </div>
  </nav>

  <main>

    <!-- Hero -->
    <section class="section" data-theme="home" id="hero">
      <div class="section__inner">
        <h1 class="text-hero">
          Hi I'm Divya<br>
          a <em class="accent">product designer</em>,
        </h1>
        <p class="hero__subtitle text-body">
          shaping meaningful product experiences from 0 to 1 for the past 7+ years.
        </p>
        <div class="hero__actions">
          <a href="#work" class="btn btn--primary">View Case Studies</a>
          <a href="#about" class="btn btn--ghost">About Me →</a>
        </div>
      </div>
    </section>

    <hr class="divider">

    <!-- Work -->
    <section class="section" data-theme="home" id="work">
      <div class="section__inner">
        <div class="section-header">
          <span class="section-header__label">Work</span>
        </div>
        <h2 class="text-h2" style="margin-bottom: 32px;">
          Selected <em class="accent">Projects</em>
        </h2>
        <div class="projects-grid">
          <!-- project cards here -->
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="section section--accent" data-theme="home" id="about">
      <div class="section__inner">
        <div class="section-header">
          <span class="section-header__label">About</span>
        </div>
        <h2 class="text-h2" style="margin-bottom: 32px;">
          I thrive on<br><em class="accent">unraveling</em> complexity.
        </h2>
        <div class="about-body">
          <div> <!-- left col -->
            <p>...</p>
          </div>
          <div> <!-- right col -->
            <p>...</p>
          </div>
        </div>
        <h3 class="text-h3" style="margin-bottom: 24px;">
          Design <em class="accent">Philosophy</em>.
        </h3>
        <div class="philosophy-grid">
          <!-- philosophy cards -->
        </div>
      </div>
    </section>

    <hr class="divider">

    <!-- Contact -->
    <section class="section" data-theme="home" id="contact">
      <div class="section__inner">
        <div class="section-header">
          <span class="section-header__label">Get in Touch</span>
        </div>
        <div class="contact-layout">
          <div class="contact-layout__left">
            <h2 class="contact-layout__heading">
              Let's work on something<br>
              <em class="accent">worth building</em>
            </h2>
            <p class="contact-layout__body">...</p>
          </div>
          <div class="contact-links">
            <!-- contact link rows -->
          </div>
        </div>
      </div>
    </section>

  </main>

</body>
</html>
```

---

*Generated from Figma · Portfolio Website Design System · March 2026*
