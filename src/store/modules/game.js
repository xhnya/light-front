import game from '@/api/game'
import {getGameInfo, reqGameTypeList} from '@/api/game'

const state = {
    gameInfo: {},
    gameType: []
}
const mutations = {
    GETGAMEINFO(state, gameInfo) {
        state.gameInfo = gameInfo
    },
    GETGAMETYPE(state, gameType) {
        state.gameType = gameType
    }
}
const actions = {
    async getGameInfos({commit}, id) {
        let result = await getGameInfo(id)
        if (result.code === 200) {
            commit("GETGAMEINFO", result.data.game)
        }
    },
    async getGameTypeList({commit}) {
        let result = await reqGameTypeList()
        if (result.code === 200) {
            commit("GETGAMETYPE", result.data.page.list)
        }
    }
}
const getters = {
    gameInfoView(state) {
        return state.gameInfo || {};
    },
    gemeTypeListView(state) {
        return state.gameType || [];
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
