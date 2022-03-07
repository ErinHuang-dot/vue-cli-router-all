<template>
  <div class="container">
    <loading :active="isLoading"></loading>
    <h2 class="my-4">購物車列表</h2>
    <div class="mt-4 mb-5">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col" class="">圖片</th>
            <th scope="col" class="">商品名稱</th>
            <th scope="col">價格</th>
            <th scope="col" class=""></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td class="w-25">
              <img class="w-100" :src="item.imageUrl" :alt="item.title" />
            </td>
            <td>{{ item.title }}</td>
            <td>
              <div v-if="item.origin_price === item.price">
                {{ item.origin_price }} 元
              </div>
              <div v-else>
                <del>原價 {{ item.origin_price }} 元</del><br />
                <span class="fs-5">現在只要 {{ item.price }} 元</span>
              </div>
            </td>
            <td>
              <div class="btn-group" role="group">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm border-end-0"
                  @click="openProductModal(item.id)"
                  :disabled="isLoadingItem === item.id"
                >
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="addToCart(item.id)"
                  :disabled="isLoadingItem === item.id"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    v-show="isLoadingItem === item.id"
                  ></span>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: {},
      cartData: {},
      isLoadingItem: '', // 用是否正在載入，來改變按鈕的點擊狀態
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      const getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http
        .get(getProductsApi)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
        })
        .catch((error) => {
          console.dir(error)
          alert(`喔...${error}...，暫時無法取得商品資料，請稍候再試`)
        })
    },
    addToCart (id, qty = 1) { // 預設商品數量為1
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id // 觸發時也存取id

      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data }) // 需帶入商品資料
        .then((res) => {
          this.getCartData()
          this.$refs.moreModal.closeModal()
          this.isLoadingItem = '' // 觸發後清空id
        })
        .catch((error) => {
          window.alert(error.data.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}

</script>
