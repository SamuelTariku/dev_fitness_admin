<template>
  <div v-show="active" class="popup-background">
    <div class="popup">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body">
            <Tabs
              @tab_click="changeTab"
              :active="activeTab"
              :tabs="tabs"
            />
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary"
              data-dismiss="modal"
              @click="active = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Popup",
  data() {
    return {
      active: false,
      activeTab: 0,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    tabs: {
      type: Array,
      default: [],
    }
  },
  methods: {
    togglePopup() {
      this.active = !this.active;
    },
    changeTab(event) {
      this.$emit('tab_click', event)
      this.activeTab = event;

    },
  },
  components: {
    Tabs,
  },
};
</script>

<style scoped>
.popup-background {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  padding: 2vh;
}
</style>
