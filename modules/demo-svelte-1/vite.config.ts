import { defineConfig, mergeConfig } from 'vite'
import { getConfig } from '@packages/build/vite.config'

const config = getConfig({
  type: 'svelte',
  micro: true,
  moduleName: 'demo-svelte-1',
  dirname: __dirname,
})

export default defineConfig(
  mergeConfig(config, {
    server: {
      host: true,
      port: 8086,
    },
  })
)
