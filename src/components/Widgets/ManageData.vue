<template>
  <div class="widget">
    <div class="topbar">
      <h3 class="widget-title">{{ title }}</h3>
      <SearchBar @search="filterData" />
      <div class="widget-title-right">
        <Button
          text="+"
          color="#0f0"
          text_color="white"
          icon="fa fa-plus"
          @buttonClick="$emit('add_data')"
        />
        <slot name="createPopup"></slot>
      </div>
    </div>
    <div v-show="search.length > 0">
      Search results: {{search}}
    </div>
    <div v-show="data.length == 0" style="text-align:center">
      <p>There are no entries</p>
    </div>
    <Table :rows="data" :functions="functions" />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import Button from "@/components/Button.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "ManageData",
  props: {
    title: String,
    data: {
      type: Array,
      default: [],
    },
  },
  data: () => {
    return {
      search: '',
      functions: [
        {
          text: "Update",
          color: "blue",
          text_color: "white",
          icon: "fas fa-edit",
        },
        {
          text: "Delete",
          color: "red",
          icon: "fa fa-trash",
        },
      ],
    };
  },
  components: {
    Table,
    Button,
    SearchBar,
  },

  methods: {
    filterData(value) {
      if(value.length > 0) {
        this.search = value
      } else {
        this.search = ''
      }
      
    },
  },
};
</script>

<style scoped>
.widget {
  width: 100%;
}
.search-bar {
  text-align: center;
  padding: 1vh;
}

.topbar {
  display: flex;
  justify-content: space-between;
}

.widget-title-right {
  display: flex;
  justify-content: space-evenly;
  padding: 2vh;
}
</style>
