// pages/detail/detail.js
Page({
  data: {},
  onLoad: function (option) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getMovie(option.id)
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
  onUnload: function() {
    // 页面关闭
  },
  //获取电影信息
  getMovie: function (id) {
    var that = this
    var url = "https://douban.uieee.com/v2/movie/subject/"+id;
    wx.request({
      url: url,
      header: {
        'content-type': 'application/xml'
      },
      dataType: '',
      success: function (res) {
        that.setData ({
         item: res.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})