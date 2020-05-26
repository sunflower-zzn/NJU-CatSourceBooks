# 前端-colorUI入门

前言：colorUI是一套封装合理，简单易用的UI模板
<a name="RC6vB"></a>
### 下载启动
首先下载源码，并将 `/demo` 文件解压到你的根目录下，并重命名为你的项目名称<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1590074910221-3181eb03-d165-468a-8284-eb9cafb8b8ea.png#align=left&display=inline&height=165&margin=%5Bobject%20Object%5D&name=image.png&originHeight=165&originWidth=653&size=22617&status=done&style=none&width=653)![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1590074949792-cb0a9eca-d81e-4a64-8078-11a7ea19fade.png#align=left&display=inline&height=249&margin=%5Bobject%20Object%5D&name=image.png&originHeight=249&originWidth=720&size=34479&status=done&style=none&width=720)<br />由于项目设置，我并没有把demo文件解压到根目录，而是深一层目录，这里只需要在 `project.config.json` 文件中设置：（规定源文件的根目录位置，相对位置）
```json
"miniprogramRoot": "catcollaction/"
```
<a name="KugBF"></a>
### 项目结构
demo的项目结构如下<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1590075152425-4a4fd640-c4a2-484b-b7b4-b5c50128d793.png#align=left&display=inline&height=182&margin=%5Bobject%20Object%5D&name=image.png&originHeight=182&originWidth=207&size=8899&status=done&style=none&width=207)
<a name="eDYkT"></a>
#### app.js
> 获取系统参数并写入全局参数

```javascript
//app.js
App({
  onLaunch: function() {
    if (wx.cloud) {  //云函数
      wx.cloud.init({
        traceUser: true
      })
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
		if (capsule) {
		 	this.globalData.Custom = capsule;
			this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		} else {
			this.globalData.CustomBar = e.statusBarHeight + 50;
		}
      }
    })
  }
})
```
<a name="gIDJy"></a>
#### app.json

- pages：规定了所有的页面索引
- window：用于设置小程序的状态栏、导航条、标题、窗口背景色。
  - navigationStyle：上方导航栏样式，custom表示自定义导航栏，仅保留右上角胶囊按钮
- usingComponents：自定义组件位置

原生导航栏展示：<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1590078139595-96b8e539-6e8c-4649-87a8-fa4f9a340c1e.png#align=left&display=inline&height=37&margin=%5Bobject%20Object%5D&name=image.png&originHeight=37&originWidth=312&size=2768&status=done&style=none&width=312)<br />自定义导航栏展示：（仅保留了右侧胶囊按钮）<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1590078104507-9be3ea77-c4a1-40f4-80d4-66cc66cec5eb.png#align=left&display=inline&height=42&margin=%5Bobject%20Object%5D&name=image.png&originHeight=42&originWidth=314&size=14664&status=done&style=none&width=314)
<a name="RqJQX"></a>
### 底部tab固定
> 底部tab没有直接写在app.json里边，而是写在了index.wxml里边

把点击tab(元素，组件，扩展，关于)4个页面对应的首页，分别通过组件(下方代码)的方式引入。通过`NavChange`方法监听自定义的tab点击事件，动态获取点击元素上的data-cur属性从而来判断加载哪一个tab。<br />

```json
{
  "usingComponents": {
    "basics": "/pages/basics/home/home",
    "component": "/pages/component/home/home",
    "plugin": "/pages/plugin/home/home",
    "about": "/pages/about/home/home"
  }
}
```
<a name="2Lcym"></a>
### 如何快速检索并调用demo
<a name="IGf6z"></a>
#### 善用调试器
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1590078526272-36008a74-e6c1-40e1-8e7d-70a884b15354.png#align=left&display=inline&height=674&margin=%5Bobject%20Object%5D&name=image.png&originHeight=674&originWidth=1679&size=275386&status=done&style=none&width=1679)<br />这是我们开发者在浏览器中最常用的元素查看器（跟浏览器的F12很像），点击后将箭头指向页面的某一部分，在后台就能看到对应这一部分的页面代码在哪了，同时还有css样式的代码。
<a name="rpjWv"></a>
#### 根据demo检索关键字
在模拟器中可以查看demo的效果并根据调试器中的提示找到代码的源位置，复制粘贴即可！
<a name="K6axn"></a>
### 参考资料


