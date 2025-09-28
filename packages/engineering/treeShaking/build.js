const webpack = require("webpack"),
    path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const f1 = () => webpack({
    entry: './index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist/treeShaking/'),
        clean: true
    },
    mode: 'development',// 让webpack做标记，如果没有引用的模块就是unused 状态
    optimization: {
        usedExports: false,
    },
})
const f2 = () => webpack({
    entry: './index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist/treeShaking/'),
        clean: true
    },
    mode: 'development',
    optimization: {
        usedExports: true,
    },
})


const f3 = () => webpack({
    entry: './index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist/treeShaking/'),
        clean: true
    },
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
})

f2().run(() => {
    console.log("build done");
})