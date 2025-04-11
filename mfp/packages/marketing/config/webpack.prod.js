const { merge } = require('webpack-merge'); // merge common config to prod config
const commonConfig = require('./webpack.common'); //common config
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Module Federation plugin
const packageJson = require('../package.json'); // package.json file
const { mode } = require('../../container/config/webpack.dev');
const domain = process.env.PRODUCTION_DOMAIN; // Get production domain from environment variable

const prodConfig = {
    mode: 'production', // Set mode to production
    output: {
        filename: '[name].[contenthash].js', // Output file name with content hash
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing', // Name of the module global variable
            filename: 'remoteEntry.js', // Remote entry file name
            exposes: {
                './MarketingApp': './src/bootstrap' // Expose the MarketingApp module
            },
            shared: packageJson.dependencies, // Shared dependencies between apps
        }),
    ],
};

module.exports = merge(prodConfig, commonConfig); // Merge common config with prod config