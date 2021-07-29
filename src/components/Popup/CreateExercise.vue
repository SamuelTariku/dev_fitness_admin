<template>
  <Popup
    title="Create Exercise"
    ref="PopupComponent"
    :tabs="['General', 'Measurement', 'Demonstration']"
    @tab_click="changeTab"
  >
    <template v-slot:body>
      <!-- General -->
      <div v-show="activeTab == 0" class="generalOptions">
        <div class="form-group">
          <label for="">Name</label>
          <input type="text" placeholder="Exercise Name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Type</label>
          <input type="text" placeholder="Type" class="form-control" />
        </div>
      </div>
      <!-- Measure Type -->
      <div v-show="activeTab == 1" class="Measurement">
        <div class="form-group">
          <label for="">Measure Type</label>
          <select class="form-control" v-model="measureType">
            <option value="REP">REP</option>
            <option value="TIME">TIME</option>
          </select>
        </div>
        
        <div class="form-group" v-show="measureType == 'REP'">
          <label for="">Calories Per Rep</label>
          <input type="number" placeholder="Cal/Rep" class="form-control" />
        </div>
        <div class="form-group" v-show="measureType == 'TIME'">
          <label for="">Calories Per Second</label>
          <input type="number" placeholder="Cal/Sec" class="form-control" />
        </div>
      </div>

      <!-- Demonstration -->
      <div v-show="activeTab == 2" class="Demo">
        <div class="form-group">
          <label for="">Demo image</label>
          <input type="file" placeholder="Demo" class="form-control" />
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

export default {
  name: "CreateAdmin",
  components: {
    Popup,
  },
  data() {
    return {
      activeTab: 0,
      measureType: ''
    };
  },
  methods: {
    toggleExercise() {
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
