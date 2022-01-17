<template>
  <div class="search">
    <div v-if="!searchResult && !searching" class="search-bar">
      <input v-model="searchQuery" @keyup.enter="searchPhoto" type="search" name="search" placeholder="Search for a photo">
      <i class="fas fa-search"></i>
    </div>
    <div v-if="searching" class="searching">
      <h1>Searching for <span>"{{searchQuery}}"</span></h1>
    </div>
    <div v-if="searchResult" class="searched">
      <h1>Search Results for <span>"{{searchQuery}}"</span></h1>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const searchQuery = ref('')
    const searching = ref(false)
    const searchResult = ref(false)
    const store = useStore()

    const searchPhoto = async () => {
      try {
        searching.value = true
        await new Promise(resolve => setTimeout(resolve, 3000))
        store.dispatch('getImages', searchQuery.value)
        searching.value = false
        searchResult.value = true
      } catch (error) {
        
      }
    }

    return {
      searching,
      searchResult,
      searchQuery,
      searchPhoto
    }
  }

}
</script>

<style scoped>
  .search {
    background: var(--lightgray);
    width: 100%;
    padding-block: 4.5rem;
    padding-inline: 5rem;
  }

  .search-bar {
    width: 100%;
    position: relative;
  }

  .search-bar input {
    width: inherit;
    border-style: none;
    padding-block: 1rem;
    padding-inline: 4rem;
    outline: none;
    border-radius: 5px;
    background-color: var(--white);
    color: var(--darkgray);
  }

  .search-bar input::placeholder {
    color: var(--darkgray);
  }

  .search-bar .fas {
    font-size: 15px;
    position: absolute;
    left: 15px;
    top: 17px;
    color: var(--darkgray);
  }

  h1 {
    color: var(--slategray);
  }

  span {
    color: var(--darkgray);
  }

  @media (max-width: 527px) {
    .search {
      padding-inline: 2rem;
    }
  }
</style>