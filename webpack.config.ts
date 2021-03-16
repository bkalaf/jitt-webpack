import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin';

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'source-map',
    resolve: {
        plugins: [new TsconfigPathsWebpackPlugin()],
        extensions: ['.ts', '.tsx', '.scss', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                        },
                    },
                ],
            },
            {
                test: /\.js(x?)$/,
                use: [{ loader: 'babel-loader' }],
            },
        ],
    },
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'jitt.css',
        }),
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
        }),
    ],
};

module.exports = config;
