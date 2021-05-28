const Koa = require('koa')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const email = require('./routes/email.js')

const app = new Koa()

// error handler
onerror(app)

app.use(bodyparser())
app.use(json())

app.use(
  cors({
    origin: 'http://106.13.2.80:3333',
    maxAge: 5,
    credentials: true,
    allowMethods: ['POST'],
    allowHeaders: ['Content-Type', 'X-Requested-With', 'Accept']
  })
)

// routes
app.use(email.routes(), email.allowedMethods())

app.use(async ctx => {
  ctx.body = `error: ${ctx.status}`
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(9999)

console.log('app: email, port: 9999')

module.exports = app
