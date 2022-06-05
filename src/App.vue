<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default defineComponent({
  name: "App",

  created() {
    AOS.init();
  },
});
</script>
