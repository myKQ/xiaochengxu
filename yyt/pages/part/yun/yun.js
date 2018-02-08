// 这里只能用相对路径
var yunsData = require('../../../data/yun-data.js')

Page({
  data: {
    
  },
  onLoad: function (options) {
    this.setData({
      yunList:yunsData.yunList
    });
  }
})