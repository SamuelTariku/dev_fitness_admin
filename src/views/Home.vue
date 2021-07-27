<template>
  <Navbar @toggle-sidebar="toggleSideBar()"/>
  <div class="container-fluid">
    <div class="row">
        <Sidebar ref="SidebarComponent"/>
        <main role="main" class="col-md-9 col-lg-10">
        <router-view></router-view>
        </main>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from '../components/Footer.vue'

export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
    Footer
  },

  methods: {
    toggleSideBar() {
      this.$refs.SidebarComponent.toggleSideBar()
    }
  }


};
</script>

<style>
.widget {
  margin: 3vh 2vw;
  padding: 3vh 2vw;
  box-shadow: 1vh 1vh 2vh #ccc;
  background: white;
}

.widget-area {
  display: flex;
  flex-wrap: wrap;
}

.widget-title {
  font-size: 20px;
  margin: 2vh;
  font-weight: bold;
}
</style>

<style scoped>
body {
  font-size: 0.875rem;
}
main {
    text-align: left;
    min-height: 77vh;
    background: #eee;
    margin: 0;
    padding: 0;
    padding-bottom: 5px;
    
}
/*
 * Utilities
 */

.border-top {
  border-top: 1px solid #e5e5e5;
}
.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}
</style>