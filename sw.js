/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","49786b57634a81519e8e92e5f3a92ac5"],["/about/index.html","de76b67ceb9444a9c22e86301fb340f5"],["/archives/1985/06/index.html","e49ba254ec748da2057f2faadfaa6992"],["/archives/1985/index.html","2ee72fe407bf32461a356a77c9474317"],["/archives/2003/01/index.html","9e5f94136c6e0f1fce610c03e2bb09cc"],["/archives/2003/index.html","008857faff90d757c4d22f78bc6b5101"],["/archives/2008/01/index.html","30076e945686377935074564319b6317"],["/archives/2008/index.html","2d85aa6a3ad7bccf6aa2df0a76a0fe97"],["/archives/2011/07/index.html","fb02290f86918cf743b4b15597fdb6d0"],["/archives/2011/index.html","2dda893ef2e5af76708fd8a9391e0335"],["/archives/2012/01/index.html","2a7ef1368c6de5538b21e4c1e8a171a2"],["/archives/2012/02/index.html","578e489d3b65488f4fd0d3057736acae"],["/archives/2012/03/index.html","1436691197833e40725ad92ef528601a"],["/archives/2012/05/index.html","197f1174aa4dc1a52d574acad10bef86"],["/archives/2012/index.html","4fe8aa475106e94b2479fa5ce3a42294"],["/archives/2015/01/index.html","595502385dbc6f0809c6e4edb14632a1"],["/archives/2015/index.html","cf35448adbb62bacc01a00541df8d382"],["/archives/2016/02/index.html","8ede01ea065a5ff41329da427aa299b6"],["/archives/2016/index.html","759ede3777f945562689aa0fc0b0f603"],["/archives/2017/04/index.html","2bbf15cc34d6cbf9388fcb74decde2eb"],["/archives/2017/08/index.html","dca43bbd14c95a2b73766c089f305d96"],["/archives/2017/index.html","f1970d177b200eb94130679cf10dbc25"],["/archives/2018/10/index.html","3c348eb642adcd84c8d2a86354fd39b4"],["/archives/2018/index.html","265d0bdd2f695a492a0deafd50ae2f43"],["/archives/2019/05/index.html","119e5ff83c7ecd98bce3ffd52be57a87"],["/archives/2019/06/index.html","34a074dca285fe3d3321cf5abf378e0e"],["/archives/2019/08/index.html","260e98da46cc62e55e49920632d38bc3"],["/archives/2019/10/index.html","89e4aaca92750a7f956a783cb102df0a"],["/archives/2019/11/index.html","f3b25c59ed39b3a379567e47d56e1c0e"],["/archives/2019/index.html","cca40076609297b37f7ca3cedaf268a1"],["/archives/2021/03/index.html","29ab219c8a6516e8dd2470b705dbd817"],["/archives/2021/05/index.html","33291d1090371257a573af3ca733be12"],["/archives/2021/06/index.html","f2b09b1a9d659b77d41a81fb5d42d1cb"],["/archives/2021/07/index.html","aa6b6cc3c5921c5034654c6f9f6f8729"],["/archives/2021/08/index.html","17d83beedb8fe70ee20b4e7429df72fb"],["/archives/2021/09/index.html","d7c8d39f9bee83bcdde72c39afb36017"],["/archives/2021/10/index.html","d4c69358054e8bda5ee056bd3221ee26"],["/archives/2021/11/index.html","99ec8cf61b8c0a76c4f8c85109e88850"],["/archives/2021/index.html","b365dfcd7efa473aef1e29fe6656241a"],["/archives/index.html","a5cc1e8c8a55c4e78199cf87f8fbc7b8"],["/archives/page/2/index.html","d654b0eac966d44d55ad7080f882d5e7"],["/archives/page/3/index.html","886f92abf0d31e762cd573a8afd53f90"],["/bilibili/bangumis/index.html","3ffe60ff58de1cc8d7c4ee3f2cf90c48"],["/bilibili/cinemas/index.html","1eb61c8b7fbc43d01d96213271ecbf4d"],["/blogs/1/index.html","b5fd182d0c0992ea5e6af232b9e1542e"],["/blogs/10/index.html","112097f01da6ab263142d1d04351debe"],["/blogs/12/index.html","dc5f960c83c05ac1792125927d4a35c0"],["/blogs/13/index.html","bd0346c8a468aea53a78ef27d209ef3b"],["/blogs/14/index.html","706023d2e0b682baf6a00e58d5f20370"],["/blogs/15/index.html","069ae4ed759b8cf53acf0c5c5c5e1c50"],["/blogs/16/index.html","b06547887f18313b27d8e4c7d61ad28c"],["/blogs/17/index.html","c27b487bbe6db992a6f36aadf6c83057"],["/blogs/18/index.html","4bd19cb4b8249194c862e66a394202f2"],["/blogs/19/index.html","2e96fef996bd504a977cfd003d496103"],["/blogs/2/index.html","0f3a194dc1a5634c47b74f8abdab3f2c"],["/blogs/21/index.html","953f1b786efeedbe62a0be57777670e4"],["/blogs/22/index.html","434c4d88b66d96f88dfab8d725d12d8d"],["/blogs/23/index.html","a6d39d09b4ba92ee7a6421b0285a7318"],["/blogs/24/index.html","90aae8bf7774e08ee144fbdb189ebf27"],["/blogs/25/index.html","97764ecb48710460580241b6e3655aa3"],["/blogs/26/index.html","07e37fc662df0cc6779ca9150ce01661"],["/blogs/27/index.html","bf4ec2afc8d7430e7d78aad55bff98b6"],["/blogs/28/index.html","6296dc126c6f9c1e34617fe3c1162215"],["/blogs/29/index.html","23012bb240de42fc842512632ccf0d6c"],["/blogs/3/index.html","7244191e99effebbe6813597d0b7005e"],["/blogs/30/index.html","61faf54923f3cdb77be32ffacc55925c"],["/blogs/31/index.html","3b134faed2783ca2038951154338b1b7"],["/blogs/32/index.html","039b5b45d1479df5cb15f017970f132b"],["/blogs/34/index.html","ca18bd69c7f65fc24437c27c4db3b40b"],["/blogs/35/index.html","996bd06ab2ac9795d969da15ef0010e6"],["/blogs/36/index.html","41bd255892ae85d35c1260620f7b277c"],["/blogs/37/index.html","cab284490d49b0fe8ec2ceb6e536ddd0"],["/blogs/38/index.html","96ae97dff163ed2e244d1d6f2b99840e"],["/blogs/39/index.html","da49b17fef006f75ade72170a408b83d"],["/blogs/4/index.html","e67ddbd3c8dcbefc7d3a2813b1114c05"],["/blogs/6/index.html","e0aa069fbb78f9ff7c89b1a8584eef4d"],["/blogs/7/index.html","aeac64d228d8e227430b932c27c93fef"],["/blogs/8/index.html","4db3777a81b51f0989b96597deca5c28"],["/blogs/vg1/index.html","7ce0dd7cb4ce9794c9be025a9679a564"],["/blogs/vg10/index.html","4d388ac07160b3e58cfc523a09c42081"],["/blogs/vg11/index.html","262bb631ceae64fb3f6b269166308bd7"],["/blogs/vg12/index.html","c344beca66bf48de876d8aadfaf3d15d"],["/blogs/vg14/index.html","8dea907955ed3a2155ef7472a1a57c21"],["/blogs/vg17/index.html","f17a209e8724097831ebd93e78fb9f02"],["/blogs/vg2/index.html","af50fc4c73fda55f3f8d37b423a4d9c2"],["/blogs/vg22/index.html","ef42ddc2c1d2f540efa81ab0ca04ae8e"],["/blogs/vg9/index.html","53f0400a05fa66abdd9448a83b305ba6"],["/categories/index.html","f11de5b645260d901209fea705cb67d8"],["/categories/动画/index.html","cc00b7168a5b77d5c28d593b9806adb8"],["/categories/动画/历史资料/index.html","f8939e40e52f712a79c820462cf86437"],["/categories/地方资料/index.html","5d7fabe77c7c2089e15007e54309a56d"],["/categories/学习笔记/index.html","b18d3c12c13fd1c84cfc2567e6375e93"],["/categories/学术文章/index.html","3a40b5c773928bbc486687e87b27ae88"],["/categories/学术文章/哲学/index.html","c2451122754744892a69f7e0082c8c7f"],["/categories/日常随想/index.html","e0e250241bf578c605c7dd2abc2f37f7"],["/categories/电子游戏/index.html","b419feeca8b4f667999c431c3825cb4d"],["/categories/电子游戏/历史资料/index.html","ccaba6e0b4a43b73fae676832e0a0b3c"],["/categories/电子游戏/历史资料/报刊杂志/index.html","cdc6d875821c7bcdce3bf4070bc78331"],["/categories/电子游戏/历史资料/网络资料/index.html","521d9d465432173ba36f119be402723f"],["/categories/电子游戏/数据资料/index.html","21ec42a8552bfe03f2789837cb228d2a"],["/categories/站点文档/index.html","413350d5b05dc3eba9c738be1b3380e9"],["/categories/足球运动/index.html","e0927016f0ed2b292901e3bb15513476"],["/categories/足球运动/历史资料/index.html","a77a1b70e9d29a2ee51b9f6758b70278"],["/changelog/index.html","bbb0581ce374d913184aa831cc6f69de"],["/css/custom_background.css","971ce54e4b0de9bc3902ee9c3183f611"],["/css/custom_others.css","f12fa816f658d25efbb119102bfa1b9b"],["/css/custom_volantistags.css","9481224b8a83b9b9f29cec0f93be08a6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","2bfcba7432f4f8f912b28f7892a8fc5a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/galleries/guilin/index.html","14fe21fd5d5d91f9a2141ceabaa27bf5"],["/galleries/index.html","afdc02ef357afc3de1c5e04bdd0f94bc"],["/galleries/jianzheng04/index.html","337991db785aa125591f469d7f0bd741"],["/galleries/jianzheng05/index.html","fdae7253402bf8d1853d007a9c5ef41e"],["/galleries/jianzheng15/index.html","4eaf2b0c622e221a0cfcf63306795ce1"],["/galleries/jianzheng62/index.html","8a7c76220845788faff933092226a03a"],["/galleries/realbetis1907-1930/index.html","6605ee343991cc893d013a7bb01c0362"],["/gamedb/Dyson_Sphere_Program/articles/1.html","783ee9e07a11e94a11867ba76b9b31d5"],["/gamedb/XuanYuan_Sword-7/credits.html","bd03a788a8e74c36cd99c6ed884c8afc"],["/gamedb/XuanYuan_Sword-7/index.html","7f7a0a7fe3b8320efef33541e02f4e41"],["/gamedb/index.html","76d1278028bd2de0982502400d2fb126"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","538f76967db0e4571daeec1d92e2d1e2"],["/img/android-chrome-192x192.png","951b13c2abb6f42b32e22fe6374b324e"],["/img/android-chrome-36x36.png","db3b2937b66c23eb364e1c459aa6f97f"],["/img/android-chrome-48x48.png","6695e72d437a8acc82c98261e46e6eb3"],["/img/android-chrome-512x512.png","049f19f731f9c9e589eff663f39200ed"],["/img/android-chrome-72x72.png","b45908171f623aa622407420d8c812ed"],["/img/android-chrome-96x96.png","c40803f863118a3809c96ccceaf8fd88"],["/img/apple-touch-icon.png","b8951c37946c0fac83381216c9e37a5c"],["/img/avatar.jpg","aa3c4f478e777904284de96eecc5dd46"],["/img/bg.jpg","9c1791eeed43e45791b687e0bf9bc175"],["/img/favicon-16x16.png","6068e1b955ef2be906de101c7d68fcbe"],["/img/favicon-32x32.png","d3e57d339747060979ee356a56ba5727"],["/img/favicon_128x128.png","c56161158fabd7c74968141832ee153c"],["/img/favicon_256x256.png","a8d88614d37dfc3725f753f7796e6a1b"],["/img/favicon_512x512.png","87510f2d50038c11941bd06e021d5f86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","36118a3c48c6b1ac1035ac8e1fdcbf34"],["/img/pwa_32x32.png","c19581786382c8e57c44209d3b089b61"],["/img/safari-pinned-tab.svg","58e8ed7a4ba60a74fe7755a080274a24"],["/index.html","622a74cf18b60ef55f3658a58b85782b"],["/js/custom_randombg.js","6e953fcd0af38c7377ba61fb9d531bb8"],["/js/iconfont-national_flags.js","7bc216cd7f602a4d3004d7a8185b5211"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","6acb53cc50294d61eed682cbe76b9d86"],["/mblogs/index.html","230f2b56827446f1186b3b8c17fc1cb6"],["/messageboard/index.html","0f5efa5f6c99909f21a71b415cfebd23"],["/musics/index.html","b88d40248ee90839e3a5bd4a8886c122"],["/page/2/index.html","c637e94d2925bcf16c4dbb6aa380a519"],["/page/3/index.html","fac98e0fb325ae21d68bcb47cd258b49"],["/page/4/index.html","552abc315890af6abbd0e81a0397efb3"],["/page/5/index.html","0b9ca89a59d17ac00f9740e74228d607"],["/sw-register.js","16f97f14e6dc19a42808393a3365609d"],["/tags/3A/index.html","51723b936d5132e06bd084476f0a5745"],["/tags/index.html","4878d6ca52fe21e208c61d2ddfda5632"],["/tags/中国哲学/index.html","095d42b95621c887281282a1bcee6015"],["/tags/仙剑奇侠传/index.html","2f633495b8002277aabedb259b6c3a71"],["/tags/元宇宙/index.html","90947eae2a90a4b9d42e1b4081e9b4bb"],["/tags/动画/index.html","cd791e0c43c83f673ed4159522a053ba"],["/tags/南宁/index.html","c5e48c5e756906afa8ee74544decdea8"],["/tags/历史/index.html","a77331e1463646f039dde580bf04b822"],["/tags/历史哲学/index.html","23615086db89bd84f418cd8995638c21"],["/tags/哲学/index.html","fac7b7444d45831bb80f38c16978d151"],["/tags/学习/index.html","f6f3ca665153818074cef19eefd0d10d"],["/tags/家用电脑与游戏/index.html","180979900e54f7f1f018f6ee97912aa1"],["/tags/开箱/index.html","4d6fc0ceb6fd21436c8001de3e68f354"],["/tags/投资/index.html","81848a09da7e02fdc3b90b449362f1a5"],["/tags/教程/index.html","fb25f16f288f36fb966f1302c71af2e3"],["/tags/数据/index.html","8837cfbfc3083dfd677361b6dfdb16e6"],["/tags/数码/index.html","8d86adeae1332a7f77ddbef3f95e8b0b"],["/tags/桂林/index.html","3cf42cb92b2a6b06039cc578906ba1c8"],["/tags/游戏/index.html","68aefeca2a037280954b14004f202c0c"],["/tags/王夫之/index.html","5f9716ef4b9f04eac2c46f7256241e02"],["/tags/电子游戏软件/index.html","83fe94ac2728b150e8f0dc2e3a60f839"],["/tags/皇家贝蒂斯/index.html","cccfa075b9780a8b5ae1f032c01c49ae"],["/tags/胡扯/index.html","7fdc7a9aad63bcfe721728947f06a6b9"],["/tags/西方马克思主义/index.html","8e0b067df09ba1f11f1a90872bdd01b8"],["/tags/见证专题/index.html","47b084537256f86d1c695933312be71c"],["/tags/足球/index.html","19c878625d2669bf2d8d642a52cff97a"],["/tags/转载/index.html","ce9538f555b4e70c078685ba558a5425"],["/tags/销量/index.html","9f3c2ec19266965cd9daede5465ac048"],["/tags/随想/index.html","d194520843f121f1b1dbda4f8b2def38"],["/tags/马克思主义/index.html","bee862e8e0b2273f732ffdad59663ccf"]];
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
