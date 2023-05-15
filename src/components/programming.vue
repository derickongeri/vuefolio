<template>
  <div class="skill-level-mobile text-center q-pa-md full-width">
    <div v-for="(skill, id) in skillsMobile" :key="id" class="row items-center">
      <h6 class="text-box" style="font-weight:bold">{{ skill.language }}</h6>
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
        {{ skill.level }}
      </q-circular-progress>
    </div>
  </div>

  <div class="skill-level col-6 text-left q-pa-md">
    <div
      v-for="(skill, id) in skills"
      :key="id"
      class="text-box row item-center q-px-xl"
    >


      <q-item>
        <q-item-section side top>
          <q-item-label class="text-primary" caption style="font-weight:bold">2018 - now</q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label overline>LocateIT Kenya Limited</q-item-label>
          <q-item-label>Tenchincal Lead GIS & Remote Sesnsing</q-item-label>
          <q-item-label caption class="text-justify">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>
      </q-item>

      <!-- <q-circular-progress

        show-value
        font-size="12px"
        :value="skill.level"
        size="100px"
        thickness="0.15"
        color="teal"
        track-color="grey-3"
        class="row q-ma-md"
        data-aos="fade-left"
      >
        {{ skill.level }}
      </q-circular-progress> -->
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import setUpProfile from "../composables/data.js";

export default defineComponent({
  setup() {
    const { codingSkills, codingSkillsmobile } = setUpProfile();

    const skills = ref([]);
    const skillsMobile = ref([]);

    onMounted(() => {
      skills.value = codingSkills;
      skillsMobile.value = codingSkillsmobile;
    });
    return {
      skills,
      skillsMobile,
    };
  },
});
</script>

<style>
@media screen and (max-width: 768px) {
  .skill-level {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .skill-level-mobile {
    display: none;
  }
}
</style>
