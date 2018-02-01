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
    // wx.showToast({
    //   title: postCollected?'收藏成功':'取消成功',
    //   icon: 'success',
    //   duration: 1000
    // })
    this.showToast(postsCollected,postCollected);
  },
  showModal: function(postsCollected,postCollected) {
    var _this = this;
    wx.showModal({
      title: '收藏',
      content: postCollected?'收藏该文章':'取消该文章',
      success: function(res) {
        if (res.confirm) {
          wx.setStorageSync('posts_collected',postsCollected);
          // 更新数据绑定变量，实现图片的切换
          _this.setData({
            collected:postCollected
          });
        } 
      }
    })
  },
  showToast: function(postsCollected,postCollected) {
    var _this = this;
    wx.showToast({
      title: postCollected?'收藏成功':'取消成功',
      icon: 'success',
      duration: 1000,
      success: function() {
        wx.setStorageSync('posts_collected',postsCollected);
        // 更新数据绑定变量，实现图片的切换
        _this.setData({
          collected:postCollected
        });
      }
    })
  },
  // 暂不支持分享
  onShare: function(event) {
    var itemList = [
        '分享到朋友圈',
        '分享给好友',
        '分享到QQ'
      ]
    wx.showActionSheet({
      itemList: itemList,
      success: function(res) {
        console.log(res.tapIndex);
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '用户分享给:' + res.cancel
        });
      }
    })
  }
})