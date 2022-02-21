import {getPageInfo} from "@/api/community";

const state = {
    menuId: 0
}
const mutations = {
    MENUID(state, menuId) {
        state.menuId = menuId
    }
}
const actions = {
    async getMenuId({commit}, id) {
        commit("MENUID", id)
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
