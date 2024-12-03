package cim.itmk.web.sys_user.controller;

import cim.itmk.web.sys_user.entity.*;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.google.code.kaptcha.impl.DefaultKaptcha;
import cim.itmk.utils.ResultUtils;
import cim.itmk.utils.ResultVo;
import cim.itmk.web.sys_user.service.SysUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;
import sun.misc.BASE64Encoder;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

@RestController
@RequestMapping("/api/sysUser")
public class SysUserController {
    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private DefaultKaptcha defaultKaptcha;

    // 新增
    @PostMapping("/add")
    public ResultVo add(@RequestBody SysUser sysUser) {
        sysUser.setPassword(DigestUtils.md5DigestAsHex(sysUser.getPassword().getBytes()));
        if (sysUserService.save(sysUser)) {
            return ResultUtils.success("新增成功!");
        }
        return ResultUtils.error("新增失败!");
    }

    // 编辑
    @PutMapping("/edit")
    public ResultVo edit(@RequestBody SysUser sysUser) {
        if (sysUserService.updateById(sysUser)) {
            return ResultUtils.success("编辑成功!");
        }
        return ResultUtils.error("编辑失败!");
    }

    // 删除
    @DeleteMapping("/delete/{userId}")
    public ResultVo delete(@PathVariable("userId") Long userId) {
        if (sysUserService.removeById(userId)) {
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    // 列表
    @GetMapping("/getList")
    public ResultVo getList(PageParm parm) {
        // 构造查询条件
        QueryWrapper<SysUser> query = new QueryWrapper<>();
        query.lambda().like(StringUtils.isNotEmpty(parm.getNickName()), SysUser::getNickName, parm.getNickName());

        // 构造分页对象
        IPage<SysUser> page = new Page<>(parm.getCurrentPage(), parm.getPageSize());

        // 查询
        IPage<SysUser> list = sysUserService.page(page, query);
        return ResultUtils.success("查询成功", list);
    }

    // 生成验证码
    @PostMapping("/image")
    public ResultVo imageCode(HttpServletRequest request) {
        // 生成验证码
        String text = defaultKaptcha.createText();
        // 验证码存到session
        HttpSession session = request.getSession();
        session.setAttribute("code", text);
        // 生成图片，转换为base64
        BufferedImage bufferedImage = defaultKaptcha.createImage(text);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try {
            ImageIO.write(bufferedImage, "jpg", outputStream);
            BASE64Encoder encoder = new BASE64Encoder();
            String base64 = encoder.encode(outputStream.toByteArray());
            String captchaBase64 = "data:image/jpeg;base64," + base64.replaceAll("\r\n", "");
            return ResultUtils.success("生成成功", captchaBase64);
        } catch (IOException e) {
            e.printStackTrace();
            return ResultUtils.error("生成验证码失败");
        } finally {
            try {
                outputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    // 登录
    @PostMapping("/login")
    public ResultVo login(@RequestBody LoginParm parm, HttpServletRequest request) {
        // 获取session里面的code验证码
        HttpSession session = request.getSession();
        String code = (String) session.getAttribute("code");
        // 获取前端传递过来的验证码
        String codeParm = parm.getCode();
        if (StringUtils.isEmpty(code)) {
            return ResultUtils.error("验证码过期!");
        }
        // 对比验证码
        if (!codeParm.equals(code)) {
            return ResultUtils.error("验证码错误!");
        }
        // 验证用户信息
        QueryWrapper<SysUser> query = new QueryWrapper<>();
        query.lambda().eq(SysUser::getUsername, parm.getUsername())
                .eq(SysUser::getPassword, DigestUtils.md5DigestAsHex(parm.getPassword().getBytes()));//这里密码被加密了，上面不多个加密是登录不上的
        SysUser user = sysUserService.getOne(query);
        if (user == null) {
            return ResultUtils.error("用户名或密码错误!");
        }
        if ("1".equals(user.getStatus())) {
            return ResultUtils.error("账户被停用，请联系管理员!");
        }
        // 返回登录信息
        LoginVo vo = new LoginVo();
        vo.setUserId(user.getUserId());
        vo.setNickName(user.getNickName());
        return ResultUtils.success("登录成功", vo);
    }
    //修改密码
    @PutMapping("/updatePassword")
    public ResultVo updatePassword(@RequestBody UpdatePasswordParm parm) {
        // 验证原密码是否正确
        SysUser user = sysUserService.getById(parm.getUserId());

        // 检查用户是否存在
        if (user == null) {
            return ResultUtils.error("用户不存在!");
        }

        // 原密码加密
        String oldPassword = DigestUtils.md5DigestAsHex(parm.getOldPassword().getBytes());

        // 检查原密码是否正确
        if (!oldPassword.equals(user.getPassword())) {
            return ResultUtils.error("原密码不正确!");
        }

        UpdateWrapper<SysUser> query = new UpdateWrapper<>();
        query.lambda()
                .set(SysUser::getPassword, DigestUtils.md5DigestAsHex(parm.getPassword().getBytes()))
                .eq(SysUser::getUserId, parm.getUserId());

        // 更新密码
        if (sysUserService.update(query)) {
            return ResultUtils.success("修改成功!");
        }

        return ResultUtils.error("修改失败！");
    }


}
