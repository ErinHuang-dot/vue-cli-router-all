<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin">後臺</router-link>
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
            <router-link class="nav-link" to="/admin/products"
              >商品管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders"
              >訂單管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon"
              >優惠券管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <span><i class="bi bi-house-heart"></i></span>
              回到前臺
            </router-link>
          </li>
          <li>
            <a href="#" class="d-block p-2">
              <span><i class="bi bi-box-arrow-right"></i></span>
              登出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
