// pages/catdetail/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cardCur: 0,
        catDetail: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.showById(options)
    },
    showById(obj){
      var that=this
      wx.request({
        url: 'https://njuwxq.top:7899/catcollection/api/cat/show/byId/'+obj.id,  //请求Java的URL
        method: 'GET',                                        //提交方式
        header: { 'content-type': 'application/x-www-form-urlencoded' }, //设置请求的这一句必须要加 不然出 bug你懂得
        success: function (res) {   //接受后台的回调函数
          var resData = res.data.content
          resData[0].story = JSON.parse(resData[0].story)
          resData[0].past = JSON.parse(resData[0].past)
          that.setData({
            // 数组拿到data里的值 页面需要遍历
            catDetail: resData
          })
        }
      })
    },
    ViewImage(e) {
      console.log(e)
      wx.previewImage({
        urls: [e.currentTarget.dataset.url],
        current: e.currentTarget.dataset.url
      });
    },


})