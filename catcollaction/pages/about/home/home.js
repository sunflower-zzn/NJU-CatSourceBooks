const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    starCount:50,
    visitTotal:20,
  },

  attached() {
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            starCount: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.getNum()
      }
    }
    wx.hideLoading()
  },
  methods: {
  
    CopyLink(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        }
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    showQrcode() {
      wx.previewImage({
        urls: ['https://image.weilanwl.com/color2.0/zanCode.jpg'],
        current: 'https://image.weilanwl.com/color2.0/zanCode.jpg' // 当前显示图片的http链接      
      })
    },
    star()
    {
      var temp=this.data.starCount+1
     if(app.globalData.isStar==false){
      wx.showToast({
        title: '谢谢支持',
        duration: 1000,
        icon: 'none',
      })
      wx.request({
        url: 'https://njuwxq.top:7899/catcollection/api/record/fork',
        method:'POST',
      })
      app.globalData.isStar = true,
      
        this.setData({
        starCount: temp,
        })
     }else{
      wx.showToast({
        title: '你已经点过赞了',
        duration: 1200,
        icon: 'none',
      })
     }
    },
    getNum(){
      let that=this
      wx.request({
        url: 'https://njuwxq.top:7899/catcollection/api/record/get', 
        method: 'GET',
        header: { 'content-type': 'application/x-www-form-urlencoded' }, 
        success: function (res) {   
          var resData = res.data.content
          that.setData({
            visitTotal:resData.views,
            starCount:resData.fork,
          })
        }
      })
    }
  }
})