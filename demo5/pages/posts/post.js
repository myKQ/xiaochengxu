// 这里只能用相对路径
var postsData = require('../../data/posts-data.js')

Page({
  data: {
    
  },
  onLoad: function (options) {
  	// this.data.postList = postsData.postList;
    this.setData({
      post_key:postsData.postList
    });
  },
  onPostTap:function(event) {
    var postId = event.currentTarget.dataset.postid;
  	wx.navigateTo({
      url:"post-detail/post-detail"
    })
  }
})