import game from '@/api/game'
import {getGameInfo} from '@/api/game'

const state = {
    gameInfo: {}
}
const mutations = {
    GETGAMEINFO(state, gameInfo) {
        state.gameInfo = gameInfo
    }
}
const actions = {
    async getGameInfos({commit}, id) {
        let result = await getGameInfo(id)
        if (result.code === 200) {
            commit("GETGAMEINFO", result.data.game)
        }

    }
}
const getters = {
    gameInfoView(state) {
        return state.gameInfo || {};
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}