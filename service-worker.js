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

var precacheConfig = [["/2011/06/16/desafio-do-ano/index.html","83929ed1236147286f466ed6a161ece5"],["/2011/06/17/e-nasce-o-cabinet/index.html","c0c2b974d6f86fa4111947336487597d"],["/2011/06/22/novidades-e-dilemas-no-design-do-cabinet/index.html","e2862113e7383a22e1a8c5ac5b94bb9b"],["/2011/06/22/tip-fabricator-1-0-and-memoization/index.html","bcaa42eb9decd2ec070039aac53a11ec"],["/2011/07/01/cabinet-e-as-relationships/index.html","ee11495ba20956ec03b7a448c22e2608"],["/2011/07/01/rails-migration-and-column-names/index.html","61c0b3948df0af62c7df94bf274d390d"],["/2011/07/01/speech-input-to-simple-form/index.html","81d2ec6dba62848b9305cc5d57d2c3b9"],["/2011/07/07/yelly-rspec-formatter-now-for-linux-too/index.html","2d3b5d51465ff840da77e23b58fdd169"],["/2011/07/08/primeiro-teste-do-cabinet-na-vida-real-ou-nao/index.html","aa352ce939bcbac60a9157be058d3454"],["/2011/07/16/cabinet-0-0-1-released/index.html","1a09fe0c29c2bcca96030e76f63b9ed6"],["/2011/07/21/coderwall-konami-code-bookmarklet/index.html","930e13bf29689281e08d0b0e27e5f0f5"],["/2011/07/26/canhaz-icanhaz-for-underscore/index.html","f64246145f637ee33b4457437018017d"],["/2011/09/16/how-ive-setup-git-for-continuous-deployment-on-a-php/index.html","78b5d08a3aa0719b371679ed465894da"],["/2011/09/19/1-8-0-rc/index.html","f360421801d9105ad6d378e132ce039e"],["/2011/09/21/bdd-vs-tdd/index.html","d7cb09c284099cee6d6245ab468f5a8f"],["/2011/12/23/atualizacoes-no-cabinet/index.html","2207c8012d43957b0c6d8eea977be591"],["/2011/12/23/ja-conhece-o-eufori/index.html","655e84c8c4411592fef384b3753a0f85"],["/2012/01/26/delegate-and-decorators/index.html","63a54b99d501cd4435544a6a863ca972"],["/2012/03/10/cleaning-database-after-testing-on-c/index.html","44e0649a50fa14e0f6f38f91acfa00df"],["/2012/08/06/improving-the-user-password-combo/index.html","83914882a3450b4d11d59be81ca64a3c"],["/2012/09/02/mozillas-hackday-on-porto-alegre-review/index.html","2ce725b36b887676f68f34bff7ab2038"],["/2013/05/23/kata-problem-git-wrong-commit/index.html","e2b4da96ec105e068e479fdf42c76008"],["/2013/08/09/following-the-error-lein-cljsbuild-and-foreign-libs/index.html","1a73c069e0506159dc0b6856214242b0"],["/2013/08/19/following-the-error-spring-autowired-and-bean/index.html","7923a6ae26dacbf1d89284d28f086ff8"],["/2013/11/02/comments-on-single-responsibility-principle/index.html","5351443c57cfb161d7f9661b19f8cc35"],["/2013/11/21/contexto-de-classes-na-declaracao-de-tipos-em-haskell/index.html","43a2fde93ecbfa23b38ccb2235cbb130"],["/2013/12/02/thoughts-about-variadic-functions/index.html","581a13e62c7543a1ba14542042be70e1"],["/2014/03/01/story-from-the-trenches-baseline-workflow/index.html","d742cf1732a52809bdcecb35b85cb9dd"],["/2014/03/20/baseline-and-vagrant-integration/index.html","5490c3cef9b24d5d02182acb889ac711"],["/2014/05/03/quick-intro-to-make/index.html","fc1121c051c1bdfc02418dc0ce04f4eb"],["/2015/01/19/binding-forms/index.html","8cbbef471a4d0e465f5b8fb1fa16a864"],["/2015/01/28/criacao-de-variaveis-e-contextos-lexicos-em-clojure/index.html","9fc8fc0eb7fb1732c1774d2804b039fd"],["/2015/07/04/about-tty/index.html","895d330c7e40f6f106c5a2ee9222df6b"],["/2015/08/10/why-im-having-fun-with-rust/index.html","17d2fceccf46ec907e9598c9ac66df99"],["/2017/01/18/expressando_o_dominio_atraves_do_sistema_de_tipos/index.html","81e1ed5dc351ef91d09cc6e0ec0f6148"],["/2017/06/13/updates_sobre_o_ecossistema_do_rust/index.html","aa81a0c372ec599502c15e36ca00b45b"],["/assets/css/all.css","e5ce616973f7ba4e95f0be8ff2a95659"],["/assets/css/font-awesome-ie7.min.css","149eedb61546560122d34ad4e4e9cf36"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_01.rs","0a7d195d970932cc77cdd1067b86dbd5"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_02.rs","2b04e5103e946636bc07590cd566c8be"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_03.rs","d40a8a8e838008d0c89d05943a314558"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_04.rs","7f537acea29f8dbdd8658a2b855d6434"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_05.rs","ce63a189a03ba4da708047936d76ab0c"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_06.rs","17a8924b2d4e88c9baf7bdd52e18fe16"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_07.rs","4f17968a3a28d88bc76ea52930d96b07"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_08.rs","855c10bd2d4b92491fc4a9a7fac88af4"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_09.rs","27d72f912acdd7067b8596d63162af9e"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_10.rs","21ed9d277432be0336d79d51d71f7caf"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_11.rs","9fbfa026c487583d9b62105c87d533b4"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_12.rs","01f7c6ee481f46ed4537957d0ad40733"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_13.rs","25eaf132d89acdeedc9afc4cbb0ed5bc"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_14.rs","8ebfc2e5a20e4374268f4bbe3aa59c93"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_15.rs","1c2da92c6efe6bcf6b78cb4a468bc7ca"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_16.rs","b3f9cab17d940c2ef8124d209856df88"],["/assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_17.rs","6afb9b9f0f76f3ed8e8e8414c313baec"],["/assets/font/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/assets/font/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/assets/font/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/assets/font/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/assets/font/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/assets/font/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/atom.xml","abbd8c974d0a567f9d533d7058b08bd9"],["/favicon.png","cd203f6c2b548699de85a9ed4054c832"],["/index.html","2ecba14006a9ca9e9e42d938cfaf7caa"],["/keybase.txt","82d3e4709861f27ee623dbf8dc6b2395"],["/logo.png","fce6ba195d26dbf7ed6af06fd6477a2b"],["/manifest.json","24769948801bb4bb63e39b8ca0996445"],["/ping.sh","2113184a77de72087579a198dad176c0"],["/post/10265562658/how-ive-setup-git-for-continuous-deployment-on-a-php/index.html","90cc4dcc0022384d8274b6c24bfdf386"],["/post/10427555618/1-8-0-rc/index.html","f5baf500ab086ed4c309b74b53068b6a"],["/post/10479293802/bdd-vs-tdd/index.html","a4a19a5e2ee354b633d4ac290cbaab6a"],["/post/14691350793/atualizacoes-no-cabinet/index.html","2c5db6884dcf1db0f6b5be4bf216b540"],["/post/14691809828/ja-conhece-o-eufori/index.html","05a4311b4ee92a5236f38dc2b706cc52"],["/post/16517139258/delegate-and-decorators/index.html","0056c20803925a0f0188ac5c46de7f79"],["/post/19057847614/cleaning-database-after-testing-on-c/index.html","d13c05bd432799c8a3cc280e078408bd"],["/post/28873315923/improving-the-user-password-combo/index.html","5f9889c61b2ef1353a36f2d49de59e75"],["/post/30747568162/mozillas-hackday-on-porto-alegre-review/index.html","9a951a07c295486b808dc1791ab9f87b"],["/post/51168097858/kata-problem-git-wrong-commit/index.html","3cba66421df709b792edada32382f392"],["/post/57825317140/following-the-error-lein-cljsbuild-and-foreign-libs/index.html","bd57027a0c6125b481b865f3740cca8f"],["/post/58727730400/following-the-error-spring-autowired-and-bean/index.html","e88a1d81e890b494715675e81a7cb7b3"],["/post/6595730838/desafio-do-ano/index.html","4557d97c39a67842b659d5bb53e5bf53"],["/post/6618057841/e-nasce-o-cabinet/index.html","f32e0f2f024e6a28cfcc6fdc98e88198"],["/post/6810830707/tip-fabricator-1-0-and-memoization/index.html","6dba1775316cc8ec19120fe0b1d3925e"],["/post/6811216847/novidades-e-dilemas-no-design-do-cabinet/index.html","048db390d9bd17f210d349b4cc85cc69"],["/post/7124144127/cabinet-e-as-relationships/index.html","4d6c56326433cdfdb3ca729bb3df83aa"],["/post/7131180029/speech-input-to-simple-form/index.html","322b7c88cee30a8a914dca07ed3d933c"],["/post/7140628880/rails-migration-and-column-names/index.html","3a524e41461c383707c0b03c070fbc43"],["/post/7364000356/yelly-rspec-formatter-now-for-linux-too/index.html","a8d548c5062dcc0169935d33f6b0eb96"],["/post/7385426940/primeiro-teste-do-cabinet-na-vida-real-ou-nao/index.html","3ea24101375d42ebb8155192f63b8177"],["/post/7690021734/cabinet-0-0-1-released/index.html","85678b167e048c8f6424aec7ec109f42"],["/post/7910553226/coderwall-konami-code-bookmarklet/index.html","4f0085c369cceb28b874d4af9cc0d98c"],["/post/8103071852/canhaz-icanhaz-for-underscore/index.html","f90547cda8344dec5ef1679b158fbb5d"],["/publish.sh","96c4ff0f720814c8723067ed29218322"],["/robots.txt","4f7c81d7b3f8c43f8b518ea3c5899e91"],["/service-worker-installation.js","9cf921aab92b8bd46011030b9b3ca880"],["/service-worker.js","9e7ce44bdb509cb2c1f47c7881966094"],["/sitemap.xml","88413550de98d7d9b9744666660b8e07"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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







