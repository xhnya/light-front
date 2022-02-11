import request from '@/api/request'

export default {
    getBannerList() {
        return request({
            url: '/admin/banner/bannerList',
            method: 'get',
        })
    }
}