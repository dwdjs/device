# User Agent

User Agent中文名为用户代理，是Http协议中的一部分，属于头域的组成部分，User Agent也简称UA。

它是一个特殊字符串头，是一种向访问网站提供你所使用的浏览器类型及版本、操作系统及版本、浏览器内核、等信息的标识。通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计；例如用手机访问谷歌和电脑访问是不一样的，这些是谷歌根据访问者的 UA来判断的。UA可以进行伪装。
浏览器的UA字串的标准格式：浏览器标识 (操作系统标识; 加密等级标识; 浏览器语言) 渲染引擎标识版本信息。但各个浏览器有所不同。

UA字串的标准格式：

> 浏览器标识（操作系统标识；加密等级标识；浏览器语言）渲染引擎标识 版本信息

字串说明：

1、操作系统标识

操作系统标识

**PC**

| 平台   |   标识 |    备注 | test   |
| :---: | ----- | ------- | ------ |
| FreeBSD | X11; FreeBSD (version no.) i386 |
|         | X11; FreeBSD (version no.) AMD64 |
| Linux   | X11; Linux ppc |
|         | X11; Linux ppc64 |
|         | X11; Linux i686 |
|         | X11; Linux x86_64 |
| Mac     | Macintosh; PPC Mac OS X |
|         | Macintosh; Intel Mac OS X |
| Solaris | X11; SunOS i86pc |
|         | X11; SunOS sun4u |
| Windows | Windows NT 10.0 | 对应操作系统windows 10 |
|         | Windows NT 6.2 | 对应操作系统 Windows 8.1 |
|         | Windows NT 6.2 | 对应操作系统 Windows 8 |
|         | Windows NT 6.1 | 对应操作系统 Windows 7 |
|         | Windows NT 6.0 | 对应操作系统 Windows vista |
|         | Windows NT 5.2 | 对应操作系统 Windows 2003 |
|         | Windows NT 5.1 | 对应操作系统 Windows XP |
|         | Windows NT 5.0 | 对应操作系统 Windows 2000 |
|         | Windows ME     |
|         | Windows 98     |

**Mobile**

| 平台   | 标识   | 备注    | test   |
| :---: | ----- | ------- | ------ |
| iOS   | iPhone OS 4_4_4 | iPhone |   |
|       | iPhone OS 4_3_3 | iPod |   |
|       | OS 4_3_3 | iPhone | iPad 注意近视 OS，没有 i |
| Android | Android 2.3.7 | 后面数字为版本号 | `/Android ([\d\.]+)/` |
| WebOS   | hpwOS/3.0.0 |
| SymbianOS | SymbianOS/9.4 |
| Windows Phone OS | Windows Phone OS 7.5 |
| BlackBerry | BlackBerry |


2、浏览器标识

出于兼容及推广等目的，很多浏览器的标识相同，因此浏览器标识并不能说明浏览器的真实版本，真实版本信息在 UA 字串尾部可以找到。

**Browser**

以前主要判断四大平台，现在剩下三大了 Chrome Safari Firefox（IE 逐渐废弃，Edge 和 Opera 转投 Chromium）

当然还有 N 多国内的杂牌浏览器

| 浏览器 | 标识 | 备注 | test |
| :---: | ----- | ------- | ------ |
| Chrome |  |  |
| Firefox |  |  |
| Safari |  |  |
| IE |  |  |
| Edge |  |  |
| Opera |  |  |
| UC |  |  |
| QQ |  |  |

**Runtime**

除浏览器外，还有超级 app 作为运行时，如 wechat alipay 等等，这些都是在 webview 中

| Runtime | 标识 | 备注 | test |
| :---: | ----- | ------- | ------ |
| wechat |  |  |
| alipay |  |  |
| Safari |  |  |
| IE |  |  |
| Edge |  |  |
| Opera |  |  |
| UC |  |  |
| QQ |  |  |

3、加密等级标识

- N: 表示无安全加密
- I: 表示弱安全加密
- U: 表示强安全加密

4、浏览器语言

在首选项 > 常规 > 语言中指定的语言

5、渲染引擎

显示浏览器使用的主流渲染引擎有：Gecko、WebKit、KHTML、Presto、Trident、Tasman等，格式为：渲染引擎/版本信息

6、版本信息

显示浏览器的真实版本信息，格式为：浏览器/版本信息

参考：

- https://www.jianshu.com/p/da6a44d0791e
- http://www.browserscope.org/
- https://www.npmjs.com/package/useragent
- https://github.com/ua-parser/uap-core
