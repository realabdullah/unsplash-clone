<template>
  <div class="photos-container">
    <ul>
      <li @click="openModal" v-for="image in images" class="card">
        <div class="image">
          <img :src="image.urls.full" alt="img">
          <div class="author">
            <p>{{ image.user.name }}</p>
            <span>{{ image.user.location }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="isOpen" class="photo-modal">
      <span @click="openModal" class="close">&times;</span>
      <div class="modal">
        <img src="https://picsum.photos/450/300?image=600" alt="dummy">
        <div class="author-details">
          <p>{{ this.image.user.name }}</p>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

export default {
  setup() {
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


.photo-modal {
  position: fixed;
  z-index: 1;
  padding-block: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
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

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
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