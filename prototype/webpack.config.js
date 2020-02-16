module.exports = {
    entry: './order.ts',
    devtool: "source-map",
    output: {
        filename: "order.js"
    },
    resolve: {
        extensions: ['ts', 'js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: 'ts-loader' }
        ]
    }
};