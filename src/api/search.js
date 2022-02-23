import request from "@/utils/request";

export const reqSearch = (params) => request({
    url: `/search/search`,
    method: 'get',
    params: params
})
