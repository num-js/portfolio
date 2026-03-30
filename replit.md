# Portfolio App

## Overview
A personal portfolio website built with React 17, using Create React App + CRACO for configuration, Material UI for components, Tailwind CSS for utility styling, and React Router for navigation.

## Tech Stack
- **Frontend**: React 17, react-router-dom v5
- **UI**: Material UI v4, Tailwind CSS (PostCSS7 compat)
- **Build tool**: CRACO (wraps Create React App)
- **Styling**: Sass, Tailwind CSS

## Project Structure
- `src/` — React source code
  - `components/` — Reusable UI components (Header, Footer, etc.)
  - `assets/` — Static assets (images, icons)
  - `helpers/` — Utility functions
  - `hooks/` — Custom React hooks
  - `styles/` — Global CSS styles
  - `RouterComponent.js` — Route definitions
  - `App.js` — Root component
- `public/` — Static HTML and manifest

## Running Locally
```bash
npm start
```
Runs on port 5000 with host 0.0.0.0 (configured for Replit preview proxy).

## Deployment
Configured as a static site deployment:
- **Build command**: `npm run build`
- **Public directory**: `build/`
