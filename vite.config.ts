import { defineConfig } from 'vite';
import reactSwcPlugin from '@vitejs/plugin-react-swc';
import tailwindcssPlugin from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactSwcPlugin(), tailwindcssPlugin()],
});
