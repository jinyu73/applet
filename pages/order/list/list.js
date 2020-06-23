// pages/order/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    TabCur: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal) {
       console.log(newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arr: [],
    triggered: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPullDownRefresh: function () {
      console.log(1)
    },
    onPulling(e) {
      console.log('onPulling:', e)
    },
    onRefresh() {
      if (this._freshing) return
      this._freshing = true
      setTimeout(() => {
        this.setData({
          triggered: false,
        })
        this._freshing = false
      }, 3000)
    },
  },
  /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
  onPullDownRefresh: function () {
    console.log(1)
  },
  lifetimes: {
    attached: function(){
      console.log(0)
    }
  }
})
