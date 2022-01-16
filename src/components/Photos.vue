<template>
  <div class="photos-container">
    <ul>
      <li class="card">
        <div class="image">
          <img src="https://picsum.photos/450/325?image=100" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://picsum.photos/450/450?image=200" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://picsum.photos/450/280?image=300" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://picsum.photos/450/540?image=400" alt="img">
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
          <img src="https://picsum.photos/450/300?image=600" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://picsum.photos/450/300?image=600" alt="img">
          <div class="author">
            <p>John Doe</p>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="image">
          <img src="https://picsum.photos/450/300?image=600" alt="img">
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
}

.photos-container .card .image {
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