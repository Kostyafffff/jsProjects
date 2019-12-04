const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = () => {
    return {
        entry: paths.appIndex,
        output: {
            path: paths.appBuild,
            publicPath: paths.appPublic,
            filename: "bundled.js"
        },
        resolve: {
            modules: ['node_modules'],
            extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    loader: ["url-loader", "file-loader"]
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [
            new InterpolateHtmlPlugin(),
            new HtmlWebpackPlugin({
                template: paths.appHtml,
                inject: true,
            }),
        ],
        devServer: {
            contentBase: paths.appBuild,
        }
    }
};