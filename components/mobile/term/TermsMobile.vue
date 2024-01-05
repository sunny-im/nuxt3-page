<template>
  <div id="terms-wrap">
    <div>
      <p class="f28 d-flex justify-center pb-11 pt-12">개인정보 수집 및 이용 약관</p>
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
    <div class="pb-16">
      <p class="f28 d-flex justify-center pb-12 pt-16">개인정보처리방침</p>
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
</template>

<script>
</script>

<style lang="scss" scoped>
#terms-wrap {
  width: 90%;
  margin: 0 auto;
  .terms {
    background: var(--home-bg-gray);
    height: 320px;
    .terms-content {
      border: 1px solid #999999;
      background: var(--home-white);
      height: 280px;
      margin: 0 20px 0;
      overflow-y: auto;
    }
  }
}
</style>