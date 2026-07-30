# WealthCare Financial Project Guide

## Overview

This repository contains a responsive, single-page marketing and financial education site for WealthCare Financial. It is built with TanStack Start, React, TypeScript, and custom CSS, and is configured for deployment on Netlify.

## Architecture

- `src/routes/__root.tsx` owns the HTML document shell, global metadata, font loading, and global stylesheet import.
- `src/routes/index.tsx` owns the complete home page. Content is grouped into semantic sections and small data arrays near the top of the file.
- `src/styles.css` owns the design tokens, layout system, responsive breakpoints, reduced-motion support, and all component styling.
- `src/router.tsx` initializes TanStack Router from the generated route tree.
- `public/` stores static assets such as the favicon.
- `netlify.toml` configures the Netlify build and publish behavior.

## Visual System

The interface uses a warm editorial direction rather than a traditional blue financial-services theme. Core design tokens are declared in `:root` in `src/styles.css`: forest green, cream, terracotta, muted sage, and warm gold. Fraunces is the display face, Manrope is the body face, and DM Mono is used for labels and numeric annotations.

The X-Curve hero illustration is an inline SVG so it remains crisp, accessible, and dependency-free. Other visual details are CSS-based to keep page weight low.

## Coding Conventions

- Use PascalCase for React components and camelCase for variables and functions.
- Keep route components in `src/routes/` and follow TanStack file-based routing conventions.
- Prefer semantic HTML elements and accessible labels.
- Keep repeated page content in local typed arrays rather than duplicating markup.
- Use Lucide icons instead of emoji or custom icon fonts.
- Add colors, spacing, and typography through existing CSS custom properties before introducing new literals.
- Preserve responsive behavior at the existing `1050px`, `820px`, and `580px` breakpoints.
- Respect `prefers-reduced-motion` for any new animation.

## Non-Obvious Decisions

- The site intentionally remains a single page because the source experience is a guided educational narrative.
- The mobile menu uses local React state; all other interactions use native links and `details` elements to minimize client-side complexity.
- Consultation links open the existing external Calendly URL in a new tab.
- Financial figures are presented as educational examples and retain the accompanying disclaimer text.

## Commands

- `pnpm dev` starts the Vite development server.
- `pnpm build` creates a production build.
- `netlify dev --port 8889` starts the site with local Netlify emulation.
