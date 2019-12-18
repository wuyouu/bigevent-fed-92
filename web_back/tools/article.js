// 用来进行文章的接口处理操作
var article = {
  // 设置getCate方法，用来进行分类信息获取接口操作
  getCate: function (options) {
    $.ajax({
      url: GET_CATE,
      success: function (res) {
        // 1.1 检测响应是否成功
        if (res.code === 200) {
          options.success(res);
        }
      }
    });
  },
  // 设置delCate方法，用来进行分类信息删除接口操作
  delCate: function (options) {
    $.ajax({
      type: 'post',
      url: DEL_CATE,
      data: {
        id: options.data.id
      },
      success: function (res) {
        // 3.1 检测响应的删除状态是否成功
        if (res.code === 200) {
          options.success();
        }
      }
    })
  }
};