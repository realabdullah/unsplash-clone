<template>
  <div class="search-bar">
    <input type="search" name="search" placeholder="Search for a photo">
    <i class="fas fa-search"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .search-bar {
    background: var(--lightgray);
    width: 100%;
    padding-block: 3rem;
    padding-inline: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
  }

  .search-bar input {
    width: inherit;
    border-style: none;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    background-color: var(--white);
    color: var(--darkgray);
  }

  .search-bar input::placeholder {
    color: var(--darkgray);
  }
</style>