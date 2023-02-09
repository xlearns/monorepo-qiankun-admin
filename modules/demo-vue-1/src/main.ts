import { createApp } from 'vue'
import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'
import router from './router'
import App from './App.vue'
import './index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const appName = 'demo-vue-1'

// @ts-ignore
window.__POWERED_BY_QIANKUN__ = qiankunWindow.__POWERED_BY_QIANKUN__

let app: any
async function start(props: any = {}) {
  const { container } = props
  app = createApp(App)
  app.use(router)
  app.use(ElementPlus)
  app.mount(
    container
      ? container.querySelector(`#${appName}-app`)
      : document.querySelector(`#${appName}-app`)
  )
}

function applyProps(props: any) {}

renderWithQiankun({
  bootstrap() {
    console.log(`[${appName}] bootstrap`)
  },
  mount(props: any) {
    console.log(`[${appName}] mount`, props)
    applyProps(props)
    start(props)
  },
  update(props: any) {
    console.log(`[${appName}] update`, props)
    applyProps(props?.props ?? props)
  },
  unmount() {
    console.log(`[${appName}] unmount`)
    app.unmount()
  },
})

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  // 子模块独立运行加载默认css
  import('./independent.scss')
  start()
}
