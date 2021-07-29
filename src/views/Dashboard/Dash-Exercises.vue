<template>
  <Titlebar title="Exercises" />
  <div class="widget-area">
    <ManageData title="Manage exercises" :data="exercises" @add_data="addExercise()">
      <template v-slot:createPopup>
        <CreateExercise ref="AddExercise"/>
      </template>
    </ManageData>

    <!-- Fitness plan widgets -->
    <ManageData title="Manage fitness plans" :data="fitnessPlans" @add_data="addFitnessPlan()">
      <template v-slot:createPopup>
        <CreateFitnessPlan ref="AddFitnessPlan" />
      </template>
    </ManageData>
  </div>

</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import ManageData from "@/components/Widgets/ManageData.vue";
import CreateExercise from "@/components/Popup/CreateExercise.vue";
import CreateFitnessPlan from "@/components/Popup/CreateFitnessPlan.vue";


export default {
  name: "DashboardAdmin",
  components: {
    Titlebar,
    ManageData,
    CreateExercise,
    CreateFitnessPlan
  },
  methods: {
    addExercise() {
      this.$refs.AddExercise.toggleExercise()
    },
    addFitnessPlan() {
      this.$refs.AddFitnessPlan.toggleFitnessPlan()
    }
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
