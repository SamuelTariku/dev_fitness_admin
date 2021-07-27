<template>
  <Titlebar title="Meals" />
  <div class="widget-area">
    <ManageData title="Manage meals" :data="meals"/>

  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import ManageData from "@/components/Widgets/ManageData.vue";

export default {
  name: "DashboardAdmin",
  components: {
    Titlebar,
    ManageData,
  },
  data() {
    return {
      meals: [
        {
          Meal_ID: 1,
          Name: "Doro_Wet",
          Carbs: 6.5,
          Protein: 43.6,
          Fat: 19.2,
          Calories: 381.6,
        },
      ],
    };
  },
};
</script>
