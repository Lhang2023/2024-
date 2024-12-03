import http from "@/http";
import { AssignParm, ListParm,LoginParm,UpdateParm,User } from "./UserModel";
//新增
export const addAdminUserApi = (parm:User)=>{
 return http.post("/api/sysUser/add",parm)
}
//列表
 export const getListApi = (parm:ListParm)=>{
     return http.get("/api/sysUser/getList",parm)
 }
//编辑
export const editApi = (parm:User)=>{
     return http.put("/api/sysUser/edit",parm)
}
//删除
export const deleteApi = (userId:string)=>{
     return http.delete(`/api/sysUser/${userId}`)
    }
// 导出图片API
export const imageApi = () => {
     return http.post("/api/sysUser/image");
 }
 // 登录API
 export const loginApi = (parm:LoginParm) => {
     return http.post("/api/sysUser/login", parm);
 }
 //获取树的数据
export const getAssignTreeApi = (parm:AssignParm)=>{
     return http.get("/api/menu/getAssignTree",parm)
}
//修改密码
export const updatePasswordApi = (parm:UpdateParm)=>{
      return http.put("/api/sysUser/updatePassword",parm)
    }
   
    