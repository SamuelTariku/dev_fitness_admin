<template>
  <Titlebar title="Goals" />
  <div class="widget-area">
    <ManageData title="Manage goals" :data="goals"/>

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
