package cim.itmk.web.user_menu.service;

import com.baomidou.mybatisplus.extension.service.IService;
import cim.itmk.web.user_menu.entity.AssignParm;
import cim.itmk.web.user_menu.entity.UserMenu;

public interface UserMenuService extends IService<UserMenu> {
  void saveMenu(AssignParm parm);
}

