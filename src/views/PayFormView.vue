<template>
  <div class="container mb-5">
    <h2 class="my-4 text-center">填寫個人資料</h2>
    <div class="w-50 mx-auto">
      <Form action="/" method="POST"
      v-slot="{ errors, validate }" @submit="onSubmit">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="Email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['Email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="orderData.user.email"
          ></Field>
          <error-message name="Email" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名" rules="required"
            v-model="orderData.user.name"
          ></Field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話，例：02-12345678、(02)12345678、0912345678"
            rules="required"
            v-model="orderData.user.tel"
          ></Field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址" rules="required"
            v-model="orderData.user.address"
          ></Field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea class="form-control" id="message" name="message" rows="5"
          v-model="orderData.message"></textarea>
        </div>
        <button
          class="btn btn-danger btn-sm float-end mb-5"
          type="submit"
          @click="validate"
          >送出訂單</button>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderData: {
        user: {},
        message: ''
      }
    }
  },
  methods: {
    isPhone (value) {
      // eslint-disable-next-line
      const phoneNumber = /(^[0-9]{2,4}\-[0-9]{5,8}$)|(^\([0-9]{2,4}\)[0-9]{5,8}$)|^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    onSubmit () {
      const data = this.orderData
      const orderApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      this.$http
        .post(orderApi, { data })
        .then((res) => {
          alert(res.data.message)
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
    }
  }
}
</script>
