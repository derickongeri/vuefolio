<template>
  <div class="text-box q-pa-md" style="width: 100%">
    <q-form @submit="onSubmit" class="q-gutter-sm">
      <div class="row justify-evenly">
        <div class="col">
          <q-input
            dense
            outlined
            v-model="name"
            label="Your name"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div style="width:12px"></div>
        <div class="col">
          <q-input
            dense
            outlined
            v-model="name"
            label="Your email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
      </div>
      <div class="row">
        <q-input
          dense
          class="full-width"
          outlined
          v-model="name"
          label="Subject"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
      </div>

      <div class="row">
        <q-input
          dense
          class="full-width"
          outlined
          type="textarea"
          v-model="name"
          label="Message"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
      </div>

      <div class="submit-btn row">
        <q-space />
        <q-btn
          no-caps
          unelevated
          rounded
          label="Send Message"
          type="submit"
          color="primary"
        />
      </div>

      <div class="submit-btn-mobile row justify-center">
        <q-btn
          no-caps
          unelevated
          rounded
          label="Send Message"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<style>
@media screen and (max-width:768px) {
.submit-btn {
  display: none;
}}

@media screen and (min-width:768px) {
.submit-btn-mobile {
  display: none;
}
}

</style>
