package cim.itmk.web.user_menu.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import cim.itmk.web.user_menu.entity.UserMenu;
import org.apache.ibatis.annotations.Param;
import java.util.List;

public interface UserMenuMapper extends BaseMapper<UserMenu> {
  boolean saveMenu(@Param("useId") Long userId, @Param("menuIds")List<Long> menuIds);
}
