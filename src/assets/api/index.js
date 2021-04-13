import request from '@/utils/api'
export const fetchData = query => {
  return request({
    url: './table.json',
    method: 'get',
    params: query
  })
}