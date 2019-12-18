// 使用user.js对项目中与用户操作有关的请求功能进行保存
var user = {
  // 设置login方法，用来进行登录请求操作
  login: function (options) {
    // 如果使用函数，推荐进行参数传递的过程分析
    $.ajax({
      type: 'post',
      url: LOGIN, // 将地址进行特殊处理，方便后期维护，并且避免修改
      data: {
        user_name: options.data.username,
        password: options.data.password
      },
      success: function (res) {
        // 根据res.code进行成功失败检测
        if (res.code === 200) {
          options.success();
        } else {
          options.fail();
        }
      }
    });
  },
  // 设置logout方法，用来进行退出处理
  logout: function (options) {
    $.ajax({
      type: 'post',
      url: LOGOUT,
      success: function (res) {
        if (res.code === 200) {
          options.success();
        } else {
          options.fail();
        }
      }
    })
  },
  // 设置getUser方法，用来获取用户基本信息(头像和名称)
  getUser: function (options) {
    $.ajax({
      url: GET_USER,
      success: function (res) {
        if (res.code === 200) {
          options.success(res.data);
        }
      }
    });
  },
  // 设置getUserInfo方法，用来获取用户的详细信息（user.html中使用）
  getUserInfo: function (options) {
    $.ajax({
      url: GET_USER_INFO,
      success: function (res) {
        // 1.1 检测响应是否成功
        if (res.code === 200) {
          options.success(res);
        }
      }
    });
  }
};