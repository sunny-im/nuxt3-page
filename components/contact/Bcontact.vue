<template>
  <div class="footer-contact w-100" v-if="deviceType === 'PC'">
    <div class="contact-text f40">
      <p class="text1 b-white">{{ $t('pc.contact.footer.title1') }}</p>
      <p class="text2 b-red">{{ $t('pc.contact.footer.title2') }}</p>
      <NuxtLink to="/contact" style="width: 164px;">
        <p class="contact-btn f18-2 d-flex align-center justify-center b-white">{{ $t('pc.contact.title') }}</p>
      </NuxtLink>
    </div>
  </div>
  <div v-else>
    <BcontactMobile />
  </div>
</template>

<script>
import BcontactMobile from '~/components/mobile/contact/BcontactMobile.vue';

export default {
  components: {BcontactMobile},
  props: {
    deviceType: String,
  },
}
</script>

<style lang="scss" scoped>
.footer-contact {
  background: transparent url('/imgs/contact/footer-contact.png') 0% 0% no-repeat padding-box;
  background-size: 100% 100%;
  opacity: 1;
  .contact-text {
    position: relative;
    top: 137px;
    left: 250px;
  }
  .contact-btn {
    width: 144px;
    height: 54px;
    border: 1px solid var(--home-white);
    border-radius: 5px;
    margin-top: 40px;
  }
}
</style>