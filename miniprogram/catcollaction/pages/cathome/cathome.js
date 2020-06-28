Component({
    options: {
      addGlobalClass: true,
    },
    data: {
      cardCur: 0,  //当前卡片index
      TabCur: 0,  //学籍导航栏index
      scrollLeft:0,  
      swiperList: [{ //首页轮播图片
        id: 0,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/%E7%87%95%E9%BA%A61.jpg'
      }, {
        id: 1,
          type: 'image',
          url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/%E5%A4%A7%E6%A9%981.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg'
      }, {
        id: 4,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%283%29.jpg'
      }, {
        id: 5,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%284%29.jpg'
      }, {
        id: 6,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%288%29.jpg'
      }],
      catData: []
    },
    lifetimes: {
        //组件加载时调用attached方法
      attached: function() {
        console.log("第一个页面cathome loading中")
        this.showAllCat();//直接加载这个方法 查到数据页面就可遍历
        console.log("第一个页面cathome 调用完成")
      }
    },
    methods: {
      showAllCat(){
        console.log("正在调用showAllCat函数，查询全部猫咪信息")
        var that=this //为了使用setdata需要用that，this指回调函数
        wx.request({
          url: 'https://njuwxq.top:7899/catcollection/api/cat/show/allCat',  //服务器的URL
          method: 'GET', //提交方式
          header: { 'content-type': 'application/x-www-form-urlencoded' }, //设置请求header
          success: function (res) {   //接受后台的回调函数，res为返回值
            var resData = res.data.content   //获取返回值中的内容
            console.log("源数据" , resData)
            for(var i in resData){
                console.log("学籍" , resData[i].study)
                resData[i].story = JSON.parse(resData[i].story)  //处理story，将string转为一维json数组
                resData[i].past = JSON.parse(resData[i].past)  //处理past，将string转为嵌套json数组
            }
            console.log("处理后的数据" , resData)
            that.setData({
              // 数组拿到data里的值 页面需要遍历
              catData: resData
            })
          }
        })
      },
      // cardSwiper 卡片轮播
      cardSwiper(e) {
        this.setData({
          cardCur: e.detail.current
        })
      },
      // 学籍导航栏
      tabSelect(e) {
        this.setData({
          TabCur: e.currentTarget.dataset.id,
          scrollLeft: (e.currentTarget.dataset.id-1)*60
        })
      },
      // 页面内跳转
      NavChange(e) {
        this.setData({
          PageCur: e.currentTarget.dataset.cur
        })
      },
    }
  })