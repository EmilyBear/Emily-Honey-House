---
title: Butterfly 主题外挂标签的语法手册
categories:
  - [站点文档]
cover: false
top_img: false
comments: false
date: 2021-05-20 02:12:43
updated:
abbrlink: 3
tags:
description: 记录了 Butterfly 主题中外挂标签（Tag Plugins）的使用方法。因原文地址分散，复刻不便，故进行简单整合。
toc:
toc_number:
katex:
noticeOutdate: true
copyright_author: Jerry, Akilar, EmilyBear
copyright_info: 文章全部内容遵循 CC BY-NC-SA 4.0 许可协议。
---
{% note warning flat %}外挂标签是Hexo独有的功能，既不是标准的Markdown格式，也不能在缺少支持的情况下转换为HTML语言。

以下的写法，**只适用于Butterfly主题**，用在其它主题上除了会报错外，不会有任何效果。{% endnote %}

**本文主要内容来自 [Jerry 的 Butterfly 主题文档](https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89) 和[Akilar 的 Tag Plugins Plus 介绍](https://akilar.top/posts/615e2dec/#79550af260a1ca32176b188b403b9fc1)，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可协议。**

# 配置教程

## 设置 Butterfly 主题

修改 `主题配置文件（_config.volantis.yml）`。

```YAML
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

## 可选：使用 Tag Plugins Plus 插件

1. 下载资源文件
   
   {% ghcard Akilarlxh/Tag_Plugins, theme=solarized-light %}

2. 将下载的`Tag_Plugins.zip`解压到主题所在文件夹进行覆盖，提示重复则选择替换。
3. 修改 `主题配置文件（_config.volantis.yml）`的`inject`配置项，添加CDN依赖项。由于issues写入`timeline`和`site-card`标签要用到jquery，请务必根据注释指示的版本决定是否添加。

```YAML
inject:
  head:
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css"  media="defer" onload="this.media='all'">  #动画标签anima的依赖
  bottom:
    - <script defer src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
    # 自butterfly_v3.4.0+开始，主题基本实现去jquery化，需要自己添加引用，请读者根据版本自行决定是否添加这行引用。
    - <script defer src="https://cdn.jsdelivr.net/npm/hexo-theme-volantis@latest/source/js/issues.min.js"></script>
    #数据集合标签issues的依赖
```

# 语法手册

{% note info flat %}目前分栏（Tabs）标签暂未适配深色模式，在深色模式下阅读可能会带来不适。{% endnote %}

## Note 提示标签

### Butterfly主题原生

**方法一**

```markdown
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

| 名称    | 用法                                                         |
| ------- | ------------------------------------------------------------ |
| class   | 【可选】标识，不同的标识有不同的配色<br>（ default / primary / success / info / warning / danger ） |
| no-icon | 【可选】不显示 icon                                          |
| style   | 【可选】可以覆盖配置中的 style <br>（simple/modern/flat/disabled） |

{% tabs 样式 %}

<!-- tab simple -->

```markdown
{% note simple %}
默认 note 提示标签
{% endnote %}

{% note default simple %}
default note 提示标签
{% endnote %}

{% note primary simple %}
primary note 提示标签
{% endnote %}

{% note success simple %}
success note 提示标签
{% endnote %}

{% note info simple %}
info note 提示标签
{% endnote %}

{% note warning simple %}
warning note 提示标签
{% endnote %}

{% note danger simple %}
danger note 提示标签
{% endnote %}
```

{% note %}
默认 note 提示标签
{% endnote %}

{% note default %}
default note 提示标签
{% endnote %}

{% note primary %}
primary note 提示标签
{% endnote %}

{% note success %}
success note 提示标签
{% endnote %}

{% note info %}
info note 提示标签
{% endnote %}

{% note warning %}
warning note 提示标签
{% endnote %}

{% note danger %}
danger note 提示标签
{% endnote %}

<!-- endtab -->

<!-- tab modern -->

```markdown
{% note modern %}
默认 note 提示标签
{% endnote %}

{% note default modern %}
default note 提示标签
{% endnote %}

{% note primary modern %}
primary note 提示标签
{% endnote %}

{% note success modern %}
success note 提示标签
{% endnote %}

{% note info modern %}
info note 提示标签
{% endnote %}

{% note warning modern %}
warning note 提示标签
{% endnote %}

{% note danger modern %}
danger note 提示标签
{% endnote %}
```

{% note modern %}
默认 note 提示标签
{% endnote %}

{% note default modern %}
default note 提示标签
{% endnote %}

{% note primary modern %}
primary note 提示标签
{% endnote %}

{% note success modern %}
success note 提示标签
{% endnote %}

{% note info modern %}
info note 提示标签
{% endnote %}

{% note warning modern %}
warning note 提示标签
{% endnote %}

{% note danger modern %}
danger note 提示标签
{% endnote %}

<!-- endtab -->

<!-- tab flat -->

```markdown
{% note flat %}
默认 note 提示标签
{% endnote %}

{% note default flat %}
default note 提示标签
{% endnote %}

{% note primary flat %}
primary note 提示标签
{% endnote %}

{% note success flat %}
success note 提示标签
{% endnote %}

{% note info flat %}
info note 提示标签
{% endnote %}

{% note warning flat %}
warning note 提示标签
{% endnote %}

{% note danger flat %}
danger note 提示标签
{% endnote %}
```
{% note flat %}
默认 note 提示标签
{% endnote %}

{% note default flat %}
default note 提示标签
{% endnote %}

{% note primary flat %}
primary note 提示标签
{% endnote %}

{% note success flat %}
success note 提示标签
{% endnote %}

{% note info flat %}
info note 提示标签
{% endnote %}

{% note warning flat %}
warning note 提示标签
{% endnote %}

{% note danger flat %}
danger note 提示标签
{% endnote %}

<!-- endtab -->

<!-- tab disabled -->

```markdown
{% note disabled %}
默认 note 提示标签
{% endnote %}

{% note default disabled %}
default note 提示标签
{% endnote %}

{% note primary disabled %}
primary note 提示标签
{% endnote %}

{% note success disabled %}
success note 提示标签
{% endnote %}

{% note info disabled %}
info note 提示标签
{% endnote %}

{% note warning disabled %}
warning note 提示标签
{% endnote %}

{% note danger disabled %}
danger note 提示标签
{% endnote %}
```

{% note disabled %}
默认 note 提示标签
{% endnote %}

{% note default disabled %}
default note 提示标签
{% endnote %}

{% note primary disabled %}
primary note 提示标签
{% endnote %}

{% note success disabled %}
success note 提示标签
{% endnote %}

{% note info disabled %}
info note 提示标签
{% endnote %}

{% note warning disabled %}
warning note 提示标签
{% endnote %}

{% note danger disabled %}
danger note 提示标签
{% endnote %}

<!-- endtab -->

<!-- tab no-icon -->

```markdown
{% note no-icon %}
默认 note 提示标签
{% endnote %}

{% note default no-icon %}
default note 提示标签
{% endnote %}

{% note primary no-icon %}
primary note 提示标签
{% endnote %}

{% note success no-icon %}
success note 提示标签
{% endnote %}

{% note info no-icon %}
info note 提示标签
{% endnote %}

{% note warning no-icon %}
warning note 提示标签
{% endnote %}

{% note danger no-icon %}
danger note 提示标签
{% endnote %}
```

{% note no-icon %}
默认 note 提示标签
{% endnote %}

{% note default no-icon %}
default note 提示标签
{% endnote %}

{% note primary no-icon %}
primary note 提示标签
{% endnote %}

{% note success no-icon %}
success note 提示标签
{% endnote %}

{% note info no-icon %}
info note 提示标签
{% endnote %}

{% note warning no-icon %}
warning note 提示标签
{% endnote %}

{% note danger no-icon %}
danger note 提示标签
{% endnote %}

<!-- endtab -->

{% endtabs %}

**方法二**

> 支持 3.2.0 以上版本

语法：

```markdown
{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

参数：

| 名称  | 用法                                                         |
| ----- | ------------------------------------------------------------ |
| color | 【可选】颜色 <br>(default / blue / pink / red / purple / orange / green) |
| icon  | 【可选】可配置自定义 icon (只支持 fontawesome 图标, 也可以配置 no-icon ) |
| style | 【可选】可以覆盖配置中的 style<br/>（simple/modern/flat/disabled） |

{% tabs 样式 %}

示例：

<!-- tab simple -->

```markdown
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}
```

{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}

<!-- endtab -->

<!-- tab modern -->

```markdown
{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最讨厌的浏览器
{% endnote %}
```

{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最讨厌的浏览器
{% endnote %}

<!-- endtab -->

<!-- tab flat -->

```markdown
{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最讨厌的浏览器
{% endnote %}
```

{% note 'fab fa-cc-visa' flat%}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat%}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat%}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat %}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最讨厌的浏览器
{% endnote %}

<!-- endtab -->

<!-- tab disabled -->

```markdown
{% note 'fab fa-cc-visa' disabled %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' disabled %}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
前端最讨厌的浏览器
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' disabled %}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
前端最讨厌的浏览器
{% endnote %}

<!-- endtab -->

<!-- tab no-icon -->

```markdown
{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021年快到了....
{% endnote %}
{% note pink no-icon %}
小心开车 安全至上
{% endnote %}
{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石头布
{% endnote %}
{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}
```

{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021年快到了....
{% endnote %}
{% note pink no-icon %}
小心开车 安全至上
{% endnote %}
{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石头布
{% endnote %}
{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}

<!-- endtab -->

{% endtabs %}

### Tag Plugins Plus 插件

**方法一**

```Markdown

{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}

```

**方法二**

```Markdown

{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}

```

`class`	【可选】标识，不同的标识有不同的配色（ default / primary / success / info / warning / danger ）
`no-icon`	【可选】不显示 icon
`style`	【可选】可以覆盖配置中的 style
（modern/simple/flat/disabled）

**示例**

{% tabs 样式 %}
<!-- tab modern -->

```Markdown

{% note modern %}默认 提示块标签{% endnote %}

{% note default modern %}default 提示块标签{% endnote %}

{% note primary modern %}primary 提示块标签{% endnote %}

{% note success modern %}success 提示块标签{% endnote %}

{% note info modern %}info 提示块标签{% endnote %}

{% note warning modern %}warning 提示块标签{% endnote %}

{% note danger modern %}danger 提示块标签{% endnote %}

```

{% note modern %}默认 提示块标签{% endnote %}

{% note default modern %}default 提示块标签{% endnote %}

{% note primary modern %}primary 提示块标签{% endnote %}

{% note success modern %}success 提示块标签{% endnote %}

{% note info modern %}info 提示块标签{% endnote %}

{% note warning modern %}warning 提示块标签{% endnote %}

{% note danger modern %}danger 提示块标签{% endnote %}

<!-- endtab -->

<!-- tab simple样式 -->

```Markdown

{% note simple %}默认 提示块标签{% endnote %}

{% note default simple %}default 提示块标签{% endnote %}

{% note primary simple %}primary 提示块标签{% endnote %}

{% note success simple %}success 提示块标签{% endnote %}

{% note info simple %}info 提示块标签{% endnote %}

{% note warning simple %}warning 提示块标签{% endnote %}

{% note danger simple %}danger 提示块标签{% endnote %}

```

{% note simple %}默认 提示块标签{% endnote %}

{% note default simple %}default 提示块标签{% endnote %}

{% note primary simple %}primary 提示块标签{% endnote %}

{% note success simple %}success 提示块标签{% endnote %}

{% note info simple %}info 提示块标签{% endnote %}

{% note warning simple %}warning 提示块标签{% endnote %}

{% note danger simple %}danger 提示块标签{% endnote %}

<!-- endtab -->

<!-- tab flat样式 -->

```Markdown

{% note flat %}默认 提示块标签{% endnote %}

{% note default flat %}default 提示块标签{% endnote %}

{% note primary flat %}primary 提示块标签{% endnote %}

{% note success flat %}success 提示块标签{% endnote %}

{% note info flat %}info 提示块标签{% endnote %}

{% note warning flat %}warning 提示块标签{% endnote %}

{% note danger flat %}danger 提示块标签{% endnote %}

```

{% note flat %}默认 提示块标签{% endnote %}

{% note default flat %}default 提示块标签{% endnote %}

{% note primary flat %}primary 提示块标签{% endnote %}

{% note success flat %}success 提示块标签{% endnote %}

{% note info flat %}info 提示块标签{% endnote %}

{% note warning flat %}warning 提示块标签{% endnote %}

{% note danger flat %}danger 提示块标签{% endnote %}

<!-- endtab -->

{% endtabs %}

## Gallery 相册和图集

> 相册标签在主题2.0.0以上提供，合集标签在主题2.2.0以上提供。

{% tabs 主题原生 %}

<!-- tab 相册 -->

Gallery相册标签可以展示一系列图片，并自动根据图片长度进行排版。而图集则是将组图作为一个合集展示。

**语法**

```markdown
{% gallery %}
markdown 图片格式
{% endgallery %}
```

**示例**

```markdown
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
```

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

<!-- endtab -->

<!-- tab 图集 -->

**语法**

```
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

**参数**

- name：图库名字
- description：图库描述
- link：连接到对应相册的地址
- img-url：图库封面的地址

**例如：**

```
<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

<!-- endtab -->

{% endtabs %}

## tag-hide 隐藏内容

{% note warning %}

2.2.0以上提供

请注意，tag-hide内的外挂标签content内都不建议有h1 - h6 等标题。因为Toc会把隐藏内容标题也显示出来，而且当滚动屏幕时，如果隐藏内容没有显示出来，会导致Toc的滚动出现异常。

{% endnote %}

可以把一些文字、内容隐藏起来，并提供按钮让用户点击显示。可以使用这个外挂标签。

{% tabs tag-hide %}

<!-- tab Inline -->

`inline` 在文本里面添加按钮隐藏内容，只限文字

( content不能包含英文逗号，可用 `&sbquo;` )

```markdown
{% hideInline content,display,bg,color %}
```

- content: 文本内容

- display: 按钮显示的文字(可选)

- bg: 按钮的背景颜色(可选)

- color: 按钮文字的颜色(可选)

**示例**

```markdown
哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人? {% hideInline 闪 %}
```

哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人? {% hideInline 闪 %}

<!-- endtab -->

<!-- tab Block -->
`block`独立的block隐藏内容，可以隐藏很多内容，包括图片，代码块等等

( display 不能包含英文逗号，可用`&sbquo;`)

```markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}
```

- content: 文本内容
- display: 按钮显示的文字(可选)
- bg: 按钮的背景颜色(可选)
- color: 按钮文字的颜色(可选)

**示例**

```mark
查看答案
{% hideBlock 查看答案 %}
傻子，怎么可能有答案
{% endhideBlock %}
```

查看答案
{% hideBlock 查看答案 %}
傻子，怎么可能有答案
{% endhideBlock %}

<!-- endtab -->

<!-- tab Toggle -->
>主题 2.3.0以上支持

如果你需要展示的内容太多，可以把它隐藏在收缩框里，需要时再把它展开。

( display 不能包含英文逗号，可用`&sbquo;`)

```markdown
{% hideToggle display,bg,color %}
content
{% endhideToggle %}
```

**示例**

```markdown
{% hideToggle Butterfly安装方法 %}
在站点根目录里

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安装比较新的dev分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}
```

{% hideToggle Butterfly安装方法 %}
在站点根目录里

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安装比较新的dev分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}

<!-- endtab -->
{% endtabs %}

## Tabs 分栏标签

>移植于next主题

**使用方法**

**语法**

```markdown
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}

**参数**

Unique name   : **必填项。**Unique name of tabs block tag without comma.
                将在 # id 中作为每个 Tab 标签的前缀。如果名称中有空格，对于 generate # id，所有空格都将被破折号替换。
                Only for current url of post/page must be unique!
[index]       : 默认展开的 Tab 数量。可选项。
                不填默认为“`1`”。
                如果该项为`-1`，所有标签都默认不展开（见示例 2）。
[Tab caption] : 当前 Tab 栏目的标题。可选项。
                如果没有指定标题，则使用 Unique name 加从1开始的数字作为栏目的标题。
                如果没有指定标题，但指定了图标，栏目标题将为空。
[@icon]       : FontAwesome icon 名称 (full-name, look like 'fas fa-font')。可选项。
                Can be specified with or without space; e.g. 'Tab caption @icon' similar to 'Tab caption@icon'.
```

**示例 1 - 默认**

```markdown
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

**示例 2 - index值为`-1`**

```markdown
{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

**示例 3 - 自定义Tab名 + 只有icon + icon和Tab名**

```markdown
{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}
```
{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}

## Mermaid

{% note warning %}
Mermaid标签不允许嵌套于一些隐藏属性的标签外挂，例如: tag-hide内的标签外挂和tabs标签外挂，这会导致mermaid图标无法正常显示，使用时请留意。

**请不要压缩html代码，不然会导致mermaid显示异常**

{% endnote %}

使用Mermaid标签可以绘制Flowchart（流程图）、Sequence diagram（时序图 ）、Class Diagram（类别图）、State Diagram（状态图）、Gantt（甘特图）和Pie Chart（圆形图），具体可以查看[mermaid文档](https://mermaid-js.github.io/mermaid/#/)

修改 `主题配置文件`

```yaml
mermaid:
  enable: true
  # built-in themes: default/forest/dark/neutral
  theme: default
```

写法：

```markdown
{% mermaid %}
内容
{% endmermaid %}
```

例如：

```markdown
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-mermaid.png)


## Button 按钮标签

> 主题3.0以上适用

使用方法：

```markdown
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

[url]         : 链接
[text]        : 按钮文字
[icon]        : [可选] 图标
[color]       : [可选] 按钮背景颜色(默认style时）
                      按钮字体和边框颜色(outline时)
                      default/blue/pink/red/purple/orange/green
[style]       : [可选] 按钮样式 默认实心
                      outline/留空
[layout]      : [可选] 按钮布局 默认为line
                      block/留空
[position]    : [可选] 按钮位置 前提是设置了layout为block 默认为左边
                      center/right/留空
[size]        : [可选] 按钮大小
                      larger/留空
```
> 示例

```markdown
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
```

This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}

```markdown
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}
```

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}

**more than one button in center**

```markdown
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}
```

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}

```markdown
<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>
```

<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>

## inlineImage 行内图片

主题中的图片都是默认以`块级元素`显示，如果你想以`内联元素`显示，可以使用这个标签外挂。

```markdown
{% inlineImg [src] [height] %}

[src]      :    图片链接
[height]   ：   图片高度限制【可选】
```

**示例：**

```markdown
你看我長得漂亮不

![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)

我覺得很漂亮 {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}
```

![image-20210319001204045](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/hexo-theme-butterfly-docs-inlineimg.png)


## Label 文字边框

> 主题3.7.5 及以上版本适用

高亮所需的文字

```markdown
{% label text color %}
```

| 参数  | 解释                                                         |
| ----- | ------------------------------------------------------------ |
| text  | 文字                                                         |
| color | 【可选】背景颜色，默认为 `default`<br />default/blue/pink/red/purple/orange/green |

> 示例

```markdown
臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。
宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。
```

臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。

宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。


## 行内文本样式
