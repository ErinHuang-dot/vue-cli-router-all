<template>
  <div class="container mb-5">
  <loading :active="isLoading"></loading>
  <h2 class="my-4">產品列表<i class="bi bi-bag-heart ms-2"></i></h2>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col" v-for="item in products" :key="item.id">
        <div class="card h-100">
          <div style="height: 10rem; overflow: hidden;">
            <img :src="item.imageUrl" class="card-img-top" :alt="item.title"
          :style="{backgroundSize: cover, backgroundPosition: center,center}">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
          <div class="card-footer border-top-0">
            <router-link :to="`/product/${item.id}`" class="btn btn-primary w-100">了解更多</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      const getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http
        .get(getProductsApi)
        .then(res => {
          this.isLoading = false
          this.products = res.data.products
        })
        .catch(error => {
          console.dir(error)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
