import shop from '../../api/shop'
import * as types from '../mutation-types'
const state = {
  all: []
}

const getters = {
  allProducts: state => state.all
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },
  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(product => product.id === id).inventory--
  }
}

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      console.log(products)
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
