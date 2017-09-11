const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
      path.resolve(__dirname, 'src/index.js'),
      path.resolve(__dirname, 'src/styles/main.scss')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
      contentBase: 'dist/',
      publicPath: '/',
      historyApiFallback: true
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [{
                loader :'babel-loader',
                query:{
                      presets:['react','es2015','stage-2'],
                      plugins: ['transform-runtime']
                }
              }]
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    'css-loader',
                    'resolve-url-loader',
                    {
                      loader: 'sass-loader',
                      query: {
                        sourceMap: false,
                      },
                    },
                  ],
                })
            },
            { test: /\.(png|jpg|gif|svg)$/, use: 'file-loader?name=images/[name].[ext]' },
            { test: /\.eot$/, use: 'file-loader' },
            { test: /\.(woff|woff2)?$/, use: 'file-loader' },
            { test: /\.[ot]tf$/, use: 'file-loader' }
        ],
    },
    plugins: [
      new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
      new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
      new CopyWebpackPlugin([
            { from: './index.html', to: './' }
      ])
    ]
};
