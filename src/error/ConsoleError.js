/*
控制台报错
*/
const { getPageURL } = require('../utils/index')
const { lazyReportCache } = require('../utils/report')

function ConsoleError() {
  const oldConsoleError = window.console.error

  window.console.error = (...args) => {
    oldConsoleError.apply(this, args)
    lazyReportCache({
      type: 'error',
      subType: 'console-error',
      startTime: performance.now(),
      errData: args,
      pageURL: getPageURL()
    })
  }
}

module.exports = {
  ConsoleError
}
