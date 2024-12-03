package cim.itmk.web.goods_category.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cim.itmk.web.goods_category.entity.GoodsCategory;
import cim.itmk.web.goods_category.mapper.GoodsCategoryMapper;
import cim.itmk.web.goods_category.service.GoodsCategoryService;
import org.springframework.stereotype.Service;

@Service
public class GoodsCategoryServiceImpl extends ServiceImpl<GoodsCategoryMapper,GoodsCategory> implements GoodsCategoryService {
}
