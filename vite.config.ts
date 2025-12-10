// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // alias ke folder src

export default defineConfig({
  plugins: [react()],

  // biar bisa import pakai '@/components/...' dll
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // biar bisa dibuka dari HP di jaringan yang sama
  server: {
    host: '0.0.0.0', // allow akses dari device lain
    port: 5173,      // kalau bentrok boleh diganti, misal 4173
  },
});