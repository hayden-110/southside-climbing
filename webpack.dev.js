const path = require("path");
// var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: false,
    entry: './asset/script/cookie.js',
    output: {
        filename: "cookie-jar.[contentHash].js",
        path: path.resolve(__dirname, "./asset/script")
    },
    // plugins: [new HtmlWebpackPlugin()]
  }