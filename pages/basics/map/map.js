// pages/basics/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/images/map/boxIcon.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 20,
      height: 20
    }, {
        iconPath: "/images/map/boxIcon.png",
        id: 1,
        latitude: 23.098994,
        longitude: 113.334520,
        width: 20,
        height: 20
      }],
    controls: [{
      id: 1,
      iconPath: '/images/map/mapControl.png',
      position: {
        left: 0,
        bottom: 0,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    this.data.markers.forEach((item,index) => {
      if (item.id === e.detail.markerId) {
        this.setData({
          ["markers[" + index + "].iconPath"]: "/images/map/selBox.png"
        })
      } else {
        this.setData({
          ["markers[" + index + "].iconPath"]: "/images/map/boxIcon.png"
        })
      }
    })
  },
  controltap(e) {
    console.log(e.detail.controlId)
  }

})