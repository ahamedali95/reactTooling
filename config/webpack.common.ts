import path from 'path';
import type { Configuration, PathData } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const srcFolder = path.resolve(__dirname, '..', 'src');
const buildFolder = path.resolve(__dirname, '..', 'build');
const publicFolder = path.resolve(__dirname, '..', 'public');

const commonConfig: Configuration = {
    target: 'web',
    entry: srcFolder + '/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            Api: srcFolder + '/api',
            Assets: srcFolder + '/assets',
            Components: srcFolder + '/components',
            Hooks: srcFolder + '/hooks',
            Pages: srcFolder + '/pages',
            Utils: srcFolder + '/utils'
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: buildFolder,
        clean: true,
        assetModuleFilename: (pathData: PathData): string => {
            const filepath = path
                .dirname(pathData.filename as string)
                .split("/")
                .slice(1)
                .join("/");

            return `${filepath}/[name][ext]`;
        }
    },
    module: {
        rules: [
            {
                test: '/\.html$/',
                loader: 'html-loader'
            },
            {
                test: /\.(?:jsx|tsx|ts|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(?:woff(2)?|ttf|eot|png|jpe?g|gif|svg|pdf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: srcFolder + '/index.html'
        })
    ]
};

export default commonConfig;