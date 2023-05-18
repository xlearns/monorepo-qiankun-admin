- [ ] svelte script template
- [ ] qwik template
- [ ] astro template

## Some Issues Encountered

### [Using anonymous functions or component names starting with lowercase letters in React components can cause HMR to fail](https://github.com/vitejs/vite/issues/2719%20facebook/react#21181)

- 解决方式
  - 组件文件中仅保留 export default 部分，不要有 export const ... 导出
  - export default 导出具名函数，不要匿名导出，避免 export default () =>
  - 组件名必须大写字母开头【@vitejs/plugin-react 解析源码】
