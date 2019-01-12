/*
 Navicat Premium Data Transfer

 Source Server         : work
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : whxdtp5

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 11/01/2019 17:22:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tp_user
-- ----------------------------
DROP TABLE IF EXISTS `tp_user`;
CREATE TABLE `tp_user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `project` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '//收集的咨询人员表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tp_user
-- ----------------------------
INSERT INTO `tp_user` VALUES (1, '老蔡', '老蔡', 0, '妇科检查');
INSERT INTO `tp_user` VALUES (2, '11', '11', 11, '11');
INSERT INTO `tp_user` VALUES (3, '22', '15972939374', 22, '22');
INSERT INTO `tp_user` VALUES (4, '44', '15972939374', 44, '44');
INSERT INTO `tp_user` VALUES (5, '55', '15972939374', 55, '55');
INSERT INTO `tp_user` VALUES (6, '66', '15972939374', 66, '66');
INSERT INTO `tp_user` VALUES (7, '77', '15972939374', 77, '77');
INSERT INTO `tp_user` VALUES (8, '88', '15972939374', 88, '888');
INSERT INTO `tp_user` VALUES (9, '99', '15972939374', 99, '99');

SET FOREIGN_KEY_CHECKS = 1;
