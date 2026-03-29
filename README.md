# Personal Website

This repository contains a personal website built with Next.js, TypeScript, Tailwind, and Mantine. Portfolio content now lives directly in the repo so updates can be made without a CMS dependency.

## Stack

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- Mantine UI
- Framer Motion
- Fuse.js

## Pages

- `/` landing page with profile image, featured work, and contact links
- `/about` long-form background content
- `/resume` experience and education overview
- `/projects` searchable project directory
- `/projects/[slug]` static project detail pages

## Getting Started

### Prerequisites

- Node.js 18 or newer
- Yarn or npm

### Install dependencies

```bash
yarn install
```

If you prefer npm:

```bash
npm install
```

### Run locally

```bash
yarn dev
```

Open `http://localhost:3000`.

## Content Editing

Most editable site content is centralized in [src/content/siteContent.ts](/Users/yassinekraiem/Desktop/personal_website/src/content/siteContent.ts).

That file currently holds:

- about page blocks
- experience entries
- education entries
- project entries

Long-form content is rendered by [src/components/DocumentRenderer.tsx](/Users/yassinekraiem/Desktop/personal_website/src/components/DocumentRenderer.tsx) using a local typed block format.

## Available Scripts

- `yarn dev` starts the Next.js development server
- `yarn build` creates a production build
- `yarn start` serves the production build
- `yarn lint` runs ESLint checks

## Project Structure

```text
.
|-- pages/                 Next.js routes
|-- public/                Static assets such as icons, logos, and images
|-- src/
|   |-- components/        Shared UI and rich-content rendering
|   |-- content/           Centralized local portfolio content
|   |-- config/            Site-wide settings and navigation
|   |-- icons/             SVG icons imported as React components
|   |-- types/             Shared TypeScript declarations
|   |-- util/              Utility helpers
|-- styles/                Global CSS
```

## Implementation Notes

- SVG files are loaded through `@svgr/webpack`, so icons can be imported as React components.
- The global app shell and Mantine theme live in [pages/_app.tsx](/Users/yassinekraiem/Desktop/personal_website/pages/_app.tsx).
- Project search on `/projects` is powered by Fuse.js against project name, description, tools, and start year.

## Deployment

Build the site with:

```bash
yarn build
```

Then serve it with:

```bash
yarn start
```
