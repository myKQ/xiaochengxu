var postsData = require('../../../data/posts-data.js');

Page({
  data:{

  },
  onLoad: function(option) {
    // 接受id
    var postId = option.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    // 如果在onLond方法中，不是异步的去执行一个数据绑定，则不需要使用this.setData方法
    // console.log(postData)
    // this.data.postData = postData;
    // this.data.author = postData.author;
    // this.data.detail = postData.detail;
    // 但是建议统一用下面这种
    this.setData({
      postData:postData
    });
    // wx.setStorageSync('key','hahhaha');

    var postsCollected = wx.getStorageSync('posts_collected');
    if (postsCollected) {
      var postsCollected = postsCollected[postId];
      this.setData({
        collected: postsCollected
      })
    }else{
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected) 
    }
  },
  // getSto: function(event) {
  //  var msg = wx.getStorageSync('key');
  //  console.log(msg)
  // },
  // remSto:function(event) {
  //   // wx.removeStorageSync('key');
  //   wx.clearStorageSync();
  // }
  onColletionTap: function(event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    // 收藏与未收藏状态的切换
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    wx.setStorageSync('posts_collected',postsCollected);
    // 更新数据绑定变量，实现图片的切换
    this.setData({
      collected:postCollected
    })
  }

})