<template>
  <div class="w-100" :class="deviceType">
    <NuxtLayout>
      <NuxtPage :deviceType="deviceType" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDeviceStore } from '~/stores/device'

const nuxtApp = useNuxtApp();
const deviceStore = useDeviceStore();

const deviceType = ref('');

onMounted(() => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    deviceStore.setDevice('Mobile')
    deviceType.value = 'Mobile';
  } else {
    deviceStore.setDevice('PC')
    deviceType.value = 'PC';
  }

  nuxtApp.hook("page:finish", () => {
    window.scrollTo(0, 0)
  })
})
</script>

<style lang="scss">
@import './public/scss/pc/style.scss';
.Mobile { @import './public/scss/mobile/style.scss'; }
</style>
