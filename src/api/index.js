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
    }
}
