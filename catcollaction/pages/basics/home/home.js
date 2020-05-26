Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%281%29.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2810%29.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%283%29.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%284%29.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%288%29.jpg'
    }],
    elements: [{
        title: '布局',
        name: 'layout',
        color: 'cyan',
        icon: 'newsfill'
      },
      {
        title: '背景',
        name: 'background',
        color: 'blue',
        icon: 'colorlens'
      },
      {
        title: '文本',
        name: 'text',
        color: 'purple',
        icon: 'font'
      },
      {
        title: '图标 ',
        name: 'icon',
        color: 'mauve',
        icon: 'icon'
      },
      {
        title: '按钮',
        name: 'button',
        color: 'pink',
        icon: 'btn'
      },
      {
        title: '标签',
        name: 'tag',
        color: 'brown',
        icon: 'tagfill'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red',
        icon: 'myfill'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange',
        icon: 'icloading'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive',
        icon: 'copy'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green',
        icon: 'loading2'
      },
    ],
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
})