# 概述

后台采用SpringBoot-Web技术和Mybatis访问mysql数据库，微信小程序通过https请求向指定的url发送get和post请求获得数据

采用加密的http传输协议

2020/06/26修改


# 请求IP地址及端口号

https://175.24.70.57:7899

域名：njuwxq.top

在备案完成前先用IP地址访问

# 方法说明

## 管理员接口

### 是否管理员

https(GET): ./catcollection/api/user/{openid}/isAdmin

参数说明:

openid: PathVariable 微信官方的提供的openid，string类型

返回值类型： boolean

### 添加管理员

https(POST):  ./catcollection/api/user/addAdmin

参数说明：

RequestParam: openid 同上

返回值说明：

​	json对象{

​		success: boolean //是否成功

​		content: object //携带返回信息，该方法中为null

​		message: string //错误信息，成功为null

}



## 猫咪信息CRUD接口

### 查询全部

https(GET): ./catcollection/api/cat/show/allCat

传入参数：无

传出值说明：

json:{

​	success: boolean

​	message: string //错误信息

​	content：json:{

​	id: int //Id标识

​	study: string //学籍

​	name: string //姓名

​ nickName: string //外号

​	icon: string //头像的url

​	age: int //年龄（以月为单位）

​	kind: string //品种

​	gender: int 性别//雌性0雄性1

​	sterilized: boolean //是否绝育

​	location: string //活动范围

​	character: string //性格

​	state: string // 状态

​	story: string //故事，字符串数组格式，转成字符串传输

​	relationship: string //猫际关系

​	past: string //猫生过往

​	url: [string] //图片地址

}

}



### 通过Id查询



https(GET): ./catcollection/api/cat/show/byId/{id}

传入参数说明：

PathVariable    id: int

传出值：同上



### 通过学籍查询

https(GET): ./catcollection/api/cat/show/byStudy/{study}

传入参数说明：

PathVariable    study: string

传出值： 同上



### 通过姓名查询

https(GET): ./catcollection/api/cat/show/byName/{name}

传入参数说明：

PathVariable    name: string

传出值： 同上

### 增加猫咪记录（仅限文本）

注：该方法只上传文本信息（水平有限），故传入参数的猫咪json对象不包括 icon 和 img如果在添加字段时要同时增加照片和头像的信息，请在调用该方法后调用增加图片和增加头像的方法

http(POST): ./catcollection/api/cat/add



传入参数说明:

RequestParam: openid:string

RequestBody: json:{

​	id: int //Id标识,添加时随便设置

​	study: string //学籍

​	name: string //姓名

​ nickName: string //外号

​	age: int //年龄（以月为单位）

​	kind: string //品种

​	gender: int 性别//雌性0雄性1

​	sterilized: boolean //是否绝育

​	location: string //活动范围

​	character: string //性格

​	state: string // 状态

​	story: string //故事，字符串数组格式，转成字符串传输

​	relationship: string //猫际关系

​	past: string //猫生过往

}

传出值说明：获得添加的猫咪记录，格式同查询格式，只是icon为空串，url为空数组

### 上传头像

http(POST): ./catcollection/api/cat/updateIcon

传入参数说明：

RequestParam: openid: string//用户的openid

RequestParam: id: int //猫咪的id

RequestBody: file(变量名): file(类型)

传出值说明：

json:{

​	success: boolean

​	message: string

​	content:json(即刚刚更新头像的猫咪信息)

}

### 上传图片

由于水平有限，一次只支持上传一张，如果有多张图麻烦前端多次调用

https(POST): ./catcollection/api/catImage/upload

传入参数说明:

RequestParam: id: int //猫咪id

RequestBody: file(变量名): file(类型)

返回值说明：同上

### 删除猫咪记录

https(POST): ./catcollection/api/cat/delete

传入参数说明：

RequestParam: openid: string

RequestParam: id: int //猫咪id

返回值说明

json:{

​	success: boolean

​	message: string //错误信息

​	content: null

}

### 更改猫咪信息

调用该方法时要先调用展示方法，将得到数据展示在前端后让用户更改，之后提交将改后的信息传回

https(POST): ./catcollection/api/cat/delete

传入参数：

RequestParam: openid: string

RequestBody: json:{

​	具体内容与添加猫咪记录（仅限文本）条目相同

}

返回值:与添加猫咪记录（仅限文本）条目相同



## 猫友圈接口

### 发帖（纯文本）

同样不支持文件传输，如果有需求，请调用猫友圈中的加图片接口

https(POST): ./catcollection/api/post/new

传入参数{

​	id: string : 可不赋值

​	author: 作者

​	operator: 操作者的openid

​	date:string 日期/时间

​	content: string 内容

​	title: 标题

​	like: 点赞数(新建可不赋值)

}

返回值：

{

​	success: boolean

​	message: string //错误信息

​	content: {

​	id: string : 可不赋值

​		author: 作者

​		operator: 操作者的openid

​		date:string 日期/时间

​		content: string 内容

​		title: 标题

​		like: 点赞数(新建时返回值为0)

​		imgUrl: [string]发帖接口时这里为空数组

​		}

}

### 给指定帖子增加图片(一次一张)

https(POST): ./catcollection/api/post/{id}/addImg

传入参数说明：

RequestVariable: id: string: 帖子的id

RequestBody: file(变量名): file(变量类型):要上传的文件

返回值

{

​		success: boolean

​		message: string //错误信息

​		content: {

​		id: string : 可不赋值

​		author: 作者

​		operator: 操作者的openid

​		date:string 日期/时间

​		content: string 内容

​		title: 标题

​		like: 点赞数(新建可不赋值)

​		imgUrl: [string]发帖接口时这里为空数组

​		}

}

### 删帖

https(POST): ./catcollection/api/post/delete

传入参数说明：

RequestParam: postid: string 帖子的id

RequestParam: openid: string 用户的openid

传出值：

{

​	success: boolean 

​	message: string //错误信息

​	content: null

}

### 查看社区内所有发言

https(GET): ./catcollection/api/post/all

传入参数：无

传出值说明:

{

​	success: boolean

​	message: string

​	content:[object]

​	其中object的格式为{

​		id: string

​		author: 作者

​		operator: 操作者的openid

​		date:string 日期/时间

​		content: string 内容

​		title: 标题

​		like: 点赞数(新建可不赋值)

​	}

}



### 点赞

https(POST): ./catcollection/api/post/{id}/like

传入参数: Pathvariable id: string

传出值: {

​	success: true

​	message: null

​	content: null

}

## 流量统计接口

### 每次初始化小程序调用（多少人观看）

https(POST): ./catcollection/api/record/view

用于提示后台访客数增加，后台做出相应操作

参数：无

返回值：无

### 投喂后调用（多少人投喂）

https(POST): ./catcollection/api/record/fork

作用与初始化小程序接口类似

参数：无

返回值：无



### 查看流量接口

https(GET): ./catcollection/api/record/get

返回一个对象，对象包括浏览和投喂的人数两个属性

传入参数：无

返回值：{

​	success：boolean

​	message：string

​	content：{

​	views: int  有多少人已经浏览

​	fork：int 有多少人已经投喂

}

}