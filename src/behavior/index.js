const { onClick } = require('./onClick')
const { pv } = require('./pv')
const { pageChange } = require('./pageChange')
const { pageAccessDuration } = require('./pageAccessDuration')
const { pageAccessHeight } = require('./pageAccessHeight')

const behavior = {
  onClick: () => onClick(), // 用户点击
  pv: () => pv(), // pv
  pageChange: () => pageChange(), // 页面跳转
  pageAccessDuration: () => pageAccessDuration(), // 页面停留时长
  pageAccessHeight: () => pageAccessHeight() // 页面访问深度
}

module.exports = {
  behavior
}
