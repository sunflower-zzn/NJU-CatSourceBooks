const app = getApp();
var util = require('../../utils/util.js');

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    imgList: [],
    contentinp: '',
    index: '',
    pyqid: '',
    storyList: [{
      date: '',
      event: ''
    }]
  },
  pyqSubmit: function(e) {
    var that = this;
    var DATE = util.formatTime(new Date());
    var form_data = e.detail.value;
    var user = wx.getStorageSync('user');
    console.log('猫友圈提交准备，携带数据为：',form_data);

    //文本信息上传
    wx.request({
      url: 'https://njuwxq.top:7899/catcollection/api/post/new',
      method: 'POST',
      header: {'content-type': 'application/json'},
      data: {
        id: '',
        author: app.globalData.userInfo.nickName,
        operator: user.openid,
        date: DATE,
        content: form_data.content,
        title: "title",
        like: 0
      },
      success: function(res) {
        console.log('返回数据：',res);
        if(!res.data.success) {
          wx.showToast({
            title: '猫友圈上传失败，请重试',
            icon: 'none',
            duration: 1500
          })
        } else {
          console.log('文字部分上传成功')
          //icon上传
          wx.getImageInfo({
            src: app.globalData.userInfo.avatarUrl,
            success:function(resIcon){
              console.log('getimage后为：',resIcon.path)
              wx.uploadFile({
                url: 'https://njuwxq.top:7899/catcollection/api/post/'+res.data.content+'/updateIcon',
                filePath: resIcon.path,
                name: "file",
                header: {'content-type': 'application/json'},
                success: function(ans) {
                  ans.data = JSON.parse(ans.data)
                  console.log('返回icon数据：',ans)
                  if(!ans.data.success) {
                    wx.showToast({
                      title: 'icon上传失败,请重试',
                      icon: 'none',
                      duration: 1500
                    })
                  }
                }
              })
            }
          })
          
          console.log("图片：",that.data.imgList)
          //图片部分上传
          if(that.data.imgList) {
            console.log('图片上传中')
            var i = 0;
            while(that.data.imgList[i]) {
              wx.uploadFile({
                url: 'https://njuwxq.top:7899/catcollection/api/post/'+res.data.content+'/addImg',
                filePath:that.data.imgList[i],
                name: "file",
                header: {'content-type': 'application/json'},
                success: function(ans) {
                  ans.data = JSON.parse(ans.data)
                  console.log('返回图片数据：',ans)
                  if(!that.data.imgList[i+1]){
                    wx.showToast({
                      title: '朋友圈上传成功，点击logo刷新吧！',
                      icon: 'none',
                      duration: 3000
                    })
                  }
                  if(!ans.data.success) {
                    wx.showToast({
                      title: '图片上传失败,请重试',
                      icon: 'none',
                      duration: 1500
                    })
                  }
                }
              })
              i++;
            }
            wx.showToast({
              title: '猫友圈发布成功',
              icon: 'success',
              duration: 1500
            })
          } else{
            wx.showToast({
              title: '猫友圈发布成功',
              icon: 'success',
              duration: 1500
            })
          }
          wx.navigateBack({
            //url: 'pages/about/catpyqUpload/catpyqUpload'
            delta: 1
          })
        }
      }
    })
  },


  ChooseImage() {
    wx.chooseImage({
      count: 9, 
      sizeType: ['original', 'compressed'], 
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      content: '确定要删除这张照片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  contentinp(e) {
    this.setData({
      content: e.detail.value
    })
  }
  
});