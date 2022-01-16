<template>
  <div class="imgs-container">
    <ul>
      <li class="card loading">
        <div class="image">
        </div>
      </li>
      <li class="card loading">
        <div class="image">
        </div>
      </li>
      <li class="card loading">
        <div class="image">
        </div>
      </li>
      <li class="card loading">
        <div class="image">
        </div>
      </li>
      <li class="card loading">
        <div class="image">
        </div>
      </li>
      <li class="card loading">
        <div class="image">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.imgs-container ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
  width: 320px;
  background-color: var(--white);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px var(--lightgray);
  margin: 15px;
}

.image {
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.loading .image {
  background-color: var(--lightgray);
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, .5) 50%,
    rgba(255, 255, 255, 0) 60%
  ) var(--lightgray);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
</style>