<template>
  <div class="tech-wrap">
    <div class="title text-center">
      <pre><p class="f28 pb-8">{{ $t('mobile.tech.section1.title') }}</p></pre>
      <pre><p class="f14 pb-10 content">{{ $t('mobile.tech.section1.sub') }}</p></pre>
      <img src="/imgs/technology/mobile/main.png" alt="main" class="tech-main-img">
    </div>
    <div class="tech-body">
      <pre><p class="f28 text-center pb-15">{{ $t('mobile.tech.section2.title') }}</p></pre>
      <div class="tech-body-content d-flex flex-wrap">
        <div
          v-for="item,idx in content"
          class="d-flex flex-column align-center justify-center w-100"
        >
          <img
            :src="`/imgs/technology/mobile/tech${idx+1}.png`"
            class="img-item"
          />
          <p class="f20 pt-8 font-weight-bold">{{ $t(item.title) }}</p>
          <pre><p class="f14 b-gray2 pt-2 pb-10 text-center">{{ $t(item.text) }}</p></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = [
  {title: 'mobile.tech.section2.sub1', text: 'mobile.tech.section2.content1'},
  {title: 'mobile.tech.section2.sub2', text: 'mobile.tech.section2.content2'},
  {title: 'mobile.tech.section2.sub3', text: 'mobile.tech.section2.content3'},
  {title: 'mobile.tech.section2.sub4', text: 'mobile.tech.section2.content4'},
  {title: 'mobile.tech.section2.sub5', text: 'mobile.tech.section2.content5'},
  {title: 'mobile.tech.section2.sub6', text: 'mobile.tech.section2.content6'},
];
</script>

<style lang="scss" scoped>
.tech-wrap {
  width: 90%; margin: 0 auto;
  .title {
    padding-top: 50px;
    .content { white-space: pre-wrap;}
    .tech-main-img {width: 100%;}
  }
  .tech-body {
    padding: 70px 0 30px;
    margin: 0 auto;
    .img-item {width: 100%; box-sizing: border-box;}
  }
}
</style>