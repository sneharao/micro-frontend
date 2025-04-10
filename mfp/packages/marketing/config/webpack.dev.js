const { merge } = require('webpack-merge');// merge common config to dev config
const HTMLWebpackPlugin = require('html-webpack-plugin'); //inject script to html file
const commonConfig = require('./webpack.common'); //common config
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Module Federation plugin

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
        new ModuleFederationPlugin({
            name: 'marketing', // Name of the module global variable
            filename: 'remoteEntry.js', // File name to be used for remote entry
            exposes: {
                './MarketingApp': './src/bootstrap' // Expose the bootstrap file
            },
            shared: ['react', 'react-dom']
        }),
    ],
};

module.exports = merge(devConfig, commonConfig); // Merge common config with dev config
