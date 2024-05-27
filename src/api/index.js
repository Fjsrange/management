// 引入axios（axios进行二次封装
import instance from "@/utils/request";

// 获取验证码图片
export const getCaptchaCode = () => instance.get("/prod-api/captchaImage");

// 登录
export const login = (data) => instance.post("/prod-api/login", data);

// 获取导航按
export const getRouters = () => instance.get("/prod-api/getRouters");
