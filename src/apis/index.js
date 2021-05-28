import request from '@/utils/request'

export default {
  // 发送邮件
  sendEmail(params) {
    return request({
      url: '/api/sendEmail',
      method: 'post',
      data: params
    })
  }
}
