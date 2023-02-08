export function getPagePathList(pathname?: string): string[] {
  const res = (pathname || window.location.pathname)
    .split('/')
    .filter(Boolean)
    .map((value, index, array) =>
      '/'.concat(array.slice(0, index + 1).join('/'))
    )
    .map((s) => {
      const first = s[0]
      const other = s.slice(1)
      return (first == '/' ? '' : first) + other
    })
  // return ['vue', 'vue/demo-vue-1', 'vue/demo-vue-1/vue-3-2']
  const arr = res.pop()
  return arr ? arr.split('/') : []
}

export function handleConfig(type: boolean = true, k?: string, v?: any) {
  if (!k) return
  if (type) {
    localStorage.setItem(k, v)
  } else {
    return localStorage.getItem(k)
  }
}
