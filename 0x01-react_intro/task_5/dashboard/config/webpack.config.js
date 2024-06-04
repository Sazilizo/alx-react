const path = require("path");

module.exports ={
    mode: "development",
    entry:path.resolve(__dirname, "../src/index.js"),
    output: {
        filename: 'bundle.js', // Set the output filename to bundle.js
        path: path.resolve(__dirname,'./public'),
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use :"file-loader"
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    "presets": [ "@babel/preset-env", "@babel/preset-react" ],
                  },
                },
            },
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        compress:true,
        port: 9000,
    },
}