<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Menu</button>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="dropdown-divider"></div>
              <div class="dropdown-divider"></div>
              <button type="button" class="btn btn-outline-success">
                <router-link to>Doanh thu trong ngày</router-link>
              </button>
            </div>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="dropdown-divider"></div>
              <div class="dropdown-divider"></div>
              <button type="button" class="btn btn-outline-success">
                <router-link to>Quản lý nhân viên</router-link>
              </button>
            </div>
          </li>
          <li class="nav-item active">
            <button class="btn btn-outline-success" type="submit">
              <router-link to="/order">Order</router-link>
            </button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-success">
              <router-link to="/data">Đơn Hàng</router-link>
            </button>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-success">Đăng Xuất</button>
          </li>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
