import { createGtm } from '@gtm-support/vue-gtm';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createGtm({
    id: 'GTM-P6VG4XWS',
    defer: false,
    compatibility: false,
    enabled: false,
    debug: true,
    loadScript: true,
    vueRouter: useRouter(),
    trackOnNextTick: false,
  }))
});