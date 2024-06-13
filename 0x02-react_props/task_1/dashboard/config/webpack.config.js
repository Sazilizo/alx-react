const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode:"development",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: "bundle.js"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        bypassOnDebug: true,
                        disable: true, 
                      },
                    },
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
        directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        port: 8000,
        hot: true,
        open: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // new HtmlWebpackPlugin({
        //     title: "Holberton Dashboard",
        //     template: './src/index.html'
        // })
    ],  
}