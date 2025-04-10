const { merge } = require('webpack-merge');// merge common config to dev config
const HTMLWebpackPlugin = require('html-webpack-plugin'); //inject script to html file
const commonConfig = require('./webpack.common'); //common config
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Module Federation plugin
const packageJson = require('../package.json'); // package.json file

const devConfig = {
    mode: 'development', // Set mode to development,
    devServer: {
        port: 8080, // Port to run the server
        historyApiFallback: {
            index: '/index.html', // Serve index.html for all routes also in case of errors
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html', // Template file to use
        }),
        new ModuleFederationPlugin({
            name: 'container', // Name of the module global variable
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js', // Remote entry file for marketing app
            },
            shared: packageJson.dependencies, // Shared dependencies between apps
        }),
    ],
};

module.exports = merge(devConfig, commonConfig); // Merge common config with dev config
