import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api'],
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
    server: {
        hmr: true,
        proxy: {},
        cors: true,
        host: '0.0.0.0',
    },
});
