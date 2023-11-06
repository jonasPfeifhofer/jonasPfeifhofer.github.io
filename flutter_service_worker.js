'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bb266af17d8832b1015bbbcb1da24122",
"index.html": "cf4b3261410739cbe02ebe10772b35fb",
"/": "cf4b3261410739cbe02ebe10772b35fb",
"main.dart.js": "eeb1a48676e11779d8f9a2990c32d635",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a2817742bb702702abab106885065aa4",
".git/config": "5e21d41094fac39ec5b5973c7b70cc06",
".git/objects/59/15055bb0c29c5f932bb829889db8f0a660532d": "86d30ec8ed1ed1d96bcd900924360132",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/93/f8d2cf061231173146fb6202bebfa420d4069d": "53002257a9493d022359c6ea9dde9853",
".git/objects/34/017717bad237442056a508aecd4d408374a412": "3c25cf1cd3d5e920474dc994daf199a0",
".git/objects/d9/1f160e41191dc9227647fda1b74915f2dcbe69": "bc760f065ddf3763f2e3f872c9efb3fb",
".git/objects/ac/246563d94cb409139c4c1dcc3fecc3550c31ea": "080122276fca3073f7cb37b96a5565b6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/fad7af85b2e5e1613177253dce7a501365f167": "d7e61c933cc2f664c0dde34ae046286a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/c5a196954514c44bca51c9d3fb96a551d6bcd7": "522a34185ad31e008914f19b8eb97359",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/1ee611b3dbb299bf763232e8c48479c358a04f": "22303aa7cac17785f047e2b77fef5098",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/1e9133dc08135598c898eb2f0c321ed181f6cd": "3341b698584d6902994b4a8b5857d57d",
".git/objects/87/6fd22436e815e2597c68ac9fe9c3830e916f9f": "63faa03daea07834eb1b91ce64671276",
".git/objects/7b/549587b9f26e41fe7929317d7d772cdc281aab": "415300b64c4c97cea498ea26ca2d4625",
".git/objects/8a/b26535feab190bb179021fbd6503a97003749f": "2b43bfa5c42fd027d519dec82726d344",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/1a4cf5c882c3135e89ac5446ee0fa528a61c6e": "5ee704b2999453567fc51b0a42445f4f",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/21/22303feb80426d96c615bb27ad678380900379": "0bf662af6aebb1c605b34188344f1274",
".git/objects/4d/3d01fb3e78738a86e59f98dab41beb9af0fa2a": "b38b866e53d8690219ae6f456a320847",
".git/objects/43/92e1bd832a09cb1437042dfd4e4ef53db91444": "eacc1d8f70962d4b4d049f64b34c1448",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0a/0f3beef5d87a9b283eb9ac5a77a74a463b22ce": "612cdd57f0bacf6a7d183da17c80a006",
".git/objects/bf/a90ce5b2331f2ab188374eef84827d2b00843b": "cd17dfcce3ca0dcc206908b62a747520",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/31d8bdc91d6be8ef0efce687bba6f03eaf155a": "0cb03b5320f5758589730ce86f5744d5",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/63e09652e767936e52f815c87d69ef45673c8a": "f2af4852167f11fc07e8974836ae8f18",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/a648ac035afbe93f622d9a5f9b086c2497611b": "8390334352fba23821f4b75f51d8113f",
".git/objects/e1/97ebcf8d1a3cf831fdabe2d4436362c25c735b": "6d60ba799c5334b7fa5ef607815e1c60",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e0/b0ca127ead7a6024f6cb9bc30f001af4516fee": "253726fb2ae7dacb846e70f72b0bea83",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/12/b4ca25449a47d4a6bb49e6076aec7685bcddd3": "4760e32fe2607e6ac85f864dd8979906",
".git/objects/12/33e7885332fbfb3bf869bf582205ab95041aef": "9eebe6dc56ba7fb95437f76b2e7195f4",
".git/objects/71/4f300fd2fe5a651d01d9fdee74dd4c831d6281": "62546db73a1b20183ffcb9bef17a380b",
".git/objects/14/26625bbb46ea18c23f4f64f51eea1fe16b3cc3": "ec71e66aded4650dc73ccb31d6b98849",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/1ad0d1ffa770466328b777d9102a0ebd94dcef": "4c1a89587eb69e73d362a2550a8bd5fe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f49f5795300a67997fbfe51255c7df07",
".git/logs/refs/heads/main": "62f55c5138842859f21b41f442b19437",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6e71c08b6b170fecb10eaf7a2a61c008",
".git/index": "f74f29fbae44aa852813255fccb3e7b2",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
"assets/AssetManifest.json": "fd5441c1d0ae861365d2052abf79dc93",
"assets/NOTICES": "f4e26a9c97c39da95b2a8776fa43c0ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1a018b81851906832431e5babb70c9f3",
"assets/fonts/MaterialIcons-Regular.otf": "d1948c18558789467b6a6dede4f1f390",
"assets/assets/images/search.svg": "688b3ba56e52223b7c01bff3e65e6b95",
"assets/assets/images/dottet_circle.svg": "979db58c1ee0073453caa4f657e670f3",
"assets/assets/images/Pen.svg": "5b78cd99994ff9d97067bef07a2105ab",
"assets/assets/images/chevron-right.svg": "21cdc820c27c692a31d595fb873189cd",
"assets/assets/images/arrow-right.svg": "a97c141290518170199c9b82d967df64",
"assets/assets/images/settings.svg": "476545307d67fbff731a319a009fd27d",
"assets/assets/images/book-open.svg": "30b8ed764d52c03bb73123eeb0a7b061",
"assets/assets/images/plus.svg": "bfdc086d3a7147089bb866fc43d3b971",
"assets/assets/images/refresh-ccw.svg": "1fb795d5e0ef1934c05c7fb29ca8d0da",
"assets/assets/images/check-circle.svg": "094a18fd841f608d98dd4159ac63f58d",
"assets/assets/images/light-Bomb.svg": "e0b25f8b09809df6e354541e23a1e062",
"assets/assets/images/arrow-left.svg": "f47c2b2a6d4afe498297a5733a576578",
"assets/assets/images/rocket.svg": "23b14fd0f2b4a636315b1b1bb9a636ec",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
