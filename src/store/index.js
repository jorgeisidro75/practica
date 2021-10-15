import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './Usuarios'
import TareaStore from './Tareas'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserStore: UserStore,
    TareaStore: TareaStore
  }
})
