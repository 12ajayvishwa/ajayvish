'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1bd341722e3b32e9ed402a114f97b3bc",
".git/config": "429d673274fd8cfd4342cb6fb7e565ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2a654f93b035338ff468d2e886d988d2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "fbd3031d37f0bac93f5a915f659df44f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c00cd0429d0747641bc238a7f00bf419",
".git/logs/refs/heads/main": "c00cd0429d0747641bc238a7f00bf419",
".git/logs/refs/remotes/origin/main": "3e00748e75d5ceba683b3999376c6020",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/2f8a48eebf931ef1a026fa11580f0d5f161ca6": "a38bfc357b2ae950aca3736a29e4e32a",
".git/objects/16/543f4b03c802f3c7c9ae919bca846f7fb56163": "4c4698ccde866f2909300f100c20fcf3",
".git/objects/1b/aedbe8bffd4efc4480a46812b0ea77447f34f3": "6836c8879c30d926767d9890b6a70ae7",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/1d5b56c91057edbd6b5c38cca8725e94764e33": "afb72d3fb92215eb674ad16c453254a3",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/9aaf9cb25777ecfe66c666f79abde5894a0846": "b87f275fe64c45fb42fbf77f63dde1d2",
".git/objects/25/89857e1a345c58222f0b1d682d65b3688cf8e8": "449efd9cdda05daeb47015098caadfd5",
".git/objects/30/9c0a25a30f47f8edb62251cfaceea9cf1bcda9": "3b3e3ff31d03626c67d31851c05f53f4",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/4a4d37334921eea22fabc479c447741451974f": "3a035746ac437787f1dd759b27bc08d8",
".git/objects/3b/4d48c785250e248296a41a3066c60a68bd371f": "f18bf608f304897b1669be8747685d2a",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/40/4b4c0404dec3b6726f8f79af6c7fd118266c8e": "b566d1801c64d55be2624e1df6dfac5e",
".git/objects/49/4172be6ce42d10bf69dc0541143b8b60107e1e": "e2a42ca127fd63c6229e6ac92b611f5f",
".git/objects/4e/4a4b6445d481349a9cab9568da7663ff5ad80f": "41a99ea412d0250860ecb956c498c555",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/5754afc2efa8bc683d9f4fc0d0dda28c3d7068": "ea73ae0a4ffd3ea7662dba92bf967547",
".git/objects/59/b53bdfc5bda73456e4f1051ddab65e5a75ad92": "005922cfa42511e8388a988bc8a970c7",
".git/objects/5e/329aed5b884a6fddc9310109cfb415970d0bdb": "2063fe728cecfcd6a844db9f1010b0ab",
".git/objects/60/9ebe4d98f20ec723d34f45df36c8cac46c4b86": "8531020be6288ca923dfd58d22af468c",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/c8b6da39c984843e02275bb90fbb27d40fc8b9": "db261f951245b99979d593ee3b5f61cd",
".git/objects/66/665fe8a9100b8a67755657c56696e63093d396": "2057b063677a7455d94c6aa2f3ddaccc",
".git/objects/68/a5ed55ed8e4f613b97676495fe8d5e579fc57d": "faba55296a14b0cda005018a98e42195",
".git/objects/6b/e9de22432c33c5ffeba0e08d5742f9289fe1b2": "c7ae6ba53d5afdb631ddbe981525a006",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/5c51b8d92f9e4632a5dee4da808b52332a9048": "ba30fec770023aec3244240c87f5613f",
".git/objects/72/c46b4a13864297877f1a8407b563ceb805cbab": "82d208126e10e1e65301129800902fd1",
".git/objects/75/d9d1566b1b58ca420778d823db6db3035a094b": "81bd0dc6d284f97f15cd443dd70f731b",
".git/objects/7c/01313914505aafb3676089c3465a5643bd2fe6": "af7120cfca855eb2bc39acd5f6fdebd2",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/544ebae6ce2b701bb38848d3f315244b887d7b": "068757301d52b7be82038870688dc48e",
".git/objects/8e/780a9a6619db78603905eee108912e470f710f": "03a38cdf9733ea065b57583e4629017e",
".git/objects/8e/ce4ab96cf67b0f1eb0b3d3da81318430607f5e": "7cc7a6f139410de41dcc7b69bba2b9fd",
".git/objects/91/f5e6bda6748478711e90925f1578228b055fe3": "2f1fbb31e0a35da47d9407e8fe06bc65",
".git/objects/9a/a7c21552a904e8f0947fd2ab74b8e33a209845": "3b28b1fd2c210b922b18dceff6c0cb88",
".git/objects/9c/1c86af78ed4724cca802a5354a689841624954": "46fafc8a75c5c31a431a391b4db03f04",
".git/objects/a7/151e48151f5f8dff1e9958ff7f1cfe979b5606": "4144f176416d8e0848d0df0973168dad",
".git/objects/ae/c55bf4b73cfbc02645094615429c985b89b4ed": "47e6090a3a882aa934dbb3260b8c799c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/a00161ff5ec0aeccc13691e7ba7a0583f036db": "469a145b15947435366e0be61e4ac803",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c4/c167b8129f71d865738d00f346e9eb419c8c95": "2c0b920df1c711c582c2f6f8160c9e18",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/df/afa66ba0b4d4c9e2d218bf1629db4db509cfba": "0e73d9134118f16b33850bccbba6329a",
".git/objects/e3/a1200067a549e71a3f564b42c6bc7b1187733e": "dc157f645af1f92c597a2a415d2a545d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/8e987e1414d1ecb5aa401ceea7894e95831dc6": "d902765e7fc1468a89586f09d7fd6040",
".git/objects/f0/0accfeaa9dce76e8b5b24cfb167b4ff0aa0990": "c5cc2c8714e8ec972f96f2bbde907745",
".git/objects/f2/4d19d13db03426305d990b2d6a30e6c5a393b8": "3ef4b067bf427a4f79f251377c7704ff",
".git/objects/f9/124b382f44212577985384cb8c7d3f759996a0": "499b163267dd353d15f75a07445250d3",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/refs/heads/main": "59c9ae9f65eee326a42c3cd27221932e",
".git/refs/remotes/origin/main": "59c9ae9f65eee326a42c3cd27221932e",
"assets/AssetManifest.json": "e51d6c9ec340571f973449ff0e0908d3",
"assets/AssetManifest.smcbin": "bcc4d5e7a2325595bdedf9f0f4347633",
"assets/assets/icons/api.png": "3d057850e31c09ab6b51dff3ddd7c667",
"assets/assets/icons/bitbuket.png": "343e6671aead65023c30e99dbbadac9b",
"assets/assets/icons/coding.svg": "6717f45ee818261c0ec778374ddb7160",
"assets/assets/icons/dark.png": "7a9a99a00e299a294697bf3711643afc",
"assets/assets/icons/dart.png": "4aacfec51c9a096a1b757ba1dc1c933d",
"assets/assets/icons/database.png": "4300ae129e77dec1dcab109564f43ffa",
"assets/assets/icons/figma.png": "c4e5dc676628e6f2c4fa8037e3ee2c15",
"assets/assets/icons/firebase.png": "cf0918b3d77d6e4505a65f103e5f3382",
"assets/assets/icons/flutter.png": "09c44f12e948ba9193426dcc4aed3e5b",
"assets/assets/icons/github.png": "fb4f48eb7b08b8dee3e7c37610684a9b",
"assets/assets/icons/instagram.png": "b7ba98726cb6f73e1590011a1c62244b",
"assets/assets/icons/light.png": "f1c850e21ddb0677235efc3a75ef081b",
"assets/assets/icons/logo.png": "81baede04c19876489a98715dd4895d1",
"assets/assets/icons/nodejs.png": "1a076c62bca20cee6a8d962e8cd74906",
"assets/assets/icons/postman.png": "3e657c77e923c2cae914bb43e8c17475",
"assets/assets/icons/programming.svg": "f9b9c8c01fac775ebbf4f04b92fbaa51",
"assets/assets/images/ajay.jpeg": "b4dd1133162de9f726a15e10dc9b2dee",
"assets/assets/images/getApps_badge.png": "9acea595ddcdd2b3e122dd8075e3465c",
"assets/assets/images/github.png": "2051f52ff70514982a50b76877bdd74f",
"assets/assets/images/google-play-badge.png": "93e5efd4c554f48ca0156ece74aa6ac5",
"assets/assets/images/programming.png": "65beefa152a6bcf67ce1a251a6592473",
"assets/assets/images/website.png": "d651ebfd7c7527d9181cb9723b692353",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "5c8054b3ee879bb3409cfff03f8b0254",
"assets/NOTICES": "875a70f1b2651832af1065ce6e2c59e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "29f8ecc193485fb5221d6c7a2d8e129a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "724104ba8ce820e35dcd7d022c45c79e",
"/": "724104ba8ce820e35dcd7d022c45c79e",
"main.dart.js": "0f1e82ed734ff03fabf39585fb3229f7",
"manifest.json": "b8d19d92976f9411b17884d413e5ceff",
"version.json": "b826837fd3873957d0e3c9e39625b330"};
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
