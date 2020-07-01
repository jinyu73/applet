const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokeData: [],
    subscript: 0,
    pageNo: 1,
    limit: 10,
    min: 1,
    max: 388
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    this.handleSearch()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: () => {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: () => {
   
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
   * 随机数
   */
  randomNum(min,max) {
    var range = max - min;
    var rand = Math.random();
    var num = min + Math.round(rand * range);
    return num;
  },

  /**
   * 获取数据
   */
  handleSearch() {
    app.res.req("api/joke","GET",{
      page: this.randomNum(this.data.min, this.data.max),
      num: this.data.limit
    }).then(res => {
      if (res.code === 200) {
        this.setData({
          jokeData: res.data.data,
          subscript: 0
        })
        return
      }
      wx.showToast({
        title: "网络繁忙，请稍后重试",
        icon: 'none'
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