<template>
  <div class="q-pa-md row items-center justify-center q-gutter-xl">
    <div v-for="(project, id) in projects" :key="id" data-aos="zoom-in">
      <div class="web-card">
        <q-card
          flat
          class="my-card"
          style="max-width: 35vw; border-radius: 15px"
        >
          <!-- <img :src="project.img" /> -->
          <q-card-section
            v-if="project.id % 2 !== 0"
            class="row q-gutter-sm my-card project-card"
            :style="{background: backgroundColor}"
            style="
              border-radius: 15px;
              height: fit-content;
              width: 35vw;
              background-position: center;
            "
          >
            <!-- <img :src="project.img" style="width: 25vw"/> -->
            <div class="col column justify-between my-card">
              <div
                class="col text-box text-h6 q-pa-sm"
                style="
                  max-width: fit-content;
                  font-weight: bold;
                  font-size: 21px;
                "
              >
                {{ project.title }}
              </div>
              <div class="text-box q-pa-sm" style="font-size: 16px">
                {{ project.info2 }}
              </div>

              <!-- <div>
                <q-chip
                  v-for="(stack, id) in project.stack"
                  :key="id"
                  dense
                  class="text-box"
                  style="font-size: 12px; font-weight: bold"
                  ><span class="q-px-sm">{{ project.stack[id] }}</span></q-chip
                >
              </div> -->

              <div class="col q-gutter-sm q-pa-sm q-py-md">
                <div>
                  <a :href="project.url" style="text-decoration: none">
                    <q-btn
                      unelevated
                      rounded
                      dense
                      color="primary"
                      class="q-px-xl"
                      label="view"
                      no-caps
                      style="font-weight: 400"
                    />
                  </a>
                </div>
                <!-- <div>
                  <a
                    href="http://derickongeri.com/greenpulse"
                    style="text-decoration: none"
                  >
                    <q-btn
                      outline
                      rounded
                      dense
                      color="primary"
                      class="q-px-xl"
                      label="view live"
                      no-caps
                      style="font-weight: 400"
                    />
                  </a>
                </div> -->
              </div>
            </div>
            <div
              class="col-8 column my-card justify-center items-center"
              style="border-radius: 15px 0px 15px 0px"
            >
              <img :src="project.img" style="position: relative; width: 100%" />
            </div>
            <div class="text-box q-pt-sm showme">
              <div
                class="text-box text-h6 q-pa-sm"
                style="
                  max-width: fit-content;
                  font-weight: bold;
                  font-size: 16px;
                "
              >
                {{ project.title }}
              </div>
              <div class="text-box q-pa-sm" style="font-size: 16px">
                {{ project.info2 }}
              </div>

              <div class="row q-gutter-sm q-pa-sm q-py-md">
                <div>
                  <a :href="project.url" style="text-decoration: none">
                    <q-btn
                      unelevated
                      rounded
                      dense
                      color="primary"
                      class="q-px-xl"
                      label="view live"
                      no-caps
                      style="font-weight: 400"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="http://derickongeri.com/greenpulse"
                    style="text-decoration: none"
                  >
                    <q-btn
                      outline
                      rounded
                      dense
                      color="primary"
                      class="q-px-xl"
                      label="view live"
                      no-caps
                      style="font-weight: 400"
                    />
                  </a>
                </div>
              </div>

              <!-- <div class="q-pa-sm">
                <q-chip
                  v-for="(stack, id) in project.stack"
                  :key="id"
                  dense
                  color="white"
                  outline
                  class="text-box text-grey-7"
                  style="font-size: 12px; font-weight: bold"
                  ><span class="q-px-sm">{{ project.stack[id] }}</span></q-chip
                >
              </div> -->
            </div>
          </q-card-section>
          <q-card-section
            v-else
            class="row q-gutter-sm my-card project-card"
            :style="{background: backgroundColor}"
            style="
              border-radius: 15px;
              height: fit-content;
              width: 35vw;
              background-position: center;
            "
          >
            <!-- <img :src="project.img" style="width: 25vw"/> -->
            <div
              class="col-8 column my-card justify-center items-center"
              style="border-radius: 15px 0px 15px 0px"
            >
              <img :src="project.img" style="position: relative; width: 100%" />
            </div>
            <div class="col column justify-between my-card">
              <div
                class="col text-box text-h6 q-pa-sm"
                style="
                  max-width: fit-content;
                  font-weight: bold;
                  font-size: 21px;
                "
              >
                {{ project.title }}
              </div>
              <div class="text-box q-pa-sm" style="font-size: 16px">
                {{ project.info2 }}
              </div>

              <!-- <div>
                <q-chip
                  v-for="(stack, id) in project.stack"
                  :key="id"
                  dense
                  class="text-box"
                  style="font-size: 12px; font-weight: bold"
                  ><span class="q-px-sm">{{ project.stack[id] }}</span></q-chip
                >
              </div> -->

              <div class="col q-gutter-sm q-pa-sm q-py-md">
                <div>
                  <a :href="project.url" style="text-decoration: none">
                    <q-btn
                      unelevated
                      rounded
                      dense
                      color="primary"
                      class="q-px-xl"
                      label="view"
                      no-caps
                      style="font-weight: 400"
                    />
                  </a>
                </div>
                <!-- <div>
                  <a
                    href="http://derickongeri.com/greenpulse"
                    style="text-decoration: none"
                  >
                    <q-btn
                      outline
                      rounded
                      dense
                      color="primary"
                      class="q-px-xl"
                      label="view live"
                      no-caps
                      style="font-weight: 400"
                    />
                  </a>
                </div> -->
              </div>
            </div>

            <div class="text-box q-pt-sm showme">
              <div
                class="text-box text-h6 q-pa-sm"
                style="
                  max-width: fit-content;
                  font-weight: bold;
                  font-size: 16px;
                "
              >
                {{ project.title }}
              </div>
              <div class="text-box q-pa-sm" style="font-size: 16px">
                {{ project.info2 }}
              </div>

              <div class="row q-gutter-sm q-pa-sm q-py-md">
                <div>
                  <a :href="project.url" style="text-decoration: none">
                    <q-btn
                      unelevated
                      rounded
                      dense
                      color="primary"
                      class="q-px-xl"
                      label="view live"
                      no-caps
                      style="font-weight: 400"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="http://derickongeri.com/greenpulse"
                    style="text-decoration: none"
                  >
                    <q-btn
                      outline
                      rounded
                      dense
                      color="primary"
                      class="q-px-xl"
                      label="view live"
                      no-caps
                      style="font-weight: 400"
                    />
                  </a>
                </div>
              </div>

              <!-- <div class="q-pa-sm">
                <q-chip
                  v-for="(stack, id) in project.stack"
                  :key="id"
                  dense
                  color="white"
                  outline
                  class="text-box text-grey-7"
                  style="font-size: 12px; font-weight: bold"
                  ><span class="q-px-sm">{{ project.stack[id] }}</span></q-chip
                >
              </div> -->
            </div>
          </q-card-section>

          <!-- <q-card-section>
            <div
              class="text-box text-h6 bg-white"
              style="max-width: fit-content; font-weight: bold; font-size: 16px"
            >
              {{ project.title }}
            </div>
          </q-card-section> -->

          <!-- <q-separator /> -->

          <!-- <q-card-actions>
            <div>
              <a
                href="http://derickongeri.com/greenpulse"
                style="text-decoration: none"
              >
                <q-btn
                  unelevated
                  rounded
                  dense
                  color="blue"
                  class="q-px-xl"
                  label="view live"
                  no-caps
                  style="font-weight: 400"
                />
              </a>
              <a
                href="http://derickongeri.com/greenpulse"
                style="text-decoration: none"
              >
                <q-btn
                  outline
                  rounded
                  dense
                  color="blue"
                  class="q-px-xl"
                  label="view live"
                  no-caps
                  style="font-weight: 400"
                />
              </a>
            </div>
          </q-card-actions> -->

          <!-- <q-card-section>
            <div>
              <q-chip
                v-for="(stack, id) in project.stack"
                :key="id"
                dense
                class="text-box"
                style="font-size: 12px; font-weight: bold"
                ><span class="q-px-sm">{{ project.stack[id] }}</span></q-chip
              >
            </div>
          </q-card-section> -->
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

    const setBackground = (darkMode) => {
      if (darkMode) {
        backgroundColor.value = "#343A40";
      } else {
        backgroundColor.value = "#EEEEEE";
      }
    }

    watch(darkMode, (darkMode) => {
      $q.dark.set(darkMode);
      setBackground(darkMode)
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
