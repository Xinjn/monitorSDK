const { report } = require('../utils/report')
const { onBeforeunload } = require('../utils/index')

function pageAccessDuration() {
  onBeforeunload(() => {
    report(
      {
        type: 'behavior',
        subType: 'page-access-duration',
        startTime: performance.now()
        // pageURL: getPageURL(),
        // uuid: getUUID()
      },
      true
    )
  })
}

module.exports = {
  pageAccessDuration
}
