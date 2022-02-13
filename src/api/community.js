import request from "@/utils/request";

export const getPageInfo = (id) => request({
    url: `community/article/info/${id}`,
    method: 'get',
})
