// 引入axios（axios进行二次封装
import instance from '@/utils/request'

// 获取验证码图片
export const getCaptchaCode = () => instance.get('/prod-api/captchaImage')
