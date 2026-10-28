# Bambotia

Next.js (App Router, TypeScript) storefront + API in one app.

```
src/
  app/          Next.js routes (pages, /api, sitemap, robots)
  api/          RTK Query setup, endpoint list, server data -> client cache (PrefillQueries)
  redux/        store, auth slice
  hooks/        data hooks (cart, products, auth ...)
  components/   shared UI
  screens/      the page screens used by src/app (named "screens" because Next reserves "pages")
  server/       the backend: routes.ts (URL table), controllers, models, middlewares, utils, config
  utils/        helpers shared by browser and server (shipping rules, SEO helpers)
  lib/, content/
```

## Run

```bash
cp .env.example .env.local     # fill in the values
npm install
npm run dev                    # http://localhost:3000
npm run build && npm start     # production
```

## Deploy on Hostinger (Node.js hosting)

1. Node.js version: 20.9 or newer (22 recommended).
2. Add every variable from `.env.example` in the app's Environment Variables.
3. Build command `npm run build`, start command `npm start` (it listens on the `PORT` Hostinger provides).
4. MongoDB Atlas: allow the server's IP (or 0.0.0.0/0) in Network Access.
5. First deploy only: add `SYNC_INDEXES=true`, start the app once, then remove it. It builds the database indexes and deletes old unused ones.
6. To create an admin: register normally, then set that user's `role` to `admin` in the database.


## Google sign-in
Set `GOOGLE_CLIENT_ID` (see `.env.example`) and restart the app: the "Continue with Google" button appears on the login and sign-up pages. It is read at request time, so no rebuild is needed. Without it the button is simply hidden.

## Theme

Light and dark colours live in `src/app/globals.css` (`:root` = light, `[data-theme="dark"]` = dark). The toggle is in the navbar.

## Delivery charges

Admin > Settings > Delivery sets the delivery charge and the free-delivery amount (saved in the database, `settings` collection).
The server prices every order with the saved numbers (`src/server/controllers/orderController.ts`) and every page shows the same
numbers. `src/utils/shipping.ts` only holds the defaults used before anything is saved, and the 5% online-payment discount.

## Product URLs

`/product/<name>`: the name is made into a slug when the product is created and then stays fixed. Old links with the product id redirect to it.
