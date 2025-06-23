'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "89c2e12aa5136ab1c8dc54afd42c91ce",
".git/config": "cd0cfe7383efbfab994cb6a941a7339f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8690e7a97738681d974a408c36abed9a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b7d0b6ed53e673779398777ecb165822",
".git/logs/refs/heads/gh-pages": "b7d0b6ed53e673779398777ecb165822",
".git/logs/refs/remotes/origin/gh-pages": "54c5487ce4cf57957c6ec7f81a2f79e1",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0f/2f2657b30943edbb7d425b6ae016817455da17": "ba5090ee24cec9932d6642727f037011",
".git/objects/12/33276e2f64d68706a446a09c6686b9fddf13ec": "71161448f3987984d9e2f811b4b8c725",
".git/objects/14/5d15d92f9a4cf6e3f15bdf636ada8d706fdd4a": "8b6ff586ae53ac219022b0ba028701ae",
".git/objects/1f/29d52cd69af558fb27a6313f168632b2da53bc": "710ccac7f7b601490efc2629b9a53d30",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/06df71d93aee2dc67b7199bae3200e59f789d4": "c453da27d38650892ff24e92a3c0b997",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/41/5b2b01515f9b444f963e79401f3044b628180c": "0a870828858e04c6b950666d356142cb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/901e9a0ccc3c54079d9a7ff92ceed63384ebc5": "1d146f93c3bd21c3d7e3e8063e7f5be8",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/9069fce86fa6b47c3237359487262727943bfe": "48dc268433584435e9765706c507a093",
".git/objects/81/ab762e901fff154e866e8cc220f9ab139a1cf1": "42826e01db65551d3a38e90ca41ed628",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/c2900b085be46f9a615ea9d55657ecf9f15ce6": "87c5cb03b0b33b4890ba9dc58db74a32",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/e63bb508f583c8f1f11b6401330d760b2c2314": "6a1ad73b97b9ce8188933cdd55ff8001",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/d5a8e053702de1ef617754ef5285fd3173f15e": "cde86a0491494af82bb4035381724301",
".git/objects/9a/2b5a514605f1bcf4b86645899d5d84ead89090": "f82ceee135a8f5596ee3f6f914f36984",
".git/objects/9b/2232803a3c650214d88bffce88c536c3b75fbb": "c019868fffe403a126633d7e96ead69e",
".git/objects/a7/8650421bc49338fe3721983ecad6049980a944": "c98d12efcb15a6f01f854e1856494585",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/7885e6aa9e383bdbaa742b787eed5fadf083c1": "1ed08d74b7efc044951de9050b21a565",
".git/objects/bb/a302bd62ee6530d626765b2a845c79866df22b": "c82320f63cbd2179758d1ee9becc8160",
".git/objects/be/37904b9ae23635dbe1db43be2f269769a5bea6": "539d5031128fc8e4ff4d68f550986c7e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/0bf13286ff60125ac11b5b0ad13d237c516f57": "ec429c303a4be7b6219b05c1ac342135",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d1/561181b6ad6ee9d047a64c96e993bff0d0355a": "9eb088c6b948dc89cba9494466f6a63f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3bf3c6eb2db2cbc26a979a17f653833ffefa02": "27f94fc077005447e97fd86a07c429ce",
".git/objects/e4/914cbea679afebe0f8ad4ad5b20a2bfda3896e": "acd902533e3ea32f49f4be51fb54bd03",
".git/objects/e9/f344a7d8ab6aec6ffc766fb53a6c07b2fa3ed8": "9443f87ac2170b769d0504fecd73f155",
".git/objects/eb/890a5d7f62c43c2f867e740ec287d19fd0598e": "f213b29ebee69c2ea6a7c7b0b647b783",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/82eb2a65edcdeca2c88480122b19aeb64ca2af": "8e8177e779bd9adfa7f7b4f2deeea67b",
".git/objects/fb/b40cc71462cb4792973606ef3b61193106cab5": "627cff8e4febf876e2f3fbbcb635aa54",
".git/objects/ff/e846ad16f9e79bade2ae1bfa5c4820952499df": "be948ce0b2bfc23c81b362f8c0a1d8a7",
".git/refs/heads/gh-pages": "d3d94023f845540bd3200c7b8fde298e",
".git/refs/remotes/origin/gh-pages": "d3d94023f845540bd3200c7b8fde298e",
"assets/AssetManifest.bin": "a029a493a6f27f1fc669182a74938735",
"assets/AssetManifest.bin.json": "0f27a5031b2d4f1ebfa1deead557e75a",
"assets/AssetManifest.json": "6a9935ad64f51f977fb17ad2c5f86b3d",
"assets/assets/svg_images/Coming%2520soon.svg": "d8159fc40455fa960f3632fbe37b2747",
"assets/assets/svg_images/film_rental.svg": "7ec1b63be53b0de262147b91db3c3abb",
"assets/assets/svg_images/Glitch.json": "ca2cf1bc63b2dd69d8c56ddc2fcd5205",
"assets/assets/svg_images/Glitch2.json": "b1520b10404b1bf5d22a9b2475b3e261",
"assets/assets/svg_images/insta.svg": "e948a5ed619c7dcbb38d855821c4f531",
"assets/assets/svg_images/insta2.svg": "9ad8f6f89460b3aa349498277bcc3a8a",
"assets/assets/svg_images/linkedin.svg": "abc8b106228ffcacb8fa0deaff342895",
"assets/assets/svg_images/linkedin2.svg": "f7720c22f751e7be18a00243319f0c8b",
"assets/assets/svg_images/logo.png": "b4304eeb0f530f27345d94cb1f2f1fde",
"assets/assets/svg_images/logo.svg": "4636a4b06b7d89e5c8797365818e93ed",
"assets/assets/svg_images/star_icon.svg": "ac5c78eddb4d1693b50897dc435cd1cb",
"assets/assets/svg_images/tiktok.svg": "b6f27d3e206f1d7ead1558b875e23d1d",
"assets/assets/svg_images/tiktok2.svg": "dbc5b892f6d5aa4c623737099708ca53",
"assets/assets/svg_images/X.svg": "c9bce200afd9d2519c8f8a18edfc7537",
"assets/assets/svg_images/X2.svg": "21d60c46dd5699a4d963f3be70dbcf56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "aac55053c33188d1243ce82ab15db6af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "74ee226e5ea5addf8e9b8485c71e50d2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c4197d730639a58965f7ce604094f50",
"/": "2c4197d730639a58965f7ce604094f50",
"main.dart.js": "08aee90ee8831f1b6a4d0d95d932be2f",
"manifest.json": "53ec053aa019ae0cab8ff144a577e0fd",
"version.json": "0e73a90d446cb120ad75016b18523e0b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
