const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                  {
                    presets:['react','es2015']
                  }
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: "file-loader"
            }
        ]
    }
};
