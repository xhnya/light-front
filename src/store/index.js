import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import community from "@/store/modules/community";

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        game,
        community
    }
})

export default store
