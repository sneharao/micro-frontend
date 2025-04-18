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
    }

}