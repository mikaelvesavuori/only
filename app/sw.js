/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/400.html","3e31c8b265197e72a1d63981aa0e3fcd"],["/401.html","cfbeb6bb22e95f88aa41f9edb3c404b8"],["/403.html","92a1b9ea475b34bedf056095942739b0"],["/404.html","1c4b2d630633de75c076d5965f2454b7"],["/408.html","8b95e9f32238899e5072f779d8e7ff6d"],["/503.html","614dbd47704ac6806a1a56dcb3d61738"],["/components/componentexample.html","bdbf2816286b62f83875c5438d3581b6"],["/css/critical.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/main.css","10f264290422a6c74ea2c3042237c391"],["/designer.html","b36ea38b3f98723e241aad51f21f0a52"],["/index copy.html","7984cd735da3f8d7121a935bc707dfce"],["/index.html","7984cd735da3f8d7121a935bc707dfce"],["/media/gfx/only.png","ae4ed669ca71a8af36ff0b184221ac21"],["/media/gfx/only.svg","cd8057d82fea2256a4aef7d7f94d8f83"],["/media/icons/android-chrome-144x144.png","7cb0f597cc6d6c472e39a479c34d4147"],["/media/icons/android-chrome-192x192.png","da78d6f43a91e659a0609a9cde3741a1"],["/media/icons/android-chrome-256x256.png","91838ee415023b61f4e82c85335a4c7f"],["/media/icons/android-chrome-36x36.png","8399d3c7434887dad60825c09a39f4fc"],["/media/icons/android-chrome-384x384.png","a8d4e44994ebdd080743b719423dbe88"],["/media/icons/android-chrome-48x48.png","0bc2b4b4639ae87b5818b30a7dea2abe"],["/media/icons/android-chrome-512x512.png","5756708713e0b0f897c78ec99bb30033"],["/media/icons/android-chrome-72x72.png","f075c5677d669b2d66ba65ae08ab1cb4"],["/media/icons/android-chrome-96x96.png","422735a09ba39cdf913205553c46b674"],["/media/icons/apple-touch-icon-114x114.png","2e198a9764a16a81744806c8e4905369"],["/media/icons/apple-touch-icon-120x120.png","18a9320c27222ca8bfff31acf567e182"],["/media/icons/apple-touch-icon-144x144.png","fe09d953106ab83ba7c914ff63e4159e"],["/media/icons/apple-touch-icon-152x152.png","4158ffbb49775cd6f1963c9f03f2a2ce"],["/media/icons/apple-touch-icon-167x167.png","6cade26e4052c0ee3a7a6badc5bd025d"],["/media/icons/apple-touch-icon-180x180.png","31f88f35717208a4dc6f4c4626274bc7"],["/media/icons/apple-touch-icon-57x57.png","fdbf836510d0af27b1cfd135d2f5d87b"],["/media/icons/apple-touch-icon-60x60.png","fb5c8ba250f593f26f34c13250641c94"],["/media/icons/apple-touch-icon-72x72.png","5c76d2e4bd85d4a75bafbc7cf44a6328"],["/media/icons/apple-touch-icon-76x76.png","dffa065367043ba720857e6c06c8869e"],["/media/icons/apple-touch-icon-precomposed.png","31f88f35717208a4dc6f4c4626274bc7"],["/media/icons/apple-touch-icon.png","31f88f35717208a4dc6f4c4626274bc7"],["/media/icons/apple-touch-startup-image-1182x2208.png","75654c78781e9fe8a913721966e976a6"],["/media/icons/apple-touch-startup-image-1242x2148.png","071fffc12fbae73b296cd42a2b985392"],["/media/icons/apple-touch-startup-image-1496x2048.png","ecbe8e56ec109c09724e803f844ee560"],["/media/icons/apple-touch-startup-image-1536x2008.png","9847fdbbf64e4cf23d72cc09ea4d32b2"],["/media/icons/apple-touch-startup-image-320x460.png","b86235465791431225b4d39b95c43e8f"],["/media/icons/apple-touch-startup-image-640x1096.png","f014d0ea9c9ad6fa1a1f3d305039d208"],["/media/icons/apple-touch-startup-image-640x920.png","0fb8a67a697bbeb0da086c979317bd0d"],["/media/icons/apple-touch-startup-image-748x1024.png","18bff2a282748008a9ecb17d88a4fa8a"],["/media/icons/apple-touch-startup-image-750x1294.png","cced60e58ba2a8592e02990a00a62ddf"],["/media/icons/apple-touch-startup-image-768x1004.png","8c4e18c84ff5399e79eed9ecab604ee3"],["/media/icons/coast-228x228.png","553956fe66720885278c0909c6439f5b"],["/media/icons/favicon-16x16.png","945d3c5065f14b6a13230e74c1c2cb8a"],["/media/icons/favicon-230x230.png","2431ffa09efad3106239659363a2be12"],["/media/icons/favicon-32x32.png","982d4806b9cb484958380ef416a61a48"],["/media/icons/favicon-96x96.png","422735a09ba39cdf913205553c46b674"],["/media/icons/firefox_app_128x128.png","1e2843ff395adbcdd4391b0815712c1d"],["/media/icons/firefox_app_512x512.png","ee5ff1e1fa463c5d235c53a606ea0085"],["/media/icons/firefox_app_60x60.png","709395cf37be4de1a7ae8f5ca86fe4b8"],["/media/icons/index.html","debe8fd1aacdaa6c212b9fda628ebbb6"],["/media/icons/mstile-144x144.png","7cb0f597cc6d6c472e39a479c34d4147"],["/media/icons/mstile-150x150.png","d2319e597a114ce1b9327e8de7f0804c"],["/media/icons/mstile-310x150.png","4aa195d9db980776606f25cb1019d516"],["/media/icons/mstile-310x310.png","218c298e2efbf1f180353e3e95417f8b"],["/media/icons/mstile-70x70.png","b9b400a776ea3c4447492f23f370eac0"],["/media/icons/yandex-browser-50x50.png","90ad2a34d60c017581b9daebe5cbb23a"],["/media/img/1024@1x.jpg","e778a99b25f5e91eb527e8a2a6f476d2"],["/media/img/1024@2x.jpg","203d53eeed115ac45b49dd65d8835198"],["/media/img/1366@1x.jpg","08a5d6a2c45ccbca8b2f38197e3b5e9e"],["/media/img/1366@2x.jpg","ea5a57f1cb370afebc1da64f6fc6784f"],["/media/img/1920@1x.jpg","1bf9599c2a7c55b948985c495eb3fc7c"],["/media/img/1920@2x.jpg","8a20380e44ba981b2e96e63e196a2976"],["/media/img/320@1x.jpg","c2bbc17ea2c6680b46376a3e6f10ca3b"],["/media/img/320@2x.jpg","4f46ba3e125d5196c4d3db7afd59d952"],["/media/img/768@1x.jpg","67a088395030b97f7bfc22fa283599c9"],["/media/img/768@2x.jpg","4edea89e4a49475a10812d34be5cd9c8"],["/scripts/compiled/app.js","c9fc229bb17039ebdd8a45aab1fba259"],["/scripts/compiled/site.js","5fafdf0963db5bebc129b70f6fe88271"],["/scripts/compiled/tsapp.js","9859093b21060b0a42d4e9f248731ac1"],["/scripts/compiled/vendors.min.js","446dd71f78a4df0820696536939c040a"],["/scripts/js/site.js","3539a7db0b31ed8fef35580731e7ef90"],["/scripts/js/site/asyncFontLoading.js","4240a69a98471c7c0afc80eadda598cf"],["/scripts/js/site/eventHandler.js","5ac54d1caa31e3dce6b3903686865dda"],["/scripts/js/site/lazySizesInit.js","d22cec02eb6e86de4dd9e1b4207d2f63"],["/scripts/js/site/loadCSSInit.js","682dc67e534caa42580f3d91df8d4e37"],["/scripts/js/site/preloadContent.js","42374e239cbe454ac6e5be585337ef1f"],["/scripts/js/site/toggleActive.js","65ec67fa0bef0f7ae905b7d9b5d20d45"],["/scripts/js/site/toggleState.js","3f1bd31753c0735277864e1a00cadd09"],["/scripts/jsx/actions/actionTypes.js","443fe920eb1d8d3a942506f837fcc88e"],["/scripts/jsx/actions/actions.js","a458ad5073ef858eaf5b2cb41be1d84d"],["/scripts/jsx/api/ProductPageApi.js","80f186787e67a2a7b558f23eecd92214"],["/scripts/jsx/reducers/reducers.js","782160bbeed8f769dec008490b32182d"],["/scripts/jsx/store/configureStore.js","5cbfbbd9d6c8bdca52d799a65b53bf49"],["/scripts/only/only-critical.min.js","15006773f958e043962dc617ec5b3daf"],["/scripts/only/only-fragment.min.js","365c314ec7c7a85f2403b1c2310a0936"],["/scripts/only/only-scripts.min.js","4edd0a1c27104a088e3f05d356ed1634"],["/scripts/vendor/fontfaceobserver.min.js","c447ffe8443adcf22537ac1014f6fdef"],["/scripts/vendor/lazysizes.min.js","4b6d4cfaf243ef0ee9cfe39e033675c2"],["/scripts/vendor/picturefill.min.js","1d343d827310c1b001db8b2bb7eb9cb4"],["/src/index.html","805c08bbecf1255dc38ff5624ecb8361"],["/src/var.html","6afafd8b456f6d4fbc280ea20d023bca"],["/src/view.html","5b4f9a60082709d6dd91cfc79a3a13b5"],["/styleguide.html","ea6ebd189317a94bb5ad2df7d8964c04"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







