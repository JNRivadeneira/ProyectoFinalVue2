import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioActivo: null,
    listaUsuarios: [{email: "admin@vue.com", password: "admin"}]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
