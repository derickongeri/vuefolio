<template>
  <div class="q-pa-md row items-center justify-center q-gutter-lg">
    <div v-for="(project, id) in projects" :key="id">
      <div class="web-card" style="max-width: 25vw">
        <q-card class="my-card">
          <img :src="project.img" />

          <q-card-section>
            <div class="text-box text-h6">{{ project.title }}</div>
            <div class="text-box text-subtitle2">{{ project.info }}</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section class="text-box q-pt-sm">
            {{ project.info2 }}
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat no-caps> <span class="text-box">Link</span></q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="mobile-card">
        <q-card class="my-card">
          <img :src="project.img" />

          <q-card-section>
            <div class="text-box text-h6">{{ project.title }}</div>
            <div class="text-box text-subtitle2">{{ project.info }}</div>
          </q-card-section>

          <q-separator inset />

          <q-card-section class="text-box q-pt-sm">
            {{ project.info2 }}
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat no-caps> <span class="text-box">Link</span></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import setUpProfile from "../composables/data.js";

export default defineComponent({
  setup() {
    const { projectsData } = setUpProfile();

    const projects = ref([]);

    onMounted(() => {
      projects.value = projectsData;
      console.log(projects.value);
    });

    return {
      projects,
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&family=Raleway:wght@200&family=Roboto:ital,wght@0,100;1,100&display=swap");

.text-box {
  font-family: "Raleway", sans-serif;
  /* font-weight: 200; */
  text-align: justify;
}

@media screen and (max-width:768px) {
.web-card {
  display: none;
}
}

@media screen and (min-width:768px) {
.mobile-card {
  display: none;
}
}
</style>
