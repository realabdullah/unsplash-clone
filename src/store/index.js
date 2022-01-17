import { createStore } from 'vuex'
import { ref } from 'vue'
import axios from 'axios'

const url = ref()
const finalUrl = ref()

url.value = 'https://api.unsplash.com/search/photos?count=7&query=africa&client_id='
finalUrl.value = url.value + process.env.VUE_APP_ACCESS_KEY

export default createStore({
  state: {
    images: []
  },
  mutations: {
    SET_IMAGES(state, payload) {
      state.images = payload
    }
  },
  actions: {
    getImages({ commit }) {
      axios.get(finalUrl.value)
      .then(response => {
        commit('SET_IMAGES', response.data.results)
      })
    }
  },
  modules: {
  }
})
