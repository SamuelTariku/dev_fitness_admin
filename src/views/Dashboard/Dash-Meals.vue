<template>
  <Titlebar title="Meals" />
  <div class="widget-area">
    <ManageData title="Manage meals" :data="meals" @add_data="addMeal()">
      <template v-slot:createPopup>
        <CreateMeal ref="AddMeal"/>
      </template>
    </ManageData>

    <!-- meal plan -->
    <ManageData title="Manage diet plans" :data="dietPlans" @add_data="addDietPlan()">
      <template v-slot:createPopup>
        <CreateDietPlan ref="AddDietPlan" />
      </template>
    </ManageData>
  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import ManageData from "@/components/Widgets/ManageData.vue";
import CreateMeal from "@/components/Popup/CreateMeal.vue";
import CreateDietPlan from "@/components/Popup/CreateDietPlan.vue";

export default {
  name: "DashboardAdmin",
  components: {
    Titlebar,
    ManageData,
    CreateMeal,
    CreateDietPlan
  },

  methods: {
    addMeal() {
      this.$refs.AddMeal.toggleMeal()
    },
    addDietPlan() {
      this.$refs.AddDietPlan.toggleDietPlan()
    }
  },

  data() {
    return {
      meals: [
        {
          Image: '{url}',
          Meal_ID: 1,
          Name: "Doro_Wet",
          Calories: 381.6,
        },
      ],
      dietPlans: [
        {
          Diet_Plan_ID: 1,
          Name: "Abels Diet Plan",
          CreatedBy: "AbelAlemu",
        },
      ],

    };
  },
};
</script>
