const app = getApp();

Page({
  //初始信息
  data:{
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index0: '',
    index1: '',
    index2: '',
    index3: '',
    picker0:['女','男'], 
    picker1:['是','否'],
    picker2:['奶牛猫','虎斑猫','狸花猫','橘猫','黑猫','三花猫','白猫'],
    picker3:['在读','毕业','辍学','喵星'],
    imgList:[],
    iconList:[],
    modalName:null,
    textAreaRelationshipInput:'',
    textAreaStoryInput:'',
    date: '',
    event: ''
  },
  //提交按钮把数据上传到后台
  infoSubmit: function(e){
    var user = wx.getStorageSync('user');
    var userid = user.openid;
    var form_data = e.detail.value;
    console.log('form发生submit事件，携带数据为：',e.detail.value);
    var that = this;
    var sterilizedbool;
    var index0 = that.data.index0;
    var index1 = that.data.index1;
    if(that.data.index1 == 0) {
      sterilizedbool = true;
    } else if(that.data.index1 == 1) {
      sterilizedbool == false;
    }
    var index2 = that.data.index2;
    var index3 = that.data.index3;
    var pastList = [{
      'date': form_data.date,
      'event': form_data.event
    }]
  
    var storyArr = [form_data.story]
    var storystr = storyArr.toString();
    var arrinstr = "[\"" + storystr + "\"]";

    console.log(index3);
    if(form_data.name=="") {
      wx.showToast({
        title: '请输入猫咪姓名',
        icon: 'none',
        duration: 1500
      })
    } else if(index3=="") {
      wx.showToast({
        title: '请选择猫咪学籍',
        icon: 'none',
        duration: 1500
      })
    } else if(form_data.nickName=="") {
      wx.showToast({
        title: '请输入猫咪昵称',
        icon: 'none',
        duration: 1500
      })
    } else if(index0=="") {
      wx.showToast({
        title: '请选择猫咪性别',
        icon: 'none',
        duration: 1500
      })
    } else if(form_data.age=="") {
      wx.showToast({
        title: '请输入猫咪年龄',
        icon: 'none',
        duration: 1500
      })
    } else if(index1=="") {
      wx.showToast({
        title: '请选择猫咪是否绝育',
        icon: 'none',
        duration: 1500
      })
    } else if(index2=="") {
      wx.showToast({
        title: '请选择猫咪品种',
        icon: 'none',
        duration: 1500
      })
    } else if(form_data.location=="") {
      wx.showToast({
        title: '请输入猫咪活动范围',
        icon: 'none',
        duration: 1500
      })
    } else if(form_data.characteristic=="") {
      wx.showToast({
        title: '请输入猫咪性格',
        icon: 'none',
        duration: 1500
      })
    } else if(form_data.state=="") {
      wx.showToast({
        title: '请输入猫咪状态',
        icon: 'none',
        duration: 1500
      })
    } else if(form_data.relationship=="") {
      wx.showToast({
        title: '请输入猫咪交友情况',
        icon: 'none',
        duration: 1500
      })
    } else {
      wx.request({
        url: 'https://njuwxq.top:7899/catcollection/api/cat/add?openid='+userid,
        method: 'POST',
        header: {'content-type': 'application/json'},
        data: {
          id: 0,
          study: that.data.picker3[index3],
          name: form_data.name,
          nickName: form_data.nickName,
          age: form_data.age,
          kind: that.data.picker2[index2],
          gender: that.data.index0,
          sterilized: sterilizedbool,
          location: form_data.location,
          character: form_data.characteristic,
          state: form_data.state,
          story: arrinstr,
          relationship: form_data.relationship,
          past: JSON.stringify(pastList)
        },
        success: function(res) {
          console.log('返回数据：',res);
          if(!res.data.success) {
            wx.showToast({
              title: '信息上传失败，请重试',
              icon: 'none',
              duration: 1500
            })
          }
          else {
            console.log('文字部分上传成功')
            //头像上传
            
            var catinfo = res.data.content[0];
            var catid = Number(catinfo.id);
            console.log('id获取：',catid);
            
            wx.uploadFile({
              filePath: that.data.iconList[0],
              name: 'file',
              url: 'https://njuwxq.top:7899/catcollection/api/cat/updateIcon'+'?openid='+userid+'&id='+catid,
              header: {'content-type': 'application/json'},
              success: function(ans) {
                ans.data = JSON.parse(ans.data)
                console.log('返回头像数据：',ans);
                if(!res.data.message==null) {
                  wx.showToast({
                    title: '头像上传失败，请重试',
                    icon: 'none',
                    duration: 1500
                  })
                }
              }
            })
            var i = 0;
            while(that.data.imgList[i]) {
              wx.uploadFile({
                filePath: that.data.imgList[i],
                name: 'file',
                url: 'https://njuwxq.top:7899/catcollection/api/catImage/upload?id='+catid,
                header: {'content-type': 'application/json'},
                success: function(result) {
                  result.data = JSON.parse(result.data)
                  console.log('返回图片数据：',result);
                  if(!that.data.imgList[i+1]){
                    wx.showToast({
                      title: '学籍录入成功！',
                      icon: 'success',
                      duration: 2000
                    })
                  }
                  if(!res.data.message==null) {
                    wx.showToast({
                      title: '图片上传失败，请重试',
                      icon: 'none',
                      duration: 1500
                    })
                  }
                }
              })
              i++;
            }
          }
        }
      })
      wx.navigateBack({
        delta: 1
      })
    }
   
  },
  PickerChange0(e) {
    console.log(e);
    this.setData({
      index0: e.detail.value
    })
  },
  PickerChange1(e) {
    console.log(e);
    this.setData({
      index1: e.detail.value
    })
  },
  PickerChange2(e) {
    console.log(e);
    this.setData({
      index2: e.detail.value
    })
  },
  PickerChange3(e) {
    console.log(e);
    this.setData({
      index3: e.detail.value
    })
  },
  ChooseImage0() {
    wx.chooseImage({
      count: 1, 
      sizeType: ['original', 'compressed'], 
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.iconList.length != 0) {
          this.setData({
            iconList: this.data.iconList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            iconList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage0(e) {
    wx.previewImage({
      urls: this.data.iconList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg0(e) {
    wx.showModal({
      content: '确定要删除这张照片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.iconList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            iconList: this.data.iconList
          })
        }
      }
    })
  },
  ChooseImage1() {
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
  ViewImage1(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg1(e) {
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
  textareaRelationshipInput(e) {
    this.setData({
      textareaRelationshipValue: e.detail.value
    })
  },
  textareaStoryInput(e) {
    this.setData({
      textareaStoryValue: e.detail.value
    })
  }
})