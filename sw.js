/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","afb82f9f63ccdc58900f89b77cb1a274"],["/about/index.html","de76b67ceb9444a9c22e86301fb340f5"],["/archives/1985/06/index.html","d1b8d23c4924ef969681373c5eea827c"],["/archives/1985/index.html","fc6046fe27364d2b2fbfb25a8329a630"],["/archives/2003/01/index.html","ea043ada100e845581cf3d2c3badcc01"],["/archives/2003/index.html","80acad71eb237c33a4aaac56baf163a0"],["/archives/2011/07/index.html","88973145b49b6a2dfeaf2204b8908955"],["/archives/2011/index.html","100d62222ce1fc957bf88cdb4569dbd5"],["/archives/2012/01/index.html","3ba13f9f8a636caca3f065c7500a06f3"],["/archives/2012/02/index.html","66a0fb5ad2df90fd27d5967b5c0a929c"],["/archives/2012/03/index.html","475770954c2687f8948af407adde31e6"],["/archives/2012/05/index.html","d7686f4b008248dfca9ccf54b79e6c7c"],["/archives/2012/index.html","400988a75aca7378db9cccbd2e8429fb"],["/archives/2015/01/index.html","5f4f94db78b8bae4c4fef659fbbf6b43"],["/archives/2015/index.html","1983e866ba90136dfe4f729c077942cd"],["/archives/2016/02/index.html","89c12f1d885ca3b1c91e54fd37964025"],["/archives/2016/index.html","e0249bdb1cb15900a34bbe5eadb959f2"],["/archives/2017/04/index.html","36560525808e99079f873fb51662b22f"],["/archives/2017/08/index.html","6167206dcf548579de7dada1b7024de9"],["/archives/2017/index.html","6ac65f9f3d697e99bae56bbb60172dfe"],["/archives/2018/10/index.html","6c98ceff0b443a70d01c0ab17b5b839d"],["/archives/2018/index.html","199b7e32d4a0aeb48c3d237405e5610e"],["/archives/2019/05/index.html","8d1eb01b0be2a90f7e6266130fe2b3b2"],["/archives/2019/06/index.html","4ab043abc8ae1011ff4c4aa42d593e61"],["/archives/2019/08/index.html","39d02187819e7b06ffdb32a1d74db59f"],["/archives/2019/10/index.html","0052c89cb56450e4e04eaa45a4fd7c0e"],["/archives/2019/11/index.html","f9760e6d30526a024dfb1c9c0eb17957"],["/archives/2019/index.html","f003dee72cf14d3ec9353f99293bce88"],["/archives/2021/03/index.html","2cdccceeab582388bc849ea00b6dac1b"],["/archives/2021/05/index.html","76a44dfd7908c69f99153d54917c61b4"],["/archives/2021/06/index.html","62dc7d107ff73436501ae779b36d4158"],["/archives/2021/07/index.html","42e56ea64f2dec56d1aaa1adcebb46da"],["/archives/2021/08/index.html","35d23bc6388ef5087049ac4a357c056d"],["/archives/2021/index.html","6ac9c485f6d22ec7701319ed093bfcc3"],["/archives/index.html","13ef2232af0c1e60449d90e5e078b3ea"],["/bilibili/bangumis/index.html","fe94904538b2cc85269917cf6e14f11c"],["/bilibili/cinemas/index.html","dd8615accf83fe3f42712066ad3a28a2"],["/blogs/1/index.html","a2b1a76f22b76baf06b7df22ffbaf2a7"],["/blogs/10/index.html","ac7548b5db73a3fc4de263263a9b2768"],["/blogs/12/index.html","f2d3339d9628f645125fb71aa0eb5ed0"],["/blogs/13/index.html","8240e325cd06417a9f6c53473b52c093"],["/blogs/14/index.html","27af0a93ee050946d12c8dfd86b691e6"],["/blogs/16/index.html","a71194f31e27926ecfcbe72803f14aba"],["/blogs/17/index.html","faa2d7a308c086dfc648539c3d90a94d"],["/blogs/18/index.html","90d658dc2bb5a926046edd05021501ea"],["/blogs/19/index.html","4bc92f3ff99f4ad96db67909b6a3e968"],["/blogs/2/index.html","605c6534df3f95d864691554848c3283"],["/blogs/21/index.html","2da1bbccd3c9a04466271bcf4fe1f052"],["/blogs/22/index.html","3d0b454812630e46fbcfad88c026e632"],["/blogs/23/index.html","d2010a4331b407605bb0398458ced7c4"],["/blogs/24/index.html","b4d3ef42647713188881e193a5458f9b"],["/blogs/25/index.html","6f6c64d5fd3327dbc53c37ac19544dc3"],["/blogs/26/index.html","41cd638c79e4ec765011fa1e6abb8836"],["/blogs/27/index.html","b20633a8daf23f5943fd00878989c1bf"],["/blogs/28/index.html","15031e64e7047ee58807f25d23f2bf3c"],["/blogs/29/index.html","c08449e4f5be6caaac0b8ca4927c9b6c"],["/blogs/3/index.html","7f63c061161cf6fc66a588c7582c8970"],["/blogs/30/index.html","739034654d3462a54a5c6c37693c6fbe"],["/blogs/31/index.html","3c7ca7cb365d3c46d0c46106d1ff4352"],["/blogs/34/index.html","87b961e463e6c80b49cecc853f61e21a"],["/blogs/4/index.html","e8c7b26a46a4a875a942b1157daab535"],["/blogs/6/index.html","88f4491fb05e1b1d4ff05b98aaed41db"],["/blogs/7/index.html","0f1d6ac4e35c4725fff766b905c5b0bd"],["/blogs/8/index.html","aad6cfa2e9f18682d4fcb2662874c266"],["/blogs/vg1/index.html","179a9a8891da23a38b62c4817cd16d71"],["/blogs/vg10/index.html","71a0d8290c9f4b184282e52b73e910b9"],["/blogs/vg11/index.html","a690710cb76ddd702b1df5b43968fcc1"],["/blogs/vg12/index.html","70a52e07e777fa220e9eb56a0e87fe12"],["/blogs/vg14/index.html","8b62d7a3c06f1b675dcba8179e264c4a"],["/blogs/vg17/index.html","6412eae26a618ea7f37e8d4b0b0c0467"],["/blogs/vg2/index.html","1d8b89a33861d77916baabad4bc5260e"],["/blogs/vg22/index.html","989af506f15fa8c30afa7ebcecd771ac"],["/blogs/vg9/index.html","58b1d9bef5cb05d52d6636e2611b2f27"],["/categories/index.html","487c479e30279c711bca9ec6f0af3485"],["/categories/动画/index.html","08fa6ba4f605bff70b7a7d5ff65c117d"],["/categories/动画/历史资料/index.html","76d63537ca34ed84cca225b4b464bca5"],["/categories/地方资料/index.html","cf67e3fe60cbb8e01ec05ae70b3fe7d9"],["/categories/学习笔记/index.html","b0ccdb89b744593190933c2f20ef89e0"],["/categories/学术文章/index.html","b2f939bbf99016e08ae69be29622dcd8"],["/categories/学术文章/哲学/index.html","53328ab083991ace3b1b4ff13dda2e15"],["/categories/日常随想/index.html","fb4902de27e1329c8e1aed5ffde2e5a6"],["/categories/电子游戏/index.html","6d88252d76dd64492c6687fa1c6be28c"],["/categories/电子游戏/历史资料/index.html","295f35240d9fd2aa60c672153b0f9bab"],["/categories/电子游戏/历史资料/报刊杂志/index.html","69dfa947d7f379fd417b2a0d822cdab5"],["/categories/电子游戏/历史资料/网络资料/index.html","4eddefb80e53e8c6b12f9a0e6d062f21"],["/categories/电子游戏/数据资料/index.html","b0ccbd2c902b6078e24628bfe54ece1b"],["/categories/站点文档/index.html","b2e149d627c9ea1f5250ce65436f4ac2"],["/categories/足球运动/index.html","53052360d18cd3e200b41148af184587"],["/categories/足球运动/历史资料/index.html","75692014362b905d23dc9106653a4e90"],["/changelog/index.html","ff9c63e3f37f274da7bfe0a0f8dda01f"],["/css/custom_background.css","da4e4b96246d6681923d760e538b0b9e"],["/css/custom_others.css","f12fa816f658d25efbb119102bfa1b9b"],["/css/custom_volantistags.css","9481224b8a83b9b9f29cec0f93be08a6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","611d99be835ac2af17d75499c6319607"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/galleries/guilin/index.html","f51d3a688d2157167a5221faf0686ead"],["/galleries/index.html","a67cc952582c17cb026aee2eb7be87ca"],["/galleries/jianzheng04/index.html","260750230428cf1575715ab123f3b570"],["/galleries/jianzheng05/index.html","caa585f263bb878b964a968a5ece47a2"],["/galleries/jianzheng15/index.html","69286d410fc1a762a0571751b16ad13b"],["/galleries/jianzheng62/index.html","c694f921ba36614829b73e7aeffe3db4"],["/galleries/realbetis1907-1930/index.html","71deb64c1c21237db5fb4709764739d4"],["/gamedb/index.html","76d1278028bd2de0982502400d2fb126"],["/gamedb/xuanyuansword-7/credits.html","bd03a788a8e74c36cd99c6ed884c8afc"],["/gamedb/xuanyuansword-7/index.html","7f7a0a7fe3b8320efef33541e02f4e41"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","538f76967db0e4571daeec1d92e2d1e2"],["/img/android-chrome-192x192.png","951b13c2abb6f42b32e22fe6374b324e"],["/img/android-chrome-36x36.png","db3b2937b66c23eb364e1c459aa6f97f"],["/img/android-chrome-48x48.png","6695e72d437a8acc82c98261e46e6eb3"],["/img/android-chrome-512x512.png","049f19f731f9c9e589eff663f39200ed"],["/img/android-chrome-72x72.png","b45908171f623aa622407420d8c812ed"],["/img/android-chrome-96x96.png","c40803f863118a3809c96ccceaf8fd88"],["/img/apple-touch-icon.png","b8951c37946c0fac83381216c9e37a5c"],["/img/avatar.jpg","aa3c4f478e777904284de96eecc5dd46"],["/img/bg.jpg","9c1791eeed43e45791b687e0bf9bc175"],["/img/bg_pal7.jpg","9ac85383cb495443a644f3fb720a7b72"],["/img/bg_pal7_m.jpg","7c89bc230afbdb05632748e7b6c244b0"],["/img/favicon-16x16.png","6068e1b955ef2be906de101c7d68fcbe"],["/img/favicon-32x32.png","d3e57d339747060979ee356a56ba5727"],["/img/favicon_128x128.png","c56161158fabd7c74968141832ee153c"],["/img/favicon_256x256.png","a8d88614d37dfc3725f753f7796e6a1b"],["/img/favicon_512x512.png","87510f2d50038c11941bd06e021d5f86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/pwa_32x32.png","c19581786382c8e57c44209d3b089b61"],["/img/safari-pinned-tab.svg","58e8ed7a4ba60a74fe7755a080274a24"],["/index.html","2bb7cf5c8d5f3f016bb0f503cfaceb53"],["/js/custom_randombg.js","6e953fcd0af38c7377ba61fb9d531bb8"],["/js/iconfont-national_flags.js","7bc216cd7f602a4d3004d7a8185b5211"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","b41a0bcbdd71e37baf3239a6bc7dbc27"],["/mblogs/index.html","227795f8bcb7a6403dffd1215f78cb4d"],["/messageboard/index.html","7eb8f2b1ace75a595eb589c6a892a0ff"],["/musics/index.html","76f9c2b934bbbab7e2d15bde4ce5db68"],["/page/2/index.html","66687e67935cceceadcd90d373fa9150"],["/page/3/index.html","8b497b0de6e346b9cba176e1745ec164"],["/page/4/index.html","b101355fe2492301ac8beb821e18d58c"],["/sw-register.js","f6c9ce91361841907fe03622902a9f15"],["/tags/index.html","4a1e559ba6fbeb330ee1939ac213b8a5"],["/tags/中国哲学/index.html","9b62cd65c2afec1c43a0e24cef36a934"],["/tags/动画/index.html","496f8796290ccce24a772350f40e951b"],["/tags/南宁/index.html","94b6eda3a4eb09491395829d7a90e33f"],["/tags/历史/index.html","7d3f0626e896db60c86f4f8f50b8da2f"],["/tags/历史哲学/index.html","988cd0b8636a1acc1bd7196adcc2e10d"],["/tags/哲学/index.html","cfad914c697f429887e1d2feae44f6df"],["/tags/学习/index.html","55fb5616e39f060979ece2d6c40a2bab"],["/tags/家用电脑与游戏/index.html","aa826e431a20ba724493ebf2ed3dc712"],["/tags/开箱/index.html","d71522ab7a1f8ff56da48e51da8099df"],["/tags/教程/index.html","586df7edba25013b19429a6794825587"],["/tags/数据/index.html","faa5ac88f7daac191dd681eca7a44f6c"],["/tags/数码/index.html","83e8199bd32db37eea6bff8437aad081"],["/tags/桂林/index.html","4eacf9fbc0b72ab9371466cdc9078016"],["/tags/游戏/index.html","32faefd5164ef51772b2e37be1c4f250"],["/tags/王夫之/index.html","2d2ab24299df46b083ef85840de19ace"],["/tags/电子游戏软件/index.html","7007e698290975dd60cb7b3ea452df6e"],["/tags/皇家贝蒂斯/index.html","60c641e1e309cba4ebf98095a1c51285"],["/tags/胡扯/index.html","70aa1c736cec294573176409194a7a81"],["/tags/见证专题/index.html","ba5a9d8a55b43d11daf5ce4ba97f42f2"],["/tags/足球/index.html","e5df8a0319effa7303c0065ae2c13ea1"],["/tags/转载/index.html","1830ad18c16ded080e0e3a03945e2632"],["/tags/销量/index.html","56ca5e5472688cb4998e809c6955dd0c"],["/tags/随想/index.html","fa45c01ef4a2c9cb126e0410b985770e"],["/tags/马克思主义/index.html","172b250b87ca9dab535fb0ba58dfbdd9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/npm/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
