export function getPagePathList(pathname?: string): string[] {
  return (pathname || window.location.pathname)
    .split('/')
    .filter(Boolean)
    .map((value, index, array) => '/'.concat(array.slice(0, index + 1).join('/'))).map(s=>{
      const first = s[0]
      const other= s.slice(1)
      return (first=='/'?'':first) + other
    })
}


export function handleConfig(type: boolean = true, k?: string, v?: any) {
  if (!k) return
  if (type) {
    localStorage.setItem(k, v)
  } else {
    return localStorage.getItem(k)
  }
}