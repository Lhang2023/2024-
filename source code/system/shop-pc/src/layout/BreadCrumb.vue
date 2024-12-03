<template>
  <!-- 面包屑 -->
      <el-breadcrumb class="bred" separator="/">
    <el-breadcrumb-item v-for="item in tabs">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref,Ref,watch,onMounted } from 'vue';
import { RouteLocationMatched, useRoute } from 'vue-router';
//当前路由
const route =useRoute()
const tabs :Ref<RouteLocationMatched[]>=ref([])
//获取面包数据
const getBreadCrumb=()=>{
    console.log(route)
    //找出存在title属性路由数据
    let matched = route.matched.filter((item)=>item.meta && item.meta.title)
    console.log(matched)
    const first = matched[0]
    if(first.path !=='/dashboard'){
         matched=[{path:'/dashboard',meta:{title:'首页'}}as any].concat(matched)
    }
    tabs.value=matched
}
onMounted(()=>{
    getBreadCrumb()
})
watch(
    ()=>route.path,
    ()=>getBreadCrumb()
)
</script>

<style scoped lang="scss">
:deep(.el-breadcrumb__inner){
    color: #fff !important;
}
.bred{
  margin-left: 20px;
}
:deep(.el-breadcrumb__item){
    font: 15px !important;
}

</style>