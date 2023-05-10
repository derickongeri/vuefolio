<template>
  <div>
    <q-toggle
      v-model="darkMode"
      checked-icon="mdi-weather-night"
      color="grey-9"
      unchecked-icon="mdi-white-balance-sunny"
      size="xl"
    />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useQuasar } from 'quasar'

export default defineComponent({
  setup() {
    const $q = useQuasar()
    const darkMode = ref(false);

    watch(darkMode, (darkMode) => {
       $q.dark.set(darkMode)
    })

    return {
      darkMode,
    };
  },
});
</script>
