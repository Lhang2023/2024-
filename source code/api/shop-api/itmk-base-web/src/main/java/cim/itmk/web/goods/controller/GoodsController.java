package cim.itmk.web.goods.controller;

import cim.itmk.web.goods.entity.WxIndexParm;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import cim.itmk.utils.ResultUtils;
import cim.itmk.utils.ResultVo;
import cim.itmk.web.goods.entity.Goods;
import cim.itmk.web.goods.entity.GoodsListParm;
import cim.itmk.web.goods.entity.UpandDownParm;
import cim.itmk.web.goods.service.GoodsService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Date;

@RestController
@RequestMapping("/api/goods")
public class GoodsController {
    @Autowired
    private GoodsService goodsService;

    //发布
    @PostMapping("/release")
    public ResultVo release(@RequestBody Goods goods) {
        //设置时间
        goods.setCreateTime(new Date());
        if (goodsService.save(goods)) {
            return ResultUtils.success("发布成功!");
        }
        return ResultUtils.error("发布失败!");
    }

    //列表
    @GetMapping("/list")
    public ResultVo getList(GoodsListParm parm) {
        //构造分页对象
        IPage<Goods> page = new Page<>
                (parm.getCurrentPage(), parm.getPageSize());
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();

        query.lambda().like(StringUtils.isNotEmpty(parm.getGoodsName()), Goods::getGoodsName, parm.getGoodsName())
//        .eq(Goods::getDeleteStatus,"0")
                .orderByDesc(Goods::getCreateTime);
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功", list);
    }

    //上架下架
    @PostMapping("/upanddown")
    public ResultVo upanddown(@RequestBody UpandDownParm parm) {
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getStatus, parm.getStatus())
                .eq(Goods::getGoodsId, parm.getGoodsId());
        if (goodsService.update(query)) {
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }

    //推荐首页
    @PostMapping("/setIndex")
    public ResultVo setIndex(@RequestBody UpandDownParm parm) {
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getSetIndex, parm.getSetIndex())
                .eq(Goods::getGoodsId, parm.getGoodsId());
        if (goodsService.update(query)) {
            return ResultUtils.success("设置成功!");
        }
        return ResultUtils.error("设置失败!");
    }

    //删除
    @PostMapping("/delete")
    public ResultVo delete(@RequestBody UpandDownParm parm) {
        UpdateWrapper<Goods> query = new UpdateWrapper<>();
        query.lambda().set(Goods::getDeleteStatus, "1")
                .eq(Goods::getGoodsId, parm.getGoodsId());
        if (goodsService.update(query)) {
            return ResultUtils.success("删除成功!");
        }
        return ResultUtils.error("删除失败!");
    }

    //小程序首页推荐列表
    @GetMapping("/getIndexList")
    public ResultVo getIndexList(WxIndexParm parm) {
        QueryWrapper<Goods> query = new QueryWrapper<>();

        query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()), Goods::getGoodsName, parm.getKeywords())
      //  .eq(Goods::getStatus,"0")
//        .eq(Goods::getDeleteStatus,"0")
                .eq(Goods::getSetIndex, "1")
                .eq(Goods::getStatus, "0")
                .orderByDesc(Goods::getCreateTime);
        IPage<Goods> page = new Page<>(parm.getCurrentPage(), parm.getPageSize());
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功", list);
    }

    //小程序闲置列表查询
    @GetMapping("/getUsedList")
    public ResultVo getUsedList(WxIndexParm parm) {
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();

        query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()), Goods::getGoodsName, parm.getKeywords())
      //          .eq(Goods::getStatus, "0")
//                .eq(Goods::getDeleteStatus, "0")
                .eq(Goods::getType, "0")
//               .eq(Goods::getSellStatus, "0")
//                .eq(Goods::getCategoryId, parm.getCategoryId())
                .orderByDesc(Goods::getCreateTime);
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(), parm.getPageSize());
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功", list);
    }

    //小程序求购列表查询
    @GetMapping("/getBuyList")
    public ResultVo getBuyList(WxIndexParm parm) {
        //构造查询条件
        QueryWrapper<Goods> query = new QueryWrapper<>();

        query.lambda().like(StringUtils.isNotEmpty(parm.getKeywords()), Goods::getGoodsName, parm.getKeywords())
//                .eq(Goods::getStatus, "0")
//                .eq(Goods::getDeleteStatus, "0")//11/28暂时放弃这个要求功能，怪麻烦的，因为没直接添加
                .eq(Goods::getType, "1")
//                .eq(Goods::getSellStatus, "0")
//                .eq(Goods::getCategoryId, parm.getCategoryId())
                .orderByDesc(Goods::getCreateTime);
        //构造分页对象
        IPage<Goods> page = new Page<>(parm.getCurrentPage(), parm.getPageSize());
        IPage<Goods> list = goodsService.page(page, query);
        return ResultUtils.success("查询成功", list);
    }
}
