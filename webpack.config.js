const path = require("path")


//单入口
module.exports = {
    // entry: ["./public/index.js","./public/index2.js"],
    entry: './public/index.js',
    output: {
        path:path.resolve(__dirname,"build"),
        filename: "[name].js"
    },
    devServer: {
        contentBase:"./build", //设置服务器访问的基本目录
        host:"localhost", //服务器IP地址
        port:9090, //端口
        open:true //自动打开页面
    }
}

//多入口
// module.exports = {
//     entry: {
//         pageOne:'./public/pageOne/index.js',
//         pageTwo:'./public/pageTwo/index.js'
//     },
//     output: {
//         path:path.resolve(__dirname,"build"),
//         filename: "[name].js"
//     }
// }