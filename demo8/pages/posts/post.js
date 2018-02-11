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
  }
})