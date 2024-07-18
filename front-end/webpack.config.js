const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTexrtPlugin = require('extract-text-webpack-plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html'),
    }),
    new ExtractTexrtPlugin('style.css'),
    //new UglifyJSPlugin(),
];
/*if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            WEBPACK: true
        }
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}*/
module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: plugins,
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react','es2015']
                }
            }],
            include: path.join(__dirname, 'src'),
        },
            {
                test: /\.(jpe?g|ico|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: ExtractTexrtPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    devServer: {
        publicPath: '/',
        contentBase: './dist'
    },

}