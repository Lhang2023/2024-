import http from '../common/index.js'
//首页轮播图数据查询
// export const getIndexBannerApi = ()=>{
//  return http.get('/api/banner/getIndexBanner')
// }
//首页热推数据查询
export const getIndexListApi = (parm)=>{
 return http.get('/api/goods/getIndexList',parm)
}