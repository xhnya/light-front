import request from '@/utils/request'

export default {
    getGameTypeList() {
        return request({
            url: '/game/type/list',
            method: 'get'
        })
    },
    getGameTagList(val) {
        return request({
            url: '/game/tags/list',
            method: 'get',
            params: {
                limit: val.size
            }
        })
    },
    selectRecommendListView(type) {
        return request({
            url: '/game/recommend/listView',
            method: 'get',
            params: {
                type: type
            }
        })
    },
    reqMyGameList() {
        return request({
            url: '/game/game/reqMyGameList',
            method: 'get'
        })
    },
    reqGameTypeForType(val) {
        return request({
            url: '/game/game/getGameTypeForType',
            method: 'get',
            params: {
                id: val
            }
        })
    },
    reqGameTypeForTypeTop(val) {
        return request({
            url: '/game/game/getGameTypeForTypeTop',
            method: 'get',
            params: {
                id: val
            }
        })
    },
    reqAllGameList(params) {
        return request({
            url: '/game/game/getAllGameList',
            method: 'get'
        })
    },
    reqEvaluating() {
        return request({
            url: '/game/score/getEvaluating',
            method: 'get'
        })
    },
    reqAddGameComment(content) {
        return request({
            url: '/game/content/save',
            method: 'post',
            data: content
        })
    },
    reqGameCommentList(params) {
        return request({
            url: '/game/content/list',
            method: 'get',
            params: params
        })
    }
}
export const getGameInfo = (id) => request({
    url: `/game/game/gameInfo/${id}`,
    method: 'get',
})
export const reqGameTypeList = () => request({
    url: '/game/type/list',
    method: 'get'
})
