import axios from "axios";
import { Message } from "element-ui";

const instance = axios.create({
  baseURL: "http://tech.wolfcode.cn:23683",
  timeout: 6000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 配置请求头
    const token = localStorage.getItem("token");
    console.log("token11111", token);
    // const token = localStorage.getItem("token");
    // console.log("token11111", token);
    if (
      token &&
      !config.url.endsWith("/login") &&
      !config.url.endsWith("/captchaImage")
    ) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    const resData = res.data;
    // 如果返回的状态码不是200，就抛出错误并返回，提升性能
    if (resData.code !== 200) {
      Message({
        message: resData.msg || "系统错误",
        type: "error",
        duration: 1.5 * 1000,
      });
      // Message.error(resData.msg);
      return false;
    }
    return resData;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
