<template>
  <Titlebar title="Blogs" />
  <div class="widget-area">
    <ManageData title="Manage blogs" :data="users"/>

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
          User_ID: 1,
          User_Type: 'User',
          Blog_Title: "Lorem Ispum",
          Blog_Description: "Do ea irure ut consequat minim duis cupidatat",
          Likes: 2
        },
        {
          User_ID: 3,
          User_Type: 'Trainer',
          Blog_Title: "Lorem Ispum",
          Blog_Description: "Do ea irure ut consequat minim duis cupidatat",
          Likes: 2000
        },
      ],
    };
  },
};
</script>
