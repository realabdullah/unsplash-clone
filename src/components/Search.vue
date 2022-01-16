<template>
  <div class="search">
    <div class="search-bar">
      <input type="search" name="search" placeholder="Search for a photo">
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .search {
    background: var(--lightgray);
    width: 100%;
    padding-block: 4.5rem;
    padding-inline: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-bar {
    width: 100%;
    position: relative;
  }

  .search-bar input {
    width: inherit;
    border-style: none;
    padding-block: 1rem;
    padding-inline: 4rem;
    outline: none;
    border-radius: 5px;
    background-color: var(--white);
    color: var(--darkgray);
  }

  .search-bar input::placeholder {
    color: var(--darkgray);
  }

  .search-bar .fas {
    font-size: 15px;
    position: absolute;
    left: 15px;
    top: 17px;
    color: var(--darkgray);
  }

  @media (max-width: 768px) {
    .search {
      padding-inline: 2rem;
    }
  }
</style>