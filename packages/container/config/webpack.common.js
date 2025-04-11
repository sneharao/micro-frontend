const HTMLWebpackPlugin = require('html-webpack-plugin'); //inject script to html file
const { plugins } = require('./webpack.dev');

module.exports = {
    module: {
        rules: [{
            test: /\.m?js$/, // mjs file or js file to be processed by babel
            exclude: /node_modules/, // Exclude node_modules folder
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react', '@babel/preset-env'// Transpile JSX
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime', // Optimize code for runtime async and await code
                    ]
                }
            }
        }]
    },
    plugins: [new HTMLWebpackPlugin({
        template: './public/index.html', // Template file to use
    })]

}