<template>
  <Titlebar title="Users" />
  <div class="widget-area">
    <ManageData title="Manage users" :data="users"/>

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
          Full_Name: "SamuelTariku",
          Last_Login: "10th May 2021",
          Date_of_Birth: "10th May 2021",
          Has_Trainer: 'No'
        },
      ],
    };
  },
};
</script>
