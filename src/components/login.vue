<template>
  <div class="demo">
    <body class="text-center login">
    <form class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" @click="login" type="button">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
  

</body>
  </div>
</template>
<script>
import axios from '../until/FetchApi'
import Cookies from "js-cookie"
export default{
  data(){
    return{
      email: "",
      password: ""
    }
  },
  methods:{
    login(){
      var that = this
    axios.post('/login', {
      email: that.email,
      password: that.password
    })
    .then(function (response) {
      if(response.data.data.role === "admin"){
        alert(response.data.message)
          Cookies.set("token", response.data.token, {expires: 2 })
          that.$router.push("/order-admin");
          return;
      }
      if(response.data.data.role === "user"){
        alert("Chào" + " " + response.data.data.fullName)
        Cookies.set("token", response.data.token, {expires: 2 })
        that.$router.push("/order");
        return;
      }
      
      alert("Sai tài khoản or mật khẩu")
      

    })  
    .catch(function (error) {
      console.log(error);
      });
    }
  }
}
</script>
<style>

html,
body{
  height: 100%;
   background-size: 100%;
   /* background-image: url("./photo-1-15777164335521604525356.jpg"); */
 
}
#demo {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;

}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

  
</style>