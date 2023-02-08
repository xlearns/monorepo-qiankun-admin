{
  "name": "@modules/{{ name }}",
  "version": "0.0.0",
  "description": "",
  "scripts": {
    "start": "vite",
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "license": "MIT",
  "devDependencies": {
    "@packages/build": "workspace:^0.0.1",
    "vite": "^4.1.1",
    "vite-plugin-solid": "^2.5.0"
  },
  "dependencies": {
    "@packages/assets": "workspace:^0.0.1",
    "@packages/shared": "workspace:^0.0.1",
    "solid-js": "^1.6.10",
    "vite-plugin-qiankun": "^1.0.14"
  }
}
