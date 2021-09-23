/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b2cbc4f6e430e5158ddb015416d6307f"],["/about/index.html","de76b67ceb9444a9c22e86301fb340f5"],["/archives/1985/06/index.html","3a1761748c8b086f92cfcdfacf0678bf"],["/archives/1985/index.html","cfb5918877fc8a5f339ca489e5e2fa1f"],["/archives/2003/01/index.html","1a72f014f1a37c8bc5fe29e7fe261638"],["/archives/2003/index.html","3fee60e3535e08c340db8b1441c1f4ed"],["/archives/2011/07/index.html","012bdd2bc553ebee7c2387db755497d4"],["/archives/2011/index.html","749762fece5bb589af2ba0469521e155"],["/archives/2012/01/index.html","37d0fafb4401b127b1ffed005b4af8ae"],["/archives/2012/02/index.html","8224e8f5ae26b844ef3965167534ee66"],["/archives/2012/03/index.html","46a39fc6445a7762bb2cae281fbc4af3"],["/archives/2012/05/index.html","e4297f6bceafeb368ff5428f7fc2157d"],["/archives/2012/index.html","22606625c286bd1fabd73c25d1b33681"],["/archives/2015/01/index.html","f1b9976cbc528cf58b3816ccac72b04b"],["/archives/2015/index.html","6a32bded93eb9c23cfc73dd7c0062cb2"],["/archives/2016/02/index.html","9f03ec547075c665262e384414d5b25f"],["/archives/2016/index.html","5a27b066719d9b350260e76bc18b1af1"],["/archives/2017/04/index.html","153f695a76558d5ea5018be3910c8ea7"],["/archives/2017/08/index.html","e76db18fdefd5da3d7b43ac94f416519"],["/archives/2017/index.html","dfa35fb7a255f32a27939d04c6d78035"],["/archives/2018/10/index.html","254cb6ff214ec414fe994c332f04cefc"],["/archives/2018/index.html","7fb4f4362d978e3d036fb330ea798278"],["/archives/2019/05/index.html","360e76a6fb1bc657391b4e5c3dac3efd"],["/archives/2019/06/index.html","da19266ecd170169185346ce1993123b"],["/archives/2019/08/index.html","b69a82bf10d4c2cd2ee1fbaec013b684"],["/archives/2019/10/index.html","86c48f2b3d1e23f9ceb65f27a40bc4fd"],["/archives/2019/11/index.html","a13a24f0dc989ac18bd476d443376993"],["/archives/2019/index.html","513824046d957db7c803efda2d498813"],["/archives/2021/03/index.html","3165a1efade454e45d0dbb104524a30a"],["/archives/2021/05/index.html","4981a92b542d9a728dcb088297293580"],["/archives/2021/06/index.html","64545363eb6a061da8ff0c80037b9b22"],["/archives/2021/07/index.html","acf00e1c597c8c33c34cebe3e3b02a9b"],["/archives/2021/08/index.html","8fd0b63778d811e0557c03b2fdd6c414"],["/archives/2021/09/index.html","8f33f8000f2944b74ed63661c2173f26"],["/archives/2021/index.html","6ab56261918d44f71dc73bc2eea68310"],["/archives/index.html","dc181b08f4210f7fcc6f80561132a6d5"],["/bilibili/bangumis/index.html","29d3f4fb879c1b8a38bed75c10d162ef"],["/bilibili/cinemas/index.html","32142cc3c5cdceb37e4b2b1d11269c73"],["/blogs/1/index.html","ca57dcf8fe8236fac0adc669d72fe2c0"],["/blogs/10/index.html","14681ec19c7592a381e422e3005aeb90"],["/blogs/12/index.html","f2e4eafc700471504c4642cef37ccfac"],["/blogs/13/index.html","3604e0f873394a985a35c94fe206e514"],["/blogs/14/index.html","297ceeff5f7d55f6a847977537e50f6b"],["/blogs/16/index.html","9f0b94fb4254be6b7b3b7e252345e1a2"],["/blogs/17/index.html","a5e67c66a2b7acbb08172c3f78486996"],["/blogs/18/index.html","3bb7192bf572e45c847b5edc8b69ab67"],["/blogs/19/index.html","f8980b02dd15684e1b2b494f9b57da05"],["/blogs/2/index.html","0d01c8f5cc4961ecbe75e4070418b311"],["/blogs/21/index.html","1b5189b935f4da796546363457c3b8b9"],["/blogs/22/index.html","b9436c66e3255f469b6a3d9310fae86a"],["/blogs/23/index.html","3b463f53e8f42f893a3df5eaf53fcbe6"],["/blogs/24/index.html","7bd41fbe8695db26a9e08f6367da4ced"],["/blogs/25/index.html","56c9112b90322795edd39fa91a3acc1c"],["/blogs/26/index.html","4081fb84b85dc31816f32ccfea50e18b"],["/blogs/27/index.html","fa30215c4a0deb50d087b2d1e4c71357"],["/blogs/28/index.html","e1e89c5e02a864656e3ffa40da3baf0e"],["/blogs/29/index.html","e0c017eccff0b73115302a77a32b69f6"],["/blogs/3/index.html","5c48722da203c09e500ce12600a487d2"],["/blogs/30/index.html","eaa48374fdf451208e966857461d7dbd"],["/blogs/31/index.html","b9df05fd1df7b1943d5048b4ecd0a418"],["/blogs/32/index.html","50ea182064d7d896561d7c2754a356b4"],["/blogs/34/index.html","5ee1aa8c84d7bef04df92ea09e4eeb5a"],["/blogs/4/index.html","71dc33730ed393dbdd522ba8013d314f"],["/blogs/6/index.html","bbbdcc97b2f1de68dcca53f0713e6ddb"],["/blogs/7/index.html","eb3466e011f8821b2f49597149f7d606"],["/blogs/8/index.html","c81a42f6bac3a9432b2c47b2528c0c0e"],["/blogs/vg1/index.html","c3342d8c11540f198245807974ccb401"],["/blogs/vg10/index.html","a627cbf7133b9c56e6c463de9328d1f3"],["/blogs/vg11/index.html","8ed274401431680bccce48d7e4db9c5e"],["/blogs/vg12/index.html","01b9af95d651ee149cb85301a600b120"],["/blogs/vg14/index.html","38def1778b5a6c08c91459cf005500ad"],["/blogs/vg17/index.html","cf5100617c584deb20ed1a57143b769e"],["/blogs/vg2/index.html","572c08b052324d87f5fcadee2a7c7ddb"],["/blogs/vg22/index.html","6629109a3b94d413c43702600ed2fa34"],["/blogs/vg9/index.html","2fcc60dc9e934a79f357b2160b6901c0"],["/categories/index.html","ddb0532792269b52c1990abc6f7276e2"],["/categories/动画/index.html","e5085e7e02113a68af77b1c2708cc0a4"],["/categories/动画/历史资料/index.html","16917aa53aa5997748cd2b1b2d52f60f"],["/categories/地方资料/index.html","25a26fca3fdca40a6433f17faeda997a"],["/categories/学习笔记/index.html","134e9f24e8465343af6f2b750af0ade6"],["/categories/学术文章/index.html","51e6e0d50039d42df048ca4d97de82ab"],["/categories/学术文章/哲学/index.html","b0ae76d1572333010bb830a8de234228"],["/categories/日常随想/index.html","9b76290a15209b9cfb48bfa92bc94220"],["/categories/电子游戏/index.html","999ee469c047fcf4298bcf21d0b8665d"],["/categories/电子游戏/历史资料/index.html","e153118d6aa7c1366043ceec7f5961ab"],["/categories/电子游戏/历史资料/报刊杂志/index.html","436144cb39d045c57710074b19c0b754"],["/categories/电子游戏/历史资料/网络资料/index.html","019ec3aed86675f47f8d536a0208d3d3"],["/categories/电子游戏/数据资料/index.html","ae2f922d7a15dd381cdf7b61212bdbae"],["/categories/站点文档/index.html","7d14e7a30397a7f310c719adf835d622"],["/categories/足球运动/index.html","5465daa14f842d32bfe617a841b4334f"],["/categories/足球运动/历史资料/index.html","7d18e1ed358c67c920370d5adec4ebdb"],["/changelog/index.html","9fae388effa10c7ef0e2bbc77daf21ec"],["/css/custom_background.css","da4e4b96246d6681923d760e538b0b9e"],["/css/custom_others.css","f12fa816f658d25efbb119102bfa1b9b"],["/css/custom_volantistags.css","9481224b8a83b9b9f29cec0f93be08a6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","611d99be835ac2af17d75499c6319607"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/galleries/guilin/index.html","17856adb1981556fb0fa1779dd1760d0"],["/galleries/index.html","3ae911111dd2a429a73c1e64c301c7a3"],["/galleries/jianzheng04/index.html","0cbd054920530e25e6bd7e3e5beb8aa0"],["/galleries/jianzheng05/index.html","3725bdc5cf29494997d2c61656c81ffa"],["/galleries/jianzheng15/index.html","1966c64a5b172bc03ec214ca2bb72c7f"],["/galleries/jianzheng62/index.html","c095be053840ddd6e89153bcfa92ca46"],["/galleries/realbetis1907-1930/index.html","29c70a6b8e70f22eaf50f8f3fdcc9aa7"],["/gamedb/index.html","76d1278028bd2de0982502400d2fb126"],["/gamedb/xuanyuansword-7/credits.html","bd03a788a8e74c36cd99c6ed884c8afc"],["/gamedb/xuanyuansword-7/index.html","7f7a0a7fe3b8320efef33541e02f4e41"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","538f76967db0e4571daeec1d92e2d1e2"],["/img/android-chrome-192x192.png","951b13c2abb6f42b32e22fe6374b324e"],["/img/android-chrome-36x36.png","db3b2937b66c23eb364e1c459aa6f97f"],["/img/android-chrome-48x48.png","6695e72d437a8acc82c98261e46e6eb3"],["/img/android-chrome-512x512.png","049f19f731f9c9e589eff663f39200ed"],["/img/android-chrome-72x72.png","b45908171f623aa622407420d8c812ed"],["/img/android-chrome-96x96.png","c40803f863118a3809c96ccceaf8fd88"],["/img/apple-touch-icon.png","b8951c37946c0fac83381216c9e37a5c"],["/img/avatar.jpg","aa3c4f478e777904284de96eecc5dd46"],["/img/bg.jpg","9c1791eeed43e45791b687e0bf9bc175"],["/img/bg_pal7.jpg","9ac85383cb495443a644f3fb720a7b72"],["/img/bg_pal7_m.jpg","7c89bc230afbdb05632748e7b6c244b0"],["/img/favicon-16x16.png","6068e1b955ef2be906de101c7d68fcbe"],["/img/favicon-32x32.png","d3e57d339747060979ee356a56ba5727"],["/img/favicon_128x128.png","c56161158fabd7c74968141832ee153c"],["/img/favicon_256x256.png","a8d88614d37dfc3725f753f7796e6a1b"],["/img/favicon_512x512.png","87510f2d50038c11941bd06e021d5f86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/pwa_32x32.png","c19581786382c8e57c44209d3b089b61"],["/img/safari-pinned-tab.svg","58e8ed7a4ba60a74fe7755a080274a24"],["/index.html","460c67bdcfcb30ed7c30e0562d6b3237"],["/js/custom_randombg.js","6e953fcd0af38c7377ba61fb9d531bb8"],["/js/iconfont-national_flags.js","7bc216cd7f602a4d3004d7a8185b5211"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","082fcc9f3546a862a3703edb4072b225"],["/mblogs/index.html","57552c6b2b2de4afd23b4ec8e077d77a"],["/messageboard/index.html","baaac0f75d36c6430677eb77762983d8"],["/musics/index.html","535251e1456465139beae6559245ee57"],["/page/2/index.html","86a5de4cf1d297e7276113dfa45bc224"],["/page/3/index.html","56f715b7f1e31f7a734df6c349ff4946"],["/page/4/index.html","7e2d0c5794c7edfca6afc55ab42c83ec"],["/sw-register.js","cdd660d88c7f16c88c1c0523e2532619"],["/tags/index.html","40cb89cc0d722412fc7b316df7888e5e"],["/tags/中国哲学/index.html","952ecb13c8b28288f9b83a2c83a83b5d"],["/tags/动画/index.html","158c660acf7d38d940547090606a45e5"],["/tags/南宁/index.html","08c1d54715420f550a30941d9b6d58c9"],["/tags/历史/index.html","852daad4db3494ff46dc26cb70f81ca6"],["/tags/历史哲学/index.html","be5fb0d5869e9e20ea13d0ca57f9cd33"],["/tags/哲学/index.html","79b203e3dfeb06a5f0d7fa5d7738c8be"],["/tags/学习/index.html","b4b8a9ef520c8ab33633ef58b47694a8"],["/tags/家用电脑与游戏/index.html","e36a18b82d5cd6827403ca52e6666ece"],["/tags/开箱/index.html","e6f5588acddefccbce10d1084e7641af"],["/tags/教程/index.html","73c132d57c938e6ebf4f68b4c69137a9"],["/tags/数据/index.html","38a36363e43d11d31afbc117a888f158"],["/tags/数码/index.html","ab74e2016649dec553bfeddd49d8bb93"],["/tags/桂林/index.html","bc654fd105cc87559402df3cab8de880"],["/tags/游戏/index.html","305a36d767d40e1bcd4e3e26ef77d58c"],["/tags/王夫之/index.html","273f433e56de3ec0f6765a488e6d0604"],["/tags/电子游戏软件/index.html","419a2dd2edaaeca93d3b972abb78d664"],["/tags/皇家贝蒂斯/index.html","0adadfbdb0b6038b084ca6ae5129d51b"],["/tags/胡扯/index.html","2f663bc41909432d0acd8159b807a8b5"],["/tags/见证专题/index.html","b0882994336200011cb4699b6c6f94c0"],["/tags/足球/index.html","a71167120f55b355ab4912034ad91761"],["/tags/转载/index.html","651b98faaf987837d8c2c425bc168581"],["/tags/销量/index.html","488af9baa82cf8c908adc629d7375d3c"],["/tags/随想/index.html","2a352eb23b40939308da4d7157a168f6"],["/tags/马克思主义/index.html","073ceaab53f7ee97735f3518c5b54164"]];
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
