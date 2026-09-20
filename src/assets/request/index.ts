
import axios,{ AxiosRequestConfig, AxiosResponse } from "axios";
//创建实列
const request = axios.create({
  baseURL:'https://lianghj.top:8888/api/private/v1/',
  timeout:5000,
  headers:{
     
  }
})

//请求拦截器
request.interceptors.request.use(    
  (config:AxiosRequestConfig) => {        
      // // 每次发送请求之前判断vuex中是否存在token        
      // // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
      // const token = store.state.token;        
      // token && (config.headers.Authorization = token);        
      // return config;    
      // config.headers =config.headers || {}
      // if(localStorage.getItem('token')){
      //   config.headers.Authorization = localStorage.getItem('token') ||''
      // }
      return config;
  },
  err => {
    // 请求发生错误时的处理 抛出错误
   Promise.reject(err)
}    
)

//响应拦截器
request.interceptors.response.use((res:AxiosResponse)=>{
    // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
    // res 是所有相应的信息
    // const code:number=res.data.data.code
    // if(code!=200){
    //   return Promise.reject(res)
    // }
    return res.data
},(err)=>{
  console.log(err)
})

export default request
