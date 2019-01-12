// pages/form/form.js
Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/b.jpg',
      '/images/b1.jpg',
      '/images/b2.jpg'
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    indicatorActiveColor: "#791476",
    age:'',
    name:'',
    phone:'',
    project:'',

  },

  formSubmit(e) {
    var that = this;
    //console.log(e);
   // console.log(e.detail.value.age);
    var age = e.detail.value.age ;
    var name = e.detail.value.name ;
    var phone = e.detail.value.phone ;
    var project = e.detail.value.project ;
    wx.request({
      url: 'http://www.whxdtp5.com/admin/user/insert_user', // 仅为示例，并非真实的接口地址
      data: {
        name: name,
        age: age,
        phone: phone,
        project: project,
      },
     
      success(res) {
       
        //console.log(res.data.msg)
        var title = res.data.msg
        if(res.data.status == 200){
          wx.showToast({
            title: title,
            icon: 'success',
            duration: 2000
          })
          that.setData({
            name: that.data.name,
            age: that.data.age,
            phone: that.data.phone,
            project: that.data.project,
          })

        }else{
          wx.showToast({
            title: title,
            icon: 'none',
            duration: 2000
          })
          that.setData({
            name: that.data.name,
            age: that.data.age,
            phone: that.data.phone,
            project: that.data.project,
          })
        }
      }
    })
  },

  //**拨打电话 */
  btnCall:function()
  {
    wx.makePhoneCall({
      phoneNumber: '68836616'
    })

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

  }
})