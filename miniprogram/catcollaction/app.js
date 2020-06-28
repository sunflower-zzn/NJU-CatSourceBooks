//app.js
App({
  // 小程序启动时触发全局启动函数（整个过程中只启动一次）
  onLaunch: function() {
    //检查云开发，并配置对应的环境（这里使用的是测试环境，在发布时需要调整回发布环境！）
    if (wx.cloud) {
      wx.cloud.init({
        evn: 'nju-cat-test-hamy4',   //注意发布时要调整环境！
        traceUser: true  //是否在将用户访问记录到用户管理中，在控制台中可见
      })
    }
    //获取系统信息
    wx.getSystemInfo({
      //接口调用成功的回调函数
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;   //状态栏的高度，单位px
        let capsule = wx.getMenuButtonBoundingClientRect();   //获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
		if (capsule) {
      //自定义导航栏位置信息赋值
		 	this.globalData.Custom = capsule;        
			this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		} else {
			this.globalData.CustomBar = e.statusBarHeight + 50;
		}
      }
    })
  },
  globalData: {
    //颜色列表
    ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
  }
})