<template>
  <div class="photos-container">
    <ul>
      <li class="card">
        <div class="image">
          <img src="https://cdn.pixabay.com/photo/2021/12/21/03/54/street-6884533_960_720.jpg" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://cdn.pixabay.com/photo/2021/12/21/03/54/street-6884533_960_720.jpg" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://cdn.pixabay.com/photo/2021/12/21/03/54/street-6884533_960_720.jpg" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://cdn.pixabay.com/photo/2021/12/21/03/54/street-6884533_960_720.jpg" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://cdn.pixabay.com/photo/2021/12/21/03/54/street-6884533_960_720.jpg" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://cdn.pixabay.com/photo/2021/12/21/03/54/street-6884533_960_720.jpg" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
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
.photos-container {
  position: absolute;
  top: 140px;
}

.photos-container ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 15px;
}

.photos-container .card .image {
  width: 200px;
  margin: 10px;
  position: relative;
}

.photos-container .card img {
  width: 100%;
  border-radius: 7px;
}
</style>