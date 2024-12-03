package cim.itmk.web.goods_order.controller;

import cim.itmk.utils.ResultUtils;
import cim.itmk.utils.ResultVo;
import cim.itmk.web.goods_order.entity.GoodsOrder;
import cim.itmk.web.goods_order.service.GoodsOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/goodsOrder")
public class GoodsOrderController {
  @Autowired
  private GoodsOrderService goodsOrderService;
  //交易订单
          @PostMapping("/replaceOrder")
  public ResultVo replaceOrder(@RequestBody GoodsOrder order){
    goodsOrderService.replaceOrder(order);
    return ResultUtils.success("交易成功!");
  }
}
