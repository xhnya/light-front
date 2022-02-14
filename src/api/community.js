import request from "@/utils/request";

export default {
    indexListView(param) {
        return request({
            url: '/community/article/indexListView',
            method: 'GET',
            params: param
        })
    }
}

export const getPageInfo = (id) => request({
    url: `community/article/info/${id}`,
    method: 'get',
})
