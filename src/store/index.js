import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import community from "@/store/modules/community";
import user from "@/store/modules/user";
import wiki from "@/store/modules/wiki"
import search from "@/store/modules/search";
Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        game,
        community,
        user,
        wiki,
        search
    }
})

export default store
