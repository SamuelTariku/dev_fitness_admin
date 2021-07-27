<template>
  <div class="register-form">
    <form action="">
      <h2 class="text-center">Register</h2>
      <div class="form-group">
        <label for="">Username</label>
        <input type="text" placeholder="Username" class="form-control" />
      </div>
      <div class="form-group">
          <label for="">Password</label>
        <input type="text" placeholder="Password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary btn-block">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>

.register-form {
  width: 340px;
  margin: 20vh auto;
  font-size: 15px;
  background: rgba(0, 0, 0, 0.6);
  padding-bottom: 5px;
  border-radius: 5%;
}

.register-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  padding: 30px;
  border-radius: 5%;
}

label {
    font-weight: 600;
}

.register-form form input {
  margin: 10px 0;
}

.register-form h2 {
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