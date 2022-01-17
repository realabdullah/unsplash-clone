<template>
  <div class="search">
    <div v-if="!searchResult && !searching" class="search-bar">
      <input v-model="searchQuery" @keyup.enter="searchPhoto" type="search" name="search" placeholder="Search for a photo">
      <i class="fas fa-search"></i>
    </div>
    <div v-if="searching" class="searchQ">
      <h1>Searching for  <span>  &#8220;{{searchQuery}}&#8221;</span></h1>
    </div>
    <div v-if="searchResult" class="searchQ">
      <h1>Search Results for <span>"{{searchQuery}}"</span></h1>
      <i @click="search" class="fas fa-search"></i>
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

    const search = () => {
      searchResult.value = !searchResult.value
    }

    return {
      search,
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
    box-shadow: 5px 10px 36px -6px rgba(0,0,0,0.1);
    animation: fadeIn linear 1s;
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

  .searchQ {
    animation: fadeIn linear 2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .searchQ .fas {
    color: var(--slategray);
    font-size: 1.875rem;
    cursor: pointer;
  }

  .searchQ .fas:hover {
    color: var(--darkgray);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h1 {
    font-size: 1.875rem;
    font-weight: 600;
    color: var(--slategray);
  }

  span {
    color: var(--darkgray);
  }

  @media (max-width: 527px) {
    .search {
      padding-inline: 2rem;
    }

    h1 {
      font-size: 1.675rem;
    }

    .searchQ .fas {
      font-size: 1.675rem;
      color: var(--slategray);
    }
  }
</style>