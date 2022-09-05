const { lazyReportCache } = require('../utils/report')

function pv() {
  lazyReportCache({
    type: 'behavior',
    subType: 'pv',
    startTime: performance.now(),
    // pageURL: getPageURL(),
    referrer: document.referrer
    // uuid: getUUID()
  })
}

module.exports = {
  pv
}
