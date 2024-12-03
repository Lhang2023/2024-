<template>
    <!-- 弹窗 -->
     <el-dialog
    :model-value="props.visible"
    :title="props.title"
    :width="props.width+'px'"
    :before-close="onClose"
  >
  <!-- 内容显示器 -->
    <div class="container" :style="{height:height+'px'}">
        <slot name="content"></slot>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="danger" @click="onClose">取消</el-button>
        <el-button type="primary" @click="onConfirm ">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
//弹框数据类型
interface DialogProps{
    title:string,
    visible:boolean,
    width:number,
    height:number
}
//接受父组件传递参数
const props =withDefaults(defineProps<DialogProps>(),{
    title:'新增',
    visible:false,
    width:630,
    height:280
})
const emit=defineEmits(['onClose','onConfrim'])

const onClose=()=>{
    emit('onClose');
}
const onConfirm=()=>{
    emit('onConfrim');
}
</script>

<style scoped lang="scss">
.container{
  overflow-x: initial;
  overflow-y: auto;
}
.el-dialog{
  border-top-left-radius: 7px !important;
  border-top-right-radius: 7px !important;
  .el-dialog__header{
    border-top-left-radius: 7px !important;
    border-top-right-radius: 7px !important;
    background-color: #17223b !important;
    .el-dialog__title{
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .el-dialog__body{
    padding: 10px;
  }
  .el-dialog__footer{
    border-top: 1px solid #e8eaec !important;
    padding: 10px;
  }
  .el-dialog__headerbtn{
    .el-dialog__close{
      color: #fff;
    }
  }
}
</style>