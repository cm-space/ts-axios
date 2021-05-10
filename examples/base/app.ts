import axios from '../../src'

axios({
  url: '/base/get',
  method: 'get',
  params: {
    a: 'b',
    c: 'd',
    d: ['base', 'get', 'post']
  }
})
