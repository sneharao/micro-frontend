const { VueLoaderPlugin } = require('vue-loader'); // Import Vue loader plugin
module.exports = {
    entry: './src/index.js', // Entry point of the application  
    output: {
        filename: '[name].[contenthash].js', // Output file name with content hash
    },
    resolve: {
        extensions: ['.js', '.vue'], // File extensions to resolve
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i, // Vue file to be processed by vue-loader
            use: [
                {
                    loader: 'file-loader', // File loader to handle images and fonts
                }
            ]
        }, {
            test: /\.vue$/, // Vue file to be processed by vue-loader
            use: 'vue-loader'
        }, {
            test: /\.scss|\.css$/, // CSS file to be processed by css-loader
            use: [
                'style-loader', 'vue-style-loader', 'css-loader', 'sass-loader']// Inject CSS into the DOM
        }, {
            test: /\.m?js$/, // mjs file or js file to be processed by babel
            exclude: /node_modules/, // Exclude node_modules folder
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'// Transpile JSX
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime', // Optimize code for runtime async and await code
                    ]
                }
            }
        }]
    },
    plugins: [new VueLoaderPlugin()], // Add Vue loader plugin
};