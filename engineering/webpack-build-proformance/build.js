/**
 * webpack 构建性能优化
 */

const webpack = require('webpack');
const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// speed 分析
const smp = new SpeedMeasurePlugin();

const swcConfig = require("./.swcrc.js")

let f1 = () => webpack({
    entry: './index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist/'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "swc-loader",
                    // loader: "babel-loader",
                    options: swcConfig()
                },
            },
        ]
    },
    plugins: [
        smp
    ]
})

//
// f1().run((err, stat) => {
//     // console.log(stat)
// })


/** Babel */
// SMP  ⏱
// General output time took 0.534 secs
//
// SMP  ⏱  Loaders
// babel-loader took 0.396 secs


/** SWC  */
// SMP  ⏱
// General output time took 0.252 secs
//
// SMP  ⏱  Loaders
// swc-loader took 0.135 secs

let cacheConfig = () => webpack({
    entry: './index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist/'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "swc-loader",
                    // loader: "babel-loader",
                    options: swcConfig()
                },
            },
        ]
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.cache'),
        name: 'cache',
        compression: 'gzip'
    }
})

// cacheConfig().run(() => {
//     console.log("build done!")
// })


let threadConfig = () => webpack({
    entry: './index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist/'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "thread-loader",
                        options: {
                            workers: 8,
                        },
                    }
                ]
            },
        ]
    },
})

threadConfig().run(() => {
    console.log("build done!")
})
