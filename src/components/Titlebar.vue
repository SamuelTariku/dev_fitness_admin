<template>
    <div
        class="
      d-flex
      justify-content-between
      flex-wrap flex-md-nowrap
      align-items-center
      pb-2
    "
    >
        <h2>{{ title }}</h2>
        <!-- <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group mr-2">
        <button class="btn btn-sm btn-outline-secondary">Share</button>
        <button class="btn btn-sm btn-outline-secondary">Export</button>
      </div>
      <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar"></span>
        This week
      </button>
    </div> -->
    </div>
</template>

<script>
export default {
    name: "Titlebar",
    props: {
        title: String,
    },
};
</script>

<style scoped>
div {
  z-index: 30;
  padding: 3vh 5vh;
  border-bottom: 3px solid #ccc;
  background: white;
}
</style>