版本号：V 0.1.1

创建者：王晓奇

创建日期：2020/05/20

最后一次更新日期：2020/05/21

最后一次更新者：王晓奇

------

版本说明：

​	v0.1.0：微信小程序云函数设计和说明

 v0.1.1：修改函数showAllCat的参数设置
------

## 一、概述

由于不使用服务器部署后台，故本项目的后端使用云函数做替代，处于安全性和高效性，不提供直接操作数据库的接口，对数据库的操作均在云函数内完成并封装，设计的云函数的主要功能为：

- 检查接收前端请求，并以json对象形式将数据返回给前端(Controller层)
- 实现具体的业务逻辑(Service层)
- 提供操作数据库的接口(Dao层)

前端只需要调用Controller层的云函数。

## 二、云函数语法规定

#### 1.內部声明

​	若此云函数文件命名为"add"

``` javascript
// 云函数入口文件，文件命名为函数名
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return[
    sum: event.a + event.b
  ]
}
```

#### 2.外部调用

``` javascript
wx.cloud.callFunction({
  // 云函数名称
  name: 'add',
  // 传给云函数的参数
  data: {
    a: 1,
    b: 2,
  },
  success: function(res) {
    console.log(res.result.sum) // 3
  },
  fail: console.error
})
```

#### 3.云函数接口和返回值规定
所有参数均转换为string类型传入
##### I.查询类型

| 云函数名        | data对象设置值             | 返回值                                |
| --------------- | ------------------------ | ------------------------------------- |
| showAllCat      | void                     | cat类型的json对象数组,string 类型errMsg |
| showCatById     | int id                   | cat型json对象数组,string 类型errMsg         |
| showCatByName   | string name              | cat型json对象数组,string 类型errMsg         |
| showCatByGender | int gender(0雌1雄)        | cat型json对象数组,string 类型errMsg         |

##### II.插入类型

| 云函数名 | data对象设置值 | 返回值                |
| -------- | -------------- | --------------------- |
| addCat   | cat型json对象  | information型json对象 |
| addAdmin | string openid  | information型json对象 |

##### III.删除类型（安全性考虑仅支持通过ID删除对应的数据）

| 云函数名 | data对象设置值 | 返回值                |
| -------- | -------------- | --------------------- |
| delete   | int id         | information型json对象 |

##### IV.修改类型

| 云函数名 | data对象设置值 | 返回值                |
| -------- | -------------- | --------------------- |
| update   | cat型json对象  | information型json对象 |

说明：该方法检查ID，ID相同后将对象中不为空的信息覆盖

## 三、对象实体

```json
"cat":{
    id: 0
    name: ""
    age: 0
    gender: 0
    //是否绝育
    sterilized: true
    information: ""
    img: ["fileUrl1", "fileURL2"...]
}
```

``` json
"information":{
    success: false
    instruction: "该猫咪已经存在！"
}
```

##三、目前存在的尚未解决的问题
-云函数必须指定所应用的环境，如果不指定以最先创建的环境为准，但在开发环境中并没有配置数据库，现在只有测试环境里有测试用数据库，因此云函数想要应用在测试环境必须手动指定每一个云函数的环境，所以在测试和上线之间要一次次地手动改每个云函数的环境，怎么解决

