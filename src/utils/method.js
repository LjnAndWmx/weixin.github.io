
var baseURL = '这边输入接口地址'
var method = {
  request: opt => {
    wx.request({
      url: `${baseURL}${opt.url}` || '',
      method: opt.method || 'get',
      success: opt.success || ((backData) => {
        console.log(backData);
      }),
      header: opt.header || {},
      data: opt.data || {},
      fail: opt.fail || (() => {})
    })
  }
}
// 对外暴露接口
module.exports.request = method.request