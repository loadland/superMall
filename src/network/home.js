import { request, response } from 'network/request';

export function getHomeBenNer() {
  return request({
    url: '/home/multidata',
  })
}

// // 大佬写的接口暂时拿来用
// export function getHomeDate() {
//   return response({
//     url: '/test/index',
//   })
// }

export function getHomeDate(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}