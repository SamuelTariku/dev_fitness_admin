<template>
  <Titlebar title="Dashboard" />
  <div class="widget-area" style="justify-content:space-evenly">
    <UserCounter title="Total Admins" count="20"/>
    <UserCounter title="Total Users" count="20"/>
    <UserCounter title="Total Trainers" count="20"/>
  </div>
  <div class="widget-area">
    <UserTracker />
  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import UserTracker from "@/components/Widgets/UserTracker.vue";
import UserCounter from "@/components/Widgets/UserCounter.vue";

export default {
  name: "DashboardHome",
  components: {
    Titlebar,
    UserTracker,
    UserCounter,
  },
};
</script>

<style scoped>
.widget-area {
  display: flex;
  flex-wrap: wrap;
}
</style>
