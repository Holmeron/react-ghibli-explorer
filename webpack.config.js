const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
      path.resolve(__dirname, 'src/index.js'),
      path.resolve(__dirname, 'src/styles/main.scss')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'build.js'
    },
    context: path.resolve(__dirname, 'src'),
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
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    'css-loader',
                    {
                      loader: 'sass-loader',
                      query: {
                        sourceMap: false,
                      },
                    },
                  ],
                  publicPath: '../'
                })
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              use: 'file-loader'
            }
        ],
    },
    plugins: [
      new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true })
    ]
};
