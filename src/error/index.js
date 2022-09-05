const { ConsoleError } = require('./ConsoleError')
const { ResourceError } = require('./ResourceError')
const { JsError } = require('./JsError')
const { PromiseError } = require('./PromiseError')

const error = {
  ConsoleError: () => ConsoleError(), // 控制台报错
  ResourceError: () => ResourceError(), // 资源加载错误
  JsError: () => JsError(), // JS 错误
  PromiseError: () => PromiseError() // PromiseError 错误
}

module.exports = {
  error
}
