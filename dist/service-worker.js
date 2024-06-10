// service-worker.js

import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Precache files
precacheAndRoute([]);

// Cache CSS, JS, and other static assets
registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "worker",
  new StaleWhileRevalidate()
);

// Cache images
registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);

// Cache API responses
registerRoute(
  ({ url }) => url.origin === "https://www.haguenau.fr",
  new StaleWhileRevalidate({
    cacheName: "api",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);
