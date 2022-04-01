<template>
  <div class="header-wrapper d-flex align-center justify-space-around">
    <div class="weather"></div>
    <div class="welcome"><h1>My to do list</h1></div>
    <div class="time"></div>
  </div>
</template>

<script>
export default {
  props: {
    timeObj: {},
  },
};
</script>

<style>
.header-wrapper {
  width: 100%;
  border-bottom: 2px solid #efbb35;
}
</style>
