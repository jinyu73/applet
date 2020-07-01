const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokeImgData: [],
    subscript: 0,
    pageNo: 1,
    limit: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleSearch()
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
  handleSearch() {
    app.res.req("Joke/NewstImg","GET",{
      key:	"9a71b42a0bac4696828bddbe6629b690",
      time: parseInt(+new Date()/1000),
      sort:	"desc",
      page: this.data.pageNo,
      rows: this.data.limit
    }).then(res => {
      if (res.error_code === 0) {
        this.setData({
          jokeData: res.result,
          subscript: 0
        })
        return
      }
      wx.showToast({
        title: "网络繁忙，请稍后重试",
        icon: none
      })
    })
  },
  handleNext() {
    if (this.data.subscript === 9) {
      this.setData({
        pageNo: this.data.pageNo + 1
      })
      this.handleSearch()
      return
    }
    this.setData({
      subscript: this.data.subscript+1
    })
  }
})