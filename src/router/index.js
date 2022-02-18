//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from "./routes";
import store from "@/store";

//保存VueRouter.prototype.push
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//第一个参数，往那传
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {

        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {
        }, () => {
        });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {

        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {
        }, () => {
        });
    }
}

let router = new VueRouter({
    routes,
    // 页面跳转时候回到最上面
    scrollBehavior(to, from, savedPosition) {
        return {y: 0}
    }
})


//全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
    //to:获取到要跳转到的路由信息
    //from：获取到从哪个路由跳转过来来的信息
    //next: next() 放行  next(path) 放行
    //方便测试 统一放行
    //  next();
    //获取仓库中的token-----可以确定用户是登录了
    let token  = store.state.user.token;
    let id = store.state.user.userInfo.id;
    //用户登录了
    if(token){
        //已经登录而且还想去登录------不行
        if(to.path=="/login"){
            next('/');
        }else{
            //已经登陆了,访问的是非登录与注册
            //登录了且拥有用户信息放行
            if(id){
                next();
            }else{
                //登陆了且没有用户信息
                //在路由跳转之前获取用户信息且放行
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token失效从新登录
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }
    }else{
        //未登录：不能去个人中心
        //未登录去上面这些路由-----登录
        let toPath = to.path;
        if(toPath.indexOf('/message')!=-1 || toPath.indexOf('/addPage')!=-1){
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
            next('/login?redirect='+toPath);
        }else{
            //去的不是上面这些路由（home|search|shopCart）---放行
            next();
        }

    }
});

export default router;
