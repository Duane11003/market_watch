const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
        module: {
            rules: [
                { test: /\.(js)$/, use: 'babel-loader' },
                { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
                // { test: /\.(jsx)$/, use: 'babel-loader' }
            ]
        },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        port: 8080,
        // proxy: {
        //     '/': 'http://localhost:3000'
        // },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
    
}