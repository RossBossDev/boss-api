import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        manifest: true,
        outDir: path.resolve(__dirname, '../../public'),
        rollupOptions: {
            input: './src/main.tsx',
        },
    },
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
