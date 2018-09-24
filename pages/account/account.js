// pages/account/account.js
Page({
  data: {

  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  },
  selectImage(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        const tempFilePaths = res.tempFilePaths
      }
    })
  }
})