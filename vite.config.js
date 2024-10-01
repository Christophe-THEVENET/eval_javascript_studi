import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    server: {
        host: true, // Écouter sur toutes les interfaces réseau
        strictPort: true,
        port: 3000, // Port sur lequel l'application va tourner
        watch: {
            usePolling: true // pour windws si hmr ne marche pas
        }

        /*  hmr:{
            host: 'localhost',
        } */
    },
    css: {
        preprocessorOptions: {
            less: {
                math: 'parens-division'
            },

            scss: {
                api: 'modern-compiler', // or "modern", "legacy"
                importers: [
                    // ...
                ]
            }
        }
    }
});
