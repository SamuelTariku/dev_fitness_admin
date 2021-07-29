<template>
  <Popup
    title="Create Fitness Plan"
    ref="PopupComponent"
    :tabs="['General', 'Exercises']"
    @tab_click="changeTab"
  >
    <template v-slot:body>
      <!-- General -->
      <div v-show="activeTab == 0" class="generalOptions">
        <div class="form-group">
          <label for="">Fitness Plan Name</label>
          <input type="text" placeholder="Fitness Plan" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Public</label>
          <select class="form-control">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <!-- Exercises -->
      <div v-show="activeTab == 1" class="fpExercises">
        <WeekCalander />
        <div class="form-group">
          <label for="">Exercises</label>
          <SmallList />
        </div>
        <Search />
        <div class="exerciseInfo row">
          <div class="measureType col">
            <div class="form-group" v-show="selectedExercise.measureType=='TIME'">
              <label for="">Duration (Seconds)</label>
              <input type="number" placeholder="" class="form-control" />
            </div>
            <div class="form-group" v-show="selectedExercise.measureType=='REP'">
              <label for="">Reps</label>
              <input type="number" placeholder="" class="form-control" />
            </div>
          </div>
          <div class="form-group col">
              <label for="">Calories Burned</label>
              <input type="number" placeholder="" class="form-control" />
            </div>
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
          measureType: 'REP'
      }
    };
  },
  methods: {
    toggleFitnessPlan() {
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
