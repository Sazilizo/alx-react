const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode:"development",
    entry:"./src/index.js",
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
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
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
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],  
}