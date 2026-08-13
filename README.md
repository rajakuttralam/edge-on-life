# Karibu — Trip to Africa

A React + TypeScript + Tailwind CSS clone of the "let's go trip to africa" travel app mockup: Home, Travel Package list, and Destination detail/booking screens.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. The app is wrapped in a phone-frame for the demo (see `src/components/PhoneFrame.tsx`) — remove that wrapper in `src/App.tsx` if you want it to fill the full viewport instead.

## Structure

- `src/screens/Home.tsx` — greeting, hero headline, search, "Travel Place" grid, "Travel Package" horizontal list
- `src/screens/PackageList.tsx` — searchable list of destinations as full-width cards
- `src/screens/Detail.tsx` — destination detail with ticket/date pickers and a "Get Ticket" button
- `src/components/` — BottomNav, TopBar, SearchBar, PlaceCard, PackageCard, PhoneFrame
- `src/data.ts` — mock destination data (edit this to swap in real content/images)

Routing is handled with `react-router-dom` (`HashRouter`, so it works from a static file). Icons are from `lucide-react`. Tailwind v4 is wired up via `@tailwindcss/vite`.
