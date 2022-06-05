<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header text-grey-9">
      <q-toolbar class="tabs-web">
        <div style="width: 10vw"></div>
        <q-toolbar-title>
          <div class="logo-web">
            <img
              src="~/src/assets/deric-logo.svg"
              alt=""
              style="width: 200px"
            />
          </div>
        </q-toolbar-title>

        <div class="text-black">
          <div class="row q-gutter-md">
            <div name="Home" label="">
              <div class="text-content"> <a href="#hero"> <div>Home</div></a></div>
            </div>
            <div name="About" label="">
              <div class="text-content"><a href="#about">About</a></div>
            </div>
            <div name="Projects" label="">
              <div class="text-content"><a href="#projects">Projects</a></div>
            </div>
            <div name="Contacts" label="">
              <div class="text-content"> <a href="#contacts">Contacts</a></div>
            </div>
            <div style="width: 17vw"></div>
          </div>
        </div>
      </q-toolbar>

      <q-toolbar class="tabs-mobile">
        <q-toolbar-title>
          <div class="logo-web q-pa-sm">
            <img
              src="~/src/assets/deric-logo.svg"
              alt=""
              style="width: 150px"
            />
          </div>
        </q-toolbar-title>

        <div class="text-black">
          <q-btn flat round color="grey-10" icon="menu" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&family=Raleway:wght@200&family=Roboto:ital,wght@0,100;1,100&display=swap");

a:link {
  color: #212121;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: #212121;;
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
}

.text-content {
  font-family: "Raleway", sans-serif;
  font-weight: 200;
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
