/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80033
 Source Host           : localhost:3306
 Source Schema         : shop-second

 Target Server Type    : MySQL
 Target Server Version : 80033
 File Encoding         : 65001

 Date: 02/12/2024 10:50:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `goods_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL COMMENT '发布人id',
  `category_id` int NULL DEFAULT NULL COMMENT '分类id',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '0：闲置 1：求购',
  `goods_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品名称',
  `goods_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '简介',
  `goods_price` decimal(10, 2) NULL DEFAULT NULL COMMENT '价格',
  `user_name` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '联系人',
  `phone` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '联系电话',
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '图片',
  `wx_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '微信号',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '0：上架 1：上架',
  `sell_status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '0：未出售 1：已出售',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `set_index` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '0：未推荐 1：已推荐',
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '求购地址',
  `delete_status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '0：未删除 1：删除',
  PRIMARY KEY (`goods_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, 1, 0, '0', '12', '12', 12.00, '12', '12', '', '12', '0', '0', '2024-11-25 15:09:48', '1', '12', NULL);
INSERT INTO `goods` VALUES (2, 1, 1, '0', '21', '2', 2.00, '2', '2', '', '2', '0', '0', '2024-11-25 20:27:36', '1', '2', NULL);
INSERT INTO `goods` VALUES (3, 1, 1, '0', '究极电脑', '电脑', 12.00, '12', '12', '', '12', '0', '0', '2024-11-26 09:16:03', '1', '12', NULL);
INSERT INTO `goods` VALUES (4, 2, 1, '1', '12', '12', 12.00, '12', '12', '', '12', '0', '0', '2024-11-26 10:22:08', '1', '1', '1');
INSERT INTO `goods` VALUES (5, 1, 1, '0', '12', '12', 1212.00, '12', '12', '', '12', '0', '0', '2024-11-26 16:18:33', '1', '2', NULL);
INSERT INTO `goods` VALUES (6, 1, NULL, '0', '1', '1', 1.00, '1', '1', '', '1', '0', '0', '2024-11-28 10:43:46', '1', '1', NULL);
INSERT INTO `goods` VALUES (7, 1, 1, '0', '1', '1', 1.00, '1', '1', '', '1', '0', '0', '2024-11-28 10:45:43', '1', '1', NULL);
INSERT INTO `goods` VALUES (8, 1, 0, '0', '1', '1', 1.00, '1', '1', '', '1', '0', '0', '2024-11-28 10:47:14', '1', '1', NULL);
INSERT INTO `goods` VALUES (9, 1, 0, '0', '1', '1', 1.00, '1', '1', '', '1', '0', '0', '2024-11-28 10:47:16', '1', '1', NULL);
INSERT INTO `goods` VALUES (10, 1, 0, '0', '1', '1', 1.00, '1', '1', '', '1', '0', '0', '2024-11-28 10:47:17', '1', '1', NULL);
INSERT INTO `goods` VALUES (11, 1, 0, '0', '1', '1', 1.00, '1', '1', '', '1', '0', '0', '2024-11-28 10:47:17', '1', '1', NULL);
INSERT INTO `goods` VALUES (12, 1, 0, '0', '1', '1', 1.00, '1', '1', '', '1', '0', '0', '2024-11-28 10:48:11', '1', '1', NULL);
INSERT INTO `goods` VALUES (13, 1, 0, '0', '12', '12', 12.00, '12', '12', '', '12', '0', '0', '2024-11-28 11:04:13', '1', '12', '1');
INSERT INTO `goods` VALUES (14, 1, 1, '0', '12', '12', 12.00, '12', '12', '', '12', '0', '0', '2024-11-28 11:13:20', '0', '12', '1');
INSERT INTO `goods` VALUES (15, 1, 7, '0', '红米K80', '于2024/11/28超新购买，99新', 3000.00, 'lzy', '110', '', '110', '0', '0', '2024-11-28 20:15:45', '1', '广州南方学院', NULL);
INSERT INTO `goods` VALUES (16, 1, 11, '1', 'aj', 'aj1号，要求5新以上', 500.00, 'nihao', '110', '', '110', '0', '0', '2024-11-28 20:44:50', '1', '广州南方学院', NULL);
INSERT INTO `goods` VALUES (17, 1, 1, '0', '电脑', '电脑', 2000.00, 'nihao', '110', '', '110', '0', '0', '2024-12-01 14:53:44', '1', '12', NULL);
INSERT INTO `goods` VALUES (18, 1, 7, '1', '小米9', '无', 900.00, 'nihao', '123456', '', '123', '0', NULL, '2024-12-01 19:45:43', '1', '123', NULL);
INSERT INTO `goods` VALUES (19, 1, 7, '1', '1', '1', 1.00, '1', '1', '', '1', '0', NULL, '2024-12-01 20:02:15', '1', '1', NULL);

-- ----------------------------
-- Table structure for goods_category
-- ----------------------------
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category`  (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '名称',
  `order_num` int NULL DEFAULT NULL COMMENT '序号',
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_category
-- ----------------------------
INSERT INTO `goods_category` VALUES (7, '手机', 1);
INSERT INTO `goods_category` VALUES (8, '电脑', 2);
INSERT INTO `goods_category` VALUES (9, '衣服', 3);
INSERT INTO `goods_category` VALUES (10, '书籍', 4);
INSERT INTO `goods_category` VALUES (11, '鞋子', 5);

-- ----------------------------
-- Table structure for goods_order
-- ----------------------------
DROP TABLE IF EXISTS `goods_order`;
CREATE TABLE `goods_order`  (
  `order_id` int NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `goods_id` int NULL DEFAULT NULL COMMENT '商品id',
  `order_user` int NULL DEFAULT NULL COMMENT '下单人id',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '订单金额',
  `create_time` datetime NULL DEFAULT NULL COMMENT '下单时间',
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_order
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `parent_id` int NULL DEFAULT NULL COMMENT '上级id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '菜单名称',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '权限字段',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '图标',
  `order_num` int NULL DEFAULT NULL COMMENT '序号',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `parent_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '上级菜单名称',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '1:菜单 2：按钮',
  `path` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '路由名称',
  PRIMARY KEY (`menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, 1, '1', '1', '1', 1, '2024-11-26 09:17:37', '1', '1', '1');
INSERT INTO `sys_menu` VALUES (30, 0, '1', '1', '2', 1, '2024-11-26 10:09:15', '顶级菜单', '\'1\'', '1');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '登录账户',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '登录密码',
  `nick_name` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '姓名',
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '电话',
  `sex` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '性别',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '状态 0：启用 1：停用',
  `is_admin` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '是否是管理员 0：否 1：是',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 'admin', '202cb962ac59075b964b07152d234b70', '超级管理员', '17841148071', '0', '0', '1');
INSERT INTO `sys_user` VALUES (2, 'test', '202cb962ac59075b964b07152d234b70', 'test', '123', '0', '0', '1');
INSERT INTO `sys_user` VALUES (3, '123', '202cb962ac59075b964b07152d234b70', '刘航', '17', '0', '0', '1');
INSERT INTO `sys_user` VALUES (4, 'admin110', '202cb962ac59075b964b07152d234b70', '区锦涛', '110', '1', '0', '1');
INSERT INTO `sys_user` VALUES (5, '1', '202cb962ac59075b964b07152d234b70', '1', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for user_menu
-- ----------------------------
DROP TABLE IF EXISTS `user_menu`;
CREATE TABLE `user_menu`  (
  `user_menu_id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int NULL DEFAULT NULL COMMENT '用户id',
  `menu_id` int NULL DEFAULT NULL COMMENT '菜单id',
  PRIMARY KEY (`user_menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_menu
-- ----------------------------
INSERT INTO `user_menu` VALUES (1, 1, 123);

-- ----------------------------
-- Table structure for wx_user
-- ----------------------------
DROP TABLE IF EXISTS `wx_user`;
CREATE TABLE `wx_user`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '昵称',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `picture` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '图片',
  `phone` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '电话',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '密码',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '0：启用，1：停用',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wx_user
-- ----------------------------
INSERT INTO `wx_user` VALUES (1, 'sblzy', 'sblzy', NULL, '12', '12', 'c20ad4d76fe97759aa27a0c99bff6710', '0');
INSERT INTO `wx_user` VALUES (2, '123', '123', NULL, '123', '123', '202cb962ac59075b964b07152d234b70', '0');
INSERT INTO `wx_user` VALUES (3, '234', '234', NULL, '1234', '1234', '81dc9bdb52d04dc20036dbd8313ed055', '0');
INSERT INTO `wx_user` VALUES (4, 'user1', 'user1', NULL, '12345', '12345', '827ccb0eea8a706c4c34a16891f84e7b', '0');
INSERT INTO `wx_user` VALUES (5, '', NULL, NULL, '123456', '123456', 'e10adc3949ba59abbe56e057f20f883e', '0');
INSERT INTO `wx_user` VALUES (6, NULL, NULL, NULL, '11', '11', '6512bd43d9caa6e02c990b0a82652dca', '0');

SET FOREIGN_KEY_CHECKS = 1;
