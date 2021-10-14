import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './Usuarios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserStore: UserStore,
  }
})
