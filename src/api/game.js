import request from '@/utils/request'

export default {}
export const getGameInfo = (id) => request({
    url: `/game/game/gameInfo/${id}`,
    method: 'get',
})
