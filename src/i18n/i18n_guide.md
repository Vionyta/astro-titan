# Astro i18n Setup Guide (Adding Chinese 'zh')

This guide explains how to fully enable internationalization (i18n) on your Astro site. Since you have already added the `locales` to your `astro.config.mjs` and set up the `src/i18n/ui.ts` dictionaries, this guide will walk you through the remaining steps.

## Step 1: Update `astro.config.mjs`

Currently, your configuration has `prefixDefaultLocale: true`. This means Astro expects all English pages to be moved into a `src/pages/en/` directory.

To keep your current structure (where the root `domain.com/` is English, and `domain.com/zh/` is Chinese), you should change this to `false`.

```javascript
	i18n: {
		locales: ["en", "zh"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: false, // <-- Change this to false
		},
	},
```

## Step 2: Dynamic `lang` Attribute in Layout

You need to tell the browser which language the current page is using. Open `src/layouts/Layout.astro` and update the `<html>` tag to use `Astro.currentLocale`.

```html
---
// ... other imports
const currentLocale = Astro.currentLocale ?? "en";
---

<!DOCTYPE html>
<html lang={currentLocale} data-theme={theme}>
  <head>
    <!-- ... -->
  </head>
  <!-- ... -->
</html>
```

## Step 3: Translating Pages

With `prefixDefaultLocale: false`, your `src/pages/` operates as English. To add a Chinese version of a page, create a `zh` folder inside `src/pages` and recreate the same file structure.

For example, to translate your homepage (`src/pages/index.astro`):
1. Copy `src/pages/index.astro`
2. Paste it as `src/pages/zh/index.astro`
3. Edit `src/pages/zh/index.astro` and replace the English text with Chinese:

```astro
---
// src/pages/zh/index.astro
// Translate the object properties here:
const heroContent = {
	title: '你好，我是 Victor Ong，CISSP #731611',
	description: '拥有20年以上网络和网络安全经验...',
	buttons: [/* ... */],
	// ...
};
---

<Layout title="关于 Victor Ong" description="Victor Ong 简历展示">
	<Hero content={heroContent} />
    <!-- ... -->
</Layout>
```

> [!TIP]
> Do this for any page you want translated (e.g. `src/pages/projects/index.astro` becomes `src/pages/zh/projects/index.astro`).

## Step 4: Localize the Header Menu

Your current `Header.astro` uses a hardcoded menu from `src/data/menu.ts`. You should create a Chinese version of the menu and conditionally display it based on the language.

1. Open `src/data/menu.ts` and add a `zhMenu` alongside your `headerMenu`:
```typescript
export const headerMenu = [
  // ... current english menu ...
];

export const headerMenuZh = [
  { name: '首页', link: '/zh/' },
  { name: '工作经历', link: '/zh/company' },
  { name: '项目', link: '/zh/projects' },
  { name: '证书', link: '/zh/cert' },
];
```

2. Open `src/components/Header.astro` and switch the menu based on the locale:
```astro
---
import { headerMenu, headerMenuZh } from '@data/menu';
// ...
const currentLocale = Astro.currentLocale ?? "en";

// Choose the right menu
const currentMenu = currentLocale === "zh" ? headerMenuZh : headerMenu;

// Also update the CTA button
const ctaButton = {
	name: currentLocale === "zh" ? '联系我' : 'Contact Me',
	link: currentLocale === "zh" ? '/zh/contact' : '/contact',
};
// ...
---
```
*(In the HTML template inside `Header.astro`, loop through `currentMenu` instead of `headerMenu`)*

## Step 5: Adding a Language Switcher component

You'll need a way for users to switch between English and Chinese. Create a new component `src/components/LanguagePicker.astro`:

```astro
---
// src/components/LanguagePicker.astro
const pathname = Astro.url.pathname;

// A simplistic way to swap the locale in the URL
function getAlternativeLocalizedUrl(targetLocale: string) {
	if (targetLocale === 'zh') {
        // If we are on english root URL, prefix with /zh
		return `/zh${pathname === '/' ? '' : pathname}`;
	} else {
        // Switching back to English: remove /zh prefix
		return pathname.replace(/^\/zh/, '') || '/';
	}
}
---

<div class="flex gap-2">
  <a href={getAlternativeLocalizedUrl('en')} class="text-sm hover:underline">EN</a>
  <span>|</span>
  <a href={getAlternativeLocalizedUrl('zh')} class="text-sm hover:underline">中文</a>
</div>
```

You can then import `<LanguagePicker />` inside your `Header.astro` or `Footer.astro` so users can click it to swap languages!
