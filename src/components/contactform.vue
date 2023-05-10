<template>
  <div class="text-box q-pa-md">
    <q-form @submit="sendEmail" class="q-gutter-sm" id="form">
      <div class="row justify-evenly q-mb-md">
        <div class="col">
          <q-input
            dense
            outlined
            name="name"
            v-model="name"
            placeholder="Your name"
            lazy-rules
          />
        </div>
      </div>
      <div class="row q-mb-md">
        <q-input
          class="full-width"
          dense
          outlined
          name="email"
          v-model="email"
          placeholder="Your email"
          lazy-rules
        />
      </div>

      <div class="row">
        <q-input
          name="message"
          dense
          class="full-width"
          outlined
          type="textarea"
          v-model="message"
          placeholder="Message"
          lazy-rules
        />
      </div>

      <div class="submit-btn row">
        <q-space />
        <q-btn
        style="font-weight:bold"
          no-caps
          unelevated
          rounded
          :loading="loading"
          color="primary"
          type="submit"
        >
          Send Message
          <template v-slot:loading> Sending . . . </template>
        </q-btn>
      </div>

      <div class="submit-btn-mobile row justify-center">
        <q-btn
          id="sendbtn"
          no-caps
          unelevated
          rounded
          label="Send Email"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar, Notify } from "quasar";
import { ref } from "vue";
import emailjs, { send } from "emailjs-com";

// emailjs.init("u-ju8ggL7AX5NBrq0");

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const email = ref(null);
    const message = ref(null);
    const loading = ref(false);

    const sendEmail = async function () {
      loading.value = true;

      const formData = document.getElementById("form");

      try {
        await emailjs
          .sendForm(
            "default_service",
            "template_k2xyzmp",
            formData,
            "u-ju8ggL7AX5NBrq0"
          )
          .then(() => {
            $q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Submitted",
            });
            name.value = null;
            email.value = null;
            message.value = null;
            loading.value = false;
          });
      } catch (error) {
        console.log({ error });
        loading.value = false;
      }
    };

    return {
      name,
      email,
      message,
      sendEmail,
      loading,
    };
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  .submit-btn {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .submit-btn-mobile {
    display: none;
  }
}
</style>
