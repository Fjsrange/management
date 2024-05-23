/**
 * Mr.Li
 * 2020/10/15
 * 存放项目中所有的验证方法
 */

// 登录-用户名校验
export function validateUsername(rule, value, callback) {
  // 需求：用户输入3-20位才可以通过校验
  if (value.length < 3 || value.length > 20) {
    callback(new Error("用户名长度在3-20位之间！"));
  } else {
    callback();
  }
}
