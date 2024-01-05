<template>
  <div class="footer-contact w-100" id="footer-contact">
    <div class="contact-text font-weight-bold f22">
      <pre><p class="text1 b-white">{{ $t('mobile.contact.footer.title1') }}</p></pre>
      <p class="text2 b-red">{{ $t('mobile.contact.footer.title2') }}</p>
      <NuxtLink to="/contact" style="width: 164px;">
        <p class="contact-btn f18-2 d-flex align-center justify-center b-white">{{ $t('mobile.contact.title') }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
#footer-contact {
  height: 35vh;
  background: transparent url('/imgs/contact/mobile/footer-contact.png') 0% 0% no-repeat padding-box;
  background-size: 100% 101%;
  opacity: 1;
  .contact-text {
    position: relative;
    top: 50px;
    padding-left: 20px;
  }
  .contact-btn {
    width: 110px; height: 40px; margin-top: 30px; font-size: 14px;
    border: 1px solid var(--home-white);
    border-radius: 5px;
  }
}
</style>