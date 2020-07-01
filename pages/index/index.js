//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    PageCur: 'basics'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow() {
  },

  // 分享
  onShareAppMessage: function () {
    return {
      title: '分享',
      path: '/pages/index/index',
      imageUrl: "",
      success: (res) => {
        console.log(res)
      },
      fail: (err) => {
        console.log("失败")
      }
    }
  }
})
