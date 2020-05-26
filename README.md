# 《南大猫咪图鉴》项目策划

成员：zzn、yyb、wxq、qzx、zt<br />项目类型：微信小程序开发<br />语言：JavaScript<br />起源：计网大作业<br />思路参考：[PKU“燕园猫速查手册”](https://github.com/BlackCloud37/miniprogram)<br />项目地址：[https://github.com/sunflower-zzn/NJU-CatSourceBooks](https://github.com/sunflower-zzn/NJU-CatSourceBooks)<br />我的知识库地址：[https://www.yuque.com/books/share/56a2e244-f546-4c31-bb50-687b23892aef?#](https://www.yuque.com/books/share/56a2e244-f546-4c31-bb50-687b23892aef?#)<br />工作量记录

- 项目启动，云开发配置，代码管理初始化——zzn
<a name="lGfgf"></a>
## 会议记录
<a name="JTWa4"></a>
### 第一次会议 5.18
记录：zzn<br />内容：

- 分享上周阅读参考资料源码进度
- 项目时间安排，DDL 6.18
- 工具使用情况分享
  - 微信代码管理
- 工作分配
- 工作量记录
- 联系方式
  - qq？似乎经常不在线
  - 微信？也许好点
  - 会议：腾讯会议


<br />**目前需要做的工作**：

- 页面设计：有几个页面，页面之间的关系，跳转与交互，原型图绘制，icon【2人——qzx、zt】
- 资料收集：收集样例资料，整理为json文件（名字，年龄，图片，性别，是否绝育，品种，地点，状态，简述……）【1——yyb】
- 前端交互：样例代码调用，尝试大部分样式，写文档！【1——zzn】
- 后端调用：函数语法，数据库规则，写文档！【1——wxq】

DDL：周五5.22
<a name="7NURO"></a>
### 第二次会议 5.22
本周任务完成情况展示，文档讲解展示<br />上周内容展示：

- 页面设计
  - 墨刀链接：[https://free.modao.cc/app/41ede053bf17adb2ff02f32b69e294e62969c9bd?simulator_type=device&sticky#screen=skaci6yemfb2qmj](https://free.modao.cc/app/41ede053bf17adb2ff02f32b69e294e62969c9bd?simulator_type=device&sticky#screen=skaci6yemfb2qmj)
  - ![image.png](https://cdn.nlark.com/yuque/0/2020/png/295691/1590153448761-8eedcba2-33b0-4eb1-af9f-8d693c458cbb.png#align=left&display=inline&height=269&margin=%5Bobject%20Object%5D&name=image.png&originHeight=269&originWidth=237&size=8616&status=done&style=none&width=237)
- 数据
  - 姓名、图片、性别、是否绝育、是否领养、活动范围、性格、猫生描述、关系（超链接）
  - 领养、在读、离开、去猫星
- 后端
  - 云函数说明
  - 数据库结构
  - 数据层工作
  - 云函数的环境配置
- 前端
  - <br />

**目前需要做的工作：**

- 前端demo设计
- 后端样例数据录入，展示调用
- 需求扩展-头脑风暴（我们还能做什么花样？加分项）
- 接口设计规划（前后端对接）
  - 前端搜索框与后端数据检索配合
  - 后端上传图片及表单录入功能实现



首页<br />四个栏目：

- 猫咪信息
  - 按导航栏类型分类，选择不同分类的猫咪列表
  - 列表形式展示：头像、名称、tag
  - 详细内容
    - 猫咪信息
    - 留言板
- 猫咪朋友圈
  - 用户发自己的照片和内容分享
  - 精选留言（后台管理先审核）
- 插件/搜索框【花式】
  - 暂定
- 关于
  - 关于我们
  - 赞赏支持
  - 管理人员接口

分工：

- 1个人：首页和关于，研究一下第三个界面咋搞——郑涛
- 2个人：猫咪信息功能、对应的数据库——zzn、wxq
- 2个人：猫咪朋友圈、对应的数据库——yyb、qzx

DDL：5.29
