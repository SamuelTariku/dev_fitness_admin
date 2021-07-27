<template>
  <div class="login-form">
    <form action="">
      <h2 class="text-center">Log in</h2>
      <div class="form-group">
        <input required v-model="username" type="email" placeholder="Email" class="form-control" />
      </div>
      <div class="form-group">
        <input required v-model="password" type="password" placeholder="Password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary btn-block">Log in</button>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  
}
</script>

<style scoped>

.login-form {
  width: 340px;
  margin: 20vh auto;
  font-size: 15px;
  background: rgba(0, 0, 0, 0.6);
  padding-bottom: 5px;
  border-radius: 5%;
}

.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  padding: 30px;
  border-radius: 5%;
}

.login-form form input {
  margin: 10px 0;
}

.login-form h2 {
  margin: 0 0px 25px 0;
}

.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
  
}

.btn {
  font-size: 15px;
  width: 100%;
  font-weight: bold;
}
</style>