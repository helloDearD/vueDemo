const path = require("path");
module.exports={
    //入口文件
    entry:path.join(__dirname,"./src/main.js"),
    //输出
    output:{
        path:path.join(__dirname,"./dist"),
        filename:'main.js'
    }
}