const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      javascript : path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
              test: /\.html$/,
              use: 'file-loader'
            },{
              test: /\.js$/,
              exclude: /node_modules/,
              use: [{
                loader :'babel-loader',
                query:{
                      presets:['react','es2015','stage-2']
                }
              }],

            },{
              test: /\.css$/,
              use:[{
                loader: 'style-loader'
              },{
                loader: 'css-loader'
              }]
            },{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [{
                    loader:'css-loader'
                  },{
                    loader:'sass-loader'
                  }]
                })
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              use: 'file-loader'
            }
        ],
    },
    plugins: [
      new ExtractTextPlugin('build.css'),
      new CopyWebpackPlugin([
            { from: 'public/index.html', to: 'index.html' }
      ])
    ]
};
