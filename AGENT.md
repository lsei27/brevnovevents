# Project Summary: Břevnov Events Web

## Overview
A modern, multilingual (CS/EN) landing page for Břevnov Monastery event venues, built with Next.js 15, React, and Vanilla CSS. The site features interactive elements, localization, and SEO optimization.

## Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Vanilla CSS with custom tokens
- **Localization**: Custom dictionary-based system (`src/lib/dictionaries`)
- **Interactive Elements**: Embla Carousel, Framer Motion (implied by animations), Custom SVG Floor Plan
- **Deployment**: Optimized for performance with `.webp` images and semantic HTML

## Key Features
- **Interactive Floor Plan**: Responsive module on `/firemni-eventy` with synchronized floor switching, hotspot pulsing, and persistent room details.
- **Localization**: Seamless switching between Czech and English.
- **Dynamic Hero**: Configurable CTAs per language (CS updated, EN remains original).
- **SEO Ready**: Dynamic `sitemap.ts`, `robots.txt`, and documented `llms.txt`.

## Current Status (as of Mar 26, 2026)
- **Homepage**: Hero CTA updated (CS: "Plánek prostoru", EN: "Technical rider").
- **Corporate Events**: Interactive floor plan refined for better UX (always-visible detail, default rooms).
- **Metadata**: Verified `robots.txt`, `sitemap.xml`, and `llms.txt`.
- **Performance**: High, using modern image formats and efficient React patterns.

## Repository Info
- **GitHub**: `lsei27/brevnovevents`
- **Main Branch**: `main`
- **Owner**: Lukas Seifert
