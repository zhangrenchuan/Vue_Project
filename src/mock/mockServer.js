/*
*   使用mockjs 提供模拟数据接口
*/

import Mock from 'mockjs'   // npm install mockjs --save
import data from './data.json'

// 映射接口路由
Mock.mock('/api2/seller', {
  code: 0,
  data: data.seller
})
Mock.mock('/api2/goods', {
  code: 0,
  data: data.goods
})
Mock.mock('/api2/ratings', {
  code: 0,
  data: data.ratings
})

// 不需要使用export 暴露
