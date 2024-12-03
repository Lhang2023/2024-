import { defineStore } from "pinia";
//创建store
//defineStore第一个参数：唯一的，不能重复 
export const userStore = defineStore('userStore',{
  state:()=>{
    return{
      userId:'',
      nickName:""
    }
  },
  //获取值
  getters:{
    getUserId(state){
      return state.userId
    }
  }, 
  //改变state的值
  actions:{
    setUserId(userId:string){
      this.userId = userId;
    }
  }
 
})
