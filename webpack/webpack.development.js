const path = require('path');
const HTML_webpack_plugin = require('html-webpack-plugin');
const Mini_css_extract_plugin = require('mini-css-extract-plugin');

const HTML_plugin = new HTML_webpack_plugin({
    filename: "index.html",
    template: path.resolve(__dirname,'../src/index.html'),
    minify: true,
    favicon: path.resolve(__dirname,'../src/favicon.svg'),
});

const CSS_plugin = new Mini_css_extract_plugin({
    filename: "main.css"
})

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'../src'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'../dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    Mini_css_extract_plugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
            },
            {
                test: /\.svg$/,
                use: '@svgr/webpack'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        HTML_plugin,
        CSS_plugin
    ]
}