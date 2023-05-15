<template>

  <div class="skill-level col-6 text-left q-pa-md">
    <div
      v-for="(job, id) in workExperience"
      :key="id"
      class="text-box row item-center q-px-xl"
    >


      <q-item>
        <q-item-section side top>
          <q-item-label class="text-primary" caption style="font-weight:bold">{{job.year}}</q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">{{job.position}}</q-item-label>
          <q-item-label overline class="">{{job.company}}</q-item-label>
          <q-item-label caption class="">{{job.summary}}</q-item-label>
          <div>
                <q-chip
                  v-for="(skill, id) in job.gainedSkills"
                  :key="id"
                  dense
                  class="text-box"
                  style="font-size: 12px;"
                  ><span class="q-px-sm">{{ job.gainedSkills[id] }}</span></q-chip
                >
              </div>
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
    const { workExperienceData } = setUpProfile();

    const workExperience = ref([])

    onMounted(() => {
      workExperience.value = workExperienceData
    });
    return {
      workExperience,
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
