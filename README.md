# MovieExplorer

A responsive movie discovery application built with React, React Router, and
Tailwind CSS. Movie data comes from the [OMDb API](https://www.omdbapi.com/).

## Features

### Home page

- Brand navigation with Home and Browse Movies links.
- Cinematic hero banner with a movie theater background image.
- Separate theater image in the hero screening panel for a stronger visual focus.
- Movie-focused headline, supporting description, and Explore Movies CTA.
- Subtle entrance animation with reduced-motion support.
- Footer with application name, copyright information, OMDb attribution, and GitHub link.

### Movie listing page

- Browse a curated starter catalog of movies from OMDb.
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
- OMDb REST API
- Vite environment variables

## API integration

Add your OMDb API key to a local `.env` file. Do not commit the file:

```bash
cp .env.example .env
```

Then set `VITE_OMDB_API_KEY` to your key. The app uses OMDb's multi-result
search endpoint for the initial catalog and title searches, then loads full
plot details when a movie card is opened:

```text
GET https://www.omdbapi.com/?s={searchkey}&page={page}&type=movie&apikey={key}
GET https://www.omdbapi.com/?i={imdbId}&plot=full&type=movie&apikey={key}
```

The browse page starts with several pages of OMDb results for `the`, giving
users an initial grid of movie cards. Searches request three result pages and
replace the grid dynamically after the debounce delay.

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
├── services/omdb.js         # OMDb fetch helpers and response normalization
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
