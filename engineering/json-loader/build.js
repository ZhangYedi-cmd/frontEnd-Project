const webpack = require('webpack');
const path = require('path');

const f1 = () => {
    return webpack({
        entry: './index.js',
        mode: 'development',
        output: {
            filename: "main.[contenthash].js",
            path: path.resolve(__dirname, "dist/contenthash"),
            clean: true
        }
    })
}

f1().run((err, stat) => {
    console.log(stat)
})