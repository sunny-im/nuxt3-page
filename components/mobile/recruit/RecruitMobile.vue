<template>
  <div class="recruit-wrap">
    <p class="f28 text-center title pt-12 pb-16">{{ $t('mobile.recruit.section1.title') }}</p>
    <div class="background d-flex flex-column align-center mt-16">
      <img class="hiring" src="/imgs/recruit/mobile/hiring.png" alt="">
      <div class="hiring-text d-flex flex-column text-center b-white h-0">
        <pre><p class="f23 font-weight-bold pt-6">{{ $t('mobile.recruit.section1.sub1') }}</p></pre>
        <pre><p class="f14 pt-4">{{ $t('mobile.recruit.section1.sub2') }}</p></pre>
      </div>
    </div>
    <div class="field">
      <p class="f28 pb-8">{{ $t('mobile.recruit.section2.title') }}</p>
      <v-list v-for="item in fields" class="pb-8">
        <div class="field-items">
          <v-list-item>
            <img :src="item.img" alt="" class="pb-7">
          </v-list-item>
          <div class="field-content">
            <pre><v-list-item class="f22 font-weight-bold">{{ $t(item.title) }}</v-list-item></pre>
            <v-list v-for="sub in item.sub">
              <v-list-item class="f16 font-weight-bold">{{ $t(sub.title) }}</v-list-item>
              <pre><v-list-item class="f14">{{ $t(sub.content) }}</v-list-item></pre>
            </v-list>
          </div>
        </div>
        <v-divider class="mt-6"></v-divider>
      </v-list>
    </div>
    <div class="condition-wrap w-100">
      <div class="condition">
        <p class="f28 b-white pt-16 pl-5">{{ $t('mobile.recruit.section3.title') }}</p>
        <div class="pt-10">
          <Carousel>
            <Slide v-for="item,idx in condition" class="aaaa">
              <div class="condition-item d-flex flex-column align-center justify-center">
                <img :src="`/imgs/recruit/condition${idx+1}.svg`" :alt="`condition${idx+1}`">
                <p class="f16 b-white pt-7 pb-2">{{ $t(item.title) }}</p>
                <pre><p class="f14 b-white text-center">{{ $t(item.sub) }}</p></pre>
              </div>
            </Slide>
            <template #addons>
              <Pagination class="pt-7 pb-16" />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
    <div class="welfare">
      <p class="f28 pt-16 pb-7">{{ $t('mobile.recruit.section4.title') }}</p>
      <div class="d-flex justify-space-between flex-wrap">
        <div v-for="item, idx in welfare" class="welfare-box mb-5 d-flex justify-center">
          <div class="welfare-item d-flex flex-column justify-center align-center">
            <img :src="`/imgs/recruit/welfare${idx+1}.svg`" :alt="`welfare${idx+1}`" class="pb-2">
            <p class="f14">{{ $t(item) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="recruit">
      <p class="f28 pt-16 pb-7">{{ $t('mobile.recruit.section5.title') }}</p>
      <div v-for="item,idx in recruit" class="recruit-box pl-5 pt-5 mb-5">
        <p class="f19 font-weight-bold pb-1">{{ $t(item.title) }}</p>
        <pre><p class="f14">{{ $t(item.sub) }}</p></pre>
        <div class="text-right pr-5">
          <img :src="`/imgs/recruit/recruit${idx+1}.svg`" :alt="`recruit${idx+1}`">
        </div>
      </div>
    </div>
    <div class="comment pt-16 pb-10">
      <pre><p class="f23 d-flex justify-center text-center font-weight-bold">{{ $t('mobile.recruit.section5.footer') }}</p></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const fields = [
  {
    img: '/imgs/recruit/field1.png',
    title: 'mobile.recruit.section2.tab1.title',
    sub: [
      { title: 'mobile.recruit.section2.sub1', content: 'mobile.recruit.section2.tab1.content1' },
      { title: 'mobile.recruit.section2.sub2', content: 'mobile.recruit.section2.tab1.content2' },
      { title: 'mobile.recruit.section2.sub3', content: 'mobile.recruit.section2.tab1.content3' }
    ]
  },
  {
    img: '/imgs/recruit/field2.png',
    title: 'mobile.recruit.section2.tab2.title',
    sub: [
      { title: 'mobile.recruit.section2.sub1', content: 'mobile.recruit.section2.tab2.content1' },
      { title: 'mobile.recruit.section2.sub2', content: 'mobile.recruit.section2.tab2.content2' },
      { title: 'mobile.recruit.section2.sub3', content: 'mobile.recruit.section2.tab2.content3' }
    ]
  },
  {
    img: '/imgs/recruit/field3.png',
    title: 'mobile.recruit.section2.tab3.title',
    sub: [
      { title: 'mobile.recruit.section2.sub1', content: 'mobile.recruit.section2.tab3.content1' },
      { title: 'mobile.recruit.section2.sub2', content: 'mobile.recruit.section2.tab3.content2' },
      { title: 'mobile.recruit.section2.sub3', content: 'mobile.recruit.section2.tab3.content3' }
    ]
  },
  {
    img: '/imgs/recruit/field4.png',
    title: 'mobile.recruit.section2.tab4.title',
    sub: [
      { title: 'mobile.recruit.section2.sub1', content: 'mobile.recruit.section2.tab4.content1' },
      { title: 'mobile.recruit.section2.sub2', content: 'mobile.recruit.section2.tab4.content2' },
      { title: 'mobile.recruit.section2.sub3', content: 'mobile.recruit.section2.tab4.content3' }
    ]
  },
];
const condition = [
  { title: 'mobile.recruit.section3.sub1', sub: 'mobile.recruit.section3.content1'},
  { title: 'mobile.recruit.section3.sub2', sub: 'mobile.recruit.section3.content2'},
  { title: 'mobile.recruit.section3.sub3', sub: 'mobile.recruit.section3.content3'},
  { title: 'mobile.recruit.section3.sub4', sub: 'mobile.recruit.section3.content4'},
];
const welfare = [
  'mobile.recruit.section4.1','mobile.recruit.section4.2','mobile.recruit.section4.3','mobile.recruit.section4.4','mobile.recruit.section4.5','mobile.recruit.section4.6','mobile.recruit.section4.7','mobile.recruit.section4.8','mobile.recruit.section4.9','mobile.recruit.section4.10','mobile.recruit.section4.11','mobile.recruit.section4.12'
];
const recruit = [
  { title: 'mobile.recruit.section5.sub1', sub: 'mobile.recruit.section5.content1' },
  { title: 'mobile.recruit.section5.sub2', sub: 'mobile.recruit.section5.content2' },
  { title: 'mobile.recruit.section5.sub3', sub: 'mobile.recruit.section5.content3' },
];
</script>

<style lang="scss" scoped>
.recruit-wrap {
  .background {
    height:550px;
    max-width: 100%;
    background: var(--home-red);
    .hiring { width: 90%; position: relative; bottom: 17%;}
    .hiring-text {position: relative; bottom: 15%; white-space: pre-wrap;}
  }
  .field {
    width: 90%;
    margin: 0 auto;
    padding-top: 70px;
    .field-items {
      img {width: 100%;}
    }
  }
  .condition-wrap {
    background: url('/imgs/recruit/mobile/working-condition.png');
    background-size: 100% 100%;
    .condition {
      .condition-item {
        width: 280px;
        height: 280px;
        border: 1px solid #ffffff;
      }
    }
  }
  .welfare {
    width: 90%; margin: 0 auto;
    .welfare-box {
      width: 100px;
      height: 100px;
      background: #f3f4f6;
      border-radius: 0 20px;
      img {width: 50%;}
    }
  }
  .recruit {
    width: 90%; margin: 0 auto;
    .recruit-box {
      width: 100%;
      height: 160px;
      border: 1px solid #dddddd;
      img {width: 50px; height: 50px;}
    }
  }
}
</style>
