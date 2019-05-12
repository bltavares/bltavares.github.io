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
    "revision": "3ad97ba224460b244babfc27ea40fced"
  },
  {
    "url": "2011/06/17/e-nasce-o-cabinet/index.html",
    "revision": "ac6e8f6859f4426b81310fed35643a04"
  },
  {
    "url": "2011/06/22/novidades-e-dilemas-no-design-do-cabinet/index.html",
    "revision": "615e398146cbc0565812e1b4a5f7b8c5"
  },
  {
    "url": "2011/06/22/tip-fabricator-1-0-and-memoization/index.html",
    "revision": "1820e864bb43163d4b5e80a866893755"
  },
  {
    "url": "2011/07/01/cabinet-e-as-relationships/index.html",
    "revision": "57131dcdff9e1896cc91a44c865ca4f9"
  },
  {
    "url": "2011/07/01/rails-migration-and-column-names/index.html",
    "revision": "13e91622fa2100d5fcf2f2b69b3699fd"
  },
  {
    "url": "2011/07/01/speech-input-to-simple-form/index.html",
    "revision": "57e1ee0d9920fd6e67bd2e2c05aca596"
  },
  {
    "url": "2011/07/07/yelly-rspec-formatter-now-for-linux-too/index.html",
    "revision": "222a13509dc8b6718eefd3bbbc45aee1"
  },
  {
    "url": "2011/07/08/primeiro-teste-do-cabinet-na-vida-real-ou-nao/index.html",
    "revision": "4903d1480b7033134e6e217b4ba0160f"
  },
  {
    "url": "2011/07/16/cabinet-0-0-1-released/index.html",
    "revision": "863c12b6cea45fb66e5a38020e01a393"
  },
  {
    "url": "2011/07/21/coderwall-konami-code-bookmarklet/index.html",
    "revision": "6891131af751dab3297c45a1cfc26756"
  },
  {
    "url": "2011/07/26/canhaz-icanhaz-for-underscore/index.html",
    "revision": "a01e9f15f01b7d6ef1ad10b337f65fb7"
  },
  {
    "url": "2011/09/16/how-ive-setup-git-for-continuous-deployment-on-a-php/index.html",
    "revision": "358d7c1fcdab8e00ec5cf6c60da12461"
  },
  {
    "url": "2011/09/19/1-8-0-rc/index.html",
    "revision": "c04d33a5e68906fdc18a49285360f6ad"
  },
  {
    "url": "2011/09/21/bdd-vs-tdd/index.html",
    "revision": "a0f2ca484a83397992e183db4ad85ef7"
  },
  {
    "url": "2011/12/23/atualizacoes-no-cabinet/index.html",
    "revision": "d8260175c124c48bbe121d8d62e5bb94"
  },
  {
    "url": "2011/12/23/ja-conhece-o-eufori/index.html",
    "revision": "7b181f61924230e7c42f677ee53d80eb"
  },
  {
    "url": "2012/01/26/delegate-and-decorators/index.html",
    "revision": "8f7a9d9a513dffcbd8826dc50f87e784"
  },
  {
    "url": "2012/03/10/cleaning-database-after-testing-on-c/index.html",
    "revision": "f13691e76daf76382c8a81ec07d33392"
  },
  {
    "url": "2012/08/06/improving-the-user-password-combo/index.html",
    "revision": "b4b2d1746319475e4d205fa392a9fdd7"
  },
  {
    "url": "2012/09/02/mozillas-hackday-on-porto-alegre-review/index.html",
    "revision": "4b19c752ecd4cae8fe27a8c85fcfcecf"
  },
  {
    "url": "2013/05/23/kata-problem-git-wrong-commit/index.html",
    "revision": "e13c473a611ae54e91baa7ba6c962cc7"
  },
  {
    "url": "2013/08/09/following-the-error-lein-cljsbuild-and-foreign-libs/index.html",
    "revision": "6b829d9875c40d5c9fd147565343b3b6"
  },
  {
    "url": "2013/08/19/following-the-error-spring-autowired-and-bean/index.html",
    "revision": "48fc1017cbd550994d623d10372bd095"
  },
  {
    "url": "2013/11/02/comments-on-single-responsibility-principle/index.html",
    "revision": "d2107f316968fb921ed761b1c340b80a"
  },
  {
    "url": "2013/11/21/contexto-de-classes-na-declaracao-de-tipos-em-haskell/index.html",
    "revision": "97a69f7b4f7e8c41c3c84e5f9219161b"
  },
  {
    "url": "2013/12/02/thoughts-about-variadic-functions/index.html",
    "revision": "3a7cc7dcb99f3ece94c66d27172f67df"
  },
  {
    "url": "2014/03/01/story-from-the-trenches-baseline-workflow/index.html",
    "revision": "005b88d527e1cef79b2157726d5309ab"
  },
  {
    "url": "2014/03/20/baseline-and-vagrant-integration/index.html",
    "revision": "5891cbf87faff45b0c3cc954c9d1a1df"
  },
  {
    "url": "2014/05/03/quick-intro-to-make/index.html",
    "revision": "c4e4f30e0ccc2f58178453818ef6ec6c"
  },
  {
    "url": "2015/01/19/binding-forms/index.html",
    "revision": "85c2c3c5c9441d859ad3a6ffe0ee0f0d"
  },
  {
    "url": "2015/01/28/criacao-de-variaveis-e-contextos-lexicos-em-clojure/index.html",
    "revision": "4657f356287caf58627216a6a57c9cce"
  },
  {
    "url": "2015/07/04/about-tty/index.html",
    "revision": "ffa9e9f51905213f78cded4f54c8a80e"
  },
  {
    "url": "2015/08/10/why-im-having-fun-with-rust/index.html",
    "revision": "8d57394dd69e41e7aa86fb9c25998b04"
  },
  {
    "url": "2017/01/18/expressando_o_dominio_atraves_do_sistema_de_tipos/index.html",
    "revision": "384813fecfaf13d40fe7f15dd38f11ff"
  },
  {
    "url": "2017/06/13/updates_sobre_o_ecossistema_do_rust/index.html",
    "revision": "2e3e236bb5abc0c3967ee0ff7acf609a"
  },
  {
    "url": "2019/05/12/cluster_em_casa_hardware/index.html",
    "revision": "6f2fc51117fea4c756b9c5ac1a0c388e"
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
    "revision": "94c592c145c57bcd9f0bfc862a2652eb"
  },
  {
    "url": "favicon.png",
    "revision": "cd203f6c2b548699de85a9ed4054c832"
  },
  {
    "url": "index.html",
    "revision": "4c224918f22732281dceff07acd4a57b"
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
    "revision": "385786c94543605a61e9e81b0a0d527a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
