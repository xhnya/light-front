import Login from "@/pages/login";
import Index from "@/pages";
import Type from "@/pages/type";

import Community from "@/pages/community/index.vue";
import CollectionsContent from "@/pages/community/content.vue";

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

import WikiIndex from "@/pages/wiki/home"

import AllGame from "@/pages/game/all";
import GameInfo from "@/pages/game/home/index.vue";
import GameInfoIndex from  "@/pages/game/home/home.vue"
import GameInfoAtlas from  "@/pages/game/home/atlas.vue"
import GameInfoCommunity from  "@/pages/game/home/community.vue"
import GameInfoInformation from  "@/pages/game/home/information.vue"
import GameInfoStrategy from  "@/pages/game/home/strategy.vue"
import GameInfoWiki from  "@/pages/game/home/wiki.vue"

import Atlas from "@/pages/game/atlas"

import Info from "@/pages/info/index"


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
        children: [
            {
                path: "content",
                component: CollectionsContent,
                name: 'CollectionsContent',
            }
        ]
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
    {
        path: "/game/:id",
        component: GameInfo,
        name: 'GameInfo',
        // meta:{show:true}
        children: [
            {
                path: "index",
                component: GameInfoIndex,
                name: 'GameInfoIndex',
            },
            {
                path: "atlas",
                component: GameInfoAtlas,
                name: 'GameInfoAtlas',
            },
            {
                path: "community",
                component: GameInfoCommunity,
                name: 'GameInfoCommunity',
            },
            {
                path: "information",
                component: GameInfoInformation,
                name: 'GameInfoInformation',
            },
            {
                path: "strategy",
                component: GameInfoStrategy,
                name: 'GameInfoStrategy',
            },
            {
                path: "wiki",
                component: GameInfoWiki,
                name: 'GameInfoWiki',
            },
        ]
    },
    {
        path: "/wiki",
        component: WikiIndex,
        name: 'wiki',
        // meta:{show:true}
    },
    {
        path: "/info",
        component: Info,
        name: 'info',
        // meta:{show:true}
    },
    {
        path: "/atlas/:id",
        component: Atlas,
        name: 'Atlas',
        // meta:{show:true}
    },

]
