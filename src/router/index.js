//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '@/pages/login/index.vue'
import Index from '@/pages/index.vue'
import Type from '@/pages/type/index.vue'
import Community from '@/pages/community/index.vue'
import Message from '@/pages/message'
import Reply from '@/pages/message/reply/index.vue'
import AtMe from  '@/pages/message/at'
import Love from  '@/pages/message/love/love.vue'
import System from '@/pages/message/system'
import Whisper from '@/pages/message/whisper'
import Collections from '@/pages/collections'


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

export default new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login,
            name: 'login',
            //meta:{isHideFooter:true}
        },
        {
            path: "/",
            name: 'index',
            component: Index
            // meta:{show:true}
        },
        {
            path: "/type",
            component: Type,
            name: 'type',
            // meta:{show:true}
        },
        {
            path: "/community",
            component: Community,
            name: 'community',
            // meta:{show:true}
        },
        {
            path: "/collections",
            component: Collections,
            name: 'collections',
            // meta:{show:true}
        },
        {
            path: "/message",
            component: Message,
            name: 'message',
            meta: {
                isHideFooter: true
            },
            children: [
                {
                    path: 'reply',
                    name: 'reply',
                    component: Reply,
                },
                {
                    path: 'atme',
                    name: 'atme',
                    component: AtMe,
                },
                {
                    path: 'love',
                    name: 'love',
                    component: Love,
                },
                {
                    path: 'system',
                    name: 'system',
                    component: System,
                },
                {
                    path: 'whisper',
                    name: 'whisper',
                    component: Whisper,
                }]
        },

    ],
    // 页面跳转时候回到最上面
    scrollBehavior (to, from, savedPosition) {
        return { y: 0 }
    }
})

