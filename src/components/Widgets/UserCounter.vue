<template>
  <div class="widget">
    <p> {{count}} </p>
    <h3 class="widget-title">{{title}}</h3>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "UserTracker",
  props: {
      title: {
          type: String,
          default: 'Default'
      },
      count: {
          type: Number,
          default: 0
      },
  },
};
</script>

<style scoped>
    .widget {
        text-align: center;
    }
</style>
