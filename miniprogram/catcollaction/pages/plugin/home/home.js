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
    imglist:[
      {url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/%E7%87%95%E9%BA%A61.jpg'},
      {url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/%E5%A4%A7%E6%A9%981.jpg'},
      {url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg'},
      {url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg'},
      {url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%283%29.jpg'},
      {url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%288%29.jpg'},
      {url: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%284%29.jpg'},
    ],
    list: [
      {id:1,kind:'橘猫',},{id:2,kind:'黑白奶牛'},{id:3,kind:'狸花猫'},{id:4,kind:'灰白虎斑'},
    ],
    load: true,

    listArr:[
      {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '数分2', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '橘猫2', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 2, //Id标识
      study: '在读', //学籍
      name: '老婆', //姓名
      nickName: ' ', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '灰白虎斑', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 2, //Id标识
      study: '在读', //学籍
      name: 'xxxx', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '橘猫2', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '数分', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '橘猫', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '数分', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '橘猫', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },{
      id: 1, //Id标识
      study: '在读', //学籍
      name: '数分', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '橘猫2', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '数分', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '黑白奶牛', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '黑白奶牛', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '黑白奶牛猫', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '黑白奶牛', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '黑白奶牛猫', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '数分', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '橘猫', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '数分', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '狸花猫', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },
    {
      id: 1, //Id标识
      study: '在读', //学籍
      name: '数分', //姓名
      nickName: '微积分の王', //外号
      icon: 'https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg', //头像的url
      age: 6, //年龄（以月为单位）
      kind: '狸花猫', //品种
      gender: 1, //雌性0雄性1
      sterilized: false ,//是否绝育
      location: '逸夫楼' ,//活动范围
      character: '温顺可亲' ,//性格
      state: '身体健康' ,// 状态
      story: '["这里是故事1","这里是故事2"]' ,//故事，字符串数组格式，转成字符串传输
      relationship: '跟xxx是伴侣' ,//猫际关系
      past: '5.28，入驻南大猫咪图鉴啦！' ,//猫生过往
      url: '["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%2812%29.jpg","https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/test-catphoto/cat-test%20%282%29.jpg"]' ,//图片地址
    },],

  },
  attached() {
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  methods:{
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
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
            VerticalNavTop: 200*(list[i].id-1),
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
  }
}
})