//1.导入JQuery
import $ from "jquery"
// const $  = require("jquery");
//导入css
import "./css/index.css"
//导入css
import "./css/index.less"
$(
    function(){
        $("li:odd").css("backgroundColor","red")
    }
)
class Person{
  
}
// 在webpack中只能处理部分es6语法，上边的就处理不了，这样，就要使用第三方的转化
//两套
// npm i babel-core babel-loader babel-plugin-transform-runtime -D
// npm i bable-preset-env babel preset-preset-stage-0 -D
