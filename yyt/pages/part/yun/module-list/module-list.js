var yunsData = require('../../../../data/yun-data.js');
Page({
  onLoad: function (options) {
    console.log(options)
    this.setData({
      currentList: yunsData.yunList[options.id].detail,
      title: options.title
    }),
    wx.setNavigationBarTitle({
      title: this.data.title//页面标题为路由参数
    })
  }
})