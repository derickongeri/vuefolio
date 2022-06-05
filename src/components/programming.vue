<template>
  <div class="col-6 text-center q-pa-md">
    <div v-for="(skill, id) in skills" :key="id" class="row items-center q-px-xl">
      <h6 class="text-box">{{skill.language}}</h6>
      <q-space />
      <q-circular-progress
        show-value
        font-size="12px"
        :value="skill.level"
        size="100px"
        thickness="0.15"
        color="teal"
        track-color="grey-3"
        class="q-ma-md"
      >
        {{skill.level}}
      </q-circular-progress>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import setUpProfile from "../composables/data.js";

export default defineComponent({
  setup() {
    const { codingSkills } = setUpProfile();

    const skills = ref([]);

    onMounted(() => {
      skills.value = codingSkills;
    });
    return {
      skills,
    };
  },
});
</script>

