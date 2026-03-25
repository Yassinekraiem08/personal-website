# Personal Website

This repository contains a personal website built with Next.js, TypeScript, and Mantine. The site is statically generated where possible and pulls structured content from Sanity for the About, Resume, and Projects sections.

## Stack

- Next.js 13
- React 18
- TypeScript
- Mantine UI
- Sanity CMS
- Framer Motion
- Fuse.js for project search

## Pages

- `/` landing page with profile image and primary navigation
- `/about` rich-text biography rendered from Sanity Portable Text
- `/resume` tabbed resume view for overview, education, and career history
- `/projects` searchable project directory with list and grid views
- `/projects/[slug]` static project detail pages with image gallery support

## Getting Started

### Prerequisites

- Node.js 18 or newer
- Yarn or npm
- A Sanity API token with access to the configured dataset

### Install dependencies

```bash
yarn install
```

If you prefer npm:

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```bash
SANITY_API_KEY=your_sanity_token
```

This token is used server-side when fetching content from the configured Sanity project:

- `projectId`: `ask0x32c`
- `dataset`: `yassinekraiempersonalwebsite`

Without a valid token, pages that depend on Sanity content will fail during static generation.

### Run locally

```bash
yarn dev
```

Open `http://localhost:3000`.

## Available Scripts

- `yarn dev` starts the Next.js development server
- `yarn build` creates a production build
- `yarn start` serves the production build
- `yarn lint` runs the Next.js ESLint checks

The same scripts are available through `npm run <script>`.

## Project Structure

```text
.
|-- pages/                 Next.js routes
|-- public/                Static assets such as icons, logos, and profile images
|-- src/
|   |-- cms/               Sanity client setup and Portable Text renderers
|   |-- components/        Shared UI like the header and page container
|   |-- projects/          Project list and grid presentation components
|   |-- resume/            Resume-specific UI sections
|   |-- icons/             SVG icons imported as React components
|   |-- types/             Shared TypeScript declarations
|   |-- util/              Utility helpers such as starfield generation
|-- styles/                Global CSS
```

## Content Model Notes

Sanity content is fetched in [`src/cms/client.ts`](/Users/yassinekraiem/Desktop/personal_website/src/cms/client.ts). The site currently expects these document types:

- `about`
- `career`
- `education`
- `project`

Portable Text content is rendered through [`src/cms/documents/DocumentRenderer.tsx`](/Users/yassinekraiem/Desktop/personal_website/src/cms/documents/DocumentRenderer.tsx), which includes support for:

- headings and paragraphs
- ordered and unordered lists
- linked content
- full-width and half-width images
- full-width and half-width quotes

## Build and Rendering Behavior

- The homepage is statically generated.
- The About page fetches the latest `about` document at build time.
- Resume and Projects use Incremental Static Regeneration.
- Project detail pages are generated from available Sanity slugs and use fallback rendering for new entries.

## Implementation Notes

- SVG files are loaded through `@svgr/webpack`, so icons can be imported as React components.
- Remote images are allowed from `cdn.sanity.io`.
- The global app shell and Mantine theme live in [`pages/_app.tsx`](/Users/yassinekraiem/Desktop/personal_website/pages/_app.tsx).
- Project search on `/projects` is powered by Fuse.js against project name, description, and start year.

## Deployment

Build the site with:

```bash
yarn build
```

Then serve it with:

```bash
yarn start
```

Any deployment target needs the `SANITY_API_KEY` environment variable available during build and revalidation.
