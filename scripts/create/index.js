const fs = require('fs')
const path = require('path')
const arguments = process.argv.splice(2)
const cwd = process.cwd()
//第一个参数为文件名、第二个为模板
const names = arguments[0]
const template = arguments[1] || 'micro-vue-vite' // ['micro-vue-vite','micro-rect-vite']

const PkgGenerator = require('./generators/PkgGenerator')

const br = `
`
if (!names) {
  console.log('请使用 --name=XXX 参数提供模块名')
  process.exit(0)
}

async function create(name) {
  if (!fs.existsSync(path.join(cwd, `./modules/${name}`))) {
    await new PkgGenerator({
      name,
      cwd,
      template,
    }).run()
  } else {
    console.log(`/modules/${name} 已存在，取消创建源码`)
  }
}

async function run() {
  await create(names)
}

run()
