/*
能发送Ajax请求的函数
包装axios
返回值是promise对象
*/

import axios from "axios"
import qs from "querystring"
const instance = axios.create({})

export default function ajax(url,data={},method='GET') {
  return new Promise((resolve, reject) => {
    const options = {}
    let promise
    if (method == "GET"){
      options.params = data
      promise = instance.get(url, options)
    }else{
      promise = instance.post(url, qs.stringify(data),options)
    }
    // if (method==='GET'){
    //   //return axios.get(url, {params: data})
    //   // 拼query请求参数串
    //   let queryStr=''
    //   Object.keys(data).forEach(key => {
    //     const value = data[key]
    //     queryStr += `${key}=${value}&`
    //   })
    //   if (queryStr !== ''){
    //     queryStr=queryStr.substring(0,queryStr.length-1)
    //     url += '?' + queryStr
    //   }
    //   promise = axios.get(url)
    // }else{
    //   promise = axios.post(url,qs.stringify(data),{headers: {'Content-Type':'application/x-www-form-urlencoded'}})
    // }
    promise.then(response =>{
      resolve(response.data)
    }).catch(error =>{
      reject(error)
    })
  })
}
