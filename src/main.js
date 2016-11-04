/**
 * Created by zhangran on 16/11/2.
 */

import Vue from 'vue'
import App from './App'
import Block from './components/Block'
import store from './store'

Vue.component('Block', Block)

function init() {
  return new Vue({
    el: '#app',
    template: '<App/>',
    store,
    components: { App }
  })
}

init()
