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
  debounce = (func, delay, immediate = false) => {
    if (typeof func !== 'function') {
      throw new Error('func is expected to be a function')
    }

    let timer = null;
    return function() {
      const args = arguments;
      const context = this;
      timer && clearTimeout(timer);
      if (immediate) {
        func.apply(context, args);
      }
      timer = setTimeout(func.apply(context, args), delay);
    }
  }


 /**
    * 函数节流
    * @param {function} func 要节流的函数
    * @param {number} delay 延迟时间（单位：毫秒）
    * @param {boolean} immediate 是否立即执行
  */
  throttle = (func, delay, immediate = false) => {
    if (typeof func !== 'function') {
      throw new Error('func is expected to be a function')
    }
    let last_execute_time = 0;

    return function() {
      const args = arguments;
      const context = this;
      const current_time = + new Date();

      if (current_time - last_execute_time >= delay || immediate) {
        func.apply(context, args);
        last_execute_time = current_time;
      }
    }
  }

}

const performance = new SuperPerformance();

export default performance;