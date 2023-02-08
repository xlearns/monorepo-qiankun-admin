/* @refresh reload */
import { render } from 'solid-js/web';

import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import './index.css';
import App from './App';


const appName = 'demo-solid-1'


let appContainer
let dispose 
function retrieveContainer (props = {}) {
  const {container} = props
  return container ? container.querySelector(`#${appName}-root`) : document.querySelector(`#${appName}-root`)
}

function start (props) {
  appContainer = appContainer || retrieveContainer(props)
  dispose = render(() => <App />, appContainer)

}

renderWithQiankun({
  bootstrap() {
    console.log(`[${appName}] bootstrap`)
  },
  mount (props) {
    console.log(`[${appName}] mount`)
    start(props)
  },
  update(props) {
    console.log(`[${appName}] update`, props)
  },
  unmount() {
    console.log(`[${appName}] unmount`)
    dispose()
    appContainer = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  start({})
}