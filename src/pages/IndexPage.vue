<template>
  <q-page class="flex flex-center scroll-container">
    <div
      class="hero-section scroll-page"
      id="hero"
      style="width: 100vw; height: 100vh"
    >
      <div
        class="hero-content row justify-center items-center"
        style="position: relative; top: 10vh"
      >
        <div class="col-4" data-aos="fade-right">
          <div class="my-intro">
            <div class="q-my-none q-py-none" style="min-width: 35vw">
              <h1
                class="text-grey-9 q-my-none q-py-none"
                style="font-family: Finger Paint, cursive; font-size: 3.8em"
              >
                Derick Ongeri
              </h1>

              <div class="">
                <div class="text-left q-px-xs">
                  <typewriter
                    title="I am a "
                    :words="[
                      ' Geospatial Analyst',
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
          <img src="~/src/assets/derick.png" alt="" style="width: 35vw" />
        </div>
      </div>
      <div
        class="row button-float justify-center"
        style="position: absolute; top: 85vh; left: 48vw"
      >
        <q-btn flat round color="grey-9" size="24px" icon="mdi-chevron-down" />
      </div>
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

    <div class="about-section bg-grey-1" id="about" style="width: 100vw">
      <div class="text-center">
        <h1
          class="text-grey-9 q-my-none q-py-xl"
          style="font-family: Finger Paint, cursive; font-size: 3em"
          data-aos="fade-up"
        >
          ABOUT ME
        </h1>
      </div>
      <div class="row q-ma-lg q-gutter-md q-py-md justify-center items-center">
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
            <img src="~/src/assets/derick.png" alt="" style="width: 400px" />
          </transition>
        </div>

        <div
          class="col-6 text-center"
          data-aos="fade-left"
          style="max-width: 35%"
        >
          <p class="text-box" style="font-size: 2em">
            <strong>Creative.Adaptable.Resilient.</strong>
          </p>
          <p class="text-box" style="font-size: 1.3em">
            <strong>A</strong> GIS <strong>developer based in</strong> Nairobi,
            Kenya
          </p>
          <p class="text-box">
            Derick Ongeri is a well experienced GIS and Remote Sensing analyst
            and web developer who is keen towards the use of earth observation
            and Geospatial technologies, processed and workflow automation, as
            well as software development to solve challenges of sustainable
            development.
          </p>
          <p class="text-box">
            He has strong technical skills needed for Web & GIS database
            management, data analysis and visualization, API Design and system
            deployment, scripting , process and workflow automation. He is very
            creative and has worked as part of teams and individually to provide
            imaginative solutions for several clients. Derick has strong
            programing skills in JavaScript and Python
          </p>
          <p class="text-box">
            As a strong advocate of open science and reproducible research,
            Derick is a contributor to several open source projects. He is a
            certified Qgis instructor but also well conversant with ESRI ArcGIS
            and ArcMap.
          </p>
        </div>
      </div>
    </div>
    <div
      class="about-section-mobile bg-grey-1"
      style="width: 100vw"
      data-aos="fade-up"
    >
      <div class="col q-ma-md q-pa-md justify-center">
        <div class="row text-center justify-center">
          <h1
            class="text-grey-9 q-my-none q-py-none"
            style="font-family: Finger Paint, cursive; font-size: 3em"
          >
            ABOUT ME
          </h1>

          <p class="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam
          </p>
          <p class="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam
          </p>
          <p class="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam
          </p>
        </div>
      </div>
    </div>
    <div class="skill-section bg-grey-1 text-center">
      <h1
        class="text-grey-9 q-my-none q-py-xl"
        style="font-family: Finger Paint, cursive; font-size: 3em"
        data-aos="fade-up"
      >
        SKILLS
      </h1>
      <div class="row  q-pa-lg">
        <div class="col-6 text-center q-pa-md">
          <programmingSkills/>
        </div>
        <div class="col-6 text-center q-pa-md">
          <skills data-aos="fade-up"></skills>
        </div>
      </div>
    </div>

    <div class="projects-section bg-grey-1" id="projects" style="width: 100vw">
      <div class="col q-gutter-md q-py-md justify-center">
        <div class="row justify-center text-center">
          <h1
            class="text-grey-9 q-my-none q-py-xl"
            style="font-family: Finger Paint, cursive; font-size: 3em"
          >
            PORTFOLIO
          </h1>
        </div>
        <div class="q-pa-md" data-aos="fade-up">
          <projects />
        </div>
      </div>
    </div>

    <div class="projects-section bg-grey-1" id="projects" style="width: 100vw">
      <div class="col q-gutter-md q-py-md justify-center">
        <div class="row justify-center text-center">
          <h1
            class="text-grey-9 q-my-none q-py-xl"
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

    <div class="contact-section" id="contacts" style="width: 100vw">
      <div class="row justify-center text-center">
        <h1
          class="text-grey-9 q-my-none q-py-xl"
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
            <div class="row items-center q-gutter-md q-py-sm">
              <q-icon size="20px" name="mdi-email" />
              <div>derickongeri@gmail.com</div>
            </div>
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
            <div class="row items-center q-gutter-md q-py-sm">
              <q-icon size="20px" name="mdi-email" />
              <div>derickongeri@gmail.com</div>
            </div>
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
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    typewriter: require("src/components/typewriter.vue").default,
    projects: require("src/components/projects.vue").default,
    blogs: require("src/components/blogs.vue").default,
    skills: require("src/components/skills.vue").default,
    contactform: require("src/components/contactform.vue").default,
    programmingSkills: require("src/components/programming.vue").default,
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
}
</style>
