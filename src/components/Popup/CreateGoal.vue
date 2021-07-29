<template>
  <Popup
    title="Create Goal"
    ref="PopupComponent"
    :tabs="['General', 'Fitness Plans', 'Diet Plans']"
    @tab_click="changeTab"
  >
    <template v-slot:body>
      <!-- General -->
      <div v-show="activeTab == 0" class="generalOptions">
        <div class="form-group">
          <label for="">Goal Name</label>
          <input type="text" placeholder="Goal Name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Goal Description</label>
          <textarea placeholder="Goal Description" class="form-control" />
        </div>
      </div>
      <!-- FitnessPlans -->
      <div v-show="activeTab == 1" class="FitnessPlans">
        <div class="form-group">
          <label for="">Fitness Plans</label>
          <SmallList />
        </div>
        <div class="form-group">
          <Search title="Fitness Plan" />
        </div>
        <div class="form-group">
          <label for="">Number of weeks</label>
          <input type="number" placeholder="Weeks" class="form-control" />
        </div>
      </div>

      <!-- Diet Plans -->
      <div v-show="activeTab == 2" class="DietPlans">
        <div class="form-group">
          <label for="">Diet Plans</label>
          <SmallList />
        </div>
        <div class="form-group">
          <Search title="Diet Plan" />
        </div>
        <div class="form-group">
          <label for="">Number of weeks</label>
          <input type="number" placeholder="Weeks" class="form-control" />
        </div>
      </div>

      <div class="button-container">
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
      </div>
    </template>
  </Popup>
</template>

<script>
import Popup from "@/components/Popup.vue";
import Search from "@/components/Search.vue";
import SmallList from "@/components/smallList.vue";

export default {
  name: "CreateAdmin",
  components: {
    Popup,
    Search,
    SmallList
  },
  data() {
    return {
      activeTab: 0,
      measureType: "",
    };
  },
  methods: {
    toggleGoal() {
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
