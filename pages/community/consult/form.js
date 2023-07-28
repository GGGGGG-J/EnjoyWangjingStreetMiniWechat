// pages/community/consult/form.js
const app = getApp();
let loading = false;
let loadingTop = false;
const animation = wx.createAnimation({
  duration: 400,
  timingFunction: 'ease-out',
  delay: 0,
  transformOrigin: '50% 50% 0'
}); //动画
// 格式化时间
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
// 将时间格式化为字符串
var timeStr =  hour + ':' + minute ;
var dateStr =  year + '-' + month + '-' + day ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: timeStr,
    date: dateStr,
    show: false,
    status: '',
    message: '',
    time: 0,
    showTop: false,
    statusTop: '',
    messageTop: '',
    timeTop: 2000
  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  setShow(status, message, time = 2000, fun = false) {
    if (loading) {
      return
    }
    loading = true;
    try {
      this.setData({
        status,
        message,
        time,
        show: true,
      })
      setTimeout(() => {
        this.setData({
          show: false,
        })
        loading = false;
        // 触发回调函数
        if (fun) {
          this.end()
        }
      }, time)
    } catch {
      loading = false;
    }
  },
  setShowTop(statusTop, messageTop, timeTop = 3000) {

    if (loadingTop) {
      return
    }

    loadingTop = true;
    try {
      this.setData({
        statusTop,
        messageTop,
        timeTop,
        showTop: true,
      })

      this.start_animation();
      setTimeout(() => {
        this.end_animation();
        loadingTop = false;
        this.triggerEvent("end")
      }, timeTop)

    } catch {
      loadingTop = false;
    }
  },
  /**
   * 轻提示回调函数
   */
  end() {
    wx.showToast({
      title: '触发回调方法',
    })
  },
  submit_data() {
    this.setShow("success", "提交成功，我们将在1个工作日内通知您");
  },
  onSubmit: function (event) {
    const formData = event.detail.value;
    console.log(formData); // 打印表单数据对象

    // 使用 wx.request 发送数据到后端API
    wx.request({
      url: app.globalData.apiUri + 'admin/community/TelephoneDirectoryAdmin/item',
      method: 'POST',
      data: formData,
      success: function(res) {
        console.log(res.data); // 打印后端API返回的数据
        // 处理成功提示信息
      },
      fail: function(res) {
        console.log(res.errMsg); // 打印错误信息
        // 处理失败提示信息
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  /**
   * 顶部弹出动画
   */
  start_animation() {
    animation.height('80rpx').step()
    this.setData({
      animation: animation.export(),
    })
  },
  end_animation() {
    animation.height('0rpx').step()
    this.setData({
      animation: animation.export()
    })
  },
})