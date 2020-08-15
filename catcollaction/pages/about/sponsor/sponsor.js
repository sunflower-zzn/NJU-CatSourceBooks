const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
  },
  onLoad: function () { },
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  },
  ViewImage(e) {
      wx.previewImage({
        urls: ["https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/cat_pics/sponsor.png"],
        current: "https://zzn-wx-miniprogram.oss-cn-beijing.aliyuncs.com/cat_pics/sponsor.png"
      });
  }
});
