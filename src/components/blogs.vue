<template>
  <div class="q-pa-md row items-center justify-center q-gutter-lg">
    <div v-for="(post, id) in posts" :key="id" class="text-box">
      <div class="web-card" style="min-width: 20vw">
        <q-card class="my-card">
          <q-img :src="post.img">
            <div class="absolute-bottom">
              <div class="text-h6"><strong>{{post.title}}</strong></div>
              <div class="text-subtitle2 text-white">by John Doe</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn flat>Read More</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="mobile-card">
        <q-card class="my-card">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom">
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
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
    const { blogsData } = setUpProfile();

    const posts = ref([]);

    onMounted(() => {
      posts.value = blogsData;
      //console.log(postsData.value);
    });

    return {
      posts,
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
