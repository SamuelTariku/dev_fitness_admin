<template>
  <Titlebar title="Trainers" />
  <div class="widget-area">
    <ManageData title="Manage trainers" :data="users"/>
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
      users: [
        {
          ID: 1,
          Full_Name: "Trainer1",
          Last_Login: "5th July 2001",
          Date_of_Birth: "15th May 1421",
          Number_of_Clients: 12
        },
      ],
    };
  },
};
</script>
