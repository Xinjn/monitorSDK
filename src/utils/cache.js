const { deepClone } = require('./index')

// 缓存
const cache = []

function addCache() {
  cache.push(cache)
}

function getCache() {
  return deepClone(cache)
}

function clearCache() {
  cache.length = 0
}

module.exports = {
  addCache,
  getCache,
  clearCache
}
