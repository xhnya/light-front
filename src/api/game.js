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
    }
}
export const getGameInfo = (id) => request({
    url: `/game/game/gameInfo/${id}`,
    method: 'get',
})
