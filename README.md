# 《南大猫咪图鉴》

<!-- TOC -->

- [《南大猫咪图鉴》项目介绍](#南大猫咪图鉴项目介绍)
- [1 总体介绍](#1-总体介绍)
  - [1.1 小组成员](#11-小组成员)
  - [1.2 成员分工](#12-成员分工)
  - [1.3 项目地址及贡献](#13-项目地址及贡献)
    - [微信代码管理地址](#微信代码管理地址)
    - [GitHub地址](#github地址)
  - [1.4 开发说明](#14-开发说明)
- [2 小程序介绍](#2-小程序介绍)
  - [2.1 项目初心](#21-项目初心)
  - [2.2 页面介绍](#22-页面介绍)
    - [2.2.1 登录页面](#221-登录页面)
    - [2.2.2 猫咪家园页面](#222-猫咪家园页面)
    - [2.2.3 猫咪详情页面](#223-猫咪详情页面)
      - [带猫咪名字的返回栏+猫咪图片轮播](#带猫咪名字的返回栏猫咪图片轮播)
      - [猫咪个人信息](#猫咪个人信息)
      - [猫咪关系及猫生时刻记录](#猫咪关系及猫生时刻记录)
      - [猫咪故事分享](#猫咪故事分享)
    - [2.2.4 猫咪朋友圈页面](#224-猫咪朋友圈页面)
    - [2.2.5 猫咪毛色分类页面](#225-猫咪毛色分类页面)
    - [2.2.6 关于页面](#226-关于页面)
      - [浏览量与点赞量](#浏览量与点赞量)
      - [GitHub](#github)
      - [关于我们](#关于我们)
      - [日志](#日志)
      - [赞赏支持](#赞赏支持)
      - [猫咪管理](#猫咪管理)
      - [意见反馈](#意见反馈)
- [3 代码结构](#3-代码结构)
  - [3.1 小程序前端](#31-小程序前端)
  - [3.2 服务器后端](#32-服务器后端)
- [4 参考资料](#4-参考资料)

<!-- /TOC -->

# 1 总体介绍

## 1.1 小组成员

| 组长 | 杨云波 | 181250176 |
| :--: | :----: | :-------: |
| 组员 | 张卓楠 | 181830249 |
| 组员 | 钱支鑫 | 181250116 |
| 组员 | 王晓奇 | 181250143 |
| 组员 |  郑涛  | 181250200 |

## 1.2 成员分工

- 杨云波：资料收集，猫咪信息上传、猫咪朋友圈上传页面
- 张卓楠：前端框架确定，登录界面，猫咪列表页面，猫咪详情页面，关于页面展示内容，资料收集，朋友圈页面优化
- 钱支鑫：猫咪朋友圈页面，资料收集
- 王晓奇：后端服务器搭建及接口文档编写
- 郑涛：猫咪毛色分类展示页面，关于页面，资料收集

## 1.3 项目地址及贡献

说明：开发过程中遵循gitflow流程，在develop分支中进行编写，最后评审通过后合并至master分支，详细代码贡献见项目地址内

### 微信代码管理地址

[https://git.weixin.qq.com/wx_wx6d6c323fe54d42ee/NJU-catcollection](https://git.weixin.qq.com/wx_wx6d6c323fe54d42ee/NJU-catcollection)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593144877206-056d6a2f-c3a4-40f9-9800-474cd2bcfd4e.png)

### GitHub地址

[https://github.com/sunflower-zzn/NJU-CatSourceBooks](https://github.com/sunflower-zzn/NJU-CatSourceBooks)
注：GitHub为搬运故无代码贡献参考

## 1.4 开发说明

- 前端语言：js、wxss、wxml、json（微信小程序相应语言）
- 后端语言：java、SQL（部署在服务器上，通过接口访问）
- 版本控制：微信开发者-代码管理
- 开发会议：每周1-2次，腾讯会议线上平台，并留存相应的会议记录【见_会议记录.md_】

# 2 小程序介绍

## 2.1 项目初心

我们希望制作一款《南大猫咪图鉴》的小程序，为南京大学的猫咪们登记造册。
方便同学们快速查看当前校园内猫咪们的个人信息、性格、状态、关系和故事等。
实时分享一些猫咪信息，营造猫咪社区效果，吸引用户关注。
同时也希望通过这种方式使更多的人关注南大的猫咪们，并给予力所能及的帮助。

## 2.2 页面介绍

### 2.2.1 登录页面

![小程序登录界面.gif](https://cdn.nlark.com/yuque/0/2020/gif/295691/1593146740493-c24bc2e9-dd8e-44f1-84c7-3274555f074b.gif)
本页面为小程序的初始页面，用户点击“进入南大猫咪图鉴”，小程序会申请获得用户的个人信息并显示在页面上，经过2s加载后进入主页面。

### 2.2.2 猫咪家园页面

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593157302375-c374ea02-666c-42d6-b4d8-9d0836176118.png)
本页面为_自定义底部导航栏 _中的第一个页面，由图片轮播栏和子导航栏组成。
子导航栏按照猫咪状态（在校、被领养、失踪、去世）分类。
猫咪以列表形式展示，用户可以点击猫咪头像进入详情页面。

### 2.2.3 猫咪详情页面

本页面为猫咪详情页面，根据上一层点击跳转传参向服务器发起请求获取对应猫咪的信息并展示，展示内容有：

#### 带猫咪名字的返回栏+猫咪图片轮播

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593157682354-f491a52b-8e12-49e0-8c95-93d599b27d20.png#)

#### 猫咪个人信息

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593157704280-f2e2b471-1ebf-469d-9d56-eb0189208a57.png)

#### 猫咪关系及猫生时刻记录

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593157740536-305265dc-306e-4f6d-a532-25ffd1fc4094.png)

#### 猫咪故事分享

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593157757422-1df63228-6f23-4cc8-82e0-59e6da1729e7.png)

### 2.2.4 猫咪朋友圈页面

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593316933506-655e1376-e953-48cf-bf5c-3e1b34b41f38.png)
在猫咪朋友圈页面，用户可以查看其他用户发表的朋友圈内容并进行点赞。
用户点击左下角的蓝色加号可以进入新建朋友圈页面，编写内容，选择图片并发布猫咪朋友圈：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593317550261-4997107e-97d9-41ba-b466-fca735bb6899.png)
返回页面并刷新即可查看最新发布内容：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593320903974-d338f69f-49a7-4df3-bf07-fa2a7a027cbd.png)

### 2.2.5 猫咪毛色分类页面

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593157948823-9e6cfc32-04e5-4f4f-82f2-e8a6dc62f9a2.png)
本页面由猫咪图片轮播栏与垂直导航组成。
垂直导航根据猫咪花色进行分类与快速访问，用户可以迅速根据猫咪毛色查询猫咪。
点击右边栏猫咪头像同样可以进入猫咪详情页面查看猫咪详细信息。

### 2.2.6 关于页面

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593158169923-1d29805b-b565-408a-9376-3dc0111578d1.png)
关于页面多个页面组成，具体如下：

#### 浏览量与点赞量

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593158259907-99d45c0f-5fbc-4db5-9b91-4a59b7dc48ba.png)
view和star数量记录了小程序浏览量和点赞支持数量。
用户可以通过点击star来为我们点赞，并且只能点击一次。

#### GitHub

用户点击GitHub按钮即可将我们的GitHub项目地址复制到剪贴板
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593158420558-edcaec7a-ebe9-40f7-9cf0-ccf82e18fcee.png)

#### 关于我们

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593158441719-cc84e3da-2096-44d9-97b2-0d02453beb03.png)
点击关于我们即可跳转至作者信息介绍页面，介绍了小程序一些信息与参考资料

#### 日志

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593158732828-942a4a67-2ebd-448e-94c2-a2a55cb8bd74.png)
日志页面主要记录了我们的开发过程及会议记录

#### 赞赏支持

![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593158780264-f6ce88aa-558c-4b0a-ba42-bb4789fc0bfd.png)
赞赏支持页面可以放入南大校园内相关公益组织的捐款信息和捐款码，帮助营造更好的猫咪环境。

#### 猫咪管理

本页面支持拥有管理员身份的用户上传猫咪信息
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593320961798-5d42726b-5c3e-454d-9a23-c47f20e45088.png)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593320976660-86e8de06-2a84-47b1-a318-993e835044aa.png)
选择上传后即可在猫咪家园页面看到新上传的猫咪

#### 意见反馈

用户可以在此向小程序后台反馈使用过程中遇到的问题：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593321191140-5075130f-525f-4407-999d-dc4dc05f5e59.png)

# 3 代码结构

## 3.1 小程序前端

结构整体如图所示：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593323321425-4dd294ba-2f07-47a3-9e2e-9764bec73320.png)
各模块功能概述：
**colorui**：部分界面样式文件    
**images**：存放icon，如底部导航栏icon，关于页面标志
**pages**：文件夹是向用户展示的页面

1.    index：实现底部导航栏跳转到相应的四个页面“：猫咪信息第一页面、猫友圈、猫      咪信息第二页面、关于页面
2.    cathome：猫咪信息第一页面（以学籍分类）
3.    circle：猫友圈页面
4.    catkind：猫咪信息第二页面（以颜色分类）
5.    about：关于页面：
      5.1．about：关于我们跳转
      5.2．admin：管理员入口
      5.3．catDetailUpload：猫咪信息更新
      5.4．catpyqUpload：猫友圈发布
      5.5．home：关于页面主页
      5.6．log：日志
      5.7．sponsor：赞赏支持
6.    auth：微信小程序授权
7.    login：首页
8.    utils：项目公共方法
      **app文件**：小程序启动配置以及页面配置

## 3.2 服务器后端

服务器后端结构如图所示，服务器端接口【见_HTTP请求URL及请求方法说明文档__.md_】
![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1593323072701-de254f67-a654-431e-baa8-9526b3d7c4ea.png)
使用springboot+tomcat搭建服务器后端，java作为主要语言，mysql为后端数据库

# 4 参考资料

在本次小程序开发的过程中我们参考了许多开源库的资料内容，列举在下方以示感谢：

- 前端UI框架：colorUI2.0，作者文晓港
- 免费icon来源：www.icons8.com
- 灵感参考：PKU猫咪图鉴







