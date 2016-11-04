/**
 * Created by zhangran on 16/11/4.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    col: 15,
    row: 15
  },
  action: {

  },
  mutations: {

  },
  getters: {
    matrix(state) {
      var result = []
      var i, j, colAry
      for (i = 0; i < state.col; i++) {
        colAry = []
        for (j = 0; j < state.row; j++) {
          colAry.push({
            col: i,
            row: j
          })
        }
        result.push(colAry)
      }
      return result
    }
  },
  strict: true
})

export default store
