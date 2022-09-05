/*
使用 addEventListener() 监听 unhandledrejection 事件，可以捕获到未处理的 promise 错误。
*/
const { getPageURL } = require('../utils/index')
const { lazyReportCache } = require('../utils/report')

function PromiseError() {
  // 监听 promise 错误 缺点是获取不到列数据
  window.addEventListener('unhandledrejection', e => {
    lazyReportCache({
      reason: e.reason?.stack,
      subType: 'promise',
      type: 'error',
      startTime: e.timeStamp,
      pageURL: getPageURL()
    })
  })
}

module.exports = {
  PromiseError
}
