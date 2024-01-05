<template>
  <div
    class="wrap w-100"
    oncontextmenu="return false;"
  >
    <TopBanner :deviceType="deviceType"/>
    <Header class="header-wrap" :deviceType="deviceType"/>
    <transition name="fade">
      <v-img
        width="60"
        height="60"
        src="/imgs/icon/top-button.svg"
        alt="" 
        id="pagetop"
        class="top-btn"
        :class="{ 'show-button': scY > 300 }"
        v-show="scY > 300" 
        @click="toTop"
      />
    </transition>
    <div class="w-100 h-100">
      <slot />
    </div>
    <Bcontact
      :class="deviceType === 'PC' ? 'footer-contact-wrap' : 'footer-contact-wrap-m'"
      :deviceType="deviceType"
    />
    <Footer
      class="footer-wrap"
      :deviceType="deviceType"
    />
  </div>
</template>

<script setup lang="ts">
import TopBanner from '~/components/common/TopBanner.vue'
import Header from '~/components/header/Header.vue';
import Bcontact from '~/components/contact/Bcontact.vue';
import Footer from '~/components/footer/Footer.vue';
import { useDeviceStore } from '~/stores/device'

const deviceStore = useDeviceStore();
const deviceType = ref('');
let scTimer: ReturnType<typeof setTimeout> | null = null;
const scY = ref(0);

const handleScroll = () => {
  if (scTimer) return;
  scTimer = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer!);
    scTimer = null;
  }, 100);
};

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  deviceType.value = deviceStore.getDevice;
});
</script>

<style lang="scss" scoped>
.wrap {
  min-height: 100vh;
  max-width: 100vw;
  .top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
    z-index: 999;
  }

  .top-btn.show-button {
    opacity: 1;
  }
  .footer-contact-wrap { height: 50vh; max-width: 100vw; }
  .footer-wrap { max-width: 100vw; }
}
</style>