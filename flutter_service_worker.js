'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d3d0758aabdf228f99a0c750fac4f360",
".git/config": "0bd18a436bdb40392e61928d2544693e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "bf816fc863845ffca77c1da7fc542a71",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7f5814e4d4873f81d68af451ae174de0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de755405b91e0e56bdd36760ce2e7dd2",
".git/logs/refs/heads/v2": "e85fb2fee61f0acc21ce6ef57d010aad",
".git/logs/refs/remotes/origin/v2": "ce1715f5cc0f3e6703efa3739152d387",
".git/objects/0f/8a6d7a778a26e4ae3f6c123f807f5e54b6f27b": "f7aa624b9f69a70d4ec0e6d4d4f7fbfc",
".git/objects/15/f13fc71d86da37a40b33876105f5b274ba9798": "bb6d9f6abf3a25515ed4ba2a19420ced",
".git/objects/22/a199e348e0bbe5da91c0b484353f7732ad3cef": "068f3e698e22f9a8358212efbb4caedb",
".git/objects/24/767fff41dcca4040b1adf14119f962c5cc466f": "d88be99b1f61345f894358eccb12bd1f",
".git/objects/25/c28aaa295a10aab0d8b9d2e0a6430ab36e4b3d": "125abfd433350ca50463991268517129",
".git/objects/28/ff3c878d4c58bca4517901a4eec71569143ed2": "72972d8feaf7de3e320b56c6623fe303",
".git/objects/2f/2a646770ae8e4cef1bc6f6624d69dd0233c40f": "9202bfb8c7199698d3c24db196b58594",
".git/objects/2f/2ce8493b320c6aad541dd2dd3ec96eedaed0d0": "704ec5da2210dc9b707027946006dd1b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/ef82bc93db6999e9a6e142e7f124c7c79801b4": "e5ba8bd1e379844f3a8ec80469d0d23d",
".git/objects/48/a6679332a4b1df427c6dcc76e7c23ce6d41f4b": "d72f6f1d446c17d288dbfdba7276cc40",
".git/objects/4e/94d4af50c0b2ad2cf68ece8a41935141b69a06": "21c0b3571f629f21bb319b95a56f4814",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5d/ded33616b406c13f7567a292494a8431232984": "65d4877191f92e1b95f9e3c769b38824",
".git/objects/71/c6120c45fcbca803d8b5f7c01fd051912822ed": "d70406897291dd8795f85da8e87d21a3",
".git/objects/78/44a1567a477eab9764fcd64ac5f6a26da72b48": "4aa26dc1acc289bd45f33c2cf06617e6",
".git/objects/79/a7d2194ceecad8c15dbec1276a3dfca6cac4a8": "c216df2af1ce553f0174681428500a91",
".git/objects/87/a5ff2edf563adab289c9b775d06013d08e7741": "bf85967ddf960c0dbdf45aa8349c2d02",
".git/objects/88/0dea4bddeb66d053991a99ab151ea4f142cd15": "f3086d0cd47950ac1d58cff0a6edc505",
".git/objects/8b/3fe226bcfbbe8004b787ee3c7c6c28c6e364d0": "9dddb5ddf29b5c6941f3f9f58c61969e",
".git/objects/8c/94d9c606e8e9a849556c553fd82f91456ca343": "fd1771fdbe7e22d178fa8c8152d2cb4a",
".git/objects/91/6b1f8778cd69213f8449c58d85a31355a5963f": "1e8b819c96d33856d9ecc53e924a870a",
".git/objects/97/1728232bfd96105f0f32b86bc68c10e352893c": "9dec7041076bd87612e706dc53d51dc4",
".git/objects/9c/c24e32e0d9aae3876603186443a0ae07a2e1b0": "30d773c184428dd459ca9c61160e64c2",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a1/6d63cd2bc72c4e72992a7f2eb001a9e23a83a3": "e8e169f7394945caba42e8412696e469",
".git/objects/a2/ff3681c50dc9190766f5b8719aae05ef964049": "dffe123d1ba1a60816302704a4401ea2",
".git/objects/ac/9634164d3fb943e1858e1188f7f565afee4023": "0f5740f5401f701726491c591e606b1d",
".git/objects/af/3f81a2832b2d0a141a2fe08eb31d5a0d81d22b": "af1555f4030b303c9cd9ba0d5c509027",
".git/objects/b3/0dd25fd14fc37914f0270f437c84f547253913": "414921c1a5b2b8111c4e13143a5a9973",
".git/objects/b6/cc93a8450aac61dba31e68c20db45fb8e0df87": "19b7d0aa18e59bfff14375911e8dbf87",
".git/objects/b7/023ff333621a6c22a2d2937c8415cd3f357b8d": "b0c23f9441c8d928839e7a83c48cc083",
".git/objects/b7/2b1c5dcdcc6fb269db7dd3e644343cd053e852": "7feeddf7d2bdc88829a208443ee4a727",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/57f713b2ae8975c7c891832e0bb2eed950f5b2": "61187d9fd177a7a11894a4dd7899fda8",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c6/d6212fdb4dae9dfb57e46a01de69506c895fc4": "2f4a3eab1269cce5d6cf9b4bd40f85bf",
".git/objects/c7/948b4d566955a3131d1936df27f1d6b70ca898": "baa061b3351f0ca7fd33e9e985d9dbfc",
".git/objects/c8/18e65b0584832b870f681be6f56cec97da7f15": "2810caaa930460d474ed77a77f6afa1d",
".git/objects/ca/3b714141ecc1dd8f12c0277e0abe0fead8535d": "68f0da55ab2aefdf0260c89f2f26e8f6",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/2da4201c3d9aab2288b2b73416a56cb4164b76": "796526b7d95eb39d3bf86a4809a28053",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/d360fa2cb169fd9134fdf510965b10ee7a0975": "61073e644ced2ce6dc00de150dfa963d",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/c6306e348a9ee0bb32784b250d6b460b29c411": "c8bc91c51ed35fe271d8afbfb589c9b9",
".git/objects/dc/369eec4f7a31fe0c806b4beb1d0c94fc8a3e03": "d0d930820d07fa69a07644300443dbd2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/8b14cead71668ff78506388e65fcff307a38bd": "dce67fcd6932207a80706be22db27565",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/d07d676f4226815e97ad2690f8e185532ec91d": "67e2b380b236151f1d68f70363f8f840",
".git/objects/e8/d2b6230ac647faf10718963c7f08eb09e24700": "45a9dae50b903f0b420377e9091ca0c3",
".git/objects/f8/14a62947f298abf57ee95b172d9f1456208d4e": "8b31b1de11c1faf49947f0202feeec09",
".git/objects/f8/888bff195d0fe2a7e056322c8a2572c3f167c3": "38541e2bfd6b1c76fcba8d330add48ab",
".git/objects/fa/cd831f39413e4e90ff7174936b2da204576928": "5192713adcaad5691bfab1e801cd0fd7",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/v2": "2abc161eb879aa76f8f2a996859014fd",
".git/refs/remotes/origin/v2": "2abc161eb879aa76f8f2a996859014fd",
"assets/AssetManifest.bin": "26b6769a0286ae112926cd34807c0da6",
"assets/AssetManifest.json": "787c92aaecfff7310b4fa89a5b548049",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/DMSans-Regular.ttf": "0305ad7453af42d8f036dd29294ae5c3",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/medium.png": "6cba77eb182b36dae1d1de303af2d373",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/logo.png": "b738b7549517b83f88520255e2088449",
"assets/assets/images/splash.png": "5b9a9cc22341b496893ce9b097912eaa",
"assets/assets/translations/ar-SA.json": "e0098c1c54c9e408830cd23e63e65d90",
"assets/assets/translations/en-US.json": "a062abfcd00a39d1ed3b266e55508c44",
"assets/FontManifest.json": "608935f674175630cbabbd5c1bd43d96",
"assets/fonts/MaterialIcons-Regular.otf": "057071262697e945e35c87ba124272f4",
"assets/NOTICES": "916befa7e353ac0d8805f066c3ea0932",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "640ac2c091bb384d549e6995d7dbcd1f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "51882972c6a9392867f89f13cf3c3fa7",
"icons/Icon-512.png": "d444d7605393c29dce2e5e4414b10a87",
"icons/Icon-maskable-192.png": "51882972c6a9392867f89f13cf3c3fa7",
"icons/Icon-maskable-512.png": "d444d7605393c29dce2e5e4414b10a87",
"index.html": "2ad60857d6e74aaa915448043903e85b",
"/": "2ad60857d6e74aaa915448043903e85b",
"main.dart.js": "8e9d987539ef7f0adf59425137f25785",
"manifest.json": "f69c0080fe77d4eda85b26ae0e20c8a5",
"splash/img/dark-1x.png": "5bd5accb771b488be1a92c771263d783",
"splash/img/dark-2x.png": "eaadd7ef4ea65a3e0f0c9d338768bfe9",
"splash/img/dark-3x.png": "f665916d9e3caa6cedfeab01042c2bba",
"splash/img/dark-4x.png": "3cc29433ba388f8b1b61699ba1774ce7",
"splash/img/light-1x.png": "5bd5accb771b488be1a92c771263d783",
"splash/img/light-2x.png": "eaadd7ef4ea65a3e0f0c9d338768bfe9",
"splash/img/light-3x.png": "f665916d9e3caa6cedfeab01042c2bba",
"splash/img/light-4x.png": "3cc29433ba388f8b1b61699ba1774ce7",
"version.json": "b6fdc639e2b230ffc205be445cb71b01"};
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
