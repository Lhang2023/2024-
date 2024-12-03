package cim.itmk.web.goods.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cim.itmk.web.goods.entity.Goods;
import cim.itmk.web.goods.mapper.GoodsMapper;
import cim.itmk.web.goods.service.GoodsService;
import org.springframework.stereotype.Service;
@Service
public class GoodsServiceImpl extends ServiceImpl<GoodsMapper, Goods> implements GoodsService {
}

