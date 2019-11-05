# super-utils
open utils for development

## install
`npm i @mlz/super-utils -S`

## use
`import { superDate, superPerformance, superString } from 'super-great-utils';`

`superDate.format(timestemp, 'yyyy年mm月dd日 HH:MM:ss')`

`superString.parseUrl('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1')`

* superDate    --- tool functions of time and date
* superPerformance  -- tool functions of performance
* superString  -- tool functions of string

## guide
### superDate.format(date:number， rule?:string， options?:Object)
@param  {Date} date 待格式化的时间

@param  {string} rule 格式化规则

@param  {Object} options 高级选项，可以指定locale，utc

@return {string} 格式化后的字符串

* rule 支持的格式化选项包括:
* 年：yy(97), yyyy(1997)
* 月：m(1), mm(01), mmm(1月), mmmm(一月)
* 日：d(5), dd(05),
* 小时：h(2), hh(02), H(14), HH(14)，小写是12小时制，大写是24小时制
* 分：M(3), MM(03),
* 秒：s(8), ss(08)
* 毫秒：l(056), L(56), l三位，L两位
* 星期：ddd(周五)，dddd(星期五)
* 时区：Z或z (UTC, CST等)
* 时区offset：O或o (+0800等)
* options 高级选项:
{
*  utc:boolean (是否取utc时间，默认false)
*  locale:'zh'|'en' (用于显示中文还是英文, 默认为false)
* }

使用方法：
```
superDate.format(timestemp, 'yyyy年mm月dd日 HH:MM:ss')   // 2019年07月16日 15:22:06
superDate.format(timestemp, 'yyyy-mm-dd HH:MM:ss')   // 2019-07-16 15:22:06
superDate.format(timestemp, 'yyyy-mm-dd HH:MM:ss ddd')   // 2019-07-16 15:22:06 周二
superDate.format(1563256029342, 'yyyy-mm-dd HH:MM:ss TT dddd', { locale: 'en' })   // 2019-07-16 13:47:09 PM Tuesday
```

### superString.escape(str:string)
@param  {string} str 需转义的字符串

@return {string} 转义后的字符串

使用方法：

`superString.escape('<hello>');  // '&lt;hello&gt;'`

### superString.parseUrl(str:string)
@param  {string} url (可选)

@return {object} (参数对象)

使用方法：

`superString.parseUrl('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1');  // {ie: "utf-8", f: "8", rsv_bp: "1", rsv_idx: "1"}`

### superPerformance.debounce(func:function，delay:number，immediate?:boolean)
函数防抖

@param {function} func 要防抖的函数

@param {number} delay 延迟时间（单位：毫秒）

@param {boolean} immediate 是否立即执行

使用方法：

`<div onClick={superPerformance.debounce(this.test, 1000)}>`

### superPerformance.throttle(func:function，delay:number，immediate?:boolean)
函数节流

@param {function} func 要防抖的函数

@param {number} delay 延迟时间（单位：毫秒）

@param {boolean} immediate 是否立即执行

使用方法：

`<div onClick={superPerformance.throttle(this.test, 1000)}>`


