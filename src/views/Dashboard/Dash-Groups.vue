<template>
  <Titlebar title="Groups" />
  <div class="widget-area">
    <ManageData title="Manage groups" :data="groups" @add_data="addGroup()">
      <template v-slot:createPopup>
        <CreateGroup ref="AddGroup"/>
      </template>
    </ManageData>

  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import ManageData from "@/components/Widgets/ManageData.vue";
import CreateGroup from "@/components/Popup/CreateGroup.vue";

export default {
  name: "DashboardAdmin",
  components: {
    Titlebar,
    ManageData,
    CreateGroup
  },
  methods: {
    addGroup() {
      this.$refs.AddGroup.toggleGroup()
    }
  },
  data() {
    return {
      groups: [
        {
          group_ID: 1,
          group_Name: "Exercise Group 1",
          is_Private: true,
          members: 21,
          last_message_date: "January 15 2019",
        },
      ],
    };
  },
};
</script>
