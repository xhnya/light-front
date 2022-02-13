
import {getPageInfo} from '@/api/community'

const state = {
    pageInfo: {}
}
const mutations = {
    PAGEINFO(state, pageInfo) {
        state.pageInfo = pageInfo
    }
}
const actions = {
    async getPageInfos({commit}, id) {
        let result = await getPageInfo(id)
        if (result.code === 200) {
            commit("PAGEINFO", result.data.article)
        }

    }
}
const getters = {
    pageInfoView(state) {
        return state.pageInfo || {};
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
