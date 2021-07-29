<template>
  <Popup
    title="Create Blog"
    ref="PopupComponent"
  >
    <template v-slot:body>
      <!-- General -->
      <div v-show="activeTab == 0" class="generalOptions">
        <div class="form-group">
          <label for="">Blog Name</label>
          <input type="text" placeholder="Blog Name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Blog Description</label>
          <input type="text" placeholder="Blog Description" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Blog Text</label>
          <textarea placeholder="Blog Text" class="form-control" />
        </div>
      </div>
      <div class="button-container">
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
      </div>
    </template>
  </Popup>
</template>

<script>
import Popup from "@/components/Popup.vue";

export default {
  name: "CreateAdmin",
  components: {
    Popup,
  },
  data() {
    return {
      activeTab: 0,
      measureType: ''
    };
  },
  methods: {
    toggleBlog() {
      this.$refs.PopupComponent.togglePopup();
    },
    changeTab(event) {
      console.log(event);
      this.activeTab = event;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
}

.form-group {
  margin: 3vh 0;
}

.button-container {
  text-align: left;
}
</style>
