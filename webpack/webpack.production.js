const path = require('path');
const HTML_webpack_plugin = require('html-webpack-plugin');
const Mini_css_extract_plugin = require('mini-css-extract-plugin');

const HTML_plugin = new HTML_webpack_plugin({
    filename: "index.html",
    template: path.resolve(__dirname,'../src/index.html'),
    minify: true
});

const CSS_plugin = new Mini_css_extract_plugin({
    filename: "main.css"
})

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname,'../src/index.tsx'),
    },
    output: {
        filename: '[name].js',
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
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    plugins: [
        HTML_plugin,
        CSS_plugin
    ]
}