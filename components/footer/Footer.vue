<template>
  <div
    v-if="deviceType === 'PC'" 
    class="footer d-flex justify-space-between b-gray"
  >
    <div class="footer-left">
      <img src="/imgs/footer-logo.png" alt="">
      <div class="context-wrap f16 pt-4">
        <div class="d-flex">
          <div class="pr-5">
            <span class="title">{{ $t('pc.footer.owner') }}. </span>
            <span class="context font-weight-bold">{{ $t('pc.footer.name') }}</span>
          </div>
          <div class="pr-5">
            <span class="title">{{ $t('pc.footer.companyNo') }}. </span>
            <span class="context font-weight-bold">{{ $t('pc.footer.no') }}</span>
          </div>
          <div>
            <span class="title">E-mail. </span>
            <span class="context font-weight-bold">test@test.kr</span>
          </div>
        </div>
        <div class="d-flex pt-2">
          <div class="pr-5">
            <span class="title">{{ $t('pc.common.head') }}. </span>
            <span class="context font-weight-bold">{{ $t('pc.common.headAddr2') }}</span>
          </div>
          <div>
            <span class="title">Tel. </span>
            <span class="context font-weight-bold">{{ $t('pc.common.headTel') }}</span>
          </div>
        </div>
        <div class="d-flex pt-2">
          <div class="pr-5">
            <span class="title">{{ $t('pc.common.lab2') }}. </span>
            <span class="context font-weight-bold">{{ $t('pc.common.labAddr2') }}</span>
          </div>
          <div>
            <span class="title">Tel. </span>
            <span class="context font-weight-bold">{{ $t('pc.common.labTel') }}</span>
          </div>
        </div>
        <p class="copywriter">testⓒ2023</p>
      </div>
    </div>
    <div class="footer-right d-flex">
      <NuxtLink to="/terms" v-if="currentLocale === 'ko'">
        <pre><p>{{ $t('pc.footer.terms') }}</p></pre>
      </NuxtLink>
    </div>
  </div>
  <div v-else>
    <FooterMobile />
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '~/stores/language'
import FooterMobile from '@/components/mobile/footer/FooterMobile.vue';

const props = defineProps({
  deviceType: String,
});
const store = useLanguageStore();
const currentLocale = ref('');
watch(store, (val) => {
  if (val != null) currentLocale.value = val.lang;
});
</script>

<style lang="scss" scoped>
  .footer {
    height: 300px;
    background-color: var(--home-black2);
    padding: 0 250px;
    .footer-left {
      padding-top: 60px;
      .copywriter { padding-top: 30px;}
    }
    .footer-right {
      padding-top: 106px;
      letter-spacing: -0.4px;
    }
  }
</style>