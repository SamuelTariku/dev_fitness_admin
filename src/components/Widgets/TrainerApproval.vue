<template>
  <div class="widget">
    <div class="widget_control">
      <i class="fa fa-search-minus"></i>
    </div>
    <div class="topbar">
      <h3 class="widget-title">{{ title }}</h3>
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
      search: "",
      functions: [
        {
          text: "Info",
          color: "blue",
          text_color: "white"
        },
        {
          text: "Approve",
          color: "green",
          text_color: "white",
        },
        {
          text: "Reject",
          color: "red",
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
      if (value.length > 0) {
        this.search = value;
      } else {
        this.search = "";
      }
    },
  },
};
</script>

<style scoped>
.widget {
  padding-top: 0;
}

.widget_control {
  text-align: right;
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
