package cim.itmk.web.wx_user.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import cim.itmk.utils.ResultUtils;
import cim.itmk.utils.ResultVo;
import cim.itmk.web.wx_user.entity.LoginVo;
import cim.itmk.web.wx_user.entity.WxUser;
import cim.itmk.web.wx_user.entity.WxUserParm;
import cim.itmk.web.wx_user.service.WxUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wxUser")
public class WxUserController {
  @Autowired
  private WxUserService wxUserService;

  //注册
  @PostMapping("/register")
  public ResultVo register(@RequestBody WxUser user) {
    //判断账户是否被占用
    QueryWrapper<WxUser> query = new QueryWrapper<>();
    query.lambda().eq(WxUser::getUsername, user.getUsername());
    //查询用户
    WxUser one = wxUserService.getOne(query);
    if (one != null) {
      return ResultUtils.error("用户名被占用!");
    }
    //密码加密

    user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
    //存到数据库
    if (wxUserService.saveOrUpdate(user)) {
      return ResultUtils.success("注册成功！");
    }
    return ResultUtils.error("注册失败!");
  }

  //登录
//  @PostMapping("/login")
//  public ResultVo login(@RequestBody WxUser user){
//    //构造查询条件
//    QueryWrapper<WxUser> query = new QueryWrapper<>();
//query.lambda().eq(WxUser::getUsername,user.getUsername()).eq(WxUser::getPassword, DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
//WxUser wxUser = wxUserService.getOne(query);
//    if(wxUser != null){
//      if(wxUser.getStatus().equals("1")){
//        return ResultUtils.error("您的账户被停用，请联系管理员!");
//      }
//      //返回成功的数据
//      LoginVo vo = new LoginVo();
//      vo.setNickName(wxUser.getNickName());
//      vo.setPhone(wxUser.getPhone());
//      vo.setUserId(wxUser.getUserId());
//      return ResultUtils.success("登录成功",vo);
//    }
//    return ResultUtils.error("用户密码或密码错误!");
//  }
//}
  @PostMapping("/login")
  public ResultVo login(@RequestBody WxUser user) {
    // 构造查询条件
    QueryWrapper<WxUser> query = new QueryWrapper<>();
    query.lambda().eq(WxUser::getUsername, user.getUsername())
            .eq(WxUser::getPassword, DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));

    WxUser wxUser = wxUserService.getOne(query);

    if (wxUser != null) {
      if ("1".equals(wxUser.getStatus())) { // 避免空指针异常
        return ResultUtils.error("您的账户被停用，请联系管理员!");
      }

      // 返回成功的数据
      LoginVo vo = new LoginVo();
      vo.setNickName(wxUser.getNickName());
      vo.setPhone(wxUser.getPhone());
      vo.setUserId(wxUser.getUserId());
      return ResultUtils.success("登录成功", vo);
    }

    return ResultUtils.error("用户密码或密码错误!");
  }

//列表
  @GetMapping("/list")
  public ResultVo getList(WxUserParm parm){
           //构造分页对象
           IPage<WxUser> page = new Page<>(parm.getCurrentPage(),parm.getPageSize());
           //构造查询条件
           QueryWrapper<WxUser> query = new QueryWrapper<>();

        query.lambda().like(StringUtils.isNotEmpty(parm.getPhone()),WxUser::getPhone,parm.getPhone())
           .orderByDesc(WxUser::getUsername);
           IPage<WxUser> list = wxUserService.page(page, query);
           return ResultUtils.success("查询成功",list);
         }
         @PostMapping("/stopUser")
  public ResultVo stopUser(@RequestBody WxUser user){
           UpdateWrapper<WxUser> query = new UpdateWrapper<>();
           query.lambda().set(WxUser::getStatus,user.getStatus())
               .eq(WxUser::getUserId,user.getUserId());
           if(wxUserService.update(query)){
             return ResultUtils.success("设置成功!");
           }
           return ResultUtils.error("设置失败!");
         }
        }
