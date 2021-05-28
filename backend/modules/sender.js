const nodemailer = require('nodemailer')
const emailConfig = require('../config')

const sender = params => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      transport: 'SMTP',
      host: 'smtp.163.com',
      port: 465,
      secure: true,
      auth: {
        // 替换成自己的发件人
        user: emailConfig.NetEmail.user,
        // 替换成自己的授权码
        pass: emailConfig.NetEmail.pass
      }
    })

    const mailOptions = {
      // 替换成自己的发件人
      from: emailConfig.NetEmail.user,
      // 替换成自己的收件人
      to: emailConfig.ReceiveEmial.addr,
      subject: '咨询邮件',
      html: `<strong>姓名：</strong>${params.name || ''}<br><br>
             <strong>邮箱：</strong>${params.email || ''}<br><br>
             <strong>手机：</strong>${params.phone || ''}<br><br>
             <strong>内容：</strong>${params.content || ''}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      try {
        transporter.close()
      } catch (e) {}

      if (error) {
        resolve({
          code: 500,
          message: '邮件发送失败'
        })
        return console.log(error)
      }

      resolve({
        code: 200,
        message: '邮件发送成功'
      })
    })
  })
}

module.exports = sender
