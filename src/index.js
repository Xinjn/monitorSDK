const { setConfig } = require('./config')
// 行为监控
const { behavior } = require('./behavior/index')
// 性能监听
const { performance } = require('./performance/index')
// 错误监听
const { error } = require('./error/index')

const monitor = {
  init(option = {}) {
    setConfig(option)
  },
  // 行为监听
  behavior,
  // 性能监听
  performance,
  // 错误监听
  error
}

// 挂载全局
window.monitor = monitor
// export default monitor
