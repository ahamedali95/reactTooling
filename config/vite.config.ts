import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import legacyPlugin from '@vitejs/plugin-legacy';
import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths'

const srcFolder = path.resolve(__dirname, '..', 'src');

const commonConfig = defineConfig({
    root: srcFolder,
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', '.png']
    },
    plugins: [
        createHtmlPlugin({
            minify: false,
            entry: srcFolder + '/index.tsx'
        }),
        tsconfigPaths()
    ]
});

export default commonConfig;