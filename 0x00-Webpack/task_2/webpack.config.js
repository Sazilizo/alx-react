const path = require("path");

module.exports = {
    mode: "production",
    entry:{
    main : path.resolve(__dirname, "./js/dashboard_main.js"),
    },
    output:
    {
        path: path.resolve(__dirname, "public" ),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: [
                    "file-loader",
                    {
                      loader: "image-webpack-loader",
                      options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                      },
                    },
                ],
            }
        ],
    },
}