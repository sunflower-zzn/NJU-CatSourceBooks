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
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/cat_pics/cathome/1.jpg'
      }, {
        id: 1,
          type: 'image',
          url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/cat_pics/cathome/2.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/cat_pics/cathome/3.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/cat_pics/cathome/4.jpg'
      }, {
        id: 4,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/cat_pics/cathome/5.jpg'
      }],
      catData: []
    },
    lifetimes: {
        //组件加载时调用attached方法
      attached: function() {
        this.showAllCat();//直接加载这个方法 查到数据页面就可遍历
      }
    },
    methods: {
      showAllCat(){
        wx.showLoading({
          title: '正在加载',
          })
        var that=this //为了使用setdata需要用that，this指回调函数
        wx.request({
          url: 'https://njuwxq.top:7899/catcollection/api/cat/show/allCat',  //服务器的URL
          method: 'GET', //提交方式
          header: { 'content-type': 'application/x-www-form-urlencoded' }, //设置请求header
          success: function (res) {   //接受后台的回调函数，res为返回值
            var resData = res.data.content   //获取返回值中的内容
            that.setData({
              // 数组拿到data里的值 页面需要遍历
              catData: resData
            })
            wx.hideLoading({
            })
          },
          fail : function(res)
          {
            wx.showToast({
              title: '网络错误',
              icon: 'none'
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
      ViewImage(e) {
        console.log(e)
        wx.previewImage({
          urls: [e.currentTarget.dataset.url.url],
          current: e.currentTarget.dataset.url.url
        });
      },
    }
  })