const app = getApp();

Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 页面的初始数据
   */
  data: {
    jokeData: [],
    subscript: 0,
    pageNo: 1,
    limit: 10
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  ready(){
    this.handleSearch()
  },
  methods: {
    handleSearch() {
      app.res.req("Joke/QueryJokeByTime","GET",{
        key:	"9a71b42a0bac4696828bddbe6629b690",
        time: parseInt(+new Date()/1000),
        sort:	"desc",
        page: this.data.pageNo,
        rows: this.data.limit
      }).then(res => {
        console.log(res.error_code)
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
      console.log(this.data.subscript)
    }
  }
})
