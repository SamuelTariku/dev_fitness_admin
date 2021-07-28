<template>
  <Titlebar title="Administrator" />
  <div class="widget-area">
    <ManageData title="Manage admins" :data="users" @add_data="addAdmin()">
        <template v-slot:createPopup>
            <CreateAdmin ref="AddAdmin" />
        </template>
    </ManageData>
  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import ManageData from "@/components/Widgets/ManageData.vue";
import CreateAdmin from "@/components/Popup/CreateAdmin.vue";

export default {
  name: "DashboardAdmin",
  components: {
    Titlebar,
    ManageData,
    CreateAdmin,
  },

  methods: {
    addAdmin() {
      console.log("toggleAdmin");
      this.$refs.AddAdmin.toggleAdmin();
    },
  },
  data() {
    return {
      users: [
        {
          ID: 1,
          Full_Name: "SamuelTariku",
          Last_Login: "10th May 2021",
        },
        {
          ID: 1,
          Full_Name: "AbelAlemu",
          Last_Login: "10th May 2021",
        },
      ],
    };
  },
};
</script>
