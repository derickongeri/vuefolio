<template>
  <div class="">
    <span style="font-size: 1.5em; font-family: Raleway, sans-serif">{{title}}</span>
    <span class="text-primary" style="font-size: 1.5em; font-family: Raleway, sans-serif">
    {{ displayText.join("") }}
    <span class="cursor">|</span>
  </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    speed: {
      type: Number,
      default: 100,
    },
    deleteSpeed: {
      type: Number,
      default: 100,
    },
    nextWordInterval: {
      type: Number,
      default: 3000,
    },
    words: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      displayText: [],
      currentWord: "",
      wordIdx: 0,
      timeoutSpeed: null,
      isWaitingNextWord: false,
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.words[this.wordIdx].split("");
        this.timeoutSpeed = this.speed;
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
    },
    type() {
      // if typing...
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());
        // if done typing, wait for a while
      } else if (
        !this.isWaitingNextWord &&
        this.currentWord.length === 0 &&
        this.displayText.length === this.words[this.wordIdx].length
      ) {
        this.timeoutSpeed = this.nextWordInterval;
        this.isWaitingNextWord = true;
        // if done typing, then delete
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.timeoutSpeed = this.deleteSpeed;
        this.displayText.pop();
        // if done typing & deleting
      } else if (
        this.currentWord.length === 0 &&
        this.displayText.length === 0
      ) {
        // change words
        if (this.wordIdx < this.words.length - 1) {
          this.wordIdx++;
        } else {
          // reset
          this.wordIdx = 0;
        }

        this.timeoutSpeed = this.speed;
        this.isWaitingNextWord = false;
        this.currentWord = this.words[this.wordIdx].split("");
        this.displayText.push(this.currentWord.shift());
      }

      setTimeout(this.type, this.timeoutSpeed);
    },
  },
});
</script>

<style lang="scss" scoped>
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

.cursor {
  display: inline-block;
  margin-left: -3px;
  animation: blink-animation 1s steps(2, start) infinite;
}
</style>
