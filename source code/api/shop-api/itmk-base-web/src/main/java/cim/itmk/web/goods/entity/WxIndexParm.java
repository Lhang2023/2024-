package cim.itmk.web.goods.entity;

import lombok.Data;

@Data
public class WxIndexParm {
  private Long currentPage;
  private Long pageSize;
  private Long categoryId;
  private String keywords;
}
