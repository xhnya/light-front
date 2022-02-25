import request from "@/utils/request";

export const reqUserLogin = (userLogin) => request({
    url: `/auth/login`,
    method: 'post',
    data: userLogin
})

export const reqUserInfo = () => request({
    url: `/user/user/getUserInfo`,
    method: 'post'
})
export const reqUserLoginForPhone = (userLogin) => request({
    url: `/auth/phoneAndEmail`,
    method: 'post',
    data: userLogin
})
export const reqFollowerList = () => request({
    url: '/user/favorite/list',
    method: 'get',
    params: {
        page: 1,
        limit: 10
    }
})

export default {
    smsPhone(phone) {
        return request({
            url: `/cloud/sms/send/${phone}`,
            method: 'get'
        })
    },
    reqUserInfoForView() {
        return request({
            url: '/user/userinfo/userInfo',
            method: 'get'
        })
    },
    updateUserInfo(userInfo) {
        return request({
            url: '/user/userinfo/update',
            method: 'post',
            data: userInfo
        })
    },
    reqAddFollow(favorite) {
        return request({
            url: '/user/favorite/save',
            method: 'post',
            data: favorite
        })
    },
    reqMyLikeMessage() {
        return request({
            url: '/user/message/getMyLikeList',
            method: 'get'
        })
    },
    changePassword(param) {
        return request({
            url: '/user/user/changePassword',
            method: 'post',
            data: param
        })
    },
    sendEmails(email) {
        return request({
            url: '/cloud/email/sendMailBox/'+email,
            method: 'get'
        })
    }
}
