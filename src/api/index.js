import request from '@/utils/request'

export default {
    getBannerList() {
        return request({
            url: '/admin/banner/bannerList',
            method: 'get',
        })
    },
    getHotGameRankList(type) {
        return request({
            url: 'game/rank/getHotGameRankList',
            method: 'get',
            params: {
                type: type
            }
        })
    },
    getIndexPageList() {
        return request({
            url: 'community/index/indexHotPageList',
            method: 'get'
        })
    },
    getNewReleaseGame() {
        return request({
            url: 'game/game/getNewReleaseGame',
            method: 'get'
        })
    },
    getGamePageInfoLit() {
        return request({
            url: 'community/article/getGamePageInfoLit',
            method: 'get'
        })
    },
    reqUserNeedKnow() {
        return request({
            url: 'community/article/getUserNeedKnow',
            method: 'get'
        })
    },
    reqBannerGame(type) {
        return request({
            url: 'game/recommend/bannerList',
            method: 'get',
            params: {
                type: type
            }
        })
    }
}
