<template>
  <div class="main w-100">
    <div class="section-1 w-100" id="section-1">
      <p class="s1-title s1-title-m f110 d-flex justify-center" id="s1-title">test</p>
      <div class="s1-mo">
        <div
          v-for="item,idx in mainTurn"
          class="d-flex flex-column align-center s1-content"
        >
          <img :src="item.tab1" alt=""/>
          <div class="text-wrap">
            <pre><p class="s1-text1 pb-6">{{ $t(item.tab2.text1) }}</p></pre>
            <pre><p class="s1-text2">{{ $t(item.tab2.text2) }}</p></pre>
            <pre><p class="s1-text2 s1-text3">{{ $t(item.tab2.text3) }}</p></pre>
            <NuxtLink :to="link(idx)">
              <p class="show-detail b-white d-flex align-center justify-center">
                {{ $t('mobile.common.viewDetail') }}
                <v-icon>mdi-chevron-right</v-icon>
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="section-2 w-100" id="section-2">
      <div class="s2-text-wrap">
        <p class="s2-title f28">{{$t('mobile.main.section2.title')}}</p>
        <pre><p class="s2-text f14">{{$t('mobile.main.section2.sub')}}</p></pre>
      </div>
      <div class="carousel-wrapper pt-8 pl-5 pr-5">
        <Carousel
          :autoplay="2000"
          :wrap-around="true"
          :itemsToShow="3"
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

const deviceType = ref('');
const mainTurn = [
  {
    tab1: '/imgs/main/main-turn1.png',
    tab2: {
      text1: 'mobile.main.section1.one.title',
      text2: 'mobile.main.section1.one.sub1',
      text3: 'mobile.main.section1.one.sub2'
    },
  },
  {
    tab1: '/imgs/main/main-turn2.png',
    tab2: {
      text1: 'mobile.main.section1.two.title',
      text2: 'mobile.main.section1.two.sub1',
      text3: 'mobile.main.section1.two.sub2'
    }
  },
  {
    tab1: '/imgs/main/main-turn3.png',
    tab2: {
      text1: 'mobile.main.section1.three.title',
      text2: 'mobile.main.section1.three.sub1',
      text3: 'mobile.main.section1.three.sub2'
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

const link = ((idx: number) => {
  switch(idx) {
    case 0: return '/company';
    case 1: return '/technology';
    case 2: return '/product/dc100-1';
    default: return;
  }
});
</script>

<style lang="scss">
  .main {
    #section-1 {
      padding-top: 50px;
      .s1-title {
        flex-direction: column;
        align-items: center;
        font-size: 14vw;
      }
      #s1-title { padding-bottom: 40px; }
      .s1-mo {
        margin: 0 auto;
        overflow-x: hidden;
        .s1-content {
          padding-bottom: 70px;
          img {width: 80%;}
          .text-wrap {
            width: 80%;
            padding-top: 60px;
            .s1-text1 {font-size: 6.5vw; font-weight: bold;letter-spacing: -1.05px;}
            .s1-text2 {font-size: 4vw; padding-bottom: 15px; color: #666666; letter-spacing: -0.7px;}
            .show-detail {
              width: 127px; height: 40px; font-size: 14px; letter-spacing: -0.7px; margin-top: 15px;
            }
          }
        }
      }
    }
    #section-2 {
      margin-bottom: 70px;
      .s2-text-wrap {
        position: static;
      }
      .carousel-wrapper {
        .carousel__item img {width: 100%;}
        .carousel__prev, .carousel__next {display: none;}
      }
    }
  }
</style>