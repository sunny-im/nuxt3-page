<template>
  <div class="recruit-wrap">
    <p class="f56 d-flex justify-center title">{{ $t('pc.recruit.section1.title') }}</p>
    <div class="background d-flex flex-column align-center">
      <img class="hiring" src="/imgs/recruit/hiring.png" alt="">
      <div class="hiring-text d-flex flex-column text-center b-white h-0">
        <pre><p class="f42 font-weight-bold">{{ $t('pc.recruit.section1.sub1') }}</p></pre>
        <pre><p class="f20 pt-8">{{ $t('pc.recruit.section1.sub2') }}</p></pre>
      </div>
    </div>
    <div class="field">
      <p class="f56 pb-15">{{ $t('pc.recruit.section2.title') }}</p>
      <v-list v-for="item in fields" class="pb-15">
        <div class="d-flex">
          <v-list-item>
            <img :src="item.img" alt="">
          </v-list-item>
          <div class="field-content">
            <v-list-item class="f38">{{ $t(item.title) }}</v-list-item>
            <v-list v-for="sub in item.sub">
              <v-list-item class="f22 font-weight-bold">{{ $t(sub.title) }}</v-list-item>
              <pre><v-list-item class="f18">{{ $t(sub.content) }}</v-list-item></pre>
            </v-list>
          </div>
        </div>
        <v-divider inset class="mt-15" style="width: 100%; margin-inline-start: 20px;"></v-divider>
      </v-list>
    </div>
    <div class="condition-wrap w-100">
      <div class="condition">
        <p class="f56 b-white">{{ $t('pc.recruit.section3.title') }}</p>
        <div class="d-flex align-center justify-space-between pt-10">
          <div v-for="item,idx in condition" class="d-flex justify-center">
            <div class="condition-item d-flex flex-column align-center justify-center">
              <img :src="`/imgs/recruit/condition${idx+1}.svg`" :alt="`condition${idx+1}`">
              <p class="f20 b-white pt-7 pb-2">{{ $t(item.title) }}</p>
              <pre><p class="b-white text-center">{{ $t(item.sub) }}</p></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="welfare">
      <p class="f56 pb-10">{{ $t('pc.recruit.section4.title') }}</p>
      <div class="d-flex flex-wrap">
        <div v-for="item, idx in welfare" class="welfare-box mb-5 mr-5 d-flex justify-center">
          <div class="welfare-item d-flex flex-column justify-center">
            <img :src="`/imgs/recruit/welfare${idx+1}.svg`" :alt="`welfare${idx+1}`" class="pb-7">
            <p class="f20">{{ $t(item) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="recruit">
      <p class="f56">{{ $t('pc.recruit.section5.title') }}</p>
      <div class="d-flex justify-space-between">
        <div v-for="item,idx in recruit" class="recruit-box mt-10 pl-10 pt-10">
          <div class="">
            <p class="f28 pb-5">{{ $t(item.title) }}</p>
            <pre><p class="f18">{{ $t(item.sub) }}</p></pre>
            <div class="text-right pr-10 pt-16"><img :src="`/imgs/recruit/recruit${idx+1}.svg`" :alt="`recruit${idx+1}`"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment">
      <pre><p class="f42 d-flex justify-center text-center font-weight-bold">{{ $t('pc.recruit.section5.footer') }}</p></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = [
  {
    img: '/imgs/recruit/field1.png',
    title: 'pc.recruit.section2.tab1.title',
    sub: [
      { title: 'pc.recruit.section2.sub1', content: 'pc.recruit.section2.tab1.content1' },
      { title: 'pc.recruit.section2.sub2', content: 'pc.recruit.section2.tab1.content2' },
      { title: 'pc.recruit.section2.sub3', content: 'pc.recruit.section2.tab1.content3' }
    ]
  },
  {
    img: '/imgs/recruit/field2.png',
    title: 'pc.recruit.section2.tab2.title',
    sub: [
      { title: 'pc.recruit.section2.sub1', content: 'pc.recruit.section2.tab2.content1' },
      { title: 'pc.recruit.section2.sub2', content: 'pc.recruit.section2.tab2.content2' },
      { title: 'pc.recruit.section2.sub3', content: 'pc.recruit.section2.tab2.content3' }
    ]
  },
  {
    img: '/imgs/recruit/field3.png',
    title: 'pc.recruit.section2.tab3.title',
    sub: [
      { title: 'pc.recruit.section2.sub1', content: 'pc.recruit.section2.tab3.content1' },
      { title: 'pc.recruit.section2.sub2', content: 'pc.recruit.section2.tab3.content2' },
      { title: 'pc.recruit.section2.sub3', content: 'pc.recruit.section2.tab3.content3' }
    ]
  },
  {
    img: '/imgs/recruit/field4.png',
    title: 'pc.recruit.section2.tab4.title',
    sub: [
      { title: 'pc.recruit.section2.sub1', content: 'pc.recruit.section2.tab4.content1' },
      { title: 'pc.recruit.section2.sub2', content: 'pc.recruit.section2.tab4.content2' },
      { title: 'pc.recruit.section2.sub3', content: 'pc.recruit.section2.tab4.content3' }
    ]
  },
];
const condition = [
  { title: 'pc.recruit.section3.sub1', sub: 'pc.recruit.section3.content1'},
  { title: 'pc.recruit.section3.sub2', sub: 'pc.recruit.section3.content2'},
  { title: 'pc.recruit.section3.sub3', sub: 'pc.recruit.section3.content3'},
  { title: 'pc.recruit.section3.sub4', sub: 'pc.recruit.section3.content4'},
];
const welfare = [
  'pc.recruit.section4.1','pc.recruit.section4.2','pc.recruit.section4.3','pc.recruit.section4.4','pc.recruit.section4.5','pc.recruit.section4.6','pc.recruit.section4.7','pc.recruit.section4.8','pc.recruit.section4.9','pc.recruit.section4.10','pc.recruit.section4.11','pc.recruit.section4.12'
];
const recruit = [
  { title: 'pc.recruit.section5.sub1', sub: 'pc.recruit.section5.content1' },
  { title: 'pc.recruit.section5.sub2', sub: 'pc.recruit.section5.content2' },
  { title: 'pc.recruit.section5.sub3', sub: 'pc.recruit.section5.content3' },
];
</script>

<style lang="scss" scoped>
.recruit-wrap {
  .title {padding-top: 140px; padding-bottom: 340px;}
  .background {
    height:785px;
    background: var(--home-red);
    .hiring { position: relative; bottom: 35%;}
    .hiring-text {position: relative; bottom: 20%;}
  }
  .field {
    padding: 140px 0;
    width: 80%;
    margin: 0 auto;
    .field-content { padding-left: 200px;}
  }
  .condition-wrap {
    height: 726px;
    background: url('/imgs/recruit/working-condition.png');
    .condition {
      padding: 140px 0;
      width: 80%;
      margin: 0 auto;
      .condition-item {
        width: 325px;
        height: 325px;
        border: 1px solid #ffffff;
      }
    }
  }
  .welfare {
    padding: 140px 0;
    width: 80%;
    margin: 0 auto;
    .welfare-box {
      width: 220px;
      height: 220px;
      background: #f3f4f6;
      border-radius: 0 20px;
    }
  }
  .recruit {
    padding-bottom: 140px;
    width: 80%;
    margin: 0 auto;
    .recruit-box {
      width: 460px;
      height: 320px;
      border: 1px solid #dddddd;
    }
  }
  .comment {
    padding-bottom: 140px;
  }
}
</style>
