import path from 'path';
import { DefinePlugin, ids } from 'webpack';
import type { Configuration } from 'webpack';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import packageJson from '../package.json';

const webpackFolder = path.resolve(__dirname);

const prodConfig: Configuration = {
    mode: 'production',
    extends: webpackFolder + '/webpack.common.ts',
    output: {
        filename: `[name].[chunkhash].${packageJson.version}V.bundle.js`,
    },
    plugins: [
        new DefinePlugin({
            VERSION: '1.0',
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlMinimizerPlugin(),
        new WebpackManifestPlugin({}),
        new ids.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        })
    ],
    optimization: {
        runtimeChunk: "single",
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        },
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                minify: TerserWebpackPlugin.esbuildMinify,
                parallel: true
            })
        ],
    }
};

export default prodConfig;