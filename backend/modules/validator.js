const WeValidator = require('we-validator')

const oValidator = new WeValidator({
  rules: {
    name: {
      required: true,
      chinese2to8: true
    },
    phone: {
      required: true,
      mobile: true
    },
    email: {
      required: true,
      email: true
    },
    content: {
      required: true,
      regex: /^.{2,200}$/
    }
  },
  messages: {
    name: {
      required: '姓名不能为空',
      chinese2to8: '您的姓名太长了'
    },
    phone: {
      required: '手机号不能为空',
      mobile: '手机号不正确'
    },
    email: {
      required: '邮箱不能为空',
      email: '邮箱格式不正确'
    },
    content: {
      required: '内容不能为空',
      regex: '内容太长啦，应该小于200个字哦'
    }
  }
})

const validator = (ctx, params) => {
  return oValidator.checkData(params, data => {
    ctx.body = {
      status: 400,
      message: data.msg
    }
  })
}

module.exports = validator
