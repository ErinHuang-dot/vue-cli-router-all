<template>
  <div class="container">
    <div class="row my-5">
      <div class="col">
        <img :src="product.imageUrl" :alt="product.title" class="w-100">
      </div>
      <div class="col">
        <div>
          <p><i class="bi bi-bag-heart fs-2"></i></p>
          <h2 class="fw-bold my-4">{{ product.title }}</h2>
          <div class="fs-5">
            <div v-if="product.origin_price === product.price">
              $ {{ product.origin_price }}
            </div>
            <div v-else>
              <del>$ {{ product.origin_price }} </del>
              <span class="ms-2">$ {{ product.price }} </span>
            </div>
          </div>
          <p class="fs-5 mt-4">{{ product.description }}</p>
          <div class="input-group w-50 mt-4">
            <input type="number" class="form-control" aria-describedby="button-addon2"
            min="1" value="1"
            >
            <button class="btn btn-primary" type="button" id="button-addon2"
            @click="addToCart(product.id)">加入購物車</button>
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
      product: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
