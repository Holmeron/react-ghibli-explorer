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
      publicPath: '/'
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
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=images/[name].[ext]' },
            { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?&name=fonts/[name].[ext]' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
            { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]' }
        ],
    },
    plugins: [
      new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
      new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
      new CopyWebpackPlugin([
            { from: './public/index.html', to: './' }
      ])
    ]
};
