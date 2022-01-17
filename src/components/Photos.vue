<template>
  <div class="photos-container">
    <ul>
      <li @click="openModal(image)" v-for="image in images" class="card">
        <div class="image">
          <div class="img">
            <img :src="image.urls.regular" alt="img">
          </div>
          <div class="author">
            <p>{{ image.user.name }}</p>
            <span v-if="image.user.location">{{ image.user.location }}</span>
          </div>
        </div>
      </li>
      <div v-if="isOpen" class="photo-modal">
        <span @click="openModal" class="close">&times;</span>
        <div class="modal">
          <img :src="singleImg.urls.regular" alt="dummy">
          <div class="author-details">
            <p>{{ singleImg.user.name }}</p>
            <span>{{ singleImg.user.location }}</span>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  async setup() {
    const isOpen = ref(false)
    const singleImg = ref()
    const searchQuery = ref('africa')

    const store = useStore()

    const images = computed(() => {
      return store.state.images
    })

    const openModal = (imgObj) => {
      isOpen.value = !isOpen.value
      singleImg.value = imgObj
    }

    onBeforeMount(async () => {
      store.dispatch('getImages', searchQuery.value)
    })

    await new Promise(resolve => setTimeout(resolve, 3000))

    return {
      singleImg,
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

.img {
  position: relative;
}

.img:after {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 96%;
  width: 100%;
  background-color: rgb(0 0 0 / 14%);
  border-radius: 7px;
}

.photos-container .card img {
  width: 100%;
  border-radius: 7px;
}


.photos-container .card .image .author {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: var(--white);
}

.author p {
  font-size: 0.7rem;
  font-weight: 400;
}

.author span {
  margin-top: -9px;
  font-size: 0.625rem;
  font-weight: 200;
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

.photo-modal {
  position: fixed;
  z-index: 1;
  padding-block: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000000a6;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.photo-modal .modal img {
  border-radius: 7px 7px 0 0;
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

.author-details {
  border-radius: 0 0 7px 7px;
  margin: auto;
  width: 80%;
  max-width: 700px;
  padding: 1.5rem;
  background: var(--white);
}

.author-details p {
  padding-bottom: 10px;
  font-size: 1rem;
  font-weight: 400;
  color: var(--slategray);
}

.author-details span {
  font-size: .8rem;
  color: var(--darkgray);
}

.photo-modal .modal img,
.author-details {
  animation-name: zoom;
  animation-duration: 0.6s;
}

.close {
  position: absolute;
  top: 20px;
  right: 25px;
  color: var(--darkgray);
  font-size: 2rem;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  cursor: pointer;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
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
    border-radius: 7px 7px 0 0;;
  }

  .author-details {
    width: -webkit-fill-available;
    width: -moz-fill-available;
    margin-inline: 20px;
  }

  .close {
    top: 5px;
    right: 15px;
  }
}

</style>