const app = getApp();
const QQMapWX = require('../../../utils/js/qqmap-wx-jssdk.min.js');

var qqmapsdk = new QQMapWX({
  key: 'W2TBZ-HGR6G-SFWQB-IKF7Q-FWGYV-KBFWF' // 必填
});

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 获取经纬度
   */
  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      altitude: false,
      success: (result) => {
        this.getAddress(result)
       
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  /**
   * 逆地址解析
   */
  getAddress(result) {
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: result.latitude,
        longitude: result.longitude
      },
      success:(res) => {
        console.log(res)
      }
    })
  }
})