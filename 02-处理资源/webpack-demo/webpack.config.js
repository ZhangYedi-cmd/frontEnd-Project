const path = require("path")

module.exports = {
    // 入口
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),  // node 中的绝对路径
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    // 插件
    plugins: [],
    mode: "development"
}