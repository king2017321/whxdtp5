//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/b.jpg',
      '/images/b1.jpg',
      '/images/b2.jpg'
    ],
    zxzzlist:[
      {
        thumb:"/images/4-12.jpg",
        title:"意外怀孕"
      },
      {
        thumb: "/images/4-11.jpg",
        title: "先兆流产"
      },
      {
        thumb: "/images/4-10.jpg",
        title: "宫外孕"
      },
      {
        thumb: "/images/4-9.jpg",
        title: "宫颈糜烂"
      },
      {
        thumb: "/images/4-8.jpg",
        title: "白带异常"
      },
      {
        thumb: "/images/4-7.jpg",
        title: "月经不调"
      },
      {
        thumb: "/images/4-6.jpg",
        title: "乳腺炎"
      },
      {
        thumb: "/images/4-5.jpg",
        title: "阴道炎"
      },
      {
        thumb: "/images/4-4.jpg",
        title: "附件炎"
      },
      {
        thumb: "/images/4-3.jpg",
        title: "盆腔炎"
      },
      {
        thumb: "/images/4-2.jpg",
        title: "乳腺增生"
      },
      {
        thumb: "/images/4-1.jpg",
        title: "意外怀孕"
      },
     

    ],
   
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    indicatorActiveColor:"#791476"
  },


  /*拨打电话*/
  btnCall:function(){
    wx.makePhoneCall({
      phoneNumber: '68836616'
    })
  },

  /**跳转页面 */
  navBtn:function(){
    wx.switchTab({
      url: '../form/form'
    })
  },

  onLoad: function () {
   
   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
