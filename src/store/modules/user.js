import {reqUserLogin, reqUserInfo} from '@/api/user'
import {getToken, removeToken, setToken} from "@/utils/token";

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
    },
    CLEAR(state) {
        //帮仓库中先关用户信息清空
        state.token = '';
        state.userInfo={};
        //本地存储数据清空
        removeToken();
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
    },
    //退出登录
    async userLogout({commit}) {
        commit("CLEAR");
        return 'ok';
    },


}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
