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
import { defineAsyncComponent } from 'vue'
import Search from '@/components/Search.vue'
import PhotosLoader from '@/components/PhotosLoader.vue'

export default {
  name: 'Home',
  components: {
    Search,
    PhotosLoader,
    Photos: defineAsyncComponent(() => import('@/components/Photos.vue'))
  }
}
</script>

<style scoped>
.home {
  position: relative;
}
</style>
