<template>
  <div class="photos-container">
    <ul>
      <li @click="openModal" v-for="image in images" class="card">
        <div class="image">
          <img :src="image.urls.regular" alt="img">
          <div class="author">
            <p>{{ image.user.name }}</p>
            <span>{{ image.user.location }}</span>
          </div>
        </div>
      </li>
      <PhotoModal v-if="isOpen" />
    </ul>
  </div>
</template>

<script>
import PhotoModal from '@/components/PhotoModal.vue'
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

export default {
  components: {
    PhotoModal
  },
  async setup() {
    const isOpen = ref(false)
    const url = ref()
    const finalUrl = ref()
    const images = ref()

    const openModal = () => {
      isOpen.value = !isOpen.value
    }

    const getImages = async () => {
      url.value = 'https://api.unsplash.com/search/photos?count=7&query=africa&client_id='
      finalUrl.value = url.value + process.env.VUE_APP_ACCESS_KEY
      try {
        const response = await axios.get(finalUrl.value)
        images.value = response.data.results
        console.log(images.value)
      } catch (error) {
        console.log(error)
      }
    }

    onBeforeMount(async () => {
      await getImages()
    })

    await new Promise(resolve => setTimeout(resolve, 3000))

    return {
      isOpen,
      openModal,
      images
    }
  }

}
</script>

<style scoped>
.photos-container {
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  margin-inline: 145px;
}

.photos-container ul {
  columns: 1;
  column-gap: 10px;
}

.photos-container .card {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
  animation: card 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.photos-container .card .image {
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}

.photos-container .card .image:hover {
  opacity: .8;
}

.photos-container .card img {
  width: 100%;
  border-radius: 7px;
}

.photos-container .card .image .author {
  position: absolute;
  bottom: 25px;
  left: 20px;
  color: var(--white);
}

@keyframes card {
  0% {
    transform: scale(0);
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {    
    transform: scale(1);
    transform-origin: 50% 100%;
    opacity: 1;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .photos-container ul {
    columns: 2;
  }
}

@media (min-width: 1024px) {
  .photos-container ul {
    columns: 3;
  }
}

@media (max-width: 527px) {
  .photos-container {
    margin-inline: 25px;
  }

  .photo-modal .modal img {
    width: 100%;
    padding-inline: 20px;
  }

  .author-details {
    width: -webkit-fill-available;
    width: -moz-fill-available;
    margin-inline: 20px;
  }
}

</style>