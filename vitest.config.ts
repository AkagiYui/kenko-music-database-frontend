/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
export default defineConfig({
  test: {
    workspace: [
      {
        resolve: {
          alias: {
            '@': '/packages/utils/src',
          },
        },
        test: {
          include: ['packages/utils/**/*.test.ts'],
          name: 'utils',
        },
      },
    ],
  },
})
