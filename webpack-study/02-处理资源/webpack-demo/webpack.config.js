const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    // 入口
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),  // node 中的绝对路径
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 不处理node_modules中的文件
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 小于10kb的图片转换成base64
                        maxSize: 10 * 1024  // 10kb
                    }
                }
            }
        ],
    },
    // 插件
    plugins: [new ESLintPlugin({
        // 检测的文件

    })],
    mode: "production"
}