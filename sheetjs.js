/*
 * ctx 环境对象说明:
 *  - domain {string} - 获取当前域名,
 *  - hostName {string} - 获取当前主机名,
 *  - pageConfig {object} - 获取页面配置json,
 *  - isView {boolen} 是否是视口文件,
 *  - HTMLescape {function} - 转义html文本, 使之console出来时不被解析
 *    - 用法举例: console.log(ctx.HTMLescape('<p>xxx</p>')) // 输出<p>xxx</p>文本
 *  - randomNumber{function} - 获取六位随机数,
 *    - 用法举例: ctx.randomNumber() // 返回六位随机数
 *  - chalk {function} - 格式化输出, 可输出带颜色的log. (官方文档)[https://github.com/chalk/chalk]
 *    - 用法举例: console.log(ctx.chalk.red.bold("无法加载文件内容...")) // 输出红色粗体log
 *  - processCtx {function} - process函数, 在自行组装html时可能会调用,
 *    - 用法举例: ctx.processCtx(ele) process一遍ele
 *  - prescript {array} - 通常用不到,
 *  - preimport {array} - 通常用不到.
 */

/*
 * @description 处理特殊元素. 本函数在页面发布时执行, 若guieditor页面(可视化编辑界面)实现的代码 和 浏览器最终呈现时需要的代码有区别, 则在此处处理. 比如, 页面编辑时有的元素需可见, 而最终显示时需隐藏. 则可在此处将可见元素设置为隐藏
 * @param {array} - 特殊元素数组
 * @param {object} - 环境对象, 环境对象提供了一些函数, 在处理元素时可选择使用
 */
module.exports = function(set, ctx) {
  // 注意, 此处的$可看做为jquery. 支持了jquery初级操作(并未支持所有操作). (官方文档)[https://github.com/cheeriojs/cheerio]
  $(set).each(function(index, targetDom) {
    var $this = $(targetDom);
    // 在下方进行需要的处理
  });
};
