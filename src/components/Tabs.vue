<template>
  <nav class="nav">
    <ul class="nav nav-tabs">
      <li v-for="(tab, index) in tabs" :key="index" class="nav-item">
        <a class="nav-link" :class="active==index ? 'active' : ''" href="#" @click="clickTab(index)">{{ tab }}</a>
      </li>

      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
          >Disabled</a
        >
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
    name: "Tabs",
    props: {
        tabs: {
            type: Array,
            default: []
        },
        active: {
            type: Number,
            default: 0
        }
    },
    methods: {
        clickTab(index) {
            this.$emit('tab_click', index)
        }
    }
}
</script>

<style scoped>
    li {
        border-radius: 0;
        margin-right: 1vh;
    }
</style>
