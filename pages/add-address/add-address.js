// pages/add-address/add-address.js
Page({
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  },
  bindRegionChange(e){
  	this.setData({
  	   region: e.detail.value
  	})
  }
})