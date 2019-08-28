// pages/recommend/recommend.js
var app = getApp()
Page({
  data: {},
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getMovie();
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
    //获取电影信息
  getMovie: function () {
    var that = this
    var url = "https://douban.uieee.com/v2/movie/top250";
    wx.request({
      url: url,
      header: {
        'content-type': 'application/xml'
      },
      dataType: '',
      success: function (res) {
        console.log(res.data.subjects);
        that.setData ({
          subjects: res.data.subjects
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //跳转页面
  go2Detail: function (event) {
   app.go2Detail(event)
  }
})