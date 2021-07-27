<template>
  <button class="btn" :style="{ background: color, color: text_color }" @click="clickEvent()">
    <span v-if="text && !icon">
        {{ text }}
    </span>
    
    <span v-if="icon">
    <i :class="icon" :style="{color: text_color}"></i>
    </span>
  </button>
  
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "#eef",
    },
    text_color: {
      type: String,
      default: "black",
    },
    icon: {
      type: String,
      default: "",
    },

  },

  methods: {
    clickEvent() {
      
      this.$emit('buttonClick')
    }
  }

};
</script>

<style scoped>
.btn {
  border-bottom: 2px solid grey;
}
.btn:hover {
  filter: brightness(85%);
}
.btn:active {
  transform: scale(0.9);
}
</style>
