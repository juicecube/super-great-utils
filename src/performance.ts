/* eslint-disable @typescript-eslint/no-this-alias */
/**
  * 功能函数
  *
*/

class SuperPerformance {
  /**
    * 函数防抖
    * @param {function} func 要防抖的函数
    * @param {number} delay 延迟时间（单位：毫秒）
    * @param {boolean} immediate 是否立即执行
  */
  debounce = (func:() => void, delay:number, immediate:boolean = false) => {
    if (typeof func !== 'function') {
      throw new Error('func is expected to be a function');
    }

    let timer:NodeJS.Timeout|null = null;
    return function() {
      const args = arguments;
      const context = this;
      timer && clearTimeout(timer);
      if (immediate) {
        func.apply(context, args);
      }
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }


  /**
    * 函数节流
    * @param {function} func 要节流的函数
    * @param {number} delay 延迟时间（单位：毫秒）
    * @param {boolean} immediate 是否立即执行
  */
  throttle = (func:() => void, delay:number, immediate:boolean = false) => {
    if (typeof func !== 'function') {
      throw new Error('func is expected to be a function');
    }
    let lastExecuteTime = 0;

    return function() {
      const args = arguments;
      const context = this;
      const currentTime = + new Date();

      if (currentTime - lastExecuteTime >= delay || immediate) {
        func.apply(context, args);
        lastExecuteTime = currentTime;
      }
    };
  }

}

const performance = new SuperPerformance();

export default performance;
