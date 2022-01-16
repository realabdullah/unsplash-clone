<template>
  <div class="home">
    <Search />
    <PhotosLoader />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import PhotosLoader from '@/components/PhotosLoader.vue'

export default {
  name: 'Home',
  components: {
    Search,
    PhotosLoader
  }
}
</script>

<style scoped>
.home {
  position: relative;
}
</style>
