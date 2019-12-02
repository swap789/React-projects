const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    // output: {
    //     filename: "build.js",
    //     path: path.join(__dirname, "/dist")
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }]
    },
    plugins: [htmlPlugin]
}