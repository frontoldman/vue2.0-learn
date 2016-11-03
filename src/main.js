/**
 * Created by zhangran on 16/11/2.
 */

import Vue from 'vue'
import App from './App'

function init() {
  return new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  })
}

init()
