# MovieExplorer

A responsive movie discovery application built with React, React Router, and
Tailwind CSS. Movie data comes from the free [TVMaze REST API](https://www.tvmaze.com/api),
so no API key is required.

## Features

### Home page

- Brand navigation with Home and Browse Movies links.
- Cinematic hero banner with a movie theater background image.
- Separate theater image in the hero screening panel for a stronger visual focus.
- Movie-focused headline, supporting description, and Explore Movies CTA.
- Subtle entrance animation with reduced-motion support.
- Footer with application name, copyright information, TVMaze attribution, and GitHub link.

### Movie listing page

- Browse movies from the TVMaze catalog.
- Search by movie title with a 350 ms debounce.
- Search results update dynamically as the query changes.
- Older search responses are ignored so they cannot replace newer results.
- Responsive movie card grid with poster, title, rating, release year, and See Details action.
- Loading skeletons, connection error state, and no-results state.

### Movie details modal

Selecting a movie opens a modal with:

- Large poster or backdrop image.
- Movie title and overview.
- Rating and release year.
- Genres and network information when available.
- Close button, close icon, backdrop click, and Escape-key support.
- Body scroll locking while the modal is open.

## Technology stack

- JavaScript
- React 18
- Vite
- React Router
- Tailwind CSS
- TVMaze REST API

## API endpoints

The app uses these TVMaze endpoints:

```text
GET https://api.tvmaze.com/shows?page=0
GET https://api.tvmaze.com/search/shows?q=:query
GET https://api.tvmaze.com/shows/:id
```

TVMaze represents its catalog as shows, but this project presents those
catalog items as movies in the user interface.

## Getting started

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Production build

```bash
npm run build
```

The command creates a static production build in `dist/`, ready for hosting
on Vercel, Netlify, GitHub Pages, or another static hosting provider.

## Project structure

```text
src/
├── services/tvmaze.js       # TVMaze fetch helpers and HTML cleanup
├── components/
│   ├── Navbar.jsx            # Brand and route navigation
│   ├── Hero.jsx              # Home page hero banner
│   ├── SearchBar.jsx         # Debounced search input UI
│   ├── MovieCard.jsx         # Reusable movie card
│   ├── MovieGrid.jsx         # Grid, loading, and error states
│   ├── MovieModal.jsx        # Movie details dialog
│   └── Footer.jsx            # Site footer
├── pages/
│   ├── Home.jsx              # Home page and feature highlights
│   └── Listing.jsx           # Browse and search page
├── App.jsx                   # Application routes and shared layout
├── main.jsx                  # React entry point
└── index.css                 # Global styles and animations
```
