

class superDate {
  /**
   * 时间格式化
   * @param  {Date} date 待格式化的时间
   * @param  {string} rule 格式化规则
   * @return {string} 格式化后的字符串
   *
   * 支持的格式化选项包括:
   * 年：yy(97), yyyy(1997)
   * 月：m(1), mm(01), mmm(1月), mmmm(一月)
   * 日：d(5), dd(05), ddd(周五)，dddd(星期五)，小写是日期，大写是星期几
   * 小时：h(2), hh(02), H(14), HH(14)，小写是12小时制，大写是24小时制
   * 分：M(3), MM(03),
   * 秒：s(8), ss(08)
   * 毫秒：l(056), L(56), l三位，L两位
   *
  */
  format = (date, rule) => {
    if (!date || isNaN(date)) {
      throw new SyntaxError('invalid date');
    };
    
  }


}

const date = new superDate();

export default date;