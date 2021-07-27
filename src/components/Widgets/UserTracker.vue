<template>
  <div class="widget">
    <h3 class="widget-title">User Tracker</h3>
    <Table :rows="users"/>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "UserTracker",
  data: () => {
    return {
      users: [
        {
          ID: 1,
          Full_Name: "Samuel Tariku",
          Last_Login: "10th May 2021",
        },
      ],
    };
  },
  components: {
    Table,
  },
};
</script>

<style scoped>
  .widget {
    min-width: 80vh; 
  }
</style>
