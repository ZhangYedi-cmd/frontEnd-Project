const webpack = require("webpack");
const path = require("path");

const f1 = () => {
    return webpack({
        entry: "./index.js",
        mode: "development",
        output: {
            filename: 'main.[contenthash].js', // 入口文件的name
            chunkFilename: "[name].chunk.[contenthash].js", // chunk
            path: path.resolve(__dirname, 'dist/contenthash'),
            clean: true
        }
    })
}


const f2 = () => {
    return webpack({
        entry: "./index.js",
        mode: "development",
        output: {
            filename: 'main.[contenthash].js', // 入口文件的name
            chunkFilename: "[name].chunk.[contenthash].js", // chunk
            path: path.resolve(__dirname, 'dist/contenthash'),
            clean: true
        },
        // 打包的chunkID一直不变的，更有利于长期缓存
        optimization : {
            moduleIds : "deterministic" ,
            chunkIds: "deterministic"
        }
    })
}

const f3 = () => {
    return webpack({
        entry: "./index.js",
        mode: "development",
        output: {
            filename: 'main.[contenthash].js', // 入口文件的name
            chunkFilename: "[name].chunk.[contenthash].js", // chunk
            path: path.resolve(__dirname, 'dist/contenthash'),
            clean: true
        },
        optimization : {
            moduleIds : "deterministic" ,
            chunkIds: "deterministic",
            runtimeChunk: true,
        }
    })
}

f3().run((err, stat) => {
    console.log(stat.toJson())
})