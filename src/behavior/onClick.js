const { lazyReportCache } = require('../utils/report')

const events = ['mousedown', 'touchstart']
/*
 * 防抖
 */
function onClick() {
  events.forEach(eventType => {
    let timer
    window.addEventListener(eventType, event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const target = event.target
        // console.log('target', target)

        // 上报统计
        lazyReportCache({
          type: 'behavior',
          subType: 'click',
          target: target.tagName,
          eventType
        })
      }, 500)
    })
  })
}

module.exports = {
  onClick
}
