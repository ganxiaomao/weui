Page({
  data:{
    customerName: '',
    customerPhone: '',
    customerAddress: ''
  },
  getCustomerName:function(e){
    var value = e.detail.value;
    this.setData({
      customerName: value
    });
  },
  getCustomerPhone:function(e){
    var value = e.detail.value;
    this.setData({
      customerPhone: value
    });
  },
  getCustomerAddress:function(e){
    var value = e.detail.value;
    this.setData({
      customerAddress: value
    });
  },
  applyRequest:function(){
    wx.request({
      url: 'http://localhost:27005/teccom/installRequestApply',
      data:{
        customerName:this.data.customerName,
        customerPhone: this.data.customerPhone,
        customerAddress: this.data.customerAddress
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('success');
        wx.showToast({
          title: '申请提交成功',
          icon: 'success',
          duration: 3000,
          mask: true
        });
        console.log(res.data)
      },
      fail:function(){
        console.log('fail');
      },
      complete:function(){
        wx.showToast({
          title: '申请提交成功',
          icon: 'success',
          duration: 3000,
          mask: true
        });
        console.log('complete');
      }
    })
    
  }
});