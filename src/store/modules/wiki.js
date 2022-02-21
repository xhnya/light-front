import {getPageInfo} from "@/api/community";

const state = {
    menuId: 0,
    gid: 0
}
const mutations = {
    MENUID(state, menuId) {
        state.menuId = menuId

    },
    GAMEID(state, gid){
        state.gid = gid
    }
}
const actions = {
    async getMenuId({commit}, id) {
        commit("MENUID", id)
    },
    async getMenuGameId({commit}, id){
        commit("GAMEID", id)
    }
}
const getters = {
}

export default {
    state,
    mutations,
    actions,
    getters
}
