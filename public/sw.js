if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const i=e=>a(e,t),o={module:{uri:t},exports:c,require:i};s[t]=Promise.all(n.map((e=>o[e]||i(e)))).then((e=>(r(...e),c)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts("fallback-tZ6SI6NF6wPWm7dCIQqV5.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/675-b9e4539e8c0434c4.js",revision:"b9e4539e8c0434c4"},{url:"/_next/static/chunks/framework-01395af778c6fb71.js",revision:"01395af778c6fb71"},{url:"/_next/static/chunks/main-bdd9c05417d771c3.js",revision:"bdd9c05417d771c3"},{url:"/_next/static/chunks/pages/404-90185a128330efe2.js",revision:"90185a128330efe2"},{url:"/_next/static/chunks/pages/_app-7d29740f132e89fc.js",revision:"7d29740f132e89fc"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"d742f979193aeae4"},{url:"/_next/static/chunks/pages/_offline-6c12d72a271617ea.js",revision:"6c12d72a271617ea"},{url:"/_next/static/chunks/pages/contact-279fe8ba78ca1bc6.js",revision:"279fe8ba78ca1bc6"},{url:"/_next/static/chunks/pages/index-a4bba3e0611f8014.js",revision:"a4bba3e0611f8014"},{url:"/_next/static/chunks/pages/movie/%5Bid%5D-57d10bcb3613ff1e.js",revision:"57d10bcb3613ff1e"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-584e082d887d5103.js",revision:"584e082d887d5103"},{url:"/_next/static/css/a8f73d0b0c0aba64.css",revision:"a8f73d0b0c0aba64"},{url:"/_next/static/tZ6SI6NF6wPWm7dCIQqV5/_buildManifest.js",revision:"7d1f1ac7658e1bbd96a0306b32483a26"},{url:"/_next/static/tZ6SI6NF6wPWm7dCIQqV5/_middlewareManifest.js",revision:"468e9a0ecca0c65bcb0ee673b762445d"},{url:"/_next/static/tZ6SI6NF6wPWm7dCIQqV5/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_offline",revision:"tZ6SI6NF6wPWm7dCIQqV5"},{url:"/android-chrome-192x192.png",revision:"87a3a3a71c91dc5653e2b9c5df0aed44"},{url:"/android-chrome-256x256.png",revision:"1ec988545cd949fd7a2c0d0d0ba60a3d"},{url:"/apple-touch-icon.png",revision:"494199f8972a14a5092b355e92e2a2d4"},{url:"/favicon.ico",revision:"5273361d4b4ffc933f67b61f98421649"},{url:"/manifest.json",revision:"68edaea02880c0c13acdb710ae0af793"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/video.png",revision:"9c8795eb48e94e4812c2dc0c4161c8ab"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));