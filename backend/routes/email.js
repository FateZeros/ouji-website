const router = require('koa-router')()

const validator = require('../modules/validator')
const sender = require('../modules/sender')

router.post('/api/sendEmail', async ctx => {
  const params = Object.assign({}, ctx.request.body)

  if (validator(ctx, params)) {
    const sendResult = await sender(params)
    ctx.body = sendResult
  }
})

module.exports = router
