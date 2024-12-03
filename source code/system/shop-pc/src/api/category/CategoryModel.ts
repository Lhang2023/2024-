//定义分类数据类型
export type Category = {
     categoryId:string,
     categoryName:string,
     orderNum:string
}
   //列表查询数据类型
export type CategoryListParm = {
     currentPage:number,
     pageSize:number,
     categoryName:string,
     total?:number
}