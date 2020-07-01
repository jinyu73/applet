const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    diaryData: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleDiaryInfo()
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
   * 获取数据
   */
  handleDiaryInfo() {
    app.res.req("api/dog","GET").then(res => {
      if (res.code === 200) {
        let content = res.data.content.replace("舔狗日记", "")
        return this.setData({
          diaryData: content
        })
      }
      wx.showToast({
        title: res.msg,
        icon: 'none'
      });
        
    })
  },

  /**
   * 刷新
   */
  handleNext() {
    this.handleDiaryInfo()
  }
})