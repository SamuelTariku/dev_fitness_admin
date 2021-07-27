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
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="active=false">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
      return {
          active: false
      }
  },
  props: {
      title: {
          type: String,
          default: ''
      },
  },
  methods: {
      togglePopup(){
          console.log('changeActive')
          this.active = !this.active
      }
  }
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
