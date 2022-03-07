<template>
  <back-navbar></back-navbar>
  <div class="container">
    <h1 class="my-4">後臺總管理
      <span><i class="bi bi-gear fs-2"></i></span>
    </h1>
  </div>
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
import BackNavbar from '@/components/BackNavbar.vue'

export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      // eslint-disable-next-line
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*\=\s*([^;]*).*$)|^.*$/, "$1")
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`

        const checkLoginApi = `${process.env.VUE_APP_API}/api/user/check`
        this.$http
          .post(checkLoginApi, { checkLoginApi_token: this.token })
          .then((res) => {
            this.checkSuccess = true
          })
          .catch((error) => {
            alert(`${error.data.message}，請重新登入`)
            this.$router.push('/login')
          })
      } else {
        alert('您尚未登入。')
        this.$router.push('/login')
      }
    }
  },
  components: {
    BackNavbar
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
