import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';
// https://vitejs.dev/config/
// next.js에서 vitest 사용하는 예시 (vitest로 테스트 webpack으로 번들러 사용)
// https://nextjs.org/docs/app/building-your-application/testing/vitest
export default defineConfig({
  plugins: [react()],
  base: '/',
  root: '.',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // `@`를 사용하여 소스 디렉터리를 참조
      '@/shared': resolve(__dirname, 'src/shared'),
      '@/stories': resolve(__dirname, 'src/stories'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
