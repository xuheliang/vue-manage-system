import axios from 'axios'
//import qs from 'qs'
const baseURL = "http://www.baidu.com"
const httpGET = function(url,options={}){
  return (data) => {
    return new Promise((resolve) => {
        axios({
          medthod: 'get',
          url: baseURL + url,
          params: data
        }).then(res => {
          resolve(res)
        }).catch(err => {
          console.log(err)
        })
    })
  }
} 
const httpPOST = function(url,options={}){
  return (data) => {
    return new Promise((resolve) => {
      axios({
        method: 'post',
        url: baseUrl + url,
        data: data
      }).then(res => {
        resolve(res)
      }).catch(err => {
        console.log(err)
      })
    })
  }
}

export default {
  get: httpGET,
  post: httpPOST
}