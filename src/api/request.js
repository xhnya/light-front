//axios二次封装
import axios from "axios";
// 进度条引入
import nprogress from "nprogress";
//进度条样式
import "nprogress/nprogress.css";
//第一步，利用axios对象的方法，创建一个axios的实例
const requests =axios.create({
    //接口中都带有的，在请求路径中都带上
    //让http://xxxxxx变成http://xxxxxx/api
    baseURL:"/xhn",
    //超时时间
    timeout:5000,
});
//请求拦截器，在发请求之前，请求拦截器可以检测到
requests.interceptors.request.use((config)=>{
    // 进度条开始
    nprogress.start();
    //config配置对象，headers很重要
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //结束
    nprogress.done();
    //服务器成功的回调
    return res.data;
},(error)=>{
    //响应失败的呃回调函数
    return Promise.reject(new Error('faile'));

})
export default requests;


