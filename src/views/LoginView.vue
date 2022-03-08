<template>
  <main id="loginApp">
    <div class="container">
      <div class="wrap d-flex justify-content-center align-items-center">
        <div class="">
          <img class="login-logo d-block mx-auto" src="../assets/logo.png" alt="logo" />
          <h2 class="fs-3 text-center mb-4">請先登入</h2>
          <Form
          v-slot="{ errors, validate }" @submit="login">
            <div class="mb-5">
              <div class="form-floating mb-3">
                <Field
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  name="email"
                  rules="required"
                  v-model="user.username"
                  id="floatingEmail"
                  placeholder="Email address"
                ></Field>
                <label for="floatingEmail">Email address</label>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>
              <div class="form-floating mb-3">
                <Field
                  type="password"
                  class="form-control"
                  :class="{ 'is-invalid': errors['password'] }"
                  name="password"
                  rules="required"
                  v-model="user.password"
                  id="floatingPass"
                  placeholder="Password"
                ></Field>
                <label for="floatingPass">Password</label>
                <error-message name="password" class="invalid-feedback"></error-message>
              </div>
              <button
                type="submit"
                class="btn btn-primary w-100 fs-5 mb-3"
                v-on:click="login,validate"
                id="btnLogin"
              >
                登入
              </button>
            </div>
          </Form>
          <p class="text-muted text-center">© 2021~∞ - 六角學院</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const loginApi = `${process.env.VUE_APP_API}/admin/signin`
      this.$http
        .post(loginApi, this.user)
        .then((res) => {
          // 將 token 存在 cookie
          const { token, expired } = res.data
          document.cookie = `userToken=${token}; expires=${new Date(
            expired
          )}GMT;`
          alert(`${res.data.message}，即將進入後臺管理頁面`)
          this.$router.push('/admin/products')
        })
        .catch((error) => {
          alert(`${error.response.data.message}，請重新輸入一次`)
          console.dir(error)
        })
    }
  }
}
</script>

<style lang="scss">
.wrap {
  height: 100vh;
}

.login-logo {
  width: 10rem;
}
</style>
