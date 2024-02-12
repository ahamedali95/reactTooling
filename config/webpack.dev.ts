import path from 'path';
import { DefinePlugin } from 'webpack';
import type { Configuration } from 'webpack';
import 'webpack-dev-server';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

const webpackFolder = path.resolve(__dirname);

const devConfig: Configuration = {
    mode: 'development',
    extends: webpackFolder + '/webpack.common.ts',
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        client: {
            overlay: true,
            progress: true
        },
        compress: true,
        https: true,
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new DefinePlugin({
            VERSION: '1.0',
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        // new BundleAnalyzerPlugin();
    ]
};

export default devConfig;