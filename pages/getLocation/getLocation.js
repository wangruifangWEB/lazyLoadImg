// pages/getLocation/getLocation.js
Page({
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.distance(34.277386079,108.962682113,39.92019,116.44569)
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

  },
  getLocationName() {
    var that=this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
        let StarAddressName = res.name;
        that.setData({ StarAddressName });
      }
    })
  },
  getEndLocationName() {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
        let endAddressName = res.name;
        that.setData({ endAddressName });
      }
    })
  },
  // 获取当前位置到目标地址的距离
  distance: function (la1, lo1, la2, lo2) {
    var La1 = la1 * Math.PI / 180.0;
    var La2 = la2 * Math.PI / 180.0;
    var La3 = La1 - La2;
    var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
    s = s * 6378.137;//地球半径
    s = Math.round(s * 10000) / 10000;
    // return s
    console.log("计算结果",s)
    this.setData({distanceValue:s});
  },
})

// var mapsdk = require("../../utils/qqmap-wx-jssdk.min.js");
// Page({
//   data: {

//   },

//   /**
//   * 生命周期函数--监听页面加载
//   */
//   onLoad: function (options) {
//     var that = this
//     var wxmapsdk = new mapsdk({
//       key: 'XIKBZ-B4C66-UKUSZ-EFEJC-23HOJ-ASFLG'
//     });
//     wx.getLocation({
//       success: function (res) {
//         //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
//         console.log(res)
//         wxmapsdk.reverseGeocoder({
//           location: {
//             latitude: res.latitude,
//             longitude: res.longitude
//           },
//           success: function (ress) {
//             console.log(ress)
//             var nation = ress.result.address_component.nation;
//             var province = ress.result.address_component.province;
//             var city = ress.result.address_component.city;
//             var district = ress.result.address_component.district;
//             that.setData({
//               nation: nation,
//               province: province,
//               city: city,
//               district: district
//             })
//           }
//         })
//       }
//     })
//   }
// })