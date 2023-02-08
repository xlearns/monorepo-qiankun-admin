import './app.css'
import App from './App.svelte'

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

const appName = 'demo-svelte-1'

let app: App;

function render(props) {
  const { container } = props;
  app = new App({
    target:
      container instanceof Element
        ? (container.querySelector(`#${appName}-root`) as Element)
        : document.querySelector(`#${appName}-root`),
  });
}

renderWithQiankun({
  // 子应用初始化会调用一次
  bootstrap() {
    console.log(`[appName] svelte app bootstraped`);
  },
  // 进入子应用
  mount(props) {
    console.log(`[${appName}] svelte from main framework`, props);
    render(props);
  },
  update(props) {
    console.log(`[${appName}] update`, props)
  },
  // 卸载子应用
  unmount() {
    console.log(`[${appName}] unmount`)
    app.$destroy();
  },
});

// 作为单独应用使用
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

export default app
