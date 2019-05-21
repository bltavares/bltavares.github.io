/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2011/06/16/desafio-do-ano/index.html",
    "revision": "039ed28428f509d7d285718a4f169117"
  },
  {
    "url": "2011/06/17/e-nasce-o-cabinet/index.html",
    "revision": "37a474666ed56e25f2f286b583aac126"
  },
  {
    "url": "2011/06/22/novidades-e-dilemas-no-design-do-cabinet/index.html",
    "revision": "ed3e1bc6a2be686120473834c3141d95"
  },
  {
    "url": "2011/06/22/tip-fabricator-1-0-and-memoization/index.html",
    "revision": "82f684a87164cdf56c373a3282537c0a"
  },
  {
    "url": "2011/07/01/cabinet-e-as-relationships/index.html",
    "revision": "3b06a77232a62bb7aba8f39ddb67a7d7"
  },
  {
    "url": "2011/07/01/rails-migration-and-column-names/index.html",
    "revision": "910730dfad6c4788b71bee6ef2134463"
  },
  {
    "url": "2011/07/01/speech-input-to-simple-form/index.html",
    "revision": "5f810fe9efdc5f78adb7a7dd9ea4a3e2"
  },
  {
    "url": "2011/07/07/yelly-rspec-formatter-now-for-linux-too/index.html",
    "revision": "e0360233405a68c6176f06c66147c6b8"
  },
  {
    "url": "2011/07/08/primeiro-teste-do-cabinet-na-vida-real-ou-nao/index.html",
    "revision": "ad85158ed3f4737bdc9f36573eb290b2"
  },
  {
    "url": "2011/07/16/cabinet-0-0-1-released/index.html",
    "revision": "ca35fad8ccc6fa965888adfd11183415"
  },
  {
    "url": "2011/07/21/coderwall-konami-code-bookmarklet/index.html",
    "revision": "114ce2783410bf7a7710dc40c03a9ed9"
  },
  {
    "url": "2011/07/26/canhaz-icanhaz-for-underscore/index.html",
    "revision": "56de20b5faa624724d8b340f4b531874"
  },
  {
    "url": "2011/09/16/how-ive-setup-git-for-continuous-deployment-on-a-php/index.html",
    "revision": "f607911fee215e7dced32a3b4e0278df"
  },
  {
    "url": "2011/09/19/1-8-0-rc/index.html",
    "revision": "42166691aa178c142c8c0ed9bef97a75"
  },
  {
    "url": "2011/09/21/bdd-vs-tdd/index.html",
    "revision": "0a3a7083be362937fac74a81c93c1835"
  },
  {
    "url": "2011/12/23/atualizacoes-no-cabinet/index.html",
    "revision": "c3d9f14a25a51eb21cdb44921aa50cdf"
  },
  {
    "url": "2011/12/23/ja-conhece-o-eufori/index.html",
    "revision": "e4305dd032e7efabfc0baaa82d869b1d"
  },
  {
    "url": "2012/01/26/delegate-and-decorators/index.html",
    "revision": "2c9377173563e7d415a9de43775b2706"
  },
  {
    "url": "2012/03/10/cleaning-database-after-testing-on-c/index.html",
    "revision": "33d866e8a85226f2d49fbef9a4c2922e"
  },
  {
    "url": "2012/08/06/improving-the-user-password-combo/index.html",
    "revision": "1e5e7fa32b2399f8ba65c9812607621b"
  },
  {
    "url": "2012/09/02/mozillas-hackday-on-porto-alegre-review/index.html",
    "revision": "37de6423718513bb0494b99658de54f5"
  },
  {
    "url": "2013/05/23/kata-problem-git-wrong-commit/index.html",
    "revision": "8228db1151c1d961dfb06e6f6bd136aa"
  },
  {
    "url": "2013/08/09/following-the-error-lein-cljsbuild-and-foreign-libs/index.html",
    "revision": "8e91179df8dae2258160f1a36847cd94"
  },
  {
    "url": "2013/08/19/following-the-error-spring-autowired-and-bean/index.html",
    "revision": "5c2e680e51819150ac34899494418f2d"
  },
  {
    "url": "2013/11/02/comments-on-single-responsibility-principle/index.html",
    "revision": "5635acbaf6c6f95c5ab8e9a0a414f864"
  },
  {
    "url": "2013/11/21/contexto-de-classes-na-declaracao-de-tipos-em-haskell/index.html",
    "revision": "2e1d3d7632c3fa2e2fac38916b5873af"
  },
  {
    "url": "2013/12/02/thoughts-about-variadic-functions/index.html",
    "revision": "c2fa6f41a8ef20a98dd547f79e08786d"
  },
  {
    "url": "2014/03/01/story-from-the-trenches-baseline-workflow/index.html",
    "revision": "175611a598ffb60b4fff00b4be4aa800"
  },
  {
    "url": "2014/03/20/baseline-and-vagrant-integration/index.html",
    "revision": "b12565a5eb81d50c4c221faa88d3c5cf"
  },
  {
    "url": "2014/05/03/quick-intro-to-make/index.html",
    "revision": "2c63738234c089556873d5d587c904bc"
  },
  {
    "url": "2015/01/19/binding-forms/index.html",
    "revision": "102614322b3c995d8f374beffcaec5cc"
  },
  {
    "url": "2015/01/28/criacao-de-variaveis-e-contextos-lexicos-em-clojure/index.html",
    "revision": "f9c6803b630d86ef06d32e5aad3f6321"
  },
  {
    "url": "2015/07/04/about-tty/index.html",
    "revision": "f7e39218fa5b30f53629c944edbdb286"
  },
  {
    "url": "2015/08/10/why-im-having-fun-with-rust/index.html",
    "revision": "71832a554ebaa47e1e62cdd3b4276b63"
  },
  {
    "url": "2017/01/18/expressando_o_dominio_atraves_do_sistema_de_tipos/index.html",
    "revision": "ca27bc9afd93ff1fa9f8698c3bfd1d6c"
  },
  {
    "url": "2017/06/13/updates_sobre_o_ecossistema_do_rust/index.html",
    "revision": "b94608dbfd813dfe1c7a7a5d54e13153"
  },
  {
    "url": "2019/05/12/cluster_em_casa_hardware/index.html",
    "revision": "51bb9f7e07827203c4d24b1ced7a8eca"
  },
  {
    "url": "2019/05/21/cluster_em_casa_sistemas_operacionais/index.html",
    "revision": "e945339d085c25e2e3e0cc5dc48b3015"
  },
  {
    "url": "assets/cluster_em_casa/conjunto_pi_hardware.jpg",
    "revision": "664639eb9b3be50db695097b88679af7"
  },
  {
    "url": "assets/css/all.css",
    "revision": "e5ce616973f7ba4e95f0be8ff2a95659"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_01.rs",
    "revision": "0a7d195d970932cc77cdd1067b86dbd5"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_02.rs",
    "revision": "2b04e5103e946636bc07590cd566c8be"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_03.rs",
    "revision": "d40a8a8e838008d0c89d05943a314558"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_04.rs",
    "revision": "7f537acea29f8dbdd8658a2b855d6434"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_05.rs",
    "revision": "ce63a189a03ba4da708047936d76ab0c"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_06.rs",
    "revision": "17a8924b2d4e88c9baf7bdd52e18fe16"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_07.rs",
    "revision": "4f17968a3a28d88bc76ea52930d96b07"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_08.rs",
    "revision": "855c10bd2d4b92491fc4a9a7fac88af4"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_09.rs",
    "revision": "27d72f912acdd7067b8596d63162af9e"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_10.rs",
    "revision": "21ed9d277432be0336d79d51d71f7caf"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_11.rs",
    "revision": "9fbfa026c487583d9b62105c87d533b4"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_12.rs",
    "revision": "01f7c6ee481f46ed4537957d0ad40733"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_13.rs",
    "revision": "25eaf132d89acdeedc9afc4cbb0ed5bc"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_14.rs",
    "revision": "8ebfc2e5a20e4374268f4bbe3aa59c93"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_15.rs",
    "revision": "1c2da92c6efe6bcf6b78cb4a468bc7ca"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_16.rs",
    "revision": "b3f9cab17d940c2ef8124d209856df88"
  },
  {
    "url": "assets/expressando_o_dominio_atraves_do_sistema_de_tipos/order_17.rs",
    "revision": "6afb9b9f0f76f3ed8e8e8414c313baec"
  },
  {
    "url": "assets/font/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "assets/font/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "assets/font/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "assets/font/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "assets/font/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "assets/font/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "assets/service-worker-installation.js",
    "revision": "eff323127edc3aacb297b9c04d8c3f5e"
  },
  {
    "url": "atom.xml",
    "revision": "46eb1471a176454d7042b45a73cbf46a"
  },
  {
    "url": "favicon.png",
    "revision": "cd203f6c2b548699de85a9ed4054c832"
  },
  {
    "url": "index.html",
    "revision": "0f7fb2270e9267b206613864d4075321"
  },
  {
    "url": "keybase.txt",
    "revision": "82d3e4709861f27ee623dbf8dc6b2395"
  },
  {
    "url": "logo.png",
    "revision": "fce6ba195d26dbf7ed6af06fd6477a2b"
  },
  {
    "url": "manifest.json",
    "revision": "24769948801bb4bb63e39b8ca0996445"
  },
  {
    "url": "ping.sh",
    "revision": "2113184a77de72087579a198dad176c0"
  },
  {
    "url": "post/10265562658/how-ive-setup-git-for-continuous-deployment-on-a-php/index.html",
    "revision": "90cc4dcc0022384d8274b6c24bfdf386"
  },
  {
    "url": "post/10427555618/1-8-0-rc/index.html",
    "revision": "f5baf500ab086ed4c309b74b53068b6a"
  },
  {
    "url": "post/10479293802/bdd-vs-tdd/index.html",
    "revision": "a4a19a5e2ee354b633d4ac290cbaab6a"
  },
  {
    "url": "post/14691350793/atualizacoes-no-cabinet/index.html",
    "revision": "2c5db6884dcf1db0f6b5be4bf216b540"
  },
  {
    "url": "post/14691809828/ja-conhece-o-eufori/index.html",
    "revision": "05a4311b4ee92a5236f38dc2b706cc52"
  },
  {
    "url": "post/16517139258/delegate-and-decorators/index.html",
    "revision": "0056c20803925a0f0188ac5c46de7f79"
  },
  {
    "url": "post/19057847614/cleaning-database-after-testing-on-c/index.html",
    "revision": "d13c05bd432799c8a3cc280e078408bd"
  },
  {
    "url": "post/28873315923/improving-the-user-password-combo/index.html",
    "revision": "5f9889c61b2ef1353a36f2d49de59e75"
  },
  {
    "url": "post/30747568162/mozillas-hackday-on-porto-alegre-review/index.html",
    "revision": "9a951a07c295486b808dc1791ab9f87b"
  },
  {
    "url": "post/51168097858/kata-problem-git-wrong-commit/index.html",
    "revision": "3cba66421df709b792edada32382f392"
  },
  {
    "url": "post/57825317140/following-the-error-lein-cljsbuild-and-foreign-libs/index.html",
    "revision": "bd57027a0c6125b481b865f3740cca8f"
  },
  {
    "url": "post/58727730400/following-the-error-spring-autowired-and-bean/index.html",
    "revision": "e88a1d81e890b494715675e81a7cb7b3"
  },
  {
    "url": "post/6595730838/desafio-do-ano/index.html",
    "revision": "4557d97c39a67842b659d5bb53e5bf53"
  },
  {
    "url": "post/6618057841/e-nasce-o-cabinet/index.html",
    "revision": "f32e0f2f024e6a28cfcc6fdc98e88198"
  },
  {
    "url": "post/6810830707/tip-fabricator-1-0-and-memoization/index.html",
    "revision": "6dba1775316cc8ec19120fe0b1d3925e"
  },
  {
    "url": "post/6811216847/novidades-e-dilemas-no-design-do-cabinet/index.html",
    "revision": "048db390d9bd17f210d349b4cc85cc69"
  },
  {
    "url": "post/7124144127/cabinet-e-as-relationships/index.html",
    "revision": "4d6c56326433cdfdb3ca729bb3df83aa"
  },
  {
    "url": "post/7131180029/speech-input-to-simple-form/index.html",
    "revision": "322b7c88cee30a8a914dca07ed3d933c"
  },
  {
    "url": "post/7140628880/rails-migration-and-column-names/index.html",
    "revision": "3a524e41461c383707c0b03c070fbc43"
  },
  {
    "url": "post/7364000356/yelly-rspec-formatter-now-for-linux-too/index.html",
    "revision": "a8d548c5062dcc0169935d33f6b0eb96"
  },
  {
    "url": "post/7385426940/primeiro-teste-do-cabinet-na-vida-real-ou-nao/index.html",
    "revision": "3ea24101375d42ebb8155192f63b8177"
  },
  {
    "url": "post/7690021734/cabinet-0-0-1-released/index.html",
    "revision": "85678b167e048c8f6424aec7ec109f42"
  },
  {
    "url": "post/7910553226/coderwall-konami-code-bookmarklet/index.html",
    "revision": "4f0085c369cceb28b874d4af9cc0d98c"
  },
  {
    "url": "post/8103071852/canhaz-icanhaz-for-underscore/index.html",
    "revision": "f90547cda8344dec5ef1679b158fbb5d"
  },
  {
    "url": "publish.sh",
    "revision": "96c4ff0f720814c8723067ed29218322"
  },
  {
    "url": "robots.txt",
    "revision": "4f7c81d7b3f8c43f8b518ea3c5899e91"
  },
  {
    "url": "sitemap.xml",
    "revision": "bc4877e3ddf6929940153805fab3233a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
