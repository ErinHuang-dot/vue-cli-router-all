<template>
  <div class="home mx-auto">
    <div class="container w-80">
      <img class="w-25" alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    HelloWorld
  },
  created () {
    console.log(this)
  }
}
</script>
