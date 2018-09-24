// pages/add-product/add-product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  onShow: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  reduceNum(){
    let num = this.data.num;
    if(num<=0){
      num = 0;
    }else{
      num--;
    }
    this.setData({
      num: num
    })
  },
  addNum(){
    let num = this.data.num;
    num++;
    this.setData({
      num: num
    })
  }
})