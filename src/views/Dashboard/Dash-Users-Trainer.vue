<template>
  <Titlebar title="Trainers" />
  <div class="widget-area">
    <ManageData title="Manage trainers" :data="users" @add_data="addTrainer()">
      <template v-slot:createPopup>
        <CreateTrainer ref="AddTrainer"/>
      </template>
    </ManageData>
    <TrainerApproval title="Trainer Approval" :data="approvalRequests"/>
  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import ManageData from "@/components/Widgets/ManageData.vue";
import TrainerApproval from "@/components/Widgets/TrainerApproval.vue";
import CreateTrainer from "@/components/Popup/CreateTrainer.vue";

export default {
  name: "DashboardAdmin",
  components: {
    Titlebar,
    ManageData,
    TrainerApproval,
    CreateTrainer
  },
  methods: {
    addTrainer() {
      this.$refs.AddTrainer.toggleTrainer();
    }
  },
  data() {
    return {
      users: [
        {
          ID: 1,
          Full_Name: "Trainer1",
          Last_Login: "5th July 2001",
          Date_of_Birth: "15th May 1421",
          Number_of_Clients: 12,
        },
      ],
      approvalRequests: [
        {
          ID: 1,
          Full_Name: "Trainer1",
        },
        {
          ID: 2,
          Full_Name: "Trainer2",
        },
      ],
    };
  },
};
</script>
