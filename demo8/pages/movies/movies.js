Page({
  onLoad: function(event) {
    wx.request({
      url: "http://t.yushu.im/v2/movie/top250",
      data:{},
      method:"GET",
      header: {
        'content-type': ''
      },
      success: function(res) {
        console.log(res)
      }
    })
  }
})