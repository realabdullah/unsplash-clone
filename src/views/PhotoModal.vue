<template>
  <div class="photo-modal">
    <span @click="closeModal" class="close">&times;</span>
    <div class="modal">
      <img src="https://picsum.photos/450/300?image=600" alt="dummy">
      <div class="author-details">
        <p><w>fyuy</w>dy }}</p>
        <span>Lagos, Nigeria</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()

    const closeModal = () => {
      router.push('/')
    }

    return {
      closeModal
    }
  }

}
</script>

<style scoped>
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

@media (max-width: 527px) {
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