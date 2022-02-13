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
    }
}
