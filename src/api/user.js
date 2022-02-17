import request from "@/utils/request";

export const reqUserLogin = (userLogin) => request({
    url: `/auth/login`,
    method: 'post',
    data: userLogin
})

export const reqUserInfo =()=>request({
    url: `/user/user/getUserInfo`,
    method: 'post'
})
