<template>
  <Titlebar title="Exercises" />
  <div class="widget-area">
    <ManageData title="Manage exercises" :data="exercises"/>
    <!-- Fitness plan widgets -->
    <ManageData title="Manage fitness plans" :data="fitnessPlans"/>
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
      exercises: [
        {
          Demo: '{url}',
          Workout_ID: 1,
          Name: "Running",
          Type: "Cardio",
        },
      ],
      fitnessPlans: [
        {
          Fitness_Plan_ID: 1,
          Name: "Abel's Diet Plan",
          CreatedBy: "AbelAlemu",
        },
      ],

    };
  },
};
</script>
