// 这里只能用相对路径
var postsData = require('../../data/posts-data.js')

Page({
  data: {
    
  },
  onLoad: function (options) {
    console.log(options)
  	// this.data.postList = postsData.postList;
    this.setData({
      postList:postsData.postList
    });
  },
  onPostTap:function(event) {
    // 传递id
    var postId = event.currentTarget.dataset.postid;
  	wx.navigateTo({
      url:"post-detail/post-detail?id=" + postId
    })
  },
  // onSwiperItemTap: function(event) {
  //   // 传递id
  //   var postId = event.currentTarget.dataset.postid;
  //   wx.navigateTo({
  //     url: "post-detail/post-detail?id=" + postId
  //   })
  // },
  onSwiperTap: function(event) {
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来转发',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})