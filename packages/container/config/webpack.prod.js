const { merge } = require('webpack-merge'); // merge common config to dev config
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Module Federation plugin
const commonConfig = require('./webpack.common'); //common config
const packageJson = require('../package.json'); // package.json file
const domain = process.env.PRODUCTION_DOMAIN; // Get production domain from environment variable

const prodConfig = {
    mode: 'production', // Set mode to production
    output: {
        filename: '[name].[contenthash].js', // Output file name with content hash
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', // Name of the module global variable
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`, // Remote entry for marketing app
            },
            shared: packageJson.dependencies, // Shared dependencies between apps
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig); // Merge common config with prod config