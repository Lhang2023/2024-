<template>
  <el-main :style="{ height: mianHeight + 'px' }">
   <!-- 数据统计 -->
   <el-row
    :gutter="20"
    style="margin-bottom: 30px"
   >
    <el-col :span="6">
     <div class="show-header" style="background: rgb(237, 64, 20)">
      <div class="show-num">0</div>
      <div class="bottom-text">待处理投诉</div>
     </div>
    </el-col>
    <el-col :span="6">
     <div class="show-header" style="background: rgb(45, 183, 245)">
      <div class="show-num">0</div>
      <div class="bottom-text">会员总数</div>
     </div>
    </el-col>
    <el-col :span="6">
     <div class="show-header">
      <div class="show-num">0</div>
      <div class="bottom-text">闲置总数</div>
     </div>
    </el-col>
    <el-col :span="6">    <div class="show-header" style="background: rgb(255, 153, 0)">
      <div class="show-num">0</div>
      <div class="bottom-text">求购总数</div>
     </div>
    </el-col>
   </el-row>
   <el-row :gutter="20">
    <el-col :span="12">
     <el-card class="box-card">
      <div slot="header" class="clearfix">
       <span style="color: #000000; font-weight: 600; margin-bottom: 10px"
        >最近投诉</span
       >
       <el-divider></el-divider>
      </div>
      <div class="text item">
      无
       <el-divider></el-divider>
      </div>
     </el-card>
    </el-col>
    <el-col :span="12">
     <el-card class="box-card">
      <div slot="header" class="clearfix">
       <span style="color: #000000; font-weight: 600; margin-bottom: 10px"
        >日历</span
       >
       <el-divider></el-divider>
      </div>
      <el-calendar v-model="value" />
     </el-card>
    </el-col>
   </el-row>
  </el-main>
 </template>
 <script setup lang="ts">
 import { onMounted, nextTick, ref } from "vue";
 const mianHeight = ref(0);
 const value = ref(new Date());
 onMounted(() => {
  nextTick(() => {
   mianHeight.value = window.innerHeight;
  });
 });
 </script>
 <style lang="scss" scoped>
 .bottom-text {
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  height: 25px;
  line-height: 25px;
  text-align: center;
  position: absolute;
  font-weight: 600;
 }
 .show-header {
  background: #00c0ef;
  color: #fff;
  height: 80px;
  border-radius: 5px;
  position: relative;
 }
 .show-num {
  font-size: 38px;
  font-weight: 600;
  padding: 5px;
 }
 </style>