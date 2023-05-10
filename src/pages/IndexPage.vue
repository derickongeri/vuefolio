<template>
  <q-page class="" style="max-width: 100vw; overflow-x: hidden">
    <div
      class="hero-section-dark"
      id="hero"
      style="height: 100vh"
      v-if="darkMode"
    >
      <div
        class="hero-content row justify-center items-center"
        style="position: relative; top: 10vh"
      >
        <div class="col-4" data-aos="fade-right">
          <div class="my-intro">
            <div class="q-my-none q-py-none" style="min-width: 35vw">
              <h1
                class="head-text text-grey-5 q-my-none q-py-none"
                style="font-size: 5em"
              >
                Derick Ongeri
              </h1>

              <div class="">
                <div class="text-left q-px-xs">
                  <typewriter
                    title="I am a "
                    :words="[
                      ' Geospatial Data Analyst',
                      ' Web Developer',
                      ' Remote Sensing Expert',
                    ]"
                  ></typewriter>
                </div>
              </div>
              <div class="row justify-start q-px-xs q-gutter-sm">
                <q-btn flat round color="grey-5" size="16px" icon="mail" />
                <q-btn
                  flat
                  round
                  color="grey-5"
                  size="16px"
                  icon="mdi-github"
                />
                <q-btn
                  flat
                  round
                  color="grey-5"
                  size="16px"
                  icon="mdi-linkedin"
                />
                <q-btn
                  flat
                  round
                  color="grey-5"
                  size="16px"
                  icon="mdi-twitter"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 text-center" style="" data-aos="fade-left">
          <img src="~/src/assets/profile-pic3.png" alt="" style="width: 30vw" />
        </div>
      </div>
      <a href="#about"
        ><div
          class="row button-float justify-center"
          style="position: absolute; top: 85vh; left: 48vw"
        >
          <q-btn
            flat
            round
            color="grey-4"
            size="24px"
            icon="mdi-chevron-down"
          /></div
      ></a>

      <div
        class="hero-content-mobile col q-gutter-md items-center"
        style="
          position: absolute;
          top: 15vh;
          min-width: 100vw;
          max-height: 50vh;
        "
      >
        <div class="row justify-center">
          <div class="my-intro" data-aos="fade-down">
            <div class="q-pa-none">
              <h1
                class="text-grey-4 q-my-none q-py-none"
                style="font-family: Finger Paint, cursive; font-size: 3.5em"
              >
                Derick Ongeri
              </h1>
            </div>
            <div class="row">
              <!-- <div class="col-12" style="max-width: fit-content">
                <p style="font-size: 1.5em">I am a</p>
              </div> -->
              <div class="col q-px-xs">
                <typewriter
                  title="I am a "
                  :words="[
                    ' GIS Analyst',
                    ' Web Developer',
                    ' Remote Sensing Expert',
                  ]"
                ></typewriter>
              </div>
            </div>
            <div class="row">
              <q-btn flat round color="grey-4" size="16px" icon="mail" />
              <q-btn flat round color="grey-4" size="16px" icon="mdi-github" />
              <q-btn
                flat
                round
                color="grey-4"
                size="16px"
                icon="mdi-linkedin"
              />
              <q-btn flat round color="grey-4" size="16px" icon="mdi-twitter" />
            </div>
          </div>
        </div>
        <div class="row justify-center" style="" data-aos="fade-up">
          <img src="~/src/assets/derick.png" alt="" style="width: 350px" />
        </div>
      </div>
    </div>

    <div class="hero-section" id="hero" style="height: 100vh" v-else>
      <div
        class="hero-content row justify-center items-center"
        style="position: relative; top: 15vh"
      >
        <div class="col-4" data-aos="fade-right">
          <div class="my-intro">
            <div class="q-my-none q-py-none" style="min-width: 35vw">
              <h1
                class="text-grey-9 q-my-none q-py-none"
                style="font-family: Finger Paint, cursive; font-size: 5em"
              >
                Derick Ongeri
              </h1>

              <div class="">
                <div
                  class="text-left q-px-xs"
                  style="font-weight: bold; font-size: 16px"
                >
                  <typewriter
                    title="A "
                    :words="[
                      ' Geospatial Applications Expert',
                      ' Web Developer',
                      ' Remote Sensing Expert',
                    ]"
                  ></typewriter>
                </div>
              </div>
              <div class="row justify-start q-px-xs q-gutter-sm">
                <q-btn flat round color="grey-9" size="16px" icon="mail" />
                <q-btn
                  flat
                  round
                  color="grey-9"
                  size="16px"
                  icon="mdi-github"
                />
                <q-btn
                  flat
                  round
                  color="grey-9"
                  size="16px"
                  icon="mdi-linkedin"
                />
                <q-btn
                  flat
                  round
                  color="grey-9"
                  size="16px"
                  icon="mdi-twitter"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 text-center" style="" data-aos="fade-left">
          <img src="~/src/assets/profile-pic3.png" alt="" style="width: 30vw" />
        </div>
      </div>
      <a href="#about"
        ><div
          class="row button-float justify-center"
          style="position: absolute; top: 85vh; left: 48vw"
        >
          <q-btn
            flat
            round
            color="grey-9"
            size="24px"
            icon="mdi-chevron-down"
          /></div
      ></a>
      <div
        class="hero-content-mobile col q-gutter-md items-center"
        style="
          position: absolute;
          top: 15vh;
          min-width: 100vw;
          max-height: 50vh;
        "
      >
        <div class="row justify-center">
          <div class="my-intro" data-aos="fade-down">
            <div class="q-pa-none">
              <h1
                class="text-grey-9 q-my-none q-py-none"
                style="font-family: Finger Paint, cursive; font-size: 3.5em"
              >
                Derick Ongeri
              </h1>
            </div>
            <div class="row">
              <!-- <div class="col-12" style="max-width: fit-content">
                <p style="font-size: 1.5em">I am a</p>
              </div> -->
              <div class="col q-px-xs">
                <typewriter
                  title="I am a "
                  :words="[
                    ' GIS Analyst',
                    ' Web Developer',
                    ' Remote Sensing Expert',
                  ]"
                ></typewriter>
              </div>
            </div>
            <div class="row">
              <q-btn flat round color="grey-9" size="16px" icon="mail" />
              <q-btn flat round color="grey-9" size="16px" icon="mdi-github" />
              <q-btn
                flat
                round
                color="grey-9"
                size="16px"
                icon="mdi-linkedin"
              />
              <q-btn flat round color="grey-9" size="16px" icon="mdi-twitter" />
            </div>
          </div>
        </div>
        <div class="row justify-center" style="" data-aos="fade-up">
          <img src="~/src/assets/derick.png" alt="" style="width: 350px" />
        </div>
      </div>
    </div>

    <div class="projects-section bg-grey-2" id="projects">
      <div class="col q-gutter-md justify-center">
        <div class="row items-center q-gutter-xl">
          <div style="width:7vw"></div>
          <h1
            class="q-my-none q-py-lg"
            style="font-family: Finger Paint, cursive; font-size: 3em"
          >
            MY WORK
          </h1>
        </div>
        <div class="q-pa-md" data-aos="fade-up">
          <projects />
        </div>
      </div>
    </div>

    <div class="skill-section text-center">
      <h1
        class="q-my-none q-py-xl"
        style="font-family: Finger Paint, cursive; font-size: 3em"
        data-aos="fade-up"
      >
        SKILLS
      </h1>
      <div class="row items-center q-pa-lg">
        <div class="col-6 text-center q-pa-md">
          <h5 style="font-family: Finger Paint, cursive; font-size: 1.5em">
            Programming
          </h5>
          <programmingSkills />
        </div>
        <div class="col-6 text-center q-pa-md">
          <h5 style="font-family: Finger Paint, cursive; font-size: 1.5em">
            Application stacks & tools
          </h5>
          <skills data-aos="fade-up"></skills>
        </div>
      </div>
    </div>

    <div class="about-section" id="about">
      <div class="text-center">
        <h1
          class="q-my-none q-py-xl"
          style="font-family: Finger Paint, cursive; font-size: 3em"
          data-aos="fade-up"
        >
          ABOUT ME
        </h1>
      </div>
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
          class="col-6 text-center bg-grey-2 q-pa-md"
          data-aos="fade-left"
          style="max-width: 35%; border-radius: 15px"
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
    </div>
    <div class="about-section-mobile" style="width: 100vw" data-aos="fade-up">
      <div class="col q-ma-md q-pa-md justify-center">
        <div class="row text-center justify-center" id="about">
          <h1
            class="q-my-none q-py-none"
            style="font-family: Finger Paint, cursive; font-size: 3em"
          >
            ABOUT ME
          </h1>

          <p class="text-box" style="font-size: 2em">
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
    </div>

    <div class="skill-section-mobile text-center">
      <h1
        class="q-my-none q-py-xl"
        style="font-family: Finger Paint, cursive; font-size: 3em"
        data-aos="fade-up"
      >
        SKILLS
      </h1>
      <div class="col">
        <h5 style="font-family: Raleway, sans-serif">
          <strong>Programming</strong>
        </h5>
        <div class="row text-center q-pa-md">
          <programmingSkills data-aos="fade-up" />
        </div>
        <h5 style="font-family: Raleway, sans-serif">
          <strong>Application stacks & tools</strong>
        </h5>
        <div class="row text-center q-pa-md">
          <skills data-aos="fade-in"></skills>
        </div>
      </div>
    </div>

    <!-- <div class="projects-section" id="projects">
      <div class="col q-gutter-md q-py-md justify-center">
        <div class="row justify-center text-center">
          <h1
            class="q-my-none q-py-xl"
            style="font-family: Finger Paint, cursive; font-size: 3em"
          >
            PROJECTS
          </h1>
        </div>
        <div class="q-pa-md" data-aos="fade-up">
          <projects />
        </div>
      </div>
    </div> -->

    <div class="projects-section" id="projects">
      <div class="col q-gutter-md q-py-md justify-center">
        <div class="row justify-center text-center">
          <h1
            class="q-my-none q-py-xl"
            style="font-family: Finger Paint, cursive; font-size: 3em"
          >
            BLOGS & PUBLICATIONS
          </h1>
        </div>
        <div class="q-pa-md" data-aos="fade-up">
          <blogs />
        </div>
      </div>
    </div>

    <div class="contact-section text-center" id="contacts">
      <div class="row justify-center text-center q-gutter-md">
        <h1
          class="q-my-none q-py-xl"
          style="font-family: Finger Paint, cursive; font-size: 3em"
          data-aos="fade-up"
        >
          Featured
        </h1>
      </div>
      <div class="row justify-center q-gutter-md">
        <div class="twitterCard">
          <Tweet
            tweet-url="https://twitter.com/ParisaQurban/status/1448255732785221634"
            width="550px"
            conversations="none"
            :theme="twiterTheme"
          />
        </div>

        <div class="twitterCard">
          <Tweet
            tweet-url="https://twitter.com/LocateIT_KE/status/1461434170417291265"
            width="550px"
            :theme="twiterTheme"
          />
        </div>

        <div class="twitterCard">
          <Tweet
            tweet-url="https://twitter.com/ongeri_derick/status/1324035795821469697"
            width="550px"
            :theme="twiterTheme"
          />
        </div>
      </div>
    </div>

    <div class="contact-section" id="contacts">
      <div class="row justify-center text-center">
        <h1
          class="q-my-none q-py-xl"
          style="font-family: Finger Paint, cursive; font-size: 3em"
          data-aos="fade-up"
        >
          CONTACT ME
        </h1>
      </div>
      <div class="contact-form-web row justify-center q-gutter-md">
        <div class="col-2 text-box q-gutter-sm" data-aos="fade-right">
          <h4 class="q-mb-none">Let's connect</h4>
          <p class="">
            Have cool idea for new project? want to build a website? you have a
            question? don't hesitate to contact me.
          </p>
          <div>
            <div class="row items-center q-gutter-md q-py-sm">
              <q-icon size="20px" name="mdi-map-marker" />
              <div>Nairobi</div>
            </div>
            <!-- <div class="row items-center q-gutter-md q-py-sm">
              <q-icon size="20px" name="mdi-email" />
              <div>derickongeri@gmail.com</div>
            </div> -->
            <div class="row items-center q-gutter-md q-py-sm">
              <q-icon size="20px" name="mdi-phone" />
              <div>+254 716 51 99 70</div>
            </div>
          </div>
        </div>
        <div class="col-6" data-aos="fade-left">
          <contactform />
        </div>
      </div>

      <div class="contact-form-mobile justify-center q-gutter-md">
        <div class="col-2 text-box q-gutter-sm q-pa-md">
          <h4 class="q-mb-none">Let's connect</h4>
          <p class="">
            Have cool idea for new project? want to build a website? you have a
            question? don't hesitate to contact me.
          </p>
          <div>
            <div class="row items-center q-gutter-md q-py-sm">
              <q-icon size="20px" name="mdi-map-marker" />
              <div>Nairobi</div>
            </div>
            <!-- <div class="row items-center q-gutter-md q-py-sm">
              <q-icon size="20px" name="mdi-email" />
              <div>derickongeri@gmail.com</div>
            </div> -->
            <div class="row items-center q-gutter-md q-py-sm">
              <q-icon size="20px" name="mdi-phone" />
              <div>+254 716 51 99 70</div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <contactform />
        </div>
      </div>
    </div>
    <div
      class="footer-web bg-grey-9 text-center text-grey-1 full-width"
      style="height: 15vh; font-family: Raleway, sans-serif"
    >
      <div class="row justify-center">
        <q-btn flat round color="grey-1" size="16px" icon="mail" />
        <q-btn flat round color="grey-1" size="16px" icon="mdi-github" />
        <q-btn flat round color="grey-1" size="16px" icon="mdi-linkedin" />
        <q-btn flat round color="grey-1" size="16px" icon="mdi-twitter" />
      </div>
      <div>
        Made with ❤️ by
        <a href="url.com/" class="text-primary">
          <strong> Derick Ongeri </strong>
        </a>
      </div>
    </div>
  </q-page>
</template>

<script>
import { inject, ref, defineComponent, onMounted, watch, computed } from "vue";
import { useQuasar } from "quasar";
import Tweet from "vue-tweet";

export default defineComponent({
  name: "IndexPage",
  components: {
    typewriter: require("src/components/typewriter.vue").default,
    projects: require("src/components/projects.vue").default,
    blogs: require("src/components/blogs.vue").default,
    skills: require("src/components/skills.vue").default,
    contactform: require("src/components/contactform.vue").default,
    programmingSkills: require("src/components/programming.vue").default,
    Tweet,
  },

  setup() {
    const $q = useQuasar();

    const twiterTheme = ref("");

    const darkMode = computed(() => {
      return $q.dark.isActive;
    });

    watch(darkMode, (darkMode) => {
      $q.dark.set(darkMode);
      if (darkMode) {
        twiterTheme.value = "dark";
      } else {
        twiterTheme.value = "";
      }
      console.log(darkMode);
    });

    return {
      darkMode,
      twiterTheme,
    };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Roboto:ital,wght@0,100;1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&family=Raleway:wght@100&family=Roboto:ital,wght@0,100;1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&family=Raleway:wght@200&family=Roboto:ital,wght@0,100;1,100&display=swap");

html {
  scroll-behavior: smooth;
}

/* *{
  outline: 1px solid green !important;
  background-color: rgba(0, 128, 0, 0.336);
} */

.text-box {
  font-family: "Raleway", sans-serif;
  /* font-weight: 200; */
  text-align: justify;
}

.hero-section {
  background-image: url("~/src/assets/bground.png");
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-section-dark {
  background-image: url("~/src/assets/bgrounddark.png");
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

.cursor {
  display: inline-block;
  margin-left: -3px;
  animation: blink-animation 1s steps(2, start) infinite;
}

.my-card {
  width: 100%;
  max-width: 300px;
}

.button-float {
  animation: float 1.5s linear alternate infinite;
}

@keyframes float {
  50% {
    transform: translateY(-px);
  }
  100% {
    transform: translateY(-18px);
  }
}

@media screen and (max-width: 768px) {
  .hero-content {
    display: none;
  }
  .about-section {
    display: none;
  }
  .contact-form-web {
    display: none;
  }
  .skill-section {
    display: none;
  }
  .twitterCard {
    min-width: 90vw;
  }
}

@media screen and (min-width: 768px) {
  .hero-content-mobile {
    display: none;
  }
  .about-section-mobile {
    display: none;
  }
  .contact-form-mobile {
    display: none;
  }
  .skill-section-mobile {
    display: none;
  }
  .twitterCard {
    width: 500px;
  }
}
</style>
