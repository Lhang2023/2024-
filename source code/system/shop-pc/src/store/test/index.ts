import { defineStore } from "pinia";
//创建store
//defineStore第一个参数，唯一
export const testStore = defineStore({
  id: "testStore",
  state: () => {
    return{
    count: 0,
}
  },
  //获取值
  getters: {
     getCount(state){
        return state.count
     }
  },
  //改变state的值
  actions: {
     setCount(count:number){
        this.count = count
     }
  },
});