<template>
  <!-- 弃之，转MenuOne -->
  <MenuLogo></MenuLogo>
      <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    unique-opened
    router
    @open="handleOpen"
    @close="handleClose"
    background-color="#304156"
  >
  <MenuItem :menulist="menulist">
  </MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue';
import { collapseStore } from '@/store/Collapse/index';
const store = collapseStore()
//菜单收缩的属性
const isCollapse = computed(()=>{
  return store.getCollapse
})
//获取当前路由
const route =useRoute()
//当前激活的导航菜单
const activeIndex = computed(()=>{
  const {path}=route;
  return path;
})
let menulist=reactive([
  {
    path:"/dashboard",
    component:"Layout",
    name:"dashboard",
    meta:{
      title:"首页",
      icon:"HomeFilled",
      roles:["sys:dashboard"]
    }
  },
  {
    path:"/system",
    component:"Layout",
    name:"system",
    meta:{
      title:"系统管理",
      icon:"Setting",
      roles:["sys:manage"]
    },
  children:[
 {
    path:"/adminUser",
    component:"/system/adminUser",
    name:"adminUser",
    meta:{
      title:"管理员管理",
      icon:"UserFilled",
      roles:["sys:adminUser"]
    },
  },{
    path:"/userList",
    component:"/system/UserList",
    name:"userList",
    meta:{
      title:"用户管理",
      icon:"wallet",
      roles:["sys:userList"]
    },
  },
  {
    path:"/menuList",
    component:"/system/MenuList",
    name:"menuList",
    meta:{
      title:"菜单管理",
      icon:"Menu",
      roles:["sys:menuList"]
    },
  },
 ],
},
{
    path:"/goodsRoot",
    component:"Layout",
    name:"goodsRoot",
    meta:{
      title:"商品管理",
      icon:"Histogram",
      roles:["sys:goodsRoot"]
    },
    children:[
    {
    path:"/goodsType",
    component:"/goods/GoodsType",
    name:"goodsType",
    meta:{
      title:"商品分类",
      icon:"UserFilled",
      roles:["sys:goodsType"]
    },
  },
  {
    path:"/unusedList",
    component:"/goods/UnusedList",
    name:"unusedList",
    meta:{
      title:"闲置",
      icon:"wallet",
      roles:["sys:unusedList"]
    },
  },
  {
    path:"/buyList",
    component:"/goods/BuyList",
    name:"buyList",
    meta:{
      title:"求购",
      icon:"wallet",
      roles:["sys:buyList"]
    },
  }
    ]
  },
  {
    path:"/order",
    component:"Layout",
    name:"order",
    meta:{
      title:"订单管理",
      icon:"Tickets",
      roles:["sys:order"]
    },
    children:[
    {
    path:"/unusedOrder",
    component:"/order/UnusedOrder",
    name:"unusedOrder",
    meta:{
      title:"闲置订单",
      icon:"UserFilled",
      roles:["sys:unusedOrder"]
    }
  },{
    path:"/buyOrder",
    component:"/order/BuyOrderr",
    name:"buyOrder",
    meta:{
      title:"求购订单",
      icon:"wallet",
      roles:["sys:buyOrder"]
    }
  }
    ]
  },{
    path:"/comment",
    component:"Layout",
    name:"comment",
    meta:{
      title:"评论管理",
      icon:"Briefcase",
      roles:["sys:comment"]
    },
    children:[
      {
        path:"/commentList",
    component:"/comment/CommentList",
    name:"commentListt",
    meta:{
      title:"评论列表",
      icon:"UserFilled",
      roles:["sys:commentList"]
    }
      }
    ]
  }
])

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title){
  color: #f4f4f5 !important;
}
:deep(.el-sub-menu .el-menu-item){
  color: #bfcbd9;
}
:deep(.el-menu-item.is-active){
  color: #f07810 !important;
}
:deep(.is-opened .el-menu-item){
  background-color: #1f2d3d !important;
}
:deep(.el-menu-item:hover){
  background-color: #001528 !important;
}
</style>