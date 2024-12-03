
import { reactive } from 'vue';
export const useDialog=()=>{
    const dialog =reactive({
        title:'新增',
        visible:false,
        width:630,
        height:280
    })
    const onShow=()=>{
        dialog.visible=true
    }
    const onClose =()=>{
        dialog.visible=false;
    }
    const onConfirm =()=>{
        dialog.visible=true;
    }
    return {
        dialog,
        onShow,
        onClose,
        onConfirm
    }
}
