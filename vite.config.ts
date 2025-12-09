import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  console.debug('Running React app on', mode, 'mode');

  const env = loadEnv(mode, process.cwd());
  console.debug('Loaded environment variables');

  return {
    plugins: [react(), tailwindcss()],
    preview: {
      port: parseInt(env.VITE_PREVIEW_PORT || '0', 10),
      allowedHosts: env.VITE_PREVIEW_HOST?.split(',') || [],
    },
    server: {
      port: parseInt(env.VITE_APP_PORT || '0', 10),
      allowedHosts: env.VITE_APP_HOST?.split(',') || [],
      host: true,
      strictPort: true,
      watch: {
        usePolling: true,
      },
      hmr: {
        host: 'localhost',
        clientPort: parseInt(env.VITE_APP_PORT || '0', 10),
      },
    },
    esbuild: {
      pure: isProduction ? ['console.log', 'console.debug'] : [],
      drop: isProduction ? ['debugger'] : [],
    },
  };
});
