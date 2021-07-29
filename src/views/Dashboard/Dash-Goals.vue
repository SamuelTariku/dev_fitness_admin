<template>
  <Titlebar title="Goals" />
  <div class="widget-area">
    <ManageData title="Manage goals" :data="goals" @add_data="addGoal()">
      <template v-slot:createPopup>
        <CreateGoal ref="AddGoal" />
      </template>
    </ManageData>

  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import ManageData from "@/components/Widgets/ManageData.vue";
import CreateGoal from "@/components/Popup/CreateGoal.vue";

export default {
  name: "DashboardAdmin",
  components: {
    Titlebar,
    ManageData,
    CreateGoal
  },
  methods: {
    addGoal() {
      this.$refs.AddGoal.toggleGoal()
    }
  },
  data() {
    return {
      goals: [
        {
          Goal_ID: 1,
          Goal_Name: "Bulk up",
          Goal_Description: "Build up muscles",
        },
        {
          Goal_ID: 1,
          Goal_Name: "Lose weight",
          Goal_Description: "Losing weight",
        },
      ],
    };
  },
};
</script>
