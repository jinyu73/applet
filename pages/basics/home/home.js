const app = getApp();

Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 页面的初始数据
   */
  data: {
    elements: [
    // {
    //   title: '最新趣图',
    //   name: 'background',
    //   color: 'blue',
    //   icon: 'colorlens'
    // }
    {
      title: '舔狗日记',
      name: 'diary',
      color: 'olive',
      icon: 'font'
    },
    {
      title: '土味情话',
      name: 'loveTalk',
      color: 'orange',
      icon: 'icon'
    },
    {
      title: '心灵毒鸡汤',
      name: 'toxic',
      color: 'red',
      icon: 'btn'
    },
    {
      title: '最新笑话',
      name: 'joke',
      color: 'yellow',
      icon: 'newsfill'
    },
    // {
    //   title: '网易云乐评',
    //   name: 'tag',
    //   color: 'brown',
    //   icon: 'tagfill'
    // },
    // {
    //   title: '头像',
    //   name: 'avatar',
    //   color: 'red',
    //   icon: 'myfill'
    // },
    // {
    //   title: '进度条',
    //   name: 'progress',
    //   color: 'orange',
    //   icon: 'icloading'
    // },
    // {
    //   title: '边框阴影',
    //   name: 'shadow',
    //   color: 'olive',
    //   icon: 'copy'
    // },
    // {
    //   title: '加载',
    //   name: 'loading',
    //   color: 'green',
    //   icon: 'loading2'
    // },
  ]
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  methods: {
  }
})
