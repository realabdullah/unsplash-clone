<template>
  <div class="home">
    <Search />
    <Photos />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Photos from '@/components/Photos.vue'

export default {
  name: 'Home',
  components: {
    Search,
    Photos
  }
}
</script>

<style scoped>
.home {
  position: relative;
}
</style>
