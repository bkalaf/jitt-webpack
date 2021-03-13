import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.scss', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.ts(x?)$/,
                use: [{ loader: 'ts-loader' }],
            },
            {
                test: /\.js(x?)$/,
                use: [{ loader: 'babel-loader'}]
            }
        ],
    },
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
        }),
    ],
};

module.exports = config;