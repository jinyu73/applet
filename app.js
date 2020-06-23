//app.js
let http = require('api/request.js')
let api = require('api/api.js')

App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  onShow(options) {
    console.log(options)
  },
  res: {
    req: http.req
  },
  API: api,
  globalData: {
    userInfo: null,
    checkLogin: () => {
      return true
    }
  }
})