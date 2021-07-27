<template>
  <div class="m-auto" :style="{ width: width + '%' }">
    <div class="search-bar input-group">
      <input
        type="search"
        placeholder="Search"
        class="form-control"
        v-model="search"
        @input="onSearch"
      />
      <button type="button" class="btn btn-primary">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: {
    width: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.search);
    },
  },
};
</script>
