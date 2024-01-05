<template>
  <div class="main w-100">
    <div class="section-1">
      <p class="s1-title s1-title-m f110 d-flex justify-center" id="s1-title">test</span></p>
      <div>
        <div
          v-for="item,idx in mainTurn"
          class="d-flex justify-space-around s1-context"
        >
          <template v-if="idx % 2 === 0">
            <img :src="item.tab1" alt=""/>
            <div>
              <pre><p class="s1-text1 f38">{{ $t(item.tab2.text1) }}</p></pre>
              <pre><p class="s1-text2 f18-2">{{ $t(item.tab2.text2) }}</p></pre>
              <pre><p class="s1-text2 s1-text3 f18-2">{{ $t(item.tab2.text3) }}</p></pre>
              <NuxtLink :to="idx === 0 ? '/company' :'/product/dc100-1'">
                <p class="show-detail b-white f18-2 d-flex align-center justify-center">
                  {{ $t('pc.common.viewDetail') }}
                  <v-icon>mdi-chevron-right</v-icon>
                </p>
              </NuxtLink>
            </div>
          </template>
          <template v-else>
            <div class="text-right">
              <pre><p class="s1-text1 f38">{{ $t(item.tab2.text1) }}</p></pre>
              <pre><p class="s1-text2 f18-2">{{ $t(item.tab2.text2) }}</p></pre>
              <pre><p class="s1-text2 s1-text3 f18-2">{{ $t(item.tab2.text3) }}</p></pre>
              <NuxtLink to="/technology" class="d-flex justify-end">
                <p class="show-detail b-white f18-2 d-flex align-center justify-center">
                  {{ $t('pc.common.viewDetail') }}
                  <v-icon>mdi-chevron-right</v-icon>
                </p>
              </NuxtLink>
            </div>
            <img :src="item.tab1" alt=""/>
          </template>
        </div>
      </div>
    </div>
    <div class="section-2" id="section-2">
      <div class="s2-text-wrap">
        <p class="s2-title f50">{{$t('pc.main.section2.title')}}</p>
        <p class="s2-text f22">{{$t('pc.main.section2.sub')}}</p>
      </div>
      <div class="carousel-wrapper pt-15 pl-5 pr-5">
        <Carousel
          :autoplay="2000"
          :wrap-around="true"
          :itemsToShow="7"
        >
          <Slide v-for="idx in 20" :key="idx">
            <div class="carousel__item">
              <img :src="`/imgs/main/client${idx}.png`" :alt="`client${idx}`">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const mainTurn = [
  {
    tab1: '/imgs/main/main-turn1.png',
    tab2: {
      text1: 'pc.main.section1.one.title',
      text2: 'pc.main.section1.one.sub1',
      text3: 'pc.main.section1.one.sub2'
    },
  },
  {
    tab1: '/imgs/main/main-turn2.png',
    tab2: {
      text1: 'pc.main.section1.two.title',
      text2: 'pc.main.section1.two.sub1',
      text3: 'pc.main.section1.two.sub2'
    }
  },
  {
    tab1: '/imgs/main/main-turn3.png',
    tab2: {
      text1: 'pc.main.section1.three.title',
      text2: 'pc.main.section1.three.sub1',
      text3: 'pc.main.section1.three.sub2'
    },
  },
];
const slickOptions = {
  arrows: false,
  dots: true,
  dotsClass: "slick-dots custom-dot-class",
  edgeFriction: 0.35,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const link = (idx: number) => {
  switch(idx) {
    case 0: return '/company';
    case 1: return '/technology';
    case 2: return '/product/dc100-1';
    default: return;
  }
};
</script>

<style lang="scss">
  .main {
    .show-detail {
      width: 165px;
      height: 54px;
      background: var(--home-red);
      border-radius: 30px;
      &:hover {
        background: var(--home-black3);
        transition: 1s;
      }
    }
    .section-1 {
      width: 90%; margin: 0 auto;
      padding-top: 140px;
      .s1-title { padding-bottom: 100px; }
      .s1-context {
        width: 90%;
        margin: 0 auto;
        padding-bottom: 160px;
        .s1-text1 { padding: 132px 0 30px 0; color: #191919;}
        .s1-text2 { color: #666666; padding-bottom: 20px;}
        .s1-text3 { padding-bottom: 60px; }
      }
    }
    .section-2 {
      width: 100%; margin: 0 auto;
      margin-bottom: 140px;
      .s2-text-wrap {
        width: 80%; margin: 0 auto;
        .s2-text { color: #292929;}
      }
    }
  }
</style>