import { createStore } from 'vuex'
import { ref } from 'vue'
import axios from 'axios'

export default createStore({
  state: {
    searchQuery: '',
    images: []
  },
  mutations: {
    SET_IMAGES(state, payload) {
      state.images = payload
    }
  },
  actions: {
    getImages({ commit }, searchQuery) {
      const url = ref()
      const finalUrl = ref()
      url.value = `https://api.unsplash.com/search/photos?count=7&query=${searchQuery}&client_id=`
      finalUrl.value = url.value + process.env.VUE_APP_ACCESS_KEY
      axios.get(finalUrl.value)
      .then(response => {
        commit('SET_IMAGES', response.data.results)
      })
    }
  },
  modules: {
  }
})
