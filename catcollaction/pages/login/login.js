//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    notice: '小可爱们等你很久了！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数notice
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.intoApp();
    } 
    else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.intoApp()
      }
    } 
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      },)
    }
},
  getUserInfo: function(e) {
    if(e.detail.userInfo){
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      this.intoApp();
    }
    else{
      wx.showModal({
        title: '提示',
        content: '请授权后再使用小程序',
        showCancel: false,
        confirmText: '确定',
        success: function(res) {
            if (res.confirm) {
                console.log('用户拒绝了授权');
            }
        }
      });
    }
  },
  bindViewTap: function() {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  intoApp: function(){
    wx.request({
      url: 'https://njuwxq.top:7899/catcollection/api/record/view',
      method:'POST',
    })
    setTimeout(function () {
      wx.redirectTo({
        url: '/pages/index/index',
      })}
      , 1000)
    }
  }
);