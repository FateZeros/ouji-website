import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'develop' ? '/CORS' : 'http://106.13.2.80:9999'

// create an axios instance
const service = axios.create({
  baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 15 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // console.log(res, '=== request ===')
    return res
  },
  error => {
    console.log('request error:', error)
    return Promise.reject(error)
  }
)

export default service
