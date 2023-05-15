<template>
  <div class="row q-ma-lg q-gutter-md q-py-md justify-center items-start">
        <div
          class="col-6 text-center"
          data-aos="fade-right"
          style="max-width: 35%"
        >
          <transition
            appear
            enter-active-class="animated slide-right"
            leave-active-class="animated fadeOut"
          >
            <img
              src="~/src/assets/profile-pic3.png"
              alt=""
              style="max-width: 25vw"
            />
          </transition>
        </div>

        <div
          class="col-6 text-center q-pa-md"
          data-aos="fade-left"
          style="max-width: 35%; border-radius: 15px"
          :style="{background: backgroundColor}"
        >
          <p class="text-box" style="font-size: 21px">
            <strong>Creative.Adaptable.Resilient.</strong>
          </p>
          <p class="text-box" style="font-size: 16px">
            <strong>A</strong> GIS <strong>developer based in</strong> Nairobi,
            Kenya
          </p>
          <p class="text-box">
            I am a highly experienced GIS and Remote Sensing analyst and web
            developer with a strong passion for using earth observation and
            geospatial technologies, process automation, and software
            development to address the challenges of sustainable development.
          </p>
          <p class="text-box">
            I possess a wealth of technical skills in web and GIS database
            management, data analysis and visualization, API design and system
            deployment, as well as scripting and workflow automation. I am known
            for my creativity and have provided imaginative solutions for
            several clients, both individually and as part of a team. I am
            proficient in programming languages such as JavaScript and Python,
            and I actively contribute to numerous open source projects as a
            strong advocate of open science and reproducible research.
          </p>
          <p class="text-box">
            Additionally, I am a certified Qgis instructor and have extensive
            knowledge of ESRI ArcGIS and ArcMap.
          </p>
        </div>
      </div>
</template>

<script>
import { defineComponent, onMounted, ref, computed, watch } from "vue";
import setUpProfile from "../composables/data.js";
import {useQuasar} from "quasar"

export default defineComponent({
  setup() {
    const $q = useQuasar()

    const { projectsData } = setUpProfile();
    const projects = ref([])
    const backgroundColor = ref('')

    const darkMode = computed(() => {
      return $q.dark.isActive;
    });

    watch(darkMode, (darkMode) => {
      $q.dark.set(darkMode);
      if (darkMode) {
        backgroundColor.value = "#343A40";
      } else {
        backgroundColor.value = "#fafafa";
      }
      console.log(darkMode);
    });

    onMounted(() => {
      projects.value = projectsData;
      backgroundColor.value = "#EEEEEE";
    });

    return {
      projects,
      backgroundColor
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&family=Raleway:wght@200&family=Roboto:ital,wght@0,100;1,100&display=swap");

.text-box {
  font-family: "Raleway", sans-serif;
  /* font-weight: 200; */
  text-align: justify;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

.my-card {
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #00000000;
}

.showme {
  /* display: none; */
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0%;
  opacity: 0;
  max-height: 75%;
  border-radius: 10px;
  transition: height 0.5s ease, opacity 0.5s ease;
  background-color: #e9e9e9e8;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
}

.header {
  background-color: #0000001f;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  max-width: 100vw;
  cursor: pointer;
}

// .project-card:hover .showme {
//   /* display: block; */
//   cursor: pointer;
//   height: fit-content; /* Adjust the desired height */
//   opacity: 1;
// }

@media screen and (max-width: 768px) {
  .web-card {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .mobile-card {
    display: none;
  }
}
</style>

