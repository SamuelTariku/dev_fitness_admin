<template>
  <Popup title="Create Administrator" ref="PopupComponent">
    <template v-slot:body>
      <div class="form-group">
        <label for="">Username</label>
        <input type="text" placeholder="Username" class="form-control" />
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input type="text" placeholder="Password" class="form-control" />
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

  methods: {
      toggleAdmin() {
          console.log('togglePopup')
          this.$refs.PopupComponent.togglePopup()
      }
  }
};
</script>

<style scoped>
  label {
    font-weight: bold;
  }

  .form-group {
    margin: 2vh 0;
  }

  .button-container {
    text-align: left;
  }
</style>