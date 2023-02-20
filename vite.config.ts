import { defineConfig } from 'vite';
import jsonServer from 'vite-plugin-simple-json-server';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsonServer()],
});
