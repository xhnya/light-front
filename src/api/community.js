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
    },
    reqInformation(params) {
        return request({
            url: '/community/article/getInformation',
            method: 'get',
            params: {
                page: params.page,
                limit: params.limit
            }
        })
    },
    reqInformationByGameId(params) {
        return request({
            url: '/community/article/getInformationByGameId',
            method: 'get',
            params: {
                page: params.page,
                limit: params.limit,
                gameId: params.gameId,
                type: params.type
            }
        })
    },
    reqHistoryList(title) {
        return request({
            url: '/community/history/getUserHistoryList',
            method: 'get',
            params: {
                title: title
            }

        })
    },
    reqDeleteHistory(ids) {
        return request({
            url: '/community/history/deleteHistory',
            method: 'post',
            data: ids
        })
    },
    reqDeleteHistoryAll() {
        return request({
            url: '/community/history/deleteHistoryAll',
            method: 'post'
        })
    },
    reqCollectionsList(params) {
        return request({
            url: '/community/collection/myList',
            method: 'get',
            params: {
                page: params.page,
                limit: params.limit,
                parentId: params.parentId
            }
        })
    },
    reqCollections(collection) {
        return request({
            url: '/community/collection/save',
            method: 'post',
            data: collection
        })
    },
    reqLike(likes) {
        return request({
            url: '/community/likes/save',
            method: 'post',
            data: likes
        })
    },
    reqMyPageList(param) {
        return request({
            url: '/community/article/getMyPageList',
            method: 'get',
            params: param
        })
    },
    reqGameCommunityList(params) {
        return request({
            url: '/community/article/getGameCommunityList',
            method: 'get',
            params: params
        })
    },
    reqAddPageComment(comment) {
        return request({
            url: '/community/comment/save',
            method: 'post',
            data: comment
        })
    }
}

export const getPageInfo = (id) => request({
    url: `community/article/info/${id}`,
    method: 'get',
})
