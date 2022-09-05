const { FPandFCP } = require('./FPandFCP')
const { LCP } = require('./LCP')
const { CLS } = require('./CLS')
const { Load } = require('./Load')
const { InterfaceXHR } = require('./InterfaceXHR')
const { InterfaceFetch } = require('./InterfaceFetch')
const { ResourceLoadandCache } = require('./ResourceLoadandCache')
const { BFCache } = require('./BFCache')
const { FPS, isBlocking } = require('./FPS')

const performance = {
  FPandFCP: () => FPandFCP(), // FPandFCP
  LCP: () => LCP(), // LCP
  CLS: () => CLS(), // CLS
  Load: () => Load(), // Load 事件
  FirstScreenPaint: () => FirstScreenPaint(), // 首屏渲染时间
  InterfaceXHR: () => InterfaceXHR(), // 接口请求耗时XHR
  InterfaceFetch: () => InterfaceFetch(), // 接口请求耗时Fetch
  ResourceLoadandCache: () => ResourceLoadandCache(), // 资源加载时间、缓存命中率
  BFCache: () => BFCache(), // 浏览器往返缓存
  FPS: () => FPS() // 计算卡顿
}

module.exports = {
  performance
}
