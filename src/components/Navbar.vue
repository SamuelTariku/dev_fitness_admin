<template>
  <nav class="navbar navbar-expand-lg justify-content-between navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <div>
    <i class="fas fa-bars mx-2 d-md-none" @click="toggleSideBar"></i>
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Social Fitness</a>
    </div>
    <ul class="navbar-nav px-4">
      
      <li class="nav-item text-nowrap">
        <router-link :to="{ name:'Login' }" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item text-nowrap">
        <router-link :to="{ name:'Register' }"  class="nav-link">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleSideBar(){
      console.log("toggle-sidebar");
      this.$emit('toggle-sidebar')
    }
  }
}
</script>

<style scoped>
/*
 * Navbar
 */
nav {
  z-index: 50;
}
.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  padding-left: 2rem;
}

.fa-bars {
  padding: 2vh;
  color: white;
  cursor: pointer;
}

.fa-bars:hover {
  background: #444;
}

</style>