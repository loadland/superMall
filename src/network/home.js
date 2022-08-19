import { request } from 'network/request';

export function getHomeBenNer() {
  return request({
    url: '/home/multidata',
  })
}