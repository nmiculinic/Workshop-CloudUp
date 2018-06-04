'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    context: __dirname,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].js.map'
    },

    devtool: 'source-map',

    resolve: {
        extensions: [
            '.webpack.js',
            '.web.js',
            '.tsx',
            '.ts',
            '.js',
            '.json'
        ],
        // alias: {
        //     react: path.resolve('./node_modules/react'),
        //     React: path.resolve('./node_modules/react')
        // }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: 'tslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'awesome-typescript-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: {
                    loader: 'raw-loader'
                },
                exclude: /node_modules/,
            }]
    },

    externals: {
    }
}