/**
  * 字符 & 字符串
  * 
*/

class SuperString {
  /**
   * 字符串的转义
   * @param  {string} str 需转义的字符串
   * @return {string} 转义后的字符串
   * 
   * 将`&`, `<`, `>`, `"`, `'`, `©`, `®`, `×`, `÷`转义
   * 
   * 使用方法：
   * ```
   * SuperString.translateForHTML('<hello>');  => '&lt;hello&gt;'
   * ```
  */
  escape = (str:string) => {
    if (!str || typeof str !== 'string') {
      throw new SyntaxError('invalid param');
    }
    const symbol_map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '©': '&copy;',
      '®': '&reg;',
      '×': '&times;',
      '÷': '&divide;',
    };
    const escape_expr = /(\&|\<|\>|\"|\'|\©|\®|\×|\÷)/g;
    return ('' + str).replace(escape_expr, function(match) {
        return symbol_map[match];
    });
  }

  /**
   * 获取url参数
   *
   * @param  {string} url (可选)
   * @return {object} (参数对象)
   * 
   * 使用方法：
   * ```
   * SuperString.parseUrl();  => '&lt;hello&gt;'
   * ```
  */
  parseUrl = (url?:string) => {
    if (typeof url !== 'string') {
      throw new SyntaxError('invalid url');
    }
    const params = {};
    url = url || window.location.search;
    const param_arr = url.split('?')[1].split('&');
    param_arr.forEach((item) => {
      const index = item.indexOf('=');
      const name = item.substr(0, index);
      const value = item.substr(index + 1);
      params[name] = value;
    });
    return JSON.parse(JSON.stringify(params));
  }
}

const string = new SuperString();

export default string;