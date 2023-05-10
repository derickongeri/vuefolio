<template>
  <div class="q-pa-md row items-center justify-center q-gutter-xl">
    <div v-for="(project, id) in projects" :key="id" data-aos="zoom-in">
      <div class="web-card">
        <q-card
          flat
          class="my-card"
          style="max-width: 25vw; border-radius: 15px"
        >
          <!-- <img :src="project.img" /> -->
          <q-card-section
            class="my-card project-card "
            :style="{ backgroundImage: 'url(' + project.img + ')' }"
            style="border-radius: 15px; height: 30vh; width: 25vw"
          >
            <!-- <img :src="project.img" /> -->
            <div class="text-box q-pt-sm bg-grey-1 showme">
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
              <div class="text-box q-pa-sm bg-grey-1">{{ project.info2 }}</div>

              <div class="row q-gutter-sm q-pa-sm q-py-md">
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
                      color="blue"
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
  transition: height 0.3s ease, opacity 0.3s ease;
}

.project-card:hover .showme {
  /* display: block; */
  height: 75%; /* Adjust the desired height */
  opacity: 1;
}

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
