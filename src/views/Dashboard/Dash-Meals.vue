<template>
  <Titlebar title="Meals" />
  <div class="widget-area">
    <ManageData title="Manage meals" :data="meals"/>
    <!-- meal plan -->
    <ManageData title="Manage diet plans" :data="dietPlans"/>
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
