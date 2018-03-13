var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    article: '<div><div style="text-align:center;">《静夜思》· 李白<br />床前明月光，<br/>疑是地上霜。<br />举头望明月， <br />低头思故乡。<br /><img src="http://www.xiexingcun.com/Poetry/6/images/53e.jpg" alt="" /><br /><img src="http://www.xiexingcun.com/Poetry/6/images/53.jpg" alt="" /><br /><br /><img src="http://www.xiexingcun.com/Poetry/6/images/53b.jpg" alt="" /><br /></div></div>',
    imgs: []
  },
  onLoad: function (options) {
    var that = this;
    var temp = WxParse.wxParse('article', 'html', that.data.article, that, 5);
    that.setData({
      article: temp
    })


    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    this.setData({
      title: options.title
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 上传图片
  chooseimage: function () {
    var that = this;
    var tempFilePaths = that.data.imgs;
    wx.chooseImage({
      count: 1, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        
        // Array.prototype.push.apply(tempFilePaths, res.tempFilePaths);
        tempFilePaths.push.apply(tempFilePaths, res.tempFilePaths);
        if (tempFilePaths.length <= 9) {
          that.setData({
            imgs: tempFilePaths
          })
        } else {
          tempFilePaths = tempFilePaths.slice(0, 9)
          that.setData({
            imgs: tempFilePaths
          })
        }
      }
    })
  } 
});