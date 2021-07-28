<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th
            scope="col"
            v-for="(col, index) in columns"
            :key="index"
            style="padding: 2vh;"
          >
            {{ col }}
          </th>
          <th v-if="functions.length > 0 && rows.length > 0" style="padding: 2vh;">
            Functions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
          :class="hover ? 'hover' : ''"
        >
          <td
            v-for="(col, index) in columns"
            :key="index"
            style="padding: 2vh;"
          >
            {{ row[col] }}
          </td>
          <div v-if="functions.length > 0" style="padding:0">
            <td
              v-for="(functs, index) in functions"
              :key="index"
              style="padding: 2vh;"
            >
              <Button
                :text="functs.text"
                :color="functs.color"
                :text_color="functs.text_color"
                :icon="functs.icon"
              />
            </td>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Table",
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
    rows: Array,
    functions: {
      type: Array,
      default: [],
    },
  },
  components: {
    Button,
  },
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0]);
    },
  },
};
</script>

<style scoped>
tr {
  border: 1px solid white;
}
/* thead {
  background: #eee;
} */

td .hover:hover {
  cursor: pointer;
}
</style>
