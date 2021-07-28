<template>
  <Popup
    title="Create User"
    ref="PopupComponent"
    :tabs="['General', 'Details']"
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
        <div class="form-group">
          <label for="">Email</label>
          <input type="email" placeholder="Email" class="form-control" />
        </div>
      </div>

      <!-- Fitness Information -->
      <div v-show="activeTab == 1" class="fitnessInfo">
        <div class="form-group">
          <label for="">Age</label>
          <input type="number" placeholder="Age" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Gender</label>
          <select class="form-control">
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">Weight (kg)</label>
          <input type="number" placeholder="Weight" class="form-control" />
        </div>
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
export default {
  name: "CreateAdmin",
  components: {
    Popup,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    toggleUser() {
      this.$refs.PopupComponent.togglePopup();
    },
    changeTab(event) {
      console.log(event);
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
