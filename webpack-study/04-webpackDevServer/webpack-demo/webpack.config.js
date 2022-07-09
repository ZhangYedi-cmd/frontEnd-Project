/**
 * @author Yedi Zhang --Tust
 * @date 2022/6/13 18:42
 * @email 178320369@qq.com
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        sum: "./src/module/sum.js",
        // app: './src/module/print.js'
    },
    output: {
        filename: `[name]-bundle.js`,
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(), // 自动清理上次打包的dist目录
        new htmlWebpackPlugin(
            {
                title: "Output Management"
            }
        )
    ],
    devServer: {
        // host: "localhost",
        // port: "3000",
        // open: true,// 自动打开浏览器
        hot: true
    },
    mode: "development"
}