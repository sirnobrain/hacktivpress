import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt from 'jsonwebtoken'

const http = axios.create({ baseURL: 'http://localhost:3000/' })

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: {
      _id: null,
      username: null,
      jwtoken: null,
      isLoggedIn: false
    },
    articles: []
  },
  mutations: {
    setLogin (state, jwtoken) {
      const decoded = jwt.decode(jwtoken)

      state.user._id = decoded._id
      state.user.username = decoded.username
      state.user.jwtoken = jwtoken
      state.user.isLoggedIn = true

      localStorage.setItem('jwtoken::hacktivpress', jwtoken)
    },
    setLogout (state) {
      state.user._id = null
      state.user.username = null
      state.user.jwtoken = null
      state.user.isLoggedIn = false

      localStorage.removeItem('jwtoken::hacktivpress')
    },
    addArticleToStore (state, article) {
      state.articles.unshift(article)
    }
  },
  actions: {
    checkLogin (context, jwtoken) {
      if (jwtoken) context.commit('setLogin', jwtoken)
    },
    logout (context) {
      context.commit('setLogout')
    },
    login (context, user) {
      return new Promise((resolve, reject) => {
        http.post('/login', user)
        .then(response => {
          context.commit('setLogin', response.data.payload.jwtoken)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    register (context, user) {
      return new Promise((resolve, reject) => {
        http.post('/register', user)
        .then(response => {
          context.commit('setLogin', response.data.payload.jwtoken)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    getAllArticles (context) {
      return new Promise((resolve, reject) => {
        http.get('/articles')
        .then(response => {
          const articles = response.data.payload.articles
          articles.forEach(article => {
            context.commit('addArticleToStore', article)
          })
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  }
})

export default store
