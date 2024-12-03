package cim.itmk.web.goods_order.service.impl;

import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cim.itmk.web.goods.entity.Goods;
import cim.itmk.web.goods.service.GoodsService;
import cim.itmk.web.goods_order.entity.GoodsOrder;
import cim.itmk.web.goods_order.mapper.GoodsOrderMapper;
import cim.itmk.web.goods_order.service.GoodsOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Date;

@Service
public class GoodsOrderServiceImpl extends ServiceImpl<GoodsOrderMapper,
        GoodsOrder> implements GoodsOrderService {
  @Autowired
  private GoodsService goodsService;
  @Override
  @Transactional
  public void replaceOrder(GoodsOrder goodsOrder) {
    //1、插入订单数据
    goodsOrder.setCreateTime(new Date());
    int insert = this.baseMapper.insert(goodsOrder);
    //2、更新商品状态
    if(insert > 0){
      UpdateWrapper<Goods> query = new UpdateWrapper<>();
      query.lambda().set(Goods::getSellStatus,"1")
          .set(Goods::getStatus,"1")
          .eq(Goods::getGoodsId,goodsOrder.getGoodsId());
      goodsService.update(query);
    }
  }
}
