/**
  * 字符 & 字符串
  * 
*/

class SuperString {
  /**
 * 字符串的转义
 *
 * 将`&`, `<`, `>`, `"`, `'`分别转义为`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`
 * 
 * 使用方法：
 * ```
 * SuperString.translateForHTML('<hello>');  => '&lt;hello&gt;'
 * ```
 */
  escape = (str:string) => {
    if (str && typeof str === 'string') {
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
    return str;
  }
}

const string = new SuperString();

export default string;