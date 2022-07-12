const webpack = require("webpack"),
    path = require('path');


const treeShaking = () => webpack({
    entry: './index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist/treeShaking/'),
        clean: true
    },
    mode: 'development',
    optimization: {
        usedExports: false
    }
})

treeShaking().run(() => {
    console.log("build done");
})