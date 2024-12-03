import { defineStore } from "pinia";
//创建store
//defineStore第一个参数，唯一
export const collapseStore = defineStore({
  id: "collapseStore",
  state: () => {
    return{
    collapse:false
}
  },
  //获取值
  getters: {
     getCollapse(state){
        return state.collapse
     }
  },
  //改变state的值
  actions: {
     setCollapse(collapse:boolean){
        this.collapse = collapse
     }
  },
});