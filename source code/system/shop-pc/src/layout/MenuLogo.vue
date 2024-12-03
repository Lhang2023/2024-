<template>
    <div class="logo">
         <img :src="MenuLogo">
         <span v-if="show" class="logo-title">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
import MenuLogo from '@/assets/logo.png'
import {  ref,watch } from 'vue';
import { collapseStore } from '@/store/Collapse/index';
const store = collapseStore()
const title =ref('校园二手交易系统')
// const show =computed(()=>{
//     return store.getCollapse
// }) 太卡了，这个换掉了
const show = ref(true)
watch(
    ()=>store.getCollapse,
    (collapsed:boolean)=>{
        if(!collapsed){
            setTimeout(()=>{
                show.value = !collapsed
            },300);

        }
    else{
        show.value = !collapsed
    }
    }
)

</script>

<style scoped lang="scss">
.logo{
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #2b2f3a;
    cursor: pointer;
    align-items: center;
    img{
        width: 45px;
        height: 45px;
        margin-left: 5px;
    }
    .logo-title{
        color:#FFF;
        font-weight: 600;
        font-size: 20px;
        font-family: FangSong;
    }
}

</style>