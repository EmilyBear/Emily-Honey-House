---
title: Hello World
date: 2016-02-16 22:07:08
top: 2
abbrlink: 1
categories:
- [站点文档]
---
Hi there! 欢迎来到EmilyBear的小站！这是一个在Github托管的站点，现在的站点由Hexo框架搭建而成。这个小站用于记录一些自己的随想，也会在合法范围内转载一些我认为有价值的信息。

<!-- more -->

# 小站的历史

　　虽然现在站点的底部写着`© 2016-2021`，但实际上目前在用的这个站点只是2021年4月底建立的，建站和编辑主题花了我三天的业余时间，荒废多年的HTML基础语言几乎没有发挥作用。

　　为什么HTML会荒废多年呢？因为用不上，初次接触HTML的动机就是搭建一个自己的小站，在2016年的寒假我成功建立起了自己的站点~~（实际上代码几乎是移植别人成形的站点）~~。然而由于当初建站的想法只是三分钟热度，免费域名到期时也不想再续了，于是之后几年这个Github Pages都是处于404状态（不过Github账号也不是同一个，但使用者是我就对了），直到2020年自己的热情又燃起来了，不过由于自己懒和课务繁忙等原因，一直拖到了次年4月才开始动工。

　　这次建站也是花费了我极大的精力，以至于小站刚刚初具规模的时候就因为五一假期开始懒惰起来，又被我搁置了，直到现在`2021-05-14 22:03:35 `我才开始写多年来第一篇博文，对了这篇文章还是我的Markdown语法学习实践。

　　“新生”的小站之所以选择[Hexo框架](https://hexo.io/zh-cn/ "点击链接跳转到Hexo网站")，老实说这是上个月的事情了，我都忘记是为啥了，可能是冲着丰富的主题来吧。在我写这篇文章时小站采用了[Next主题](https://theme-next.iissnan.com/ "点击链接跳转到Next主题的网站")的Mist风格，这应该很明显吧，毕竟我没有进行太大改动。嗯，本来想记录一下小站“复活”的艰辛历程，但对于上个月的事情，一方面我记不清了，另一方面往事不堪回首，就不回首了。接下来就是一些技术方面的备忘了，我不是程序员，也不懂这方面的东西，所以我会写得很通俗甚至会有些不准确。

# Hexo

## 准备

　　Hexo的建立需要系统具备可以运行它的环境，这点看文档就行了。

　　文档地址：<https://hexo.io/zh-cn/docs/>

## 建站

　　文档记述得比较清楚，理解难度不大，直接照做就是了。

## 部署

　　在参照文档完成主题（Theme）基本配置后（更详细的主题配置以后再说），此时一个完整的站点已经在本地搭建好了，现在就是要把它放到网络上。这个过程叫部署，文档提供了多种部署方式，我直接使用了Git的“一键部署”，省事。部署事前的准备可以看文档。

　　由于我使用的是Github Page，所以在开始部署前，应当额外建立一个名为**Hexo**的分支（Branch），此前的Master分支（部署后分支名称会变成Main）存储着框架代码，而新分支则负责站点的代码，并在此提交写作。建立分支可以在之后避免不少麻烦。

　　之后是通过ssh Key让我的Github仓库与本地站点建立联系，并便于后续更新。步骤如下：

### SSH key配置

1.**检查本机是否有SSH key设置**

　　如果是使用普通安装的方式安装了Git，在资源管理器的右键菜单会有`Git Bash Here`选项。单击它会有新窗口，之后输入命令行都是在这个窗口中进行，不再多说。

　　在这个窗口输入：`$ cd ~/.ssh` 或 `cd .ssh`

　　如果没有则提示： `No such file or directory`

　　如果有，可以去ssh key的本地存储文件夹看看，位于用户文件夹下的`.ssh`子文件夹中。如果不知道这个SSH key，就删除整个文件夹，重新创建一个。如果知道的话可以直接跳过2.3.4.步骤直接测试SSH key。

2.**创建密钥，生成SSH key**

　　Git Bash输入`ssh-keygen -t rsa -C "输入你的邮箱"`创建密钥。

　　当生成ssh key时，

	Enter file in which to save the key (/c/Users/diyvc/.ssh/id_rsa):   #不填直接回车
	Enter passphrase (empty for no passphrase):   #输入密码（可以为空）
	Enter same passphrase again:   #再次确认密码（可以为空）

![成功截图](https://img-blog.csdn.net/20161213132309623)

　　	生成如上图所示标识生成成功了，存放在用户文件夹下。

![文件夹截图](https://img-blog.csdn.net/20161213132558903)

3.**将SSH key添加到Github中**

　　登录GitHub，在账号设置的Settings→SSH and GPG keys→New SSH key，输入一个title和Key。Key在`.ssh`的`id_rsa.pub`里面，打开它，将密钥复制进去就可以了。

4.**配置账户**

　　Git Bash输入

	$ git config --global user.name “your_username”  #设置用户名
	$ git config --global user.email “your_registered_github_Email”  #设置邮箱地址(用注册Github的邮箱)


5.**测试SSH key是否设置成功**

　　Git Bash输入`$ ssh -T git@github.com`，一般会出现

```
The authenticity of host 'github.com (192.30.253.112)' can't be established.
RSA key fingerprint is SHA256:nThbg6*******************ARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? yes #确认你是否继续连接，输入yes
Warning: Permanently added 'github.com,192.30.253.112' (RSA) to the list of known hosts.
Enter passphrase for key '/c/Users/xxxx_000/.ssh/id_rsa':  #生成ssh kye是密码为空则无此项，若设置有密码则有此项且，输入生成ssh key时设置的密码即可。
```

6.**将本地项目通过SSH提交到GitHub上**

　　打开Github存储着Github Pages的仓库，进入配置页： Settings -- SSH and GPG keys，添加本地生成的ssh秘钥，选择New SSH key，复制`id_rsa.pub`的密钥到Key中。

　　再次测试一下，在存放着本地站点的文件夹中Git Bash，输入`ssh -T git@github.com `，出现类似Successfully或者类似字样，代表成功了，这样就可以将本地站点文件推送到远方的Github仓库中。

　　现在在本地站点文件夹打开Git Bash，输入`hexo deploy`，将本地站点推送到Github仓库。这样就部署完成了。

## 写作

　　在本地站点文件夹Git Bash，执行下列命令来创建一篇新文章或者新的页面。

```powershell
$ hexo new [layout] <title>
```

　　`layout` 是可选参数，用以指定文章类型，若无指定则默认由配置文件中的 `default_layout` 选项决定。

　　`title` 是必填参数，用以指定文章标题，如果参数值中含有空格，则需要使用双引号包围。

参见文档: [Writing](https://hexo.io/docs/writing.html)

## 更新文件

### 本地调试（启动本地服务器）

　　本地调试可以使用`hexo server`命令，以启动本地服务器，一般可以简写为`hexo s`。

```powershell
$ hexo server
```

参见文档: [Server](https://hexo.io/docs/server.html)

### 清理缓存文件

```powershell
$ hexo clean
```

　　还可简写为`hexo cl`。


### 生成静态文件

　　生成静态文件即生成更新后的本地网站文件以用于推送至网络，在生成时会比对文件的 SHA1 checksum，只有变动的文件才会写入。使用以下命令：

```powershell
$ hexo generate
```

　　还可简写为`hexo g`。

参见文档: [Generating](https://hexo.io/docs/generating.html)

### 部署更新

```powershell
$ hexo deploy
```

　　还可简写为`hexo d`。

参见文档: [Deployment](https://hexo.io/docs/one-command-deployment.html)

# 主题（Theme）

## 选择主题

　　[Hexo的主题页面](https://hexo.io/themes/)收录丰富的主题供选择。其中[Next主题](https://theme-next.iissnan.com/ "点击链接跳转到Next主题的网站")是其中最受欢迎的，站点在写下这篇文章时使用的正是这个主题。

## 安装主题

　　直接参考[文档](https://theme-next.iissnan.com/getting-started.html)。

　　特别提醒，如果你和我一样对Git完全不熟的话，还是选择“下载稳定版本”为好，当初“克隆最新版本”给我带来了不少麻烦，比如无法推送主题文件。

## 调试主题并部署

　　直接参考[文档](https://theme-next.iissnan.com/getting-started.html)。

## Next主题进阶配置和美化

　　日后再说，研究四史去了。