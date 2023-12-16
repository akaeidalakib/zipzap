const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    entry: './src/index.js', // Your entry point file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|jsx|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
    }
    ),
    new BundleAnalyzerPlugin()],
};