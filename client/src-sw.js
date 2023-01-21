const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

//precaches the assets listed in the manifest file and sets up a route to serve them. 
precacheAndRoute(self.__WB_MANIFEST);

//handle cache responses 
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

//warm up the cache by caching the specified URLs 
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

//sets up a route to handle requests with the `navigate` mode using the `pageCache` strategy
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute(({ request }) => ['style', 'script', 'worker'].includes(request.destination),
new StaleWhileRevalidate({
  // Name of the cache storage.
  cacheName: 'asset-cache',
  plugins: [
    // This plugin will cache responses with these headers to a maximum-age of 30 days
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
  ],
}));
