# Portfolio App

## Overview
A personal portfolio website built with React 19, using Create React App + CRACO for configuration, MUI v6 for components, Tailwind CSS for utility styling, and React Router v6 for navigation.

## Tech Stack
- **Frontend**: React 19, react-dom 19, react-router-dom v6
- **UI**: MUI (Material UI) v6 with Emotion, Tailwind CSS (PostCSS7 compat)
- **Build tool**: CRACO (wraps Create React App)
- **Styling**: Sass, Tailwind CSS

## Project Structure
- `src/` — React source code
  - `components/` — Reusable UI components (Header, Footer, etc.)
  - `assets/` — Static assets (images, icons, data)
  - `helpers/` — Utility functions
  - `hooks/` — Custom React hooks
  - `styles/` — Global CSS styles
  - `RouterComponent.js` — Route definitions (React Router v6)
  - `App.js` — Root component
- `public/` — Static HTML and manifest

## React 19 Upgrade Notes
- `ReactDOM.render` → `createRoot` from `react-dom/client`
- `@material-ui/core` (v4) → `@mui/material` (v6) with Emotion
- `react-reveal/Fade` replaced with a simple CSS opacity transition component
- `react-router-dom` v5 → v6: `Switch` → `Routes`, `Route` uses `element` prop, `NavLink` uses `style`/`className` function instead of `activeStyle`/`activeClassName`
- External `<Link to={{ pathname: ... }}>` replaced with `<a href>`

## Running Locally
```bash
npm start
```
Runs on port 5000 with host 0.0.0.0 (configured for Replit preview proxy).

## Deployment
Configured as a static site deployment:
- **Build command**: `npm run build`
- **Public directory**: `build/`
