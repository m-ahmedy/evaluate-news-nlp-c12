const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: path.join(__dirname, './src/client/index.js'),
    output: {
        library: 'Form',
        libraryTarget: 'var'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/client/views/index.html'),
            filename: './index.html'
        })
    ]
}
