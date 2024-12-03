package cim.itmk;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
@MapperScan("cim.itmk.web.sys_menu.mapper.SysMenuMapper")
public class ShopApplication {
   public static void main(String[] args) {
      SpringApplication.run(ShopApplication.class,args);
 }
}
