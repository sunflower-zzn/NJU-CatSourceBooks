Page({
  data: {
    PageCur: 'cathome',
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '南大猫咪图鉴',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})