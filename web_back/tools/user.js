// 使用user.js对项目中与用户操作有关的请求功能进行保存
var user = {
  // 设置login方法，用来进行登录请求操作
  login: function (data, success) {
    $.ajax({
      type: 'post',
      url: LOGIN, // 将地址进行特殊处理，方便后期维护，并且避免修改
      data: {
        user_name: data.user_name,
        password: data.password
      },
      success: success
    });
  }
};