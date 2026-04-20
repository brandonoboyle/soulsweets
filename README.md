# Soul Sweets

A bakery website built with SvelteKit, Prismic CMS, Skeleton UI, and Tailwind CSS. Deployed on Netlify.

## Tech Stack

- **Framework:** SvelteKit 2 + Svelte 5
- **CMS:** Prismic (Slice Machine)
- **Styling:** Tailwind CSS 4, Skeleton UI
- **Fonts:** Marck Script, Mr De Haviland, Open Sans
- **Icons:** Lucide Svelte
- **Deployment:** Netlify

## Developing

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## CMS (Prismic Slice Machine)

To edit content types and slices locally:

```bash
npm run slicemachine
```

Open [http://localhost:9999](http://localhost:9999) for the Slice Machine UI.

## Building

```bash
npm run build
npm run preview
```

## Checks

```bash
npm run check       # type-check
npm run lint        # prettier + eslint
npm run format      # auto-format
```
