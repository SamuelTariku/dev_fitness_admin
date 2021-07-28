<template>
  <nav
    class="col-md-2 d-md-block bg-light sidebar"
    :class="smallScreenSidebar ? 'sidebar-small' : 'd-none'"
  >
    <div class="sidebar-sticky">
      <h5
        class="
              sidebar-heading
              d-flex
              justify-content-between
              align-items-center
              px-3
              mt-4
              mb-1
              text-muted
            "
      >
        <p>sidebar</p>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h5>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            :class="isName('Home') ? 'nav-link-active' : ''"
          >
            <i class="fas fa-home"></i> Home
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="showUsers = !showUsers">
            <i class="fas fa-user"></i> Users
            <span style="float:right">
              <i
                :class="
                  showUsers ? 'fas fa-chevron-down' : 'fas fa-chevron-right'
                "
              ></i>
            </span>
          </a>
        </li>
        <div v-show="showUsers">
          <ul class="nav flex-column mx-4">
            <li class="nav-item">
              <router-link
                to="/user/admin"
                class="nav-link"
                :class="isName('UserAdmin') ? 'nav-link-active' : ''"
              >
                Administrators
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/user"
                class="nav-link"
                :class="isName('Users') ? 'nav-link-active' : ''"
              >
                Users
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/user/trainer"
                class="nav-link"
                :class="isName('Trainers') ? 'nav-link-active' : ''"
              >
                Trainers
              </router-link>
            </li>
          </ul>
        </div>
        <li class="nav-item">
          <router-link
            to="/groups"
            class="nav-link"
            :class="isName('Groups') ? 'nav-link-active' : ''"
          >
            <i class="fas fa-user-friends"></i> Groups</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/exercises"
            class="nav-link"
            :class="isName('Exercises') ? 'nav-link-active' : ''">
            <i class="fas fa-running"></i> Exercises</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/meals"
            class="nav-link"
            :class="isName('Meals') ? 'nav-link-active' : ''">
            <i class="fas fa-utensils"></i> Meals</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/goals"
            class="nav-link"
            :class="isName('Goals') ? 'nav-link-active' : ''">
            <i class="fas fa-bullseye"></i> Goals</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/blogs"
            class="nav-link"
            :class="isName('Blogs') ? 'nav-link-active' : ''">
            <i class="fas fa-clone"></i> Blog</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => {
    return {
      smallScreenSidebar: false,
      showUsers: false,
    };
  },
  methods: {
    toggleSideBar: function() {
      this.smallScreenSidebar = !this.smallScreenSidebar;
    },
    isName(name) {
      if (this.$route.name == name) {
        return true;
      }
    },
  },
};
</script>

<style scoped>
/*
 * Sidebar
 */

.sidebar {
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 20; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@media only screen and (max-width: 760px) {
  .sidebar-small {
    position: fixed;
    top: 85px;
    width: 40vh;
  }
}

.fa-bars {
  background: rgb(33, 37, 41);
  padding: 2vh;
  color: white;
  border-radius: 1vh;
  cursor: pointer;
}

.fa-bars:hover {
  background: #444;
}

.sidebar .nav-link {
  text-align: left;
  font-weight: 520;
  color: #333;
}

.sidebar .nav-link:hover {
  background: #aaa;
  cursor: pointer;
}

.sidebar .nav-link-active {
  background: #aaf;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 1rem;
  text-transform: uppercase;
}
</style>
