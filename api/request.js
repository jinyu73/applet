let sUrl = "https://api.avatardata.cn/";

const getData = (url, method, data) => {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: "加载中...",
      mask: true,
    });
    wx.request({
      url: sUrl+url,
      data: data,
      method: method,
      header: {
        "content-Type": "application/json",
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        resolve(res.data)
      },
      fail: (res) => {
        reject(res.data)
      },
      complete: info => {
        wx.hideLoading()
      }
    })
  });
};
// function getData(url, method, data, cb) {
//   wx.showLoading({
//     title: '加载中...',
//     mask: true
//   })

//   wx.request({
//     url: sUrl + url,
//     data: data,
//     method: method,
//     header: {
//       // "Content-Type": "json",   //get请求时候
//       "Content-Type": "application/x-www-form-urlencoded", //POST请求的时候这样写
//       'Authorization': url.indexOf('auth/oauth/token') > -1 ? 'Basic YnJvd3Nlcjo=': wx.getStorageSync('token')
//     },
//     success: (res) => {
//       if ((url.indexOf('auth/oauth/token') > -1 && res.statusCode === 401) || (url.indexOf('auth/oauth/token') > -1 && res.statusCode === 400)) {
//         setTimeout(() => {
//           wx.showToast({
//             title: '账号或密码错误',
//             icon: 'none'
//           })
//         }, 0)
//         return
//       }
//       if (res.statusCode === 401) {
//         setTimeout(() => {
//           wx.showToast({
//             title: '过期，请重新登录',
//             icon: 'none'
//           })
//         }, 0)
//         return
//       }
//       return typeof cb == "function" && cb(res.data)
//     },
//     fail: (res) => {
//       return typeof cb == "function" && cb(res.data)
//     },
//     complete: info => {
//       wx.hideLoading()
//     }
//   })
// }
module.exports = {
  req: getData,
};
