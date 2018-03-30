Page({
  applyRequest:function(){
    wx.request({
      url: 'http://localhost:27005/teccom/installRequestApply',
      data:{
        customerName:'甘震',
        customerPhone:'15345519552',
        customerAddress:'合肥市'
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