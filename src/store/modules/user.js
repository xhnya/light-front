import {reqUserLogin, reqUserInfo} from '@/api/user'
import {getToken, setToken} from "@/utils/token";
const state = {
    token: getToken(),
    userInfo: {}
}
const mutations = {
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    }
}
const actions = {

    //登录
    async userLogin({commit}, data) {
        let result = await reqUserLogin(data)
        //将来经常通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            //用户已经登录成功且获取到token
            commit("USERLOGIN", result.data.token);
            //持久化存储token
            setToken(result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async getUserInfo({commit}) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data.result);
            return "ok"
        } else {
            return Promise.reject(new Error("faile"));
        }
    }


}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
