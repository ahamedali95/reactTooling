import path from 'path';
import { defineConfig, mergeConfig, splitVendorChunkPlugin } from 'vite';
import commonConfig from "./vite.config.mjs";
import {createHtmlPlugin} from "vite-plugin-html";
import legacyPlugin from "@vitejs/plugin-legacy";

const buildFolder = path.resolve(__dirname, '..', 'build');
const srcFolder = path.resolve(__dirname, '..', 'src');

const prodConfig = defineConfig({
    mode: 'production',
    build: {
        sourcemap: false,
        outDir: buildFolder,
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const info = (assetInfo?.name ?? '').split('.');
                    const extType = info[info.length - 1];
                    if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo?.name ?? '')) {
                        return `images/[name].[hash].${extType}`;
                    }
                    if (/\.(css)$/.test(assetInfo?.name ?? '')) {
                        return `css/[name].[hash].${extType}`;
                    }
                    if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo?.name ?? '')) {
                        return `fonts/[name].[hash].${extType}`;
                    }
                    if (/\.(pdf)$/.test(assetInfo?.name ?? '')) {
                        return `files/[name].[hash].${extType}`;
                    }

                    return `[name].[hash].${extType}`;
                },
                entryFileNames: `js/[name].[hash].bundle.js`,
                chunkFileNames: `js/[name].[hash].bundle.js`,
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        }
    },
    define: {
        VERSION: '1.0',
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    },
    plugins: [
        legacyPlugin(),
        createHtmlPlugin({
            minify: true,
            entry: srcFolder + '/index.tsx'
        }),
        splitVendorChunkPlugin()
    ],
});

export default mergeConfig(commonConfig, prodConfig);