<template>
  <q-page class="flex flex-center">
    <div class="hero-section" style="width: 100vw; height: 100vh">
      <div
        class="hero-content row q-gutter-md q-py-md justify-between items-center"
        style="
          position: absolute;
          top: 15vh;
          left: 17vw;
          min-width: 80vw;
          max-height: 50vh;
        "
      >
        <div class="col-6" style="max-width: 30%">
          <div class="my-intro">
            <div class="q-my-none q-py-none" style="min-width: 35vw">
              <h1
                class="text-grey-9 q-my-none q-py-none"
                style="font-family: Finger Paint, cursive; font-size: 3.8em"
              >
                Derick Ongeri
              </h1>
            </div>
            <div class="row">
              <div class="col-12" style="max-width: fit-content">
                <p style="font-size: 1.5em">I am a</p>
              </div>
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
            <div class="row q-px-xs q-gutter-sm">
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
        <div class="col-7" style="">
          <img src="~/src/assets/derick.png" alt="" style="width: 500px" />
        </div>
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
          <div class="my-intro">
            <div class="q-pa-none">
              <h1
                class="text-grey-9 q-my-none q-py-none"
                style="font-family: Finger Paint, cursive; font-size: 3.5em"
              >
                Derick Ongeri
              </h1>
            </div>
            <div class="row">
              <div class="col-12" style="max-width: fit-content">
                <p style="font-size: 1.5em">I am a</p>
              </div>
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
        <div class="row justify-center" style="">
          <img src="~/src/assets/derick.png" alt="" style="width: 350px" />
        </div>
      </div>
    </div>
    <div class="about-section bg-white" style="width: 100vw">
      <div class="row q-ma-lg q-gutter-md q-py-md justify-center">
        <div class="col-6 text-center" style="max-width: 35%">
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

        <div class="col-6 text-center" style="max-width: 35%">
          <h1
            class="text-grey-9 q-my-none q-py-none"
            style="font-family: Finger Paint, cursive; font-size: 3em"
          >
            SKILLS
          </h1>

          <skills></skills>
        </div>
      </div>
    </div>

    <div class="about-section-mobile bg-grey-1" style="width: 100vw">
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

        <div class="row justify-center">
          <h1
            class="text-grey-9 q-my-none q-py-none text-center"
            style="
              font-family: Finger Paint, cursive;
              font-size: 3em;
              width: 100vw;
            "
          >
            SKILLS
          </h1>
          <skills></skills>
        </div>
      </div>
    </div>
    <div class="projects-section bg-grey-1" style="width: 100vw">
      <div class="col q-ma-sm q-gutter-md q-py-md justify-center">
        <div class="row justify-center text-center">
          <h1
            class="text-grey-9 q-my-none q-py-none"
            style="font-family: Finger Paint, cursive; font-size: 3em"
          >
            PORTFOLIO
          </h1>
        </div>
        <div>
          <projects />
        </div>
      </div>
    </div>
    <div class="contact-section" style="width: 100vw">
      <div class="row justify-center text-center">
        <h1
          class="text-grey-9 q-my-none q-py-none"
          style="font-family: Finger Paint, cursive; font-size: 3em"
        >
          CONTACT ME
        </h1>
      </div>
      <div class="contact-form-web row justify-center q-gutter-md">
        <div class="col-2 text-box q-gutter-sm">
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

      <div class="contact-form-mobile justify-center q-gutter-md">
        <div class="col-2 text-box q-gutter-sm">
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

      <div
        class="footer-web bg-grey-9 text-center text-grey-1"
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
    skills: require("src/components/skills.vue").default,
    contactform: require("src/components/contactform.vue").default,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Roboto:ital,wght@0,100;1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&family=Raleway:wght@100&family=Roboto:ital,wght@0,100;1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&family=Raleway:wght@200&family=Roboto:ital,wght@0,100;1,100&display=swap");

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
