<template>
    <SysDialog
     :title="dialog.title"
     :width="dialog.width"
     :height="dialog.height"
     :visible="dialog.visible"
     @onClose="onClose"
     @onConfirm="onConfirm"
    >
     <template v-slot:content>
      <el-tree
       ref="assignTeee"
       :data="assignTreeData.list"
       node-key=""
       :props="defaultProps"
       empty-text="暂无数据"
       show-checkbox="true"
       highlight-current="true"
       @node-click=""
      ></el-tree>
     </template>
    </SysDialog>
   </template>
   <script setup lang="ts">
   import { User } from "@/api/user/UserModel";
   import SysDialog from "@/components/SysDialog.vue";
   import {useDialog} from "@/hooks/useDialog";
   import { getAssignTreeApi } from "@/api/user/index";
   import { reactive } from "vue";
   import { userStore } from "@/store/user";
   const defaultProps = {
    children: 'children',
    label: 'label',
   }
   const store = userStore()
   //获取弹框属性
   const { dialog, onClose, onConfirm, onShow } = useDialog();
   //查询树的参数
   const parms = reactive({
    userId: "", //当前登录用户的id
    assId: "",
   });
   //弹框显示的方法
   const show = (row: User) => {
    //要分配的用户的id
    parms.assId = row.userId;
    parms.userId = store.getUserId
    console.log(parms)
    getAssignTree();
    console.log(row);
    dialog.title = "为【" + row.nickName + "】分配菜单";
    dialog.width = 300;
    dialog.height = 450;
    onShow();
   };
   //定义树的数据
   const assignTreeData = reactive({
    list: [],
   });
   //获取树数据
   const getAssignTree = async () => {
    let res = await getAssignTreeApi(parms);
    if (res && res.code == 200) {
     assignTreeData.list = res.data.menuList;
    }
   };
   //暴露出去，给外部组件调用
   defineExpose({
    show,
   });
   </script>
   <style scoped></style>