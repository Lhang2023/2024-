<template>
    <template v-for="menu in menulist" :key="menu.path"> 
        <el-sub-menu v-if="menu.children && menu.children.length>0" :index="menu.path">
      <template #title>
        <el-icon>
            <!-- 动态组件 -->
            <component :is="menu.meta.icon"></component>
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <!-- 递归调用下级菜单 -->
       <menu-item :menulist="menu.children"></menu-item>
    </el-sub-menu>
    <el-menu-item v-else style="color: #f4f4f5;" :index="menu.path">
      <el-icon> <component :is="menu.meta.icon"></component></el-icon>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
    </template>
</template>

<script setup lang="ts">
defineProps(['menulist'])
</script>

<style scoped>

</style>