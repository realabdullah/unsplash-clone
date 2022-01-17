<template>
  <div class="home">
    <Search />
    <Suspense>
      <template #default>
        <Photos />
      </template>
      <template #fallback>
        <PhotosLoader />
      </template>
    </Suspense>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import PhotosLoader from '@/components/PhotosLoader.vue'
import Photos from '@/components/Photos.vue'

export default {
  name: 'Home',
  components: {
    Search,
    PhotosLoader,
    Photos
  }
}
</script>

<style scoped>
.home {
  position: relative;
}
</style>
