const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: 'development',
    devServer : {
    port: 8081
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",
            exposes: {
            "./ProductsIndex": "./src/index"
            },
            // tells that should use single copy of faker
            shared: {
              faker: {
                singleton: true
              }
            }
            
        }),
    ]
};