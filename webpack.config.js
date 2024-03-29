var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'app'),
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css')
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'react-hot',
            include: path.join(__dirname, 'app')
        }, {
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            },
            include: path.join(__dirname, 'app'),
            exclude: /node_modules/
        }, {
            test: /\.*css$/, loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'file-loader?'
        }]
    }
};
