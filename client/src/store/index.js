import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: [],
    customerAccounts: [],
    idCustomer: ''
  },
  mutations: {
    fetchCustomers (state, payload) {
      state.customers = payload
    },
    fetchCustomerAccounts (state, payload) {
      state.customerAccounts = payload
    },
    idCustomer (state, payload) {
      state.idCustomer = payload.idCustomer
    }
  },
  actions: {
    fetchCustomer (context) {
      axios({
        url: 'http://localhost:3000/customers',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('fetchCustomers', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    registerCustomer (context, payload) {
      axios({
        url: 'http://localhost:3000/customers/register',
        method: 'POST',
        data: {
          identityNumber: payload.identityNumber,
          fullName: payload.fullName,
          address: payload.address,
          birthDate: payload.birthDate,
          gender: payload.gender
        }
      })
        .then(({ data }) => {
          console.log('masuk  register')
          router.push({ path: '/' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchCustomerAccount (context, payload) {
      axios({
        url: 'http://localhost:3000/customers/' + payload.idCustomer + '/accounts',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('fetchCustomerAccounts', data)
          context.commit('idCustomer', payload)
          router.push({ path: '/customers/' + payload.idCustomer + '/accounts' })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
