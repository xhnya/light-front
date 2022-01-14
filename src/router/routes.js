import Login from "@/pages/login";
import Index from "@/pages";
import Type from "@/pages/type";
import Community from "@/pages/community";
import Collections from "@/pages/collections/index.vue";
import UserCollections from "@/pages/account/user/collections"
import UserGame from "@/pages/account/user/game"
import UserPage from "@/pages/account/user/page"
import UserOrder from "@/pages/account/user/order"

import AccountHistory from "@/pages/account/history/history";
import User from "@/pages/account/user";
import Message from "@/pages/message";
import Reply from "@/pages/message/reply";
import AtMe from "@/pages/message/at";
import Love from "@/pages/message/love/love";
import System from "@/pages/message/system";
import Whisper from "@/pages/message/whisper";
import UserHome from "@/pages/account/user/home";


import AllGame from "@/pages/game/all";


export default [
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
        name: 'CollectionsSeize',
        // meta:{show:true}
    },
    {
        path: "/account/history",
        component: AccountHistory,
        name: 'accountHistory',
        // meta:{show:true}
    },
    {
        path: '/account/user',
        component: User,
        name: 'user',
        children: [
            {
                path: 'home',
                name: 'userHome',
                component: UserHome
            },
            {
                path: "collections",
                component: UserCollections,
                name: 'UserCollections',
                // meta:{show:true}
            },
            {
                path: "game",
                component: UserGame,
                name: 'UserGame',
                // meta:{show:true}
            },
            {
                path: "page",
                component: UserPage,
                name: 'UserPage',
                // meta:{show:true}
            },
            {
                path: "order",
                component: UserOrder,
                name: 'UserOrder',
                // meta:{show:true}
            },
        ]
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
    {
        path: "/game/all",
        component: AllGame,
        name: 'AllGame',
        // meta:{show:true}
    },
]
