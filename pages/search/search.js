// pages/search/search.js
var app = getApp()
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  inputText: function (e) {
    var that = this
    console.log(e.detail.value);
    that.setData({
      text: e.detail.value
    })
  },
  search: function () {
    var that = this
    that.getMovie()
  },
  //获取电影信息
  getMovie: function () {
    var that = this
    var url = "https://douban.uieee.com/v2/movie/search?q=" + this.data.text;
    wx.request({
      url: url,
      header: {
        'content-type': 'application/xml'
      },
      dataType: '',
      success: function (res) {
        that.setData({
          subjects: res.data.subjects
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})