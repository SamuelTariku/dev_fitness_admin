<template>
  <div class="week row">
    <div class="day col" :class="isSelected(0)" @click="setSelected(0)">
      Mon
    </div>
    <div class="day col" :class="isSelected(1)" @click="setSelected(1)">
      Tue
    </div>
    <div class="day col" :class="isSelected(2)" @click="setSelected(2)">
      Wed
    </div>
    <div class="day col" :class="isSelected(3)" @click="setSelected(3)">
      Thus
    </div>
    <div class="day col" :class="isSelected(4)" @click="setSelected(4)">
      Fri
    </div>
    <div class="day col" :class="isSelected(5)" @click="setSelected(5)">
      Sat
    </div>
    <div class="day col" :class="isSelected(6)" @click="setSelected(6)">
      Sun
    </div>
  </div>
</template>

<script>
export default {
  name: "WeekCalander",
  data() {
    return {
      weekDay: [false, false, false, false, false, false, false],
      selected: 0,
    };
  },

  methods: {
    isSelected(index) {
      if (this.selected == index) {
        return "selected";
      } else {
        return "";
      }
    },

    setSelected(index) {
      this.selected = index;
    },
  },
};
</script>

<style scoped>
.week {
  margin: 2vh;
}

.day {
  border: 2px outset #eee;
  padding: 1vh;
}

.fill-good {
  background: lightgreen;
}

.fill-bad {
  background: coral;
}

.selected {
  background: #ccc;
}

.day:hover {
  background: #ccc;
  cursor: pointer;
}

.day:active {
    transform: scale(0.9);
}
</style>
