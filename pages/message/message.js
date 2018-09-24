// pages/message/message.js
Page({
  data: {
    showTab: false,
    showTab2: false,
    showTab3: false,
    showTab5: false,
    showTab6: false,
    showBottom: false
  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  },
  selectTab(){
    let type = !this.data.showTab
    this.setData({
      showTab: type
    })
  },
  showTab2(){
    let type = !this.data.showTab2
    this.setData({
      showTab2: type
    })
  },
  showTab3(){
    let type = !this.data.showTab3
    this.setData({
      showTab3: type
    })
  },
  showTab5(){
    let type = !this.data.showTab5
    this.setData({
      showTab5: type
    })
  },
  showTab6(){
    let type = !this.data.showTab6
    this.setData({
      showTab6: type
    })
  },
  showBottom(){
    let type = !this.data.showBottom
    this.setData({
      showBottom: type
    })
  }
})