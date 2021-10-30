/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","110115c1338a89cb04311f1fcfb71fa1"],["/about/index.html","de76b67ceb9444a9c22e86301fb340f5"],["/archives/1985/06/index.html","471e37cc3f87a372c19c1580eca05f6c"],["/archives/1985/index.html","884fc20476b5a32f13eb12ebf92e97c5"],["/archives/2003/01/index.html","ac6ad7548281b2d462eb336ee980e623"],["/archives/2003/index.html","621db8f9372229cf5ce0a970d97e310c"],["/archives/2008/01/index.html","dad2fdaac1ee9a1019d6210129f85f91"],["/archives/2008/index.html","f95e5babb8973fe205e5e4ba43b5359f"],["/archives/2011/07/index.html","bf59cd3da90aee34829c94935a35e25c"],["/archives/2011/index.html","39a974af728c8cf2e6776a67c32fc706"],["/archives/2012/01/index.html","80f7647fbd9fdc9b8999350bfde1363e"],["/archives/2012/02/index.html","501c096584bc610975d29a0f318cf4d1"],["/archives/2012/03/index.html","5ad796b7b826d9c4615faa83e32aecf6"],["/archives/2012/05/index.html","0a08189c8552e2ddd1a335e98b9ae8db"],["/archives/2012/index.html","6ed73f06af4e304e3d06f64d818f656b"],["/archives/2015/01/index.html","063f615d83f75ecd8dded2166c1e236a"],["/archives/2015/index.html","3ce400112f57c24905aa665edcc59f79"],["/archives/2016/02/index.html","241fe280eff399aec022cdf02f7844dc"],["/archives/2016/index.html","837d902ebd8343546cb79c89dcac84d6"],["/archives/2017/04/index.html","7f88cecf13281fc43e2aaa8b591c2f13"],["/archives/2017/08/index.html","c15425a8d20be08509b014498148fca4"],["/archives/2017/index.html","034dade7ca6323ca3e5221cb1a251ff1"],["/archives/2018/10/index.html","4a3d0baa165774a17bf66416d0b87d70"],["/archives/2018/index.html","431807569bab24525ae3f260299591b5"],["/archives/2019/05/index.html","2c10b15f4712318f0e32f5dcce9842e1"],["/archives/2019/06/index.html","b448bd6f884c1c7ebe79ac774d5f727c"],["/archives/2019/08/index.html","2bd426d90c0b872423fbcedb215ba337"],["/archives/2019/10/index.html","b707b9c5bb74c8e3432303d4d5a972f7"],["/archives/2019/11/index.html","46fca6c4e6e6c13abfb087f597daa3c9"],["/archives/2019/index.html","66776fd745e3b097b92f25c02c1be7e6"],["/archives/2021/03/index.html","69432a9181392b380f3ee9cc010939b1"],["/archives/2021/05/index.html","75651d4b518ab6a54043e73b1acf4c54"],["/archives/2021/06/index.html","fd10ca9736b7636ee38d3cfd8679b5db"],["/archives/2021/07/index.html","fb155470cc7b3a4f5525bd1534b3b19a"],["/archives/2021/08/index.html","6c195c41abf18ebb34b05004dccbf693"],["/archives/2021/09/index.html","2ea6c88d46cf386d2bfac46146358435"],["/archives/2021/10/index.html","104756824c55e59e4ee19ee39c5afa23"],["/archives/2021/index.html","9d3fe4b4fca92acb4667dee084aa855c"],["/archives/index.html","e295a21e32268611546561ff061f8b5a"],["/archives/page/2/index.html","2cad09b10f6e22d8b17eb1ec962cf96b"],["/bilibili/bangumis/index.html","43b502d73c9b755b44765f6fb71cee34"],["/bilibili/cinemas/index.html","6ad830ddc4c6eacd2e2ce7a80885543d"],["/blogs/1/index.html","2aeb55c4998e1e7c53646cbe4b46ff90"],["/blogs/10/index.html","db94dde14e9314651b1594fc559e3889"],["/blogs/12/index.html","02f0ba73baab4a9eb8f5c0fe92dc6729"],["/blogs/13/index.html","b569a2fd4031f55d2d421f126c1a50ca"],["/blogs/14/index.html","f223f48aeb6f88439014a7f29dedf074"],["/blogs/15/index.html","1cb794e27488356b0bab6b0ac066a5ea"],["/blogs/16/index.html","6b14bd66fdd58bcf08a95267400c9c62"],["/blogs/17/index.html","5368480bd58800d0228d0a0de421cfe3"],["/blogs/18/index.html","ae7e383d9fc1523377be005571da6bf6"],["/blogs/19/index.html","69244598b45fe4fc6ff36e99e2a32bbd"],["/blogs/2/index.html","246aadddf2aaa6d756a127b5c496940d"],["/blogs/21/index.html","2bb92bceaec20cedd14a4825e6ca290b"],["/blogs/22/index.html","b6e174b8d96c04639c1ca802e15ca9d5"],["/blogs/23/index.html","cd2cfda7a21b6fe8e9f04285742c62a2"],["/blogs/24/index.html","d18ac5d63b0baf4c3886397cc9761011"],["/blogs/25/index.html","90a9a15d27787bc387dd65b2d231a79c"],["/blogs/26/index.html","a01ccde273d9a713125d78676b9ff03e"],["/blogs/27/index.html","16c7a22f3735853581815ffb42087fb2"],["/blogs/28/index.html","be220ab780eeb6f97cdb202fd58c9d51"],["/blogs/29/index.html","f2eeb16feb70e94886cf81307f84997c"],["/blogs/3/index.html","72975a29c21c04d533163b569386f1c4"],["/blogs/30/index.html","4d5d67ff7e05daf4bc6924702d22c350"],["/blogs/31/index.html","cb24aafc70053ace6d03d38d5082edd4"],["/blogs/32/index.html","58640cdf47bf24dfaaba461f8f7068e2"],["/blogs/34/index.html","606aacbc2f5e7f9015f47dc9c12e4903"],["/blogs/35/index.html","133687adb43bf52dfa50e820c41f2616"],["/blogs/36/index.html","ead425924de671d66ff279e487dbeb92"],["/blogs/4/index.html","71790e54a591040e78341e3b2a9838d3"],["/blogs/6/index.html","166d8bb141cd4c5270d31f6b1828bded"],["/blogs/7/index.html","31fb39def372a46a733aebcb8d9733d5"],["/blogs/8/index.html","f9143c1d2e3cb03ca27cd93c6e15088f"],["/blogs/vg1/index.html","2243db072b004fffa3a4944805907672"],["/blogs/vg10/index.html","efa34948f54289c412a769a3b7a9f0d2"],["/blogs/vg11/index.html","2b39f3d945f7caa8ebb76951bb1fdb17"],["/blogs/vg12/index.html","10a8e3570158c82a87b41b5490d75081"],["/blogs/vg14/index.html","bf76f38d2cec5d4d8e85657ecb884a87"],["/blogs/vg17/index.html","d00cd837a5aab368b30312fc0f75ea4d"],["/blogs/vg2/index.html","532bff3315bb2b5613d8a2807e11d011"],["/blogs/vg22/index.html","0aca54eca85aedb45b307924568fb494"],["/blogs/vg9/index.html","a9cf0b63055241a431bda1883b5a0ca3"],["/categories/index.html","1b93ac85e62ece2427e8fd74f2960ff3"],["/categories/动画/index.html","7f8a630d18fa209439d70d195ba7466b"],["/categories/动画/历史资料/index.html","f911dbd607dd8e5abdc3c2fd105235c3"],["/categories/地方资料/index.html","8784a49032b99764c3345da81f153506"],["/categories/学习笔记/index.html","3f2fc709230435250690fd1100901107"],["/categories/学术文章/index.html","f91828e6ea9f912e05fbb15ba38af848"],["/categories/学术文章/哲学/index.html","799d4e61c215b803b9f1640d05283f61"],["/categories/日常随想/index.html","d93e806788af3703ec8f81f8207c91e2"],["/categories/电子游戏/index.html","4386c2f47961d5029c55fe860a26a9f4"],["/categories/电子游戏/历史资料/index.html","17bbda50df3401303d8f339ca162442f"],["/categories/电子游戏/历史资料/报刊杂志/index.html","fb3c6ce9945c6ebfcc00a88d73217e75"],["/categories/电子游戏/历史资料/网络资料/index.html","e20c744098a853597002a40bb80c4597"],["/categories/电子游戏/数据资料/index.html","41b8fae24317c258cacc16e0d616aa0c"],["/categories/站点文档/index.html","c9106288bcf6424795b931710cca3505"],["/categories/足球运动/index.html","4f430d3e6c1d774645d6e1234a5a5a2f"],["/categories/足球运动/历史资料/index.html","dace624a5bf91701970fb5471a6de5aa"],["/changelog/index.html","8036dbb227cec01095960d7a91defa9a"],["/css/custom_background.css","da4e4b96246d6681923d760e538b0b9e"],["/css/custom_others.css","f12fa816f658d25efbb119102bfa1b9b"],["/css/custom_volantistags.css","9481224b8a83b9b9f29cec0f93be08a6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5ada1544d4e8fdbb9d3d30450f68e9c2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/galleries/guilin/index.html","d71372e2fbcfb35400a6cf1a176c947c"],["/galleries/index.html","42f3e22be6df9a30f2b53e8152c516fe"],["/galleries/jianzheng04/index.html","c69ba871975ef5fc002a133ff7c47be2"],["/galleries/jianzheng05/index.html","7e6cd36c56bfcec098fec5209ad48ae3"],["/galleries/jianzheng15/index.html","2b4c538f8f9d6961d40a27526f3d2dad"],["/galleries/jianzheng62/index.html","2face0ea63eb3afe797ae6de6a8c597f"],["/galleries/realbetis1907-1930/index.html","7b2dcad625537f3cddd5d2fcc1df2283"],["/gamedb/Dyson_Sphere_Program/articles/1.html","783ee9e07a11e94a11867ba76b9b31d5"],["/gamedb/XuanYuan_Sword-7/credits.html","bd03a788a8e74c36cd99c6ed884c8afc"],["/gamedb/XuanYuan_Sword-7/index.html","7f7a0a7fe3b8320efef33541e02f4e41"],["/gamedb/index.html","76d1278028bd2de0982502400d2fb126"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","538f76967db0e4571daeec1d92e2d1e2"],["/img/android-chrome-192x192.png","951b13c2abb6f42b32e22fe6374b324e"],["/img/android-chrome-36x36.png","db3b2937b66c23eb364e1c459aa6f97f"],["/img/android-chrome-48x48.png","6695e72d437a8acc82c98261e46e6eb3"],["/img/android-chrome-512x512.png","049f19f731f9c9e589eff663f39200ed"],["/img/android-chrome-72x72.png","b45908171f623aa622407420d8c812ed"],["/img/android-chrome-96x96.png","c40803f863118a3809c96ccceaf8fd88"],["/img/apple-touch-icon.png","b8951c37946c0fac83381216c9e37a5c"],["/img/avatar.jpg","aa3c4f478e777904284de96eecc5dd46"],["/img/bg.jpg","9c1791eeed43e45791b687e0bf9bc175"],["/img/bg_pal7.jpg","9ac85383cb495443a644f3fb720a7b72"],["/img/bg_pal7_m.jpg","7c89bc230afbdb05632748e7b6c244b0"],["/img/favicon-16x16.png","6068e1b955ef2be906de101c7d68fcbe"],["/img/favicon-32x32.png","d3e57d339747060979ee356a56ba5727"],["/img/favicon_128x128.png","c56161158fabd7c74968141832ee153c"],["/img/favicon_256x256.png","a8d88614d37dfc3725f753f7796e6a1b"],["/img/favicon_512x512.png","87510f2d50038c11941bd06e021d5f86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","36118a3c48c6b1ac1035ac8e1fdcbf34"],["/img/pwa_32x32.png","c19581786382c8e57c44209d3b089b61"],["/img/safari-pinned-tab.svg","58e8ed7a4ba60a74fe7755a080274a24"],["/index.html","c59d37b0d134d2464e06c4e8e4e95c4b"],["/js/custom_randombg.js","6e953fcd0af38c7377ba61fb9d531bb8"],["/js/iconfont-national_flags.js","7bc216cd7f602a4d3004d7a8185b5211"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","4a35907cddc6f61b0c5d6ade23979f74"],["/mblogs/index.html","236b6ea4e9eeade653c6a73482731ab1"],["/messageboard/index.html","94ee905e622d04afd8f3cfec835fe8c7"],["/musics/index.html","16cfc0f11f3687433a955bd8ba254d7f"],["/page/2/index.html","3f33035a6a0bb4f698e9c88a6d8d856d"],["/page/3/index.html","db52cbedb9553027759a349535203a56"],["/page/4/index.html","01094da3ecde636e1a7e88c6cb9002ea"],["/page/5/index.html","883f0f154083ebe420a4c6fd32a2859a"],["/sw-register.js","c436addb463013c39b7a9562f23afba1"],["/tags/3A/index.html","9dc58af17241c07e45728340ca85d09b"],["/tags/index.html","6471c77f0f836e1021c25aa448142872"],["/tags/中国哲学/index.html","f6f2288b1fd677c57362fa3207b4109b"],["/tags/动画/index.html","757b9a535c5dc98a9caa8ff4f6c623fc"],["/tags/南宁/index.html","46c9c14dfaa6edd02bf137f6424b77d0"],["/tags/历史/index.html","70f38f716790531346ccd9e7f0f2d18d"],["/tags/历史哲学/index.html","2f0be2f7d9ce4ac9b86dadcda0d3afba"],["/tags/哲学/index.html","8ac4b979bed07b1a411a4f460dee544b"],["/tags/学习/index.html","593f9c4007a1527056b5e1f6d3b60ee6"],["/tags/家用电脑与游戏/index.html","5b16bfbf4155698344e5e3217a000932"],["/tags/开箱/index.html","dad5907426f5613f9e67b2471ed1d44f"],["/tags/投资/index.html","d3f291cda3798a968cad86e40465c479"],["/tags/教程/index.html","0b89cae87b2fb541b994dfddf872b7db"],["/tags/数据/index.html","336ff222c94adcd29a220aa3ca8415ce"],["/tags/数码/index.html","f92f560e1c11729e553c3def82d13be1"],["/tags/桂林/index.html","2e6db9ace445f64a3d48e7c34143491d"],["/tags/游戏/index.html","1eb2dbe3068c4df13052ac327dc6f873"],["/tags/王夫之/index.html","8da15b8fe0a54f9dfba686175aeb19b2"],["/tags/电子游戏软件/index.html","05da86f12747490119411249d307a40b"],["/tags/皇家贝蒂斯/index.html","1a5ea1912c1a16b64891366a9a229106"],["/tags/胡扯/index.html","640ec786316e1198558cc680411411dd"],["/tags/见证专题/index.html","c85d48aaeeb75f13f8efd32efb31c0e6"],["/tags/足球/index.html","ec9f06d3188635774e9b48d215d58ff2"],["/tags/转载/index.html","81b9a39dc14e2999e28e432b5f5e7d14"],["/tags/销量/index.html","2ce9b4b3054f42a814c57297db313695"],["/tags/随想/index.html","4dd02ded74a34f8e28ec672aac42cc84"],["/tags/马克思主义/index.html","0581f27b908e64c7bba8f8857a6eb984"]];
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
