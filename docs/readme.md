# User Agent

User Agent中文名为用户代理，是Http协议中的一部分，属于头域的组成部分，User Agent也简称UA。

它是一个特殊字符串头，是一种向访问网站提供你所使用的浏览器类型及版本、操作系统及版本、浏览器内核、等信息的标识。通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计；例如用手机访问谷歌和电脑访问是不一样的，这些是谷歌根据访问者的 UA来判断的。UA可以进行伪装。
浏览器的UA字串的标准格式：浏览器标识 (操作系统标识; 加密等级标识; 浏览器语言) 渲染引擎标识版本信息。但各个浏览器有所不同。

UA字串的标准格式：

> 浏览器标识（操作系统标识；加密等级标识；浏览器语言）渲染引擎标识 版本信息
> Company/Version (Platform; Encryption; OS Version; Language; Device) Rendering Engine/Version (Rendering Details) Product/Version Platform/Version Extensions

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
|         | (X11; Linux x86_64) |
| Mac     | Macintosh; PPC Mac OS X |
|         | (Macintosh; Intel Mac OS X 10_13_3) |
| Solaris | X11; SunOS i86pc |
|         | X11; SunOS sun4u |
| Windows | Windows NT 10.0 | 对应操作系统 windows 10(Windows10 9926 TP版本开始) |
|         | Windows NT 6.4 | 对应操作系统 windows 10 |
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
| iOS | iPhone OS 11_2_6 like Mac OS X | iPhone |   |
|     | iPhone OS 4_3_3 like Mac OS X | iPod |
|     | OS 4_3_3 like Mac OS X | iPad, 注意是 OS，没有 iPhone 标识 |
| Android | Android 2.3.7; | 后面数字为版本号 | `/Android ([\d\.]+)/` |
| WebOS   | hpwOS/3.0.0 |
| SymbianOS | SymbianOS/9.4; | Nokia N97 |
| Windows Phone OS | Windows Phone OS 7.5; |
| BlackBerry | BlackBerry 9800; |

2、浏览器标识

出于兼容及推广等目的，很多浏览器的标识相同，因此浏览器标识并不能说明浏览器的真实版本，真实版本信息在 UA 字串尾部可以找到。

**Browser**

以前主要判断四大平台，现在剩下三大了 Chrome Safari Firefox（IE 逐渐废弃，Edge 和 Opera 转投 Chromium）

当然还有 N 多国内的杂牌浏览器（这些在移动端都是菜，暂时忽略）

| 浏览器 | 标识 | 备注 | test |
| :---: | ----- | ------- | ------ |
| IE | MSIE 9.0; |  |
| Chrome | Chrome/65.0.3325.181 |  |
| Firefox | Firefox/64.0 |  |
| Edge | Edge/16.16299 | IE11 |
| Opera | Opera/9.80 (...) Presto/2.12.388 Version/12.16 |  | Opera 12.16
| UC |  |  |
| QQ | QQBrowser/10.2.1852.400 |  |
| Safari | Safari/605.1.15 |  |

**Runtime**

除浏览器外，还有超级 app 作为运行时，如 wechat alipay 等等，这些都是在 webview 中

| Runtime | 标识 | 备注 | test |
| :---: | ----- | ------- | ------ |
| qq | QQ/7.5.5.426 |  |
| wechat | MicroMessenger/6.6.5 |  |
| alipay | AliApp(AP/10.1.18.449) |  |
| dingtalk | AliApp(DingTalk/4.3.2) |  |
| taobao | AliApp(TB/7.6.0) | |

其他

- `AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36`
- `Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Titan)`
- `Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0`
- `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.2 Safari/605.1.15`
- `Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16`
- `Opera/9.80 (Macintosh; Intel Mac OS X 10.14.1) Presto/2.12.388 Version/12.16`

3、加密等级标识

- N: 表示无安全加密 N(没加密)
- I: 表示弱安全加密 I(40 位加密)
- U: 表示强安全加密 U(128 位加密)

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
