const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    catList:[],
    kindList:[],
    imglist:[
      {url: 'https://jerryzt.oss-cn-beijing.aliyuncs.com/catmoments/1118.jpg'},
      {url: 'https://jerryzt.oss-cn-beijing.aliyuncs.com/catmoments/23252.jpg'},
      {url: 'https://jerryzt.oss-cn-beijing.aliyuncs.com/catmoments/1593150957935.jpeg'},
      {url: 'https://jerryzt.oss-cn-beijing.aliyuncs.com/catmoments/1116.jpg'},
      {url: 'https://jerryzt.oss-cn-beijing.aliyuncs.com/catmoments/1112.jpg'},
      {url: 'https://jerryzt.oss-cn-beijing.aliyuncs.com/catmoments/1113.jpg'},
      {url: 'https://jerryzt.oss-cn-beijing.aliyuncs.com/catmoments/1114.jpg'},
    ],
    load: true,
  },
  attached() {
    this.showAllCat(); 
},
  methods:{

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
            var resData = res.data.content
            var kindtemp=[] 
            var kinds=[]  
            var sum=2  //种类数
            for(var i in resData){
                kindtemp.push(resData[i].kind)
            }
            kinds.push({id:1,kind:kindtemp[0]})
            for(i=1;i<kindtemp.length;i++)
            {
              var flag=false
                for(var j in kinds)
                {
                    if(kinds[j].kind==kindtemp[i])
                    {
                        flag=true
                    }
                }
                if(flag==false)
                {
                  kinds.push({id:sum,kind:kindtemp[i]})
                  sum=sum+1
                }
            }
            that.setData({
              // 数组拿到data里的值 页面需要遍历
              catList: resData,
              kindList: kinds
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
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.kindList;
    let tabHeight = 0;
    let scroolBottom=0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = this.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        if(scrollTop<80){
          that.setData({
            VerticalNavTop: 0,
            TabCur: 0
          })
        }else{
        that.setData({
          VerticalNavTop: 200*(list[i].id-1),
          TabCur: list[i].id
        })
        return false
      }
    }
    }
  },
  ViewImage(e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.url.url],
      current: e.currentTarget.dataset.url.url
    });
  }
}
})