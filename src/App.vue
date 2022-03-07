<template>
  <div class="sticky-footer">
    <loading v-model="isLoading"></loading>
    <router-view/>
    <div class="footer py-4 bg-dark sticky-bottom">
      <div class="container text-center">
        <p class="mb-0"><a href="https://www.flaticon.com/free-icons/food-and-restaurant" title="food and restaurant icons">Food and restaurant icons created by LAFS - Flaticon</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  }
}
</script>

<style lang="scss">
// @import "bootstrap/scss/bootstrap";
@import "./assets/stylesheets/all.scss";

.sticky-footer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sticky-bottom {
  margin-top: auto;
}
</style>
