import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import community from "@/store/modules/community";
import user from "@/store/modules/user";
Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        game,
        community,
        user
    }
})

export default store
