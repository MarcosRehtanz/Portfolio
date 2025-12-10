# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

- **Development server**: `npm run dev` or `npm start`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Preview production build**: `npm run preview`
- **Deploy to GitHub Pages**: `npm run deploy`

## Tech Stack

- React 18 with TypeScript
- Vite with SWC for fast compilation
- React Router v6 for routing
- Tailwind CSS for styling
- Axios for HTTP requests
- Recharts for data visualization
- react-toastify for notifications
- ESLint with TypeScript support

## Architecture Overview

### Routing Structure
Routes are defined in `src/pages/pages.ts` as an array of page configurations with `name`, `path`, and `Component`. The main `App.tsx` uses React Router's nested routes with a shared layout (Nav, Navigator, ToastContainer).

### Context System
- `src/context/allContext.tsx` - Root provider wrapping the app with:
  - `pokemonContext` - Global Pokemon state using `unitGlobalContext`
  - `cacheContext` - In-memory cache via `useCache` hook
- `src/context/unitGlobalContext.ts` - Factory for creating localStorage-backed global state

### Key Pages
- **About** (`/`) - Home/landing page with developer info and project experience
- **Info** (`/info`) - Technical stack showcase using `StackTools` component
- **Games** (`/games`) - Pokemon maze game with canvas-based rendering

### Pokemon Game System (`src/components/react-game/`)
Canvas-based maze game with its own context provider (`GameProvider`). Key files:
- `Game.tsx` - Main game wrapper with modal
- `Canvas.tsx` - Canvas rendering
- `LogicGame.ts` / `Map.ts` / `Player.ts` - Game logic classes
- `Table.tsx` - Game UI container

### Data Configuration
- `src/utils/projects.ts` - Portfolio project definitions
- `src/utils/stacks.ts` - Technology stack groupings (frontend, backend, databases, etc.)
- `src/utils/stack.ts` - Individual technology definitions with icons/URLs
- `src/utils/Tag.ts` - Project tag definitions with styling

### Custom Hooks (`src/Hooks/`)
- `useLocalStorage` - Persistent storage with get/set/remove
- `useCache` - In-memory cache store
- `usePokemon` - Pokemon API data fetching
- `useToggle` - Boolean toggle state
