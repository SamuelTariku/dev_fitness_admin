<template>
  <div class="form-group">
    <label for="">{{ title }}</label>
    <div class="row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          v-model="searchText"
        />
        <div v-show="searchText.length > 0" class="dropdown">
          <ul class="list-group">
            <li class="list-group-item"></li>
          </ul>
        </div>
      </div>
      <div class="col">
        <button
          type="submit"
          class="btn btn-outline-secondary btn-block"
          :class="searchFound ? '' : 'disabled'"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    title: {
      type: String,
      default: "Search",
    },
  },
  data() {
    return {
      searchIdentifer: 0,
      dropdownSearch: false,
      searchText: "",
      searchFound: false,
    };
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
}
li {
  border: none;
}

li:hover {
  background: #eee;
}

ul {
  border: 1px solid #ccc;
  border-top: none;
}
</style>
