<template>
  <Popup
    title="Create Trainer"
    ref="PopupComponent"
    :tabs="['General', 'Trainer Information']"
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

      <!-- Trainer Information -->
      <div v-show="activeTab == 1" class="trainerInfo">
        <div class="form-group">
          <label for="">Cost/Hour</label>
          <input type="number" placeholder="Cost/Hour" class="form-control" />
        </div>

        <div class="form-group">
          <label for="">Gender</label>
          <select class="form-control">
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">Experience (years)</label>
          <input type="number" placeholder="Cost/Hour" class="form-control" />
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
    toggleTrainer() {
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
