const expect = require('chai').expect;
import superDate from '../src/date';
import superPerformance from '../src/performance';
import superString from '../src/string';

describe('Unit test', function(){
  // date模块测试用例
  describe('#date.ts', function(){
    describe('@format()', function(){
      it('superDate.format(1563256029342) should return 2019-07-16 13:47:09', function(){
        expect(superDate.format(1563256029342)).to.be.equal('2019-07-16 13:47:09');
      });
      it('superDate.format(1563256029342, "yyyy年mm月dd日 HH:MM:ss") should return 2019年07月16日 13:47:09', function(){
        expect(superDate.format(1563256029342, "yyyy年mm月dd日 HH:MM:ss")).to.be.equal('2019年07月16日 13:47:09');
      });
      it('superDate.format(1563256029342, "yyyy-mm-dd HH:MM:ss ddd") should return 2019年07月16日 13:47:09 周二', function(){
        expect(superDate.format(1563256029342, "yyyy年mm月dd日 HH:MM:ss ddd")).to.be.equal('2019年07月16日 13:47:09 周二');
      });
      it('superDate.format(1563256029342, "yyyy-mm-dd HH:MM:ss dddd") should return 2019年07月16日 13:47:09 星期二', function(){
        expect(superDate.format(1563256029342, "yyyy年mm月dd日 HH:MM:ss dddd")).to.be.equal('2019年07月16日 13:47:09 星期二');
      });
      it('superDate.format(1563256029342, "yyyy-mm-dd HH:MM:ss TT dddd", { locale: "en" }) should return 2019-07-16 13:47:09 PM Tuesday', function(){
        expect(superDate.format(1563256029342, "yyyy-mm-dd HH:MM:ss TT dddd", { locale: "en" })).to.be.equal('2019-07-16 13:47:09 PM Tuesday');
      });
    });
  });

  // 功能函数模块测试用例
  // describe('#performance.ts', function(){
  //   function trigger_function(type) {
  //     const round = 0;
  //     return function(){
  //       const num = 0;
  //       let timer = null;
  //       timer = setInterval(function(){
  //         num >= 7 && clearInterval(timer);
          
  //         num += 1;
  //       }, 200);
  //     }
  //   };
  //   describe('@debounce()', function(){
  //     it('superPerformance.debounce()');
  //   });
  //   describe('@throttle()', function(){
      
  //   });
  // });

  // 字符串模块测试用例
  describe('#string', function(){
    // 字符串的转义方法test
    describe('@escape()', function(){
      it('superString.escape(dsf&dsfa<dfaf>dfsaf"fdsa©dfsdaf®sfdfsda×dsfsf÷fwefwe) should return dsf&amp;dsfa&lt;dfaf&gt;dfsaf&quot;fdsa&copy;dfsdaf&reg;sfdfsda&times;dsfsf&divide;fwefwe', function(){
        expect(superString.escape('dsf&dsfa<dfaf>dfsaf"fdsa©dfsdaf®sfdfsda×dsfsf÷fwefwe')).to.be.equal('dsf&amp;dsfa&lt;dfaf&gt;dfsaf&quot;fdsa&copy;dfsdaf&reg;sfdfsda&times;dsfsf&divide;fwefwe');
      })
    });

    // 获取url参数方法test
    describe('@parseUrl()', function(){
      const right_return_value = {
        ie: 'utf-8',
        f: '8',
        rsv_bp: '1',
        rsv_idx: '1'
      }
      it('superString.parseUrl(https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1) should return {...}', function(){
        expect(superString.parseUrl('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1')).to.be.an('object');
        expect(JSON.stringify(superString.parseUrl('https://ww.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1'))).to.be.equal(JSON.stringify(right_return_value));
      });
    });
  });
});
