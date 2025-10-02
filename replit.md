# RidexIosApp - Expo React Native Application

## Overview
This is an Expo React Native application that can run on web, iOS, and Android platforms. In the Replit environment, it's configured to run the web version.

## Project Setup
- **Framework**: Expo 54.0.12 with Expo Router
- **React**: 19.1.0
- **React Native**: 0.81.4
- **Language**: TypeScript
- **Bundler**: Metro

## Key Configuration
- **Development Server**: Runs on port 5000 using `npm run web`
- **Web Output Mode**: Single page application (SPA)
- **Deployment**: Configured for Autoscale deployment with static file export

## Project Structure
- `/app` - Application routes using Expo Router file-based routing
  - `/(tabs)` - Tab-based navigation screens
  - `_layout.tsx` - Root layout configuration
  - `modal.tsx` - Modal screen example
- `/components` - Reusable React components
  - `/ui` - UI components (collapsible, icon-symbol)
- `/assets` - Images and static assets
- `/constants` - Theme and configuration constants
- `/hooks` - Custom React hooks

## Development
Run `npm run web` to start the development server on port 5000.

## Deployment
The app is configured for Autoscale deployment:
- Build: Exports static files using `npx expo export -p web --output-dir dist`
- Run: Serves static files using `npx serve`

## Recent Changes
- 2025-10-02: Initial setup for Replit environment
  - Configured web server to run on port 5000 with LAN host mode
  - Changed web output from "static" to "single" to fix server-side rendering issues
  - Set up deployment configuration for Autoscale
  - Created metro.config.js for Metro bundler configuration
