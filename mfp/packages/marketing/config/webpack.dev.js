const { merge } = require('webpack-merge');// merge common config to dev config
const HTMLWebpackPlugin = require('html-webpack-plugin'); //inject script to html file
const commonConfig = require('./webpack.common'); //common config


const devConfig = {
    mode: 'development', // Set mode to development,
    devServer: {
        port: 8081, // Port to run the server
        historyApiFallback: {
            index: '/index.html', // Serve index.html for all routes also in case of errors
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html', // Template file to use
        }),
    ],
};

module.exports = merge(devConfig, commonConfig); // Merge common config with dev config
