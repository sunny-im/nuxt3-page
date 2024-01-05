<template>
  <div
    class="b-gray d-flex flex-column"
    id="footer"
  >
    <div class="d-flex justify-center">
      <img src="/imgs/footer-logo-mobile.png" alt="">
    </div>
    <div class="context-wrap d-flex flex-column align-center f14">
      <div class="pb-5">
        <span class="title">{{ $t('mobile.footer.owner') }}. </span>
        <span class="context font-weight-bold">{{ $t('mobile.footer.name') }}</span>
      </div>
      <div class="pb-5">
        <span class="title">{{ $t('mobile.footer.companyNo') }}. </span>
        <span class="context font-weight-bold">{{ $t('mobile.footer.no') }}</span>
      </div>
      <div class="pb-5">
        <span class="title">E-mail. </span>
        <span class="context font-weight-bold">test@test.kr</span>
      </div>
      <div>
        <span class="title">{{ $t('mobile.common.head') }}. </span>
        <span class="context font-weight-bold">{{ $t('mobile.common.headAddr2') }}</span>
      </div>
      <div class="pb-5">
        <span class="title">Tel. </span>
        <span class="context font-weight-bold">{{ $t('mobile.common.headTel') }}</span>
      </div>
      <div>
        <span class="title">{{ $t('mobile.common.lab2') }}. </span>
        <span class="context font-weight-bold">{{ $t('mobile.common.labAddr2') }}</span>
      </div>
      <div class="pb-8">
        <span class="title">Tel. </span>
        <span class="context font-weight-bold">{{ $t('mobile.common.labTel') }}</span>
      </div>
      <p class="copywriter pb-8">testⓒ2023</p>
      <NuxtLink to="/terms" v-if="currentLocale === 'ko'" class="pb-10">
        <pre><p>{{ $t('mobile.footer.terms') }}</p></pre>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLanguageStore } from '~/stores/language'

const props = defineProps({
  deviceType: String
});

const store = useLanguageStore();
const currentLocale = ref('');
watch(store, (val) => {
  if (val != null) currentLocale.value = val.lang;
});
</script>
<style lang="scss" scoped>
  #footer {
    background-color: var(--home-black2);
    height: 100%;
    padding: 0;
    img {padding: 50px 0;}
    .context-wrap {letter-spacing: -0.7px;}
  }
</style>