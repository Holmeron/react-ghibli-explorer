const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                   { loader : 'style-loader'},
                   { loader : 'css-loader'},
                   { loader : 'sass-loader'}
                 ]
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [{
                loader :'babel-loader',
                query:{
                      presets:['react','es2015','stage-2']
                }
              }],

            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              use: "file-loader"
            }
        ]
    }
};
