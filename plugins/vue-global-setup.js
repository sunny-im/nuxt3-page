import { ref, watch, onMounted, defineProps } from 'vue';
import { useI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.setup = () => {
    return {
      ref,
      watch,
      onMounted,
      defineProps,
      useI18n
    };
  };
});
