
// pages/CircleFriends/CircleFriends.js
var app = getApp()
var that
Component({
  options: {
    addGlobalClass: true,
  },

  /**
   * 页面的初始数据
   */
  data: {
     StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    photoWidth: wx.getSystemInfoSync().windowWidth / 5,
    popTop: 0, //弹出点赞评论框的位置
    popWidth: 0, //弹出框宽度
    isShow: true, //判断是否显示弹出框
   
    circle:[{
      id:1,
      author:'WXQ',
      operator:1,
      data:'2020-06-20',
      content:"ZZN,永远滴神！",
       title:"永远滴神",
       like:0,
       imgUrl:['http://212.64.68.219:9090/xhl.jpg'],
      },{id:1,
        author:'WXQ',
        operator:1,
        data:'2020-06-20',
        content:"ZZN,永远滴神！",
         title:"永远滴神",
         like:0,
         imgUrl:['http://212.64.68.219:9090/xhl.jpg'],
        }],
       
  },

  lifetimes: {
    //组件加载时调用attached方法
    attached: function() {
      this.showComment();
    }
  },
methods:{

  upLoad:function(){
    wx.navigateTo({
      url: '../about/catpyqUpload/catpyqUpload',
    })
  },

  // 点击图片进行大图查看
 
  LookPhoto: function(e) {
    
    wx.previewImage({
      current: e.currentTarget.dataset.imgurl,
      urls: [e.currentTarget.dataset.imgurl],
    })
  },
isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },


  // 点击点赞的人
  TouchZanUser: function(e) {
    var that=this
    console.log("对象", e)
    wx.request({
      url: 'https://njuwxq.top:7899/catcollection/api/post/'+e.currentTarget.dataset.id+'/like',
      method:"POST",
      header: { 'content-type': 'application/x-www-form-urlencoded' }, 
      data:{
        id: 1
      },
    success: function(res) {
      if(res.data.status == 0) {
        wx.showToast({
          title: '点赞失败',
          icon: 'none',
          duration: 1500
        })
      } else {
        console.log('点赞成功')
        that.showComment()
      }
    },
  })
  },

 

  // 删除朋友圈
  delete: function() {
    wx.request({
      url: 'https://njuwxq.top:7899/catcollection/api/post/deletel',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' }, //设置请求的这一句必须要加 不然出 bug你懂得
      success(res){
        
      }  
    })
    wx.showToast({
      title: '删除成功',
    })
  },

  fresh:function(){
    this.showComment()
    wx.showToast({
      title: '已经是最新了',
      icon: 'success',
      duration: 1000
    })  
  },
  showComment:function(){
    
    var that=this //为了使用setdata需要用that，this指回调函数
    wx.request({
      url: 'https://njuwxq.top:7899/catcollection/api/post/all',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' }, //设置请求的这一句必须要加 不然出 bug你懂得
      success(res){
        var resData = res.data.content
        console.log("正在加载朋友圈",res.data.content)
          that.setData({
            // 数组拿到data里的值 页面需要遍历
            circle: resData,
          })
      }                                      
    })
  },
},
})