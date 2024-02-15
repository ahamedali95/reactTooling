import path from 'path';
import { defineConfig, mergeConfig } from 'vite';
import commonConfig from "./vite.config.mjs";
import legacyPlugin from "@vitejs/plugin-legacy";

const buildFolder = path.resolve(__dirname, '..', 'build');

const devConfig = defineConfig({
    mode: 'development',
    build: {
        sourcemap: true,
        outDir: buildFolder,
        emptyOutDir: true
    },
    server: {
        hmr: true,
        port: 3000,
        host: true
    },
    define: {
        VERSION: '1.0',
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    },
    plugins: [
        legacyPlugin({
            targets: 'last 2 Chrome versions, last 2 Firefox versions, last 2 Safari versions, last 2 Edge versions'
        })
    ]
});

export default mergeConfig(commonConfig, devConfig);