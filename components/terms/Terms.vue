<template>
  <div class="terms-wrap" v-if="deviceType === 'PC'">
    <div>
      <p class="f50 d-flex justify-center pb-11">개인정보 수집 및 이용 약관</p>
      <v-divider
        :thickness="2"
        class="border-opacity-100 pb-10"
        color="black"
      ></v-divider>
      <div class="terms d-flex align-center justify-center">
        <div class="terms-content w-100 pl-4 pr-4 pt-4 pb-4">
        </div>
      </div>
    </div>
    <div>
      <p class="f50 d-flex justify-center pb-11 pt-16">개인정보처리방침</p>
      <v-divider
        :thickness="2"
        class="border-opacity-100 pb-10"
        color="black"
      ></v-divider>
      <div class="terms d-flex align-center justify-center">
        <div class="terms-content w-100 pl-4 pr-4 pt-4 pb-4">
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <TermsMobile />
  </div>
</template>

<script setup lang="ts">
import { useDeviceStore } from '~/stores/device'
import TermsMobile from '@/components/mobile/terms/TermsMobile.vue';

const deviceStore = useDeviceStore();
const deviceType = ref('');

onMounted(() => {
  deviceType.value = deviceStore.getDevice;
});
</script>

<style lang="scss" scoped>
.terms-wrap {
  padding: 140px 250px;
  .terms {
    background: var(--home-bg-gray);
    height: 320px;
    .terms-content {
      border: 1px solid #999999;
      background: var(--home-white);
      height: 240px;
      margin: 0 30px 0;
      overflow-y: auto;
    }
  }
}
</style>