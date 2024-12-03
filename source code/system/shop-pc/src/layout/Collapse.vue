<template>
    <el-icon :size="30" @click="iconClick">
        <!-- 动态组件 -->
         <component :is="status ? Expand : Fold"></component>
    </el-icon>
</template>

<script setup lang="ts">
import {collapseStore} from '@/store/Collapse/index'
import { Expand, Fold } from '@element-plus/icons-vue';
import { computed } from 'vue';
const store =collapseStore()
//切换菜单属性
const status = computed(()=>{
    return store.getCollapse
})
//图标点击事件
const iconClick=()=>{
       store.setCollapse(!store.collapse)
}
</script>

<style scoped>

</style>