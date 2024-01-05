<template>
  <div class="tech-wrap">
    <div class="title text-center">
      <p class="f56 pb-8">{{ $t('pc.tech.section1.title') }}</p>
      <pre><p class="f20 sub-title">{{ $t('pc.tech.section1.sub') }}</p></pre>
      <img src="/imgs/technology/main.png" alt="main">
    </div>
    <div class="tech-body">
      <p class="f56 text-center pb-15">{{ $t('pc.tech.section2.title') }}</p>
      <div class="tech-body-content d-flex flex-wrap">
        <div
          v-for="item,idx in content"
          class="d-flex flex-column align-center justify-center img-item w-33"
          :class="
            { 'pb-16': idx < 3 }
          "
          :data-aos="'fade-up'"
          :data-aos-delay="500 * idx"
        >
          <img
            :src="`/imgs/technology/tech${idx+1}.png`"
          />
          <p class="f28 pt-8">{{ $t(item.title) }}</p>
          <pre><p class="f20 b-gray2 pt-2 text-center">{{ $t(item.text) }}</p></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = [
  {title: 'pc.tech.section2.sub1', text: 'pc.tech.section2.content1'},
  {title: 'pc.tech.section2.sub2', text: 'pc.tech.section2.content2'},
  {title: 'pc.tech.section2.sub3', text: 'pc.tech.section2.content3'},
  {title: 'pc.tech.section2.sub4', text: 'pc.tech.section2.content4'},
  {title: 'pc.tech.section2.sub5', text: 'pc.tech.section2.content5'},
  {title: 'pc.tech.section2.sub6', text: 'pc.tech.section2.content6'},
];
</script>

<style lang="scss" scoped>
.tech-wrap {
  .title {padding-top: 140px;}
  .sub-title { padding-bottom: 80px;}
  .tech-body {
    width: 90%;
    padding: 140px 0;
    margin: 0 auto;
    .img-item {width: 33.3%; box-sizing: border-box;}
  }
}
</style>