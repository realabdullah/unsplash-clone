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
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  top: 140px;
  left: 0;
  right: 0;
}

.photos-container ul {
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; */
  columns: 1;
  column-gap: 10px;
}

.photos-container .card {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
}

.photos-container .card .image {
  /* width: 200px;
  margin: 10px; */
  position: relative;
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

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .photos-container ul {
    columns: 2;
  }
}

@media only screen and (min-width: 1024px) {
  .photos-container ul {
    columns: 3;
  }
}

</style>