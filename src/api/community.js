import request from "@/utils/request";

export default {
    indexListView(param) {
        return request({
            url: '/community/article/indexListView',
            method: 'GET',
            params: param
        })
    },
    getCommunityListView() {
        return request({
            url: '/community/community/getCommunityListView',
            method: 'GET'
        })
    },
    reqSaveArticle(article) {
        return request({
            url: '/community/article/saveUserArticle',
            method: 'post',
            data: article
        })
    },
    getCascaderOptionsData() {
        return request({
            url: '/community/community/getCommunityCascader',
            method: 'get'
        })
    }
}

export const getPageInfo = (id) => request({
    url: `community/article/info/${id}`,
    method: 'get',
})
