// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  collectPage(){              //我的收藏页面
    wx.navigateTo({
      url: '/pages/collect/collect'
    })
  },
  checkOrderPage(){           //订单追踪页面
    wx.navigateTo({
      url: '/pages/check-order/check-order'
    })
  },
  bindViewTap: function() {    //商品详情页面
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  addProductPage(){   //我要补货页面
    wx.navigateTo({
      url: '/pages/add-product/add-product'
    })
  },
  messagePage(){
    wx.navigateTo({
      url: '/pages/message/message'
    })
  },
  accountPage(){
    wx.navigateTo({
      url: '/pages/account/account'
    })
  },
  guidePage(){
    wx.navigateTo({
      url: '/pages/guide/guide'
    })
  }
})