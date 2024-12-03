package cim.itmk.web.sys_menu.controller;

import cim.itmk.web.sys_menu.mapper.SysMenuMapper;
import cim.itmk.web.sys_user.mapper.SysUserMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import cim.itmk.utils.ResultUtils;
import cim.itmk.utils.ResultVo;
import cim.itmk.web.sys_menu.entity.MakeMenuTree;
import cim.itmk.web.sys_menu.entity.SysMenu;
import cim.itmk.web.sys_menu.service.SysMenuService;
import cim.itmk.web.sys_menu.entity.PermissonVo;
import cim.itmk.web.sys_user.entity.SysUser;
import cim.itmk.web.sys_user.service.SysUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/menu")
public class SysMenuController {
  @Autowired
  private SysMenuService sysMenuService;
  @Autowired  private SysUserService sysUserService;
  //新增
          @PostMapping
  public ResultVo add(@RequestBody SysMenu sysMenu){
    sysMenu.setCreateTime(new Date());
    if(sysMenuService.save(sysMenu)){
      return ResultUtils.success("新增成功!");
    }
    return ResultUtils.error("新增失败!");
  }
   //编辑
          @PutMapping
  public ResultVo edit(@RequestBody SysMenu sysMenu){
    if(sysMenuService.updateById(sysMenu)){
      return ResultUtils.success("编辑成功!");
    }
    return ResultUtils.error("编辑失败!");
  }
   //删除
          @DeleteMapping("/{menuId}")
  public ResultVo edit(@PathVariable("menuId") Long menuId){
    if(sysMenuService.removeById(menuId)){
      return ResultUtils.success("删除成功!");
    }
    return ResultUtils.error("删除失败!");
  }
  //列表
          @GetMapping("/list")
  public ResultVo list(){
    QueryWrapper<SysMenu> query = new QueryWrapper<>();
    query.lambda().orderByAsc(SysMenu::getOrderNum);
    List<SysMenu> menuList = sysMenuService.list(query);
    //组装树数据
    List<SysMenu> list = MakeMenuTree.makeTree(menuList, 0L);
    return ResultUtils.success("查询成功!",list);
  }
   //查询上级菜单
          @GetMapping("/getParent")
  public ResultVo getParent(){
    List<SysMenu> list = sysMenuService.getParnet();
    return ResultUtils.success("查询成功!",list);
  }
  //分配菜单树数据查询和回显
          @GetMapping("/getAssignTree")
  public ResultVo getAssignTree(Long userId,Long assId){
    //查询当前用户的信息
    SysUser user = sysUserService.getById(userId);
    //查询菜单信息
    List<SysMenu> menuList = null;
    //判断用户是否是超级管理员，超级管理员拥有所有的权限
    if(StringUtils.isNotEmpty(user.getIsAdmin()) &&
            "1".equals(user.getIsAdmin())){

       menuList = sysMenuService.list();
    }else{
      //根据用户id查询
      menuList = sysMenuService.getMenuByUserId(userId);
    }
    //组装树数据
    List<SysMenu> menus = MakeMenuTree.makeTree(menuList, 0L);
    //设置菜单数据
    PermissonVo vo = new PermissonVo();
    vo.setMenuList(menus);
    //查询回显的数据
    List<SysMenu> menuByUserId = sysMenuService.getMenuByUserId(assId);
    List<Long> ids = new ArrayList<>();
    Optional.ofNullable(menuByUserId).orElse(new ArrayList<>())
        .stream()
        .filter(item -> item != null)
        .forEach(item ->{
          ids.add(item.getMenuId());
        });
    vo.setCheckList(ids.toArray());
    return ResultUtils.success("查询成功！",vo);
  }
}

