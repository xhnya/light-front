import request from '@/utils/request'

export default {
    reqAllWikiGameList() {
        return request({
            url: '/game/game/getWikiGameList',
            method: 'GET'
        })
    },
    reqSubmitFirst(menu) {
        return request({
            url: '/wiki/menu/save',
            method: 'post',
            data: menu
        })
    },
    reqMenuList(id) {
        return request({
            url: `/wiki/menu/getMenuList/${id}`,
            method: 'get'
        })
    },
    reqSaveWiki(params) {
        return request({
            url: `/wiki/menu/saveMenuAndPage`,
            method: 'post',
            data: params
        })
    },
    reqPageInfo(id) {
        return request({
            url: `/wiki/page/info/${id}`,
            method: 'get'
        })
    }
}
