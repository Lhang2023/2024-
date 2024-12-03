package cim.itmk.web.goods_order.service;

import com.baomidou.mybatisplus.extension.service.IService;
import cim.itmk.web.goods_order.entity.GoodsOrder;

public interface GoodsOrderService extends IService<GoodsOrder> {
  void replaceOrder(GoodsOrder goodsOrder);
}
