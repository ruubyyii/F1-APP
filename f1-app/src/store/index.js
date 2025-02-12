import { createStore } from 'vuex'
import { auth } from '@/db/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default createStore({
  state: {
    user: {
      user: null
    },
    jugadores: [],
    loginState: false
  },
  getters: {
  },
  mutations: {
    SET_LOGIN_STATE(state, st){
      state.loginState = st
    },
    SET_USER_DATA(state, user){
      state.user = user
    }
  },
  actions: {
    async register({commit}, data){
      try{
        const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)
        commit('SET_USER_DATA', userCredentials.user)
        commit('SET_LOGIN_STATE', true)
      }catch(error){
        commit('SET_LOGIN_STATE', false)
        console.log(error.message);
      }
    },

    async login({commit}, data){
      try{
        const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password)
        commit('SET_USER_DATA', userCredentials.user)
        commit('SET_LOGIN_STATE', true)
      }catch(error){
        commit('SET_LOGIN_STATE', false)
        console.log(error.message);
      }
    }
  }
})