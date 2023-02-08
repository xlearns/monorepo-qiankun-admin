/* @refresh reload */
import { render } from 'solid-js/web';
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import './index.css';
import App from './App';


const appName = '{{ name }}'


let appContainer

function retrieveContainer (props = {}) {
  const {container} = props
  return container ? container.querySelector(`#${appName}-root`) : document.querySelector(`#${appName}-root`)
}

function renderApp (props) {
  appContainer = appContainer || retrieveContainer(props)
  render(() => <App />, appContainer)
}

renderWithQiankun({
  mount (props) {
    renderApp(props)
  },
  bootstrap () {},
  unmount () {
    appContainer.textContent = ''
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderApp({})
}