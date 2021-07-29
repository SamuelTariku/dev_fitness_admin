<template>
  <Popup
    title="Create Diet Plan"
    ref="PopupComponent"
    :tabs="['General', 'Meals']"
    @tab_click="changeTab"
  >
    <template v-slot:body>
      <!-- General -->
      <div v-show="activeTab == 0" class="generalOptions">
        <div class="form-group">
          <label for="">Diet Plan Name</label>
          <input type="text" placeholder="Diet Plan Name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Public</label>
          <select class="form-control">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <!-- Meals -->
      <div v-show="activeTab == 1" class="dietPlanMeals">
        <WeekCalander />
        <div class="form-group">
          <!-- <label for="">Meals</label> -->
          <!-- <SmallList/> -->
        </div>
        <div class="meals mx-3">
          <Search title="Breakfast" />
          <Search title="Lunch" />
          <Search title="Dinner" />
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
import WeekCalander from "@/components/WeekCalander.vue";

export default {
  name: "CreateAdmin",
  components: {
    Popup,
    Search,
    SmallList,
    WeekCalander,
  },
  data() {
    return {
      activeTab: 0,
      selectedExercise: {
        measureType: "REP",
      },
    };
  },
  methods: {
    toggleDietPlan() {
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

.exerciseInfo {
  border: 1px solid #ccc;
  margin: 1vh;
}
</style>
