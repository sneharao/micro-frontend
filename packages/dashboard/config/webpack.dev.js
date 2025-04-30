const { merge } = require('webpack-merge');// merge common config to dev config
const HTMLWebpackPlugin = require('html-webpack-plugin'); //inject script to html file
const commonConfig = require('./webpack.common'); //common config
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Module Federation plugin
const packageJson = require('../package.json'); // package.json file

const devConfig = {
    mode: 'development', // Set mode to development,
    output: {
        publicPath: 'http://localhost:8083/', // Public path for the output files
    },
    devServer: {
        port: 8082, // Port to run the server
        historyApiFallback: {
            index: '/index.html', // Serve index.html for all routes also in case of errors
        },
        headers: {
            'Access-Control-Allow-Origin': '*', // Allow CORS for all origins
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html', // Template file to use
        }),
        new ModuleFederationPlugin({
            name: 'dashboard', // Name of the module global variable
            filename: 'remoteEntry.js', // File name to be used for remote entry
            exposes: {
                './DashboardApp': './src/bootstrap' // Expose the bootstrap file
            },
            shared: packageJson.dependencies, // Shared dependencies between apps
        }),
    ],
};

module.exports = merge(devConfig, commonConfig); // Merge common config with dev config
