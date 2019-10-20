# device

设备环境侦测

思考：怎么才能更好的组合使用，又良好支持扩展？

分析使用场景

- 需要支持常用设备侦测
  - iphone, android, chrome, safari, wechat, alipay, webview
- 需要支持动态扩展设备侦测的规则
  - device
  - app 环境/运行时
  - browser
  - terminal
- 方便灵活配置是否集成以上常用功能

## 设计

最终期望输出

```js
device: {
  // 系统平台及类型
  os: {
    family: '', // 派系 Mac Windows Linux Android iPhone
    platform, // 硬件平台 MacIntel Windows 10 Linux iPhone iPad iPod Android BlackBerry Kindle ...
    name: os, // 操作系统 OSX iOS Android Windows Linux  ...
    version, // 版本信息
    type: '', // 设备类型 mobile 手机 tablet 平板 desktop 桌面
    desc: `${os} ${version}`,
    // orientation: '', // 横屏 or 竖屏 landscape portrait
    // manufacturer: '', // Apple Google
  }

  // 浏览器（即使在宿主中，也一定是有浏览器特征的，因为H5必须在 webview 中运行）
  browser: {
    family: '', // 派系阵营 四大派
    name: browser, // chrome safari firefox edge ie uc qq
    version: '',
    kernel: '', // 内核/js引擎 trident webKit gecko blink presto
    render: '', // 渲染引擎
    desc: '',
  }

  // 运行时/容器/宿主(属性可能和浏览器重合)，包含 app 和小程序
  runtime: {
    family: '', // wechat/alipay/browser/miniapp/selfapp/qq
    name: runtime, // wxapp aliapp wechat alipay hsq msf safari
    version: '',
    desc: `${family} ${runtime}`,
  },

  // 最终终端(待定)
  terminal: {
    name: terminal, // miniapp? webview? 业务终端?
    version: '',
    desc: '',
  },
}

// 支持调试 可修改输出结果数据
debug

// 最后输出，把最常用的提高一层(支持自定义或归类特定属性，如 systemInfo)
// iphone android wechat alipay webkit
// hybrid iqg hsq msf dingtalk wxapp aliapp
```

## 使用

```js
import { device } from '@dwdjs/device'

device.config(options => {
  options.runtime = true
})

// 此处可以引入 debug，调试变更当前 ua

export {
  device: device.parse(),
}
```

## 其他

### 关于内核

- Trident：（三叉戟）IE11之前使用的内核
- EdgeHTML：已放弃，改用Chromium内核
- Gecko内核：（壁虎）Firefox
- Webkit内核：（引擎）Safari 曾经的Chrome
- Presto内核：（说变就变）Opera 13年之后弃用，加入谷歌阵营
- Blink内核：（闪亮）Chrome28+ Opera15+ V8

