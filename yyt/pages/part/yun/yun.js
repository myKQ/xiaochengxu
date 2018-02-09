// 这里只能用相对路径
var yunsData = require('../../../data/yun-data.js')
var xingzuosData = require('../../../data/xingzuo-data.js')
var jiemengsData = require('../../../data/jiemeng-data.js')

Page({
  data: {
    yunList:""
  },
  onLoad: function (options) {
    this.setData({
      yunList:yunsData.yunList,
      xingzuoList: xingzuosData.xingzuoList,
      jiemengList: jiemengsData.jiemengList
    });
    this.getData();
  },
  onModuletap: function(event) {
    
    var yunId = event.currentTarget.dataset.yunid;
    var nowTitle = this.data.yunList[yunId].title;
    console.log(nowTitle)
    wx.navigateTo({
      url: 'module-list/module-list?id=' + yunId + "&title=" + nowTitle
    })
  },
  getData: function (url) {
    var _this = this;
    wx.request({
      url: "",
      method: 'GET',
      header: {
        "Content-Type": ""
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },
})