<template>
    <div class="container mb-5">
      <h2 class="my-4">商品管理</h2>
      <div class="text-end">
        <button type="button" class="btn btn-primary" @click="openModal('isNew')">建立新的產品</button>
      </div>
      <table class="table table-hover align-middle mt-4">
        <thead>
          <tr>
            <th scope="col" class="">分類</th>
            <th scope="col" class="w-25">產品名稱</th>
            <th scope="col" class="">原價</th>
            <th scope="col" class="">售價</th>
            <th scope="col" class="">是否啟用</th>
            <th scope="col" class="">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title}}</td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td v-if="item.is_enabled" class="text-success">啟用</td>
            <td v-else class="text-danger">未啟用</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic outlined btn">
                <button type="button" class="btn btn-outline-primary" @click="openModal('edit', item)">編輯</button>
                <button type="button" class="btn btn-outline-danger border-start-0" @click="openModal('delete', item)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: {}
    }
  }
}
</script>
