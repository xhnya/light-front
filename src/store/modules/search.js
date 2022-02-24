import {reqSearch} from '@/api/search'

const state = {
    search: [],
    keyword: ""
}
const mutations = {
    SEARCH(state, search){
        state.search = search
    },
    SEARCHKEYWORD(state, keyword){
        state.keyword = keyword
    }
}
const actions = {
    async getSearch({commit}, data) {
        let result = await reqSearch(data)
        if (result.code == 200) {
            commit("SEARCH", result.data.result);
            return "ok";
        } else {
            return Promise.reject(new Error("搜索失败"));
        }
    },
    async searchKeyword({commit}, data) {
        commit("SEARCHKEYWORD", data);
        return "ok";

    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
