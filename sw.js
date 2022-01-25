/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e195eb4a93d3d46e2589a88b81b03491"],["/about/index.html","de76b67ceb9444a9c22e86301fb340f5"],["/archives/1985/06/index.html","f7d0d8ebd64960934533263cec8f6649"],["/archives/1985/index.html","bb9b5dcd08c7ec8ea6e5dd86595d11c6"],["/archives/2003/01/index.html","8c474be23a73af350fed32e4009df424"],["/archives/2003/index.html","e1ebdc7d8fa6129d924c3e66665e8ca2"],["/archives/2006/11/index.html","d652d41a26a15cf2c7c28857ed670492"],["/archives/2006/index.html","d8f7c3e9fbcd673cfb9b5ce695e90e52"],["/archives/2008/01/index.html","18b8bdabf6847b3d13f85d430ed1f4b7"],["/archives/2008/index.html","58ca1617654c26ee2eebc3923f5bc3d0"],["/archives/2011/07/index.html","e48a994846888d8f6bb1b9ba5eba822c"],["/archives/2011/index.html","9ddb0489a01f53a955ac52b43c1804aa"],["/archives/2012/01/index.html","6a0c8b213bcd084c8028f1338a3a2a4c"],["/archives/2012/02/index.html","0eb6d4c88c3a495180d24d9307add8ee"],["/archives/2012/03/index.html","4be545f4d03015d09a6b4c54d58ef40f"],["/archives/2012/05/index.html","6c77b508df796444c00c60082045adbf"],["/archives/2012/index.html","035fad153cf30d5374dda3cd595da81b"],["/archives/2015/01/index.html","42e9b276109a07664bddb2b1be05569f"],["/archives/2015/index.html","069f2b60b365384968950aa3d18b1e95"],["/archives/2016/02/index.html","8d2630ab6c0505b77cfff4dd86713333"],["/archives/2016/index.html","c4d6288af2db7e4c6bf46a38bb516d19"],["/archives/2017/04/index.html","194ebfaf2f12750b66cd7bd87a1c4cb3"],["/archives/2017/08/index.html","af042a98caa7d1843dc45454fa85a6c4"],["/archives/2017/index.html","2449b7292b476cf109afbe7a7737f4e6"],["/archives/2018/10/index.html","5587bc88d9e8d71a56100725fa26fb2f"],["/archives/2018/index.html","1f9784669abf9556eba54978cbcae43e"],["/archives/2019/05/index.html","7c8f0b8e9172decaf6e51f9d2d04d49d"],["/archives/2019/06/index.html","0b3268ca2deea2174f0c737e16c4de7f"],["/archives/2019/08/index.html","d95513360384f82f2c347a0933d9fa89"],["/archives/2019/10/index.html","4ff1d60c721bc488bb19d29374a9a3ba"],["/archives/2019/11/index.html","f3ad8eacececc7a90b57aee430004be1"],["/archives/2019/index.html","b4988c9521060df4cb8c7707e6c1d5e8"],["/archives/2020/05/index.html","02c9a6e61164ef9ed1d81b6dbb8efed6"],["/archives/2020/index.html","e2aba99be2576551c460376b7bdf7759"],["/archives/2021/03/index.html","2933322c590d30c4ef0c4356f7d844be"],["/archives/2021/05/index.html","c2f7635628b7fdc52973e0820c5071a9"],["/archives/2021/06/index.html","5b9bf4a77c5c522983a7b78f0ecdbfe4"],["/archives/2021/07/index.html","8152d3ed67044f07e5d347f11dd326ab"],["/archives/2021/08/index.html","62212f62da2735b84128e41c1b932bf7"],["/archives/2021/09/index.html","3c25d3fdfefb446921e22218f98998e7"],["/archives/2021/10/index.html","c334db8f7ab5bd54eaee32d6af0ad366"],["/archives/2021/11/index.html","ee9ac721dd7200c02fe50c101f15f38b"],["/archives/2021/index.html","177780336af0be1a06df19e043f88c55"],["/archives/2022/01/index.html","43c026040ec1603042af0399571546a5"],["/archives/2022/index.html","f808821c78aa30a8263b3c96478310b1"],["/archives/index.html","f7a9b5ec9dbd024654402bb364594c19"],["/archives/page/2/index.html","7566718229b3a3118f7df7ee950d59e6"],["/archives/page/3/index.html","4fe47d77d684074a1bb972e170ad79b6"],["/bilibili/bangumis/index.html","c815c1c1f6ba7ebcc981fec2e9672da8"],["/bilibili/cinemas/index.html","8a9afa349860dae97e980acbc480a126"],["/blogs/1/index.html","282488311893bd1c39ff989d7bb346af"],["/blogs/10/index.html","0084982237ab1be15fb45b9a706d4c6d"],["/blogs/12/index.html","7ca90c889440e5b6f19f29a1f7583b9e"],["/blogs/13/index.html","9aebc7c4f0bf7ca184e03f383750f0b1"],["/blogs/14/index.html","a97bf7b28dc1e613f7378744ce9eda2f"],["/blogs/15/index.html","d651a7f76b6ef8a25e1f3bf265045468"],["/blogs/16/index.html","460e45272bf4fdc5c9643f6bf8ff3bd2"],["/blogs/17/index.html","6476ad4b2eade02142f9a35a6840c61f"],["/blogs/18/index.html","fdee22ab0f644339273b9ed6f044de6a"],["/blogs/19/index.html","79e833f4896ef3e67337708b3f311b40"],["/blogs/2/index.html","6de7bb30b639907f9cbabeaff19fb84d"],["/blogs/21/index.html","771f984d8db0cac51165e85c45ab6176"],["/blogs/22/index.html","8ccc3a7f96c3e97ed7a244e7a6c0d220"],["/blogs/23/index.html","2443a2e188855d053815998499a47d2f"],["/blogs/24/index.html","a54917d5c3082883946c979b00e7eae7"],["/blogs/25/index.html","1ce1a2d244d711bd8b516d3477621c2f"],["/blogs/26/index.html","823969609319be744dab29798ada51b8"],["/blogs/27/index.html","ca5ff7b0d6df7d6978e515423de0eab4"],["/blogs/28/index.html","bf5b7cb8b8d8649311ec2ed525d18c8d"],["/blogs/29/index.html","f7166eb1cb9d42b31d4f5497817b4655"],["/blogs/3/index.html","7b052cc85454f3f97d905e57ffa5e80c"],["/blogs/30/index.html","7a706d03de473364f529ed8c414005c4"],["/blogs/31/index.html","d113069d90b3ad7f48b8fb09b839ae44"],["/blogs/32/index.html","327181b9321783700f1f5756469a095e"],["/blogs/34/index.html","2630e319f42460f67d421add6d68ce85"],["/blogs/35/index.html","62a2e7339e5cfc951fb03b0c9ae8858c"],["/blogs/36/index.html","4e2de7bfde2f0bc7e50b7a04167fdb32"],["/blogs/37/index.html","9aa31b8d189d036fc9804ae9098ee535"],["/blogs/38/index.html","eb1bdb3fe9c5b42564e17a5d1344b350"],["/blogs/39/index.html","e86944ade9a13c3a2d907df436091209"],["/blogs/4/index.html","39b3def554288e8d5126e1a509f96230"],["/blogs/40/index.html","2d40869f714b7a6e610b2cb4bb168667"],["/blogs/41/index.html","f16e136589fd83ae890627eb7077306d"],["/blogs/6/index.html","6ab9d5a23ba2df8f4f679831b24a1232"],["/blogs/7/index.html","3d1e2f6f53c9fffd228e1726e97bacc5"],["/blogs/8/index.html","081e10fb9da4fa653cc0e2063799b2a1"],["/blogs/donghua01/index.html","d577287e1713d0de0a0f15f23eedeb77"],["/blogs/vg1/index.html","4af4cbfcf3f657fc73d4903b8ee5c1c2"],["/blogs/vg10/index.html","db7f634f3949be8b1ddd8c8b4b8ca1d7"],["/blogs/vg11/index.html","0b4daac84ecf3bdcf091da6b46004215"],["/blogs/vg12/index.html","f20310fab8cc0ff4f72b0a69c9bebaf2"],["/blogs/vg14/index.html","92c6056291886f4a27d97332076a3483"],["/blogs/vg17/index.html","e4e4830f1d71971ca71b678802709a56"],["/blogs/vg2/index.html","e5219b892aed58adb9fc9758e11afbff"],["/blogs/vg22/index.html","8f45e87b1c70227ee3a6f7a21f2b6bb8"],["/blogs/vg9/index.html","86a621fab490c0e2318844df4871b105"],["/categories/index.html","5b2afaa131039f30adfd310c5ee8a3c3"],["/categories/动画/index.html","30d0332105ff888d3493150d41894de1"],["/categories/地方资料/index.html","bc6a9df42b154a86752dcf5a71fdd056"],["/categories/学习笔记/index.html","0170ef336cfaec74a4b9f511d49ef4fb"],["/categories/学术文章/index.html","57209b2de88f979007cd5bd58ce9b9e6"],["/categories/日常随想/index.html","cde427e700d74a7e7b0432e77c37cae5"],["/categories/电子游戏/index.html","d09a21273f90a5a7c9c2ef0c5e5f5e85"],["/categories/电子游戏/历史资料/index.html","2e45a1f891467456d12c5a76dc02f004"],["/categories/电子游戏/数据资料/index.html","077c4fa5d4ea65a0701db6291c1c19e3"],["/categories/站点文档/index.html","3c09d3e7f1b561ad90b896754f884312"],["/categories/足球运动/index.html","e474b25ca094695675db72fa125fcf15"],["/changelog/index.html","a3974c65c1310fff1b5450b705d2e864"],["/css/custom_background.css","971ce54e4b0de9bc3902ee9c3183f611"],["/css/custom_others.css","d4e8e8fa9d28103ee115296d3431d578"],["/css/custom_volantistags.css","9481224b8a83b9b9f29cec0f93be08a6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","2bfcba7432f4f8f912b28f7892a8fc5a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/galleries/guilin/index.html","af8fdbb9360201120610551f239d08a6"],["/galleries/index.html","b5174d4c4ebcf60ea2a70413395ae56e"],["/galleries/jianzheng04/index.html","0dbf565ff2a693d411a9921dce320659"],["/galleries/jianzheng05/index.html","db0f1ced6d38c803802905407b8ff707"],["/galleries/jianzheng15/index.html","8de0a70064a118ce68b0a75ae8f22526"],["/galleries/jianzheng62/index.html","7260db9b7846ac0e6833fc50ce4e180b"],["/galleries/realbetis1907-1930/index.html","d68646db7e46f5cb4efdde5db62a0c60"],["/gamedb/Dyson_Sphere_Program/articles/1.html","783ee9e07a11e94a11867ba76b9b31d5"],["/gamedb/XuanYuan_Sword-7/credits.html","bd03a788a8e74c36cd99c6ed884c8afc"],["/gamedb/XuanYuan_Sword-7/index.html","7f7a0a7fe3b8320efef33541e02f4e41"],["/gamedb/index.html","76d1278028bd2de0982502400d2fb126"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","538f76967db0e4571daeec1d92e2d1e2"],["/img/android-chrome-192x192.png","951b13c2abb6f42b32e22fe6374b324e"],["/img/android-chrome-36x36.png","db3b2937b66c23eb364e1c459aa6f97f"],["/img/android-chrome-48x48.png","6695e72d437a8acc82c98261e46e6eb3"],["/img/android-chrome-512x512.png","049f19f731f9c9e589eff663f39200ed"],["/img/android-chrome-72x72.png","b45908171f623aa622407420d8c812ed"],["/img/android-chrome-96x96.png","c40803f863118a3809c96ccceaf8fd88"],["/img/apple-touch-icon.png","b8951c37946c0fac83381216c9e37a5c"],["/img/avatar.jpg","aa3c4f478e777904284de96eecc5dd46"],["/img/bg.jpg","9c1791eeed43e45791b687e0bf9bc175"],["/img/favicon-16x16.png","6068e1b955ef2be906de101c7d68fcbe"],["/img/favicon-32x32.png","d3e57d339747060979ee356a56ba5727"],["/img/favicon_128x128.png","c56161158fabd7c74968141832ee153c"],["/img/favicon_256x256.png","a8d88614d37dfc3725f753f7796e6a1b"],["/img/favicon_512x512.png","87510f2d50038c11941bd06e021d5f86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","36118a3c48c6b1ac1035ac8e1fdcbf34"],["/img/pwa_32x32.png","c19581786382c8e57c44209d3b089b61"],["/img/safari-pinned-tab.svg","58e8ed7a4ba60a74fe7755a080274a24"],["/index.html","77942151f69c9674261d657e3304806c"],["/js/custom_randombg.js","6e953fcd0af38c7377ba61fb9d531bb8"],["/js/iconfont-national_flags.js","7bc216cd7f602a4d3004d7a8185b5211"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","ea2c1fc2f2225d07f6adf0b8be2976d5"],["/mblogs/index.html","ae6c75bcb41c5d9cc64006f15a25823e"],["/messageboard/index.html","5830aefcefcb0962853a4e415e6ff1c3"],["/musics/index.html","40d7e4ecb48894bd0b2914d9d5d40dd9"],["/page/2/index.html","9f978ae60c3e4170d031b51f6b31f7f5"],["/page/3/index.html","f8c226cbbda72b26ef878a05e869f564"],["/page/4/index.html","13f3bceba0c527ca7966663c7fb35c4e"],["/page/5/index.html","cbafd68dc8c1dd3e27ef2071595796f8"],["/page/6/index.html","625eeb6b02b41524dfb8e026532197ce"],["/sw-register.js","0c1eb02132a6b3c9de0d9def27870032"],["/tags/3A/index.html","03fd92ccfabc53d4837948e01afa5b83"],["/tags/index.html","0c6f76934748dce8773d4ff42ba0e805"],["/tags/中国哲学/index.html","52167a64972f1f3fc20f7338d3095788"],["/tags/仙剑奇侠传/index.html","afd33ea4135fc7824a167815bd065e86"],["/tags/元宇宙/index.html","ca9d770ac2561f2621421342f649880e"],["/tags/动画/index.html","3ea3c1a40e693e726979efb210ac3cff"],["/tags/南宁/index.html","9e327a93c7478f30bb6d69e8a896544b"],["/tags/历史/index.html","f8f9149ee6db8c402de8e88a2d259d50"],["/tags/历史哲学/index.html","0005be5c30a2d1cbd6481fb63cb52a2e"],["/tags/哲学/index.html","a501acf00ff19a492f20a0158ce1abef"],["/tags/学习/index.html","aff7030d9e498dda33cdc93410416e1b"],["/tags/家用电脑与游戏/index.html","29123ec0bb653f0d14730b5fff3fcf77"],["/tags/年度总结/index.html","7c7c50eb94eab51d12e50c695180c286"],["/tags/开箱/index.html","a5010ddf8c2e4c8169adc9664bf5858f"],["/tags/投资/index.html","050d02e11815798c12e68740d2547368"],["/tags/教程/index.html","4a4827ef29a79b7c93bf0a45d41de62d"],["/tags/数据/index.html","b3ded00853df8e9429a45658ce5d8a9d"],["/tags/数码/index.html","75c08ef2e70e8c3dafa2fd7c64d5251e"],["/tags/桂林/index.html","cc1463544e1471bd8a20247e278a18aa"],["/tags/游戏/index.html","91203bcdc37d6fbef5c41aaa7cbc0e86"],["/tags/王夫之/index.html","f4cc73aec37d61eb38d7bda2d0bfdced"],["/tags/电子游戏软件/index.html","81fc7f0bfbbc3e4082726f2bd36dab26"],["/tags/皇家贝蒂斯/index.html","23017f7c75251b51f126d49644a35dff"],["/tags/胡扯/index.html","6e7893588defd2c69914b7c8cdf1ecdb"],["/tags/西方马克思主义/index.html","59c72c9f34991806404ed1253be49233"],["/tags/见证专题/index.html","c49afe4d6416451466eb2ca8939bac6a"],["/tags/足球/index.html","625c83b84b97cff09abb9b73ad95a13b"],["/tags/转载/index.html","e0b858d2105a3192cef8ab62088a1101"],["/tags/铁路/index.html","ab81e6b44628fc1d95910d14f43c6525"],["/tags/销量/index.html","d6715bca593f821974e3e903db9f0a32"],["/tags/随想/index.html","2cd52b76a9458e80204be683390d00ff"],["/tags/马克思主义/index.html","1dec2ead95c1b6be3142e5dc2581f136"]];
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
