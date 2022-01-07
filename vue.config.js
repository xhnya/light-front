module.exports ={
    //关闭eslint
    lintOnSave:false,
    devServer:{
        port: 80,
        open: true,
        proxy:{
            '/xhn':{
                target: 'http://localhost:88',
                //pathRewrite:{'^/api':''},路径重写
            }
        }
    }
}