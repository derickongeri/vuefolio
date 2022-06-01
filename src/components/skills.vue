<template>
  <div class="text-box q-pa-md row items-center q-gutter-xs">
    <div v-for="(skill, key) in skills" :key="key">
      <div class="row items-center">
        <div class="col q-pa-sm" style="max-width: 100px">
          <img :src="skill.img" style="width: 100%" />
        </div>
        <div class="col">{{ skill.skill }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import setUpProfile from "../composables/data.js";

export default defineComponent({
  setup() {
    const { skillsData } = setUpProfile();

    const skills = ref([]);

    onMounted(() => {
      skills.value = skillsData;
    });
    return {
      skills,
    };
  },
});
</script>
