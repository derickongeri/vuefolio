<template>

  <div class="text-box q-pa-md row items-center justify-around q-gutter-xs">
    <div v-for="(skill, key) in skills" :key="key">
      <div class="col text-center q-px-sm">
        <div class="row justify-center q-pa-sm">
          <img :src="skill.img" style="width: 50px;height: 50px;" />
        </div>
        <div class="row justify-center">{{ skill.skill }}</div>
      </div>
    </div>
  </div>

  <!-- <div class="text-box q-pa-md row items-center justify-around q-gutter-xs">
    <div v-for="(skill, key) in skills" :key="key">
      <div class="col text-center q-px-sm">
        <div class="row justify-center q-pa-sm">
          <img :src="skill.img" style="width: 50px" />
        </div>
        <div class="row justify-center">{{ skill.skill }}</div>
      </div>
    </div>
  </div> -->

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
