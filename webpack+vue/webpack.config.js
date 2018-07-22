const path = require("path");
const webpack =require("webpack");
//导入html-webpack-plugin
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    //入口文件
    entry:path.join(__dirname,"./src/main.js"),
    //输出
    output:{
        path:path.join(__dirname,"./dist"),
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,use:["style-loader","css-loader","less-loader"]
            },
            {   //使用limit参来控制打包成为base64,使用name控制名字 name=[hash:8]-[name].[ext]
                test:/\.(png|jpg|gif|bmp|jpeg)$/,use:"url-loader?limit=204800&name=[name].[ext]"
            },
            {   //使用limit参来控制打包成为base64,使用name控制名字 name=[hash:8]-[name].[ext]
                test:/\.(tff|eot|svg|woff|woff2)$/,use:"url-loader"
            },
            {
                test:/\.js$/,use:'babel-loader',exclude:'/node_modules'
            }
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    },
    devServer:{
        //devservcer的第二种配置形式，相对比较麻烦,引入webpack,配置plugin
        open:true,//自动打开浏览器
        port:3000,//设置端口
        contentBase:"src",
        hot:true,//热更新
    },
    plugins:[
        //配置插件节点
       new webpack.HotModuleReplacementPlugin(),
       //在内存中的html页面插件
       new htmlWebpackPlugin({
        //指定模板页面,生成内存的页面,并且不要写bundel的引用了，它会自动生成
        template:path.join(__dirname,"./src/index.html"),
        filename:'index.html'
       })
    ]
}