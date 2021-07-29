<template>
  <Popup
    title="Create Meals"
    ref="PopupComponent"
    :tabs="['General', 'Nutrients', 'Picture']"
    @tab_click="changeTab"
  >
    <template v-slot:body>
      <!-- General -->
      <div v-show="activeTab == 0" class="generalOptions">
        <div class="form-group">
          <label for="">Meal Name</label>
          <input type="text" placeholder="Meal Name" class="form-control" />
        </div>
        
      </div>
      <!-- Nutrition Information -->
      <div v-show="activeTab == 1" class="nutrients">
        <div class="form-group">
          <label for="">Carbohydrates</label>
          <input type="number" placeholder="Carbohydrates" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Protein</label>
          <input type="number" placeholder="Protein" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Fat</label>
          <input type="number" placeholder="Fat" class="form-control" />
        </div>  
        <div class="form-group">
          <label for="">Calories</label>
          <input type="number" placeholder="Calories" class="form-control" />
        </div>
      </div>

      <!-- Demonstration -->
      <div v-show="activeTab == 2" class="Demo">
        <div class="form-group">
          <label for="">Picture</label>
          <input type="file" placeholder="foodImage" class="form-control" />
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
    toggleMeal() {
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
