package cim.itmk.web.wx_user.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cim.itmk.web.wx_user.entity.WxUser;
import cim.itmk.web.wx_user.mapper.WxUserMapper;
import cim.itmk.web.wx_user.service.WxUserService;
import org.springframework.stereotype.Service;

@Service
public class WxUserServiceImpl extends ServiceImpl<WxUserMapper, WxUser> implements WxUserService {
}
