const webpack = require('webpack');
const path = require('path');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'); // 打包体积分析
const TerserPlugin = require("terser-webpack-plugin");

let f1 = () => webpack({
    entry: './index.js',
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve(__dirname, "dist/"),
        clean : true
    },
    plugins: [ new BundleAnalyzerPlugin()],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
})

f1().run(() => {
    console.log("build done")
})