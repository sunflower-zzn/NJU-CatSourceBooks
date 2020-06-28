// pages/catdetail/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cardCur: 0,
        swiperList: [{
            id: 0,
            type: 'image',
            url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%281%29.jpg'
        }, {
            id: 1,
            type: 'image',
            url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2810%29.jpg',
        }, {
            id: 2,
            type: 'image',
            url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg'
        }, {
            id: 3,
            type: 'image',
            url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg'
        },
        
        ],
        listArr: [],
        catDetail: []

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.showById(options)

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function (e) {
        this.setData({
            listArr:[{
              id: 1, //Id标识
              study: '在读', //学籍
              name: '数分', //姓名
              nickName: '微积分の王', //外号
              icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
              age: 6, //年龄（以月为单位）
              kind: '橘猫', //品种
              gender: 1, //雌性0雄性1
              sterilized: false ,//是否绝育
              location: '逸夫楼' ,//活动范围
              character: '温顺可亲' ,//性格
              state: '身体健康' ,// 状态
              relationship: '跟xxx是伴侣' ,//猫际关系
              story: [{
                  storycontent: '这里是故事1'
                },
                {
                  storycontent: '这里是故事2'
                }
              ],//故事，字符串数组格式，转成字符串传输
              past: [{
                  date: "5.28",
                  event: '入驻南大猫咪图鉴啦！'
                },
                {
                  date: "x.xx",
                  event: '呜呜呜，今天数分变成公公啦'
                }
              ],//猫生过往
              url: [{
                  picture: "https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg"
                },
                {
                  picture: "https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"
                }
              ],//图片地址
            }]
        })
        var obj=e
        this.showById(obj)
    },
    showById(obj){
      console.log("调用showById函数",obj.id)
      var that=this
      wx.request({
        url: 'https://njuwxq.top:7899/catcollection/api/cat/show/byId/'+obj.id,  //请求Java的URL
        method: 'GET',                                        //提交方式
        header: { 'content-type': 'application/x-www-form-urlencoded' }, //设置请求的这一句必须要加 不然出 bug你懂得
        success: function (res) {   //接受后台的回调函数
          var resData = res.data.content
          console.log("数据" , resData)
          resData[0].story = JSON.parse(resData[0].story)
          resData[0].past = JSON.parse(resData[0].past)
          console.log("改变" , resData)
          that.setData({
            // 数组拿到data里的值 页面需要遍历
            catDetail: resData
          })
        }
      })
    }


})