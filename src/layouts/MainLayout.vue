<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar class="tabs-web">
        <div style="width:14%"></div>
        <q-toolbar-title >
          <div class="logo-web" v-if="darkMode">
            <img
              src="~/src/assets/deric-logo-light.svg"
              alt=""
              style="width: 200px"
            />
          </div>
          <div class="logo-web" v-else>
            <img
              src="~/src/assets/deric-logo.svg"
              alt=""
              style="width: 200px"
            />
          </div>
        </q-toolbar-title>

        <div>
          <div class="row q-gutter-md" style="font-weight:1400; font-size:16px">
            <div name="Home" label="">
              <div class="text-content">
                <a href="#hero">
                  <div class="text-grey-4" v-if="darkMode">Home</div>
                  <div v-else>Home</div></a
                >
              </div>
            </div>
            <div name="About" label="">
              <div class="text-content">
                <a href="#about">
                  <div class="text-grey-4" v-if="darkMode">About</div>
                  <div v-else>About</div></a
                >
              </div>
            </div>
            <div name="Projects" label="">
              <div class="text-content">
                <a href="#projects">
                  <div class="text-grey-4" v-if="darkMode">Projects</div>
                  <div v-else>Projects</div>
                </a>
              </div>
            </div>
            <div name="Contacts" label="">
              <div class="text-content">
                <a href="#contacts">
                  <div class="text-grey-4" v-if="darkMode">Contacts</div>
                  <div v-else>Contacts</div></a
                >
              </div>
            </div>
            <div style="width: 16vw"></div>
          </div>
        </div>
      </q-toolbar>

      <q-toolbar class="tabs-mobile">
        <q-toolbar-title>
          <div class="logo-web q-pa-sm" v-if="darkMode">
            <img
              src="~/src/assets/deric-logo-light.svg"
              alt=""
              style="width: 150px"
            />
          </div>
          <div class="logo-web q-pa-sm" v-else>
            <img
              src="~/src/assets/deric-logo.svg"
              alt=""
              style="width: 150px"
            />
          </div>
        </q-toolbar-title>

        <div class="text-black">
          <q-btn flat round color="grey-6" icon="menu">
            <q-menu anchor="bottom left" self="top left" :offset="[0, 8]">
              <q-list style="min-width: 95vw">
                <q-item clickable>
                  <q-item-section
                    ><a href="#hero">
                      <div class="text-grey-4" v-if="darkMode">Home</div>
                      <div v-else>Home</div></a
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    <a href="#about">
                      <div class="text-grey-4" v-if="darkMode">About</div>
                      <div v-else>About</div></a
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    <a href="#projects">
                      <div class="text-grey-4" v-if="darkMode">Projects</div>
                      <div v-else>Projects</div>
                    </a></q-item-section
                  >
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    <a href="#contacts">
                      <div class="text-grey-4" v-if="darkMode">Contacts</div>
                      <div v-else>Contacts</div></a
                    ></q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="" style="">
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <div>
          <q-toggle
            v-model="darkMode"
            checked-icon="mdi-weather-night"
            color="grey-9"
            unchecked-icon="mdi-white-balance-sunny"
            size="xl"
          />
        </div>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch, provide } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  // components: {
  //   darkMode: require("src/components/darkMode.vue").default,
  // },

  setup() {
    const $q = useQuasar();
    const darkMode = ref(false);

    watch(darkMode, (darkMode) => {
      $q.dark.set(darkMode);
    });

    provide("darkMode", { darkMode });

    return {
      darkMode,
    };
  },
});
</script>

<style>

/* * {
  outline: 1px solid green !important;
  background-color: rgba(0, 128, 0, 0.336);
} */

a:link {
  /* color: #212121; */
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: #212121;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: #1976d2;
  background-color: transparent;
  text-decoration: underline;
  text-decoration: none;
}
a:active {
  color: #1976d2;
  background-color: transparent;
  text-decoration: underline;
}

.header {
  background-color: #0000001f;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  max-width: 100vw;
}

.text-content {
  font-family: "Raleway", sans-serif;
  font-weight: 200;
}

body.body--dark {
  background: #212121;
}

@media screen and (max-width: 768px) {
  .tabs-web {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .tabs-mobile {
    display: none;
  }
}
</style>
