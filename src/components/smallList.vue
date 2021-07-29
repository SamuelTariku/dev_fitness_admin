<template>
  <div class="smallList">
    <div class="listItem row" v-for="(object, index) in data" :key="index">
      <div class="col-10 py-2">
          <i :class="beginIcon"></i>
          {{object}}
      </div>
      
      <div class="col-2">
        <Button :text="button.text" :color="button.color" :text_color="button.text_color" :icon="button.icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
    name: 'SmallList',
    props: {
        data: {
            type: Array,
            default: []
        },
        button: {
            type: Object,
            default: {
                text: "delete",
                color: "#ccc",
                text_color: "black",
                icon: "fa fa-times"
            }
        },
        beginIcon: {
            type: String,
            default: "fa fa-user"
        }
    },
    components: {
        Button,
    }
}
</script>

<style scoped>
.smallList {
  border: 1px solid #ccc;
  height: 25vh;
  overflow-y:scroll;
  padding: 1vh;
}

.listItem {
    margin: 2vh 0;
    border-bottom: 1px solid #eee;
}
</style>
