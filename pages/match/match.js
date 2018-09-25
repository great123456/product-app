// pages/match/match.js
Page({
  data: {

  },
  onShow: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  matchDetailsPage(){
    wx.navigateTo({
      url: '/pages/match-details/match-details'
    })
  },
  matchDetailPage(){
    wx.navigateTo({
      url: '/pages/match-detail/match-detail'
    })
  }
})