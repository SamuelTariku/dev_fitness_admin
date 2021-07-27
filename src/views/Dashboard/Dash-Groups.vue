<template>
  <Titlebar title="Groups" />
  <div class="widget-area">
    <ManageData title="Manage groups" :data="groups"/>

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
      groups: [
        {
          group_ID: 1,
          group_Name: "Exercise Group 1",
          is_Private: true,
          no_Members: 21,
          last_message_date: "January 15 2019",
          admin: 2
        },
      ],
    };
  },
};
</script>
