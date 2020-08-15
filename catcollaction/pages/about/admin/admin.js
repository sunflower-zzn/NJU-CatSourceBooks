const app = getApp();

Page({
  //页面初始数据
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    isadmin: false
  },

  onLoad: function() {
    var user = wx.getStorageSync('user');
    var openid = user.openid;
    wx.request({
      url: 'https://njuwxq.top:7899/catcollection/api/user/{openid}/isAdmin',
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'GET',
      data: {
        openid: openid
      },
      success: function(res) {
        if(res == false) {
          console.log('用户非管理员');
          wx.showToast({
            title: '无管理员权限',
            icon: 'none',
            duration: 1500
          })
          wx.redirectTo({
            url: 'pages/about/home/home',
          })
        }else{    
          wx.showToast({
            title: '管理员权限确认',
            icon: 'success',
            duration: 1000
          })
        }
      }
    })
  }
  
})