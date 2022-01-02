module.exports ={
    //关闭eslint
    lintOnSave:false,
    devServer: {
        port: 80,     // 端口号
    },
    devServer:{
        proxy:{
            '/xhn':{
                target: 'http://localhost:88',
                //pathRewrite:{'^/api':''},路径重写
            }
        }
    }
}