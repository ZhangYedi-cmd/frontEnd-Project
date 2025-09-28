const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin')

const f1 = () => webpack({
    entry: './modules/index.js',
    mode: 'none',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/'),
    },
    plugins:[new htmlWebpackPlugin()]
})

f1().run(res => {
    console.log("build done")
})
