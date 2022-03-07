<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">前臺</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">結帳</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/login">
              <span><i class="bi bi-box-arrow-right"></i></span>
              登入
            </router-link>
          </li>
        </ul>
      </div>
      <!-- <button type="button" class="btn btn-primary">
        結帳
        <span class="badge rounded-pill bg-danger">
          {{ cartData.carts.length }}
          <span class="visually-hidden">購物車品項數量</span>
        </span>
      </button> -->
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    getCartData () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log('cart:', res.data)
          this.cartData = res.data.data
        })
        .catch((error) => {
          console.dir(error.data)
          window.alert(error.data.data.message)
        })
    },
    mounted () {
      this.getCartData()
    }
  }
}
</script>
