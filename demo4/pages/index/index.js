//index.js
//获取应用实例
Page({
	onTap:function() {
		// wx.navigateTo({
		// 	url: "../posts/post"
		// });
		wx.redirectTo({
			url: "../posts/post"
		})
	},

	onUnload:function() {
		console.log("000")
	},
	onHide:function(){
		console.log("00099")
	}
})
