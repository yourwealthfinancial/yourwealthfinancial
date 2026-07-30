# WealthCare Financial

A redesigned, responsive single-page website for WealthCare Financial. The site presents practical financial education for Canadian families, covering protection, life insurance, wealth building, tax strategy, available financial products, and the client process.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Vite 7
- Tailwind CSS 4 with custom global CSS
- Lucide React icons
- Netlify deployment adapter

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The standard Vite development server runs at `http://localhost:3000`. For local Netlify emulation, use:

```bash
netlify dev --port 8889
```

## Project Structure

- `src/routes/index.tsx` contains the complete landing page and content.
- `src/routes/__root.tsx` defines the document shell and SEO metadata.
- `src/styles.css` contains the visual system, responsive layout, motion, and component styles.
- `public/` contains static browser assets.
- `netlify.toml` contains the deployment configuration.

The consultation buttons link to the existing WealthCare Financial Calendly booking page.
