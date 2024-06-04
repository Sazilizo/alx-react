const path = require("path");

module.exports ={
    entry:{
        main: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use :"image-webpack-loader"
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, "dist"),
        hot: true,
        compress:true,
        port: 9000,
        publicPath: "/"
    },
}