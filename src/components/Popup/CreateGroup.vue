<template>
  <Popup
    title="Create Group"
    ref="PopupComponent"
    :tabs="['General', 'Group options', 'Member options']"
    @tab_click="changeTab"
  >
    <template v-slot:body>
      <!-- General -->
      <div v-show="activeTab == 0" class="generalOptions">
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" placeholder="Username" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input type="password" placeholder="Password" class="form-control" />
        </div>
      </div>

      <!-- Group Options -->
      <div v-show="activeTab == 1" class="groupOptions">
        <div class="form-group">
          <label for="">Is Private</label>
          <input
            class="form-check-input mx-5"
            type="checkbox"
            placeholder="Cost/Hour"
          />
        </div>

        <div class="form-group">
          <label for="">Admin</label>
          <select class="form-control">
            <option>1</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">Experience (years)</label>
          <input type="number" placeholder="Cost/Hour" class="form-control" />
        </div>
      </div>

      <!--  Members -->
      <div v-show="activeTab == 2" class="memberOptions">
        
        <div class="form-group">
          <label for="">Users</label>
          <select multiple class="form-control">
            <option>1</option>
          </select>
        </div>
        <Search />
      </div>

      <!-- Button -->
      <div class="button-container">
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
      </div>
    </template>
  </Popup>
</template>

<script>
import Popup from "@/components/Popup.vue";
import Search from "@/components/Search.vue";
export default {
  name: "CreateAdmin",
  components: {
    Popup,
    Search
  },
  data() {
    return {
      activeTab: 0,
    };
  },

  methods: {
    toggleGroup() {
      this.$refs.PopupComponent.togglePopup();
    },
    changeTab(event) {
      this.activeTab = event;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
}

.form-group {
  margin: 3vh 0;
}

.button-container {
  text-align: left;
}
</style>
