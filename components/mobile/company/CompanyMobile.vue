<template>
  <div class="company-wrap">
    <div class="greeting">
      <div class="pb-10">
        <pre><p class="f23 pb-5 font-weight-bold">{{ $t('mobile.company.section1.sub') }}</p></pre>
        <pre><p class="f14 pb-8 context">{{ $t('mobile.company.section1.content') }}</p></pre>
        <pre><p class="f14 font-weight-bold pb-10">{{ $t('mobile.company.section1.from') }}</p></pre>
        <img src="/imgs/company/mobile/greeting.png" alt="">
      </div>
    </div>

    <div class="company">
      <Carousel>
        <Slide
          v-for="item in companyItem"
          class="company-items"
        >
          <div class="d-flex flex-column align-center justify-center">
            <div class="icon d-flex align-center justify-center">
              <img :src=item.icon>
            </div>
            <p class="f16 pt-8 pb-2 font-weight-bold">{{ $t(item.title) }}</p>
            <pre><p class="f14 text-center">{{ $t(item.content) }}</p></pre>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>

    <div class="business">
      <p class="f28 pb-5 d-flex justify-center">{{ $t('mobile.company.section2.title') }}</p>
      <v-divider
        :thickness="2"
        class="border-opacity-100 pb-5"
        color="black"
      ></v-divider>
      <div class="business-img">
        <v-card
          v-for="(item, idx) in businessImgs"
          class="image-container pb-5"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-img
              :src="item.path" alt=""
              v-bind="props"
              width="90vw"
              height="100%"
              cover
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="v-card-hover w-100 transition-fast-in-fast-out d-flex align-center justify-start"
                  style="height: 100%;"
                >
                  <div class="text-overlay b-white pl-10">
                    <p class="f28 font-weight-regular">{{ `0${idx+1}` }}</p>
                    <p class="f20 font-weight-bold">{{ $t(item.text) }}</p>
                    <pre><p class="f14 pt-5">{{ $t(item.hover) }}</p></pre>
                  </div>
                </div>
              </v-expand-transition>
              <div class="text b-white">
                <p class="f28 font-weight-regular">{{ `0${idx+1}` }}</p>
                <p class="f20 font-weight-bold">{{ $t(item.text) }}</p>
              </div>
            </v-img>
          </v-hover>
        </v-card>
      </div>
    </div>
    <div class="history">
      <p class="f28 d-flex justify-center pb-5">{{ $t('mobile.company.section3.title') }}</p>
      <v-divider
        :thickness="2"
        class="border-opacity-100 pb-5"
        color="black"
      ></v-divider>
      <div class="w-100">
        <div v-for="title, idx in historyTitle">
          <p class="f19 font-weight-bold">{{ $t(title.title) }}</p>
          <p class="f28">{{ $t(title.subTitle) }}</p>
          <pre><p class="f15 b-gray2 pt-2 pb-10">{{ $t(title.content) }}</p></pre>
          <img :src="`/imgs/company/history${idx+1}.png`" alt="history" class="pb-12">
          
          <div v-if="idx % 2 === 0">
            <div class="h-tab" v-for="item in historyContent.current">
              <p class="f23 year pl-5 pb-2 font-weight-bold">{{ item.year }}</p>
              <ul class="pl-5">
                <li class="pb-2" v-for="content in item.content">
                  <span class="f14 b-black3 font-weight-bold pr-2">{{content.month}}</span>
                  <span class="f14 b-black3">{{$t(content.text)}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div v-else>
            <div class="h-tab" v-for="item in historyContent.past">
              <p class="f24 year pl-5 font-weight-bold">{{ item.year }}</p>
              <ul class="pl-5">
                <li class="pb-2" v-for="content in item.content">
                  <span class="f14 b-black3 font-weight-bold pr-2">{{content.month}}</span>
                  <span class="f14 b-black3">{{$t(content.text)}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="patent b-white">
      <v-img src="/imgs/company/patent.png" alt="" cover>
        <div class="h-100 w-100">
          <p class="f28 pb-8 pt-15 text-center">{{ $t('mobile.company.section4.title') }}</p>
          <Carousel>
            <Slide
              v-for="item,idx in patentItem"
              class="h-100"
              :class="{'patent-img-wrap': [0,1,2,3].includes(idx)}"
            >
              <div class="d-flex flex-column">
                <img :src="item.img" alt="" class="patent-img">
                <pre><p class="f19 text-center pt-4 pb-8">{{ $t(item.text) }}</p></pre>
              </div>
            </Slide>
            <template #addons>
              <Pagination class="pb-16"/>
            </template>
          </Carousel>
        </div>
      </v-img>
    </div>
    <div class="client">
      <div>
        <p class="f28 pt-16 pb-5 text-center">{{ $t('mobile.company.section5.title') }}</p>
        <v-divider
          :thickness="2"
          class="border-opacity-100 pb-10"
          color="black"
        ></v-divider>
        <p class="f16 font-weight-bold pb-5">{{ $t('mobile.company.section5.sub1') }}</p>
        <v-row>
          <v-col v-for="idx in 12" :key="idx" cols="4">
            <img :src="`imgs/company/ev-client${idx}.png`" :alt="`ev-client${idx+1}`" class="client-img mb-1">
          </v-col>
        </v-row>
        <p class="f12 font-weight-bold pb-5 pt-10">{{ $t('mobile.company.section5.sub2') }}</p>
        <v-row>
          <v-col v-for="idx in 9" :key="idx" cols="4">
            <img :src="`imgs/company/etc-client${idx}.png`" :alt="`etc-client${idx}`" class="client-img mb-5">
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="location pb-15">
      <p class="f28 text-center pt-15 pb-5">{{ $t('mobile.company.section6.title') }}</p>
      <div style="height: 800px;" class="w-100">
        <div class="location-addr mr-10">
          <v-divider
            :thickness="2"
            class="border-opacity-100"
            color="black"
          ></v-divider>
          <div
            class="h-50 select-location"
            @click="location('head')"
            :class="selectedLocation === 'head' ? 'selected' : ''"
          >
            <p class="f22 font-weight-bold pt-10 pb-7">{{ $t('mobile.common.head') }} <v-icon>mdi-arrow-right</v-icon></p>
            <p class="f16">{{ $t('mobile.common.headAddr2') }}</p>
            <span class="pr-2 f16">Tel. {{ $t('mobile.common.headTel') }}</span>
            <span class="f16">Fax. {{ $t('mobile.common.headFax') }}</span>
          </div>
          <v-divider></v-divider>
          <div
            class="h-50 select-location"
            @click="location('lab')"
            :class="selectedLocation === 'lab' ? 'selected' : ''"
          >
            <p class="f22 font-weight-bold pt-10 pb-7">{{ $t('mobile.common.lab') }} <v-icon>mdi-arrow-right</v-icon></p>
            <p class="f16"> {{ $t('mobile.common.labAddr2') }}</p>
            <span class="pr-2 f16">Tel. {{ $t('mobile.common.labTel') }}</span>
            <span class="f16">Fax. {{ $t('mobile.common.labFax') }}</span>
          </div>
        </div>
        <div class="location-map" id="map">
          <GoogleMap
            id="map"
            ref="mapRef"
            :key="map.key"
            :api-key=map.apiKey
            :center="selectedLocation === 'lab' ? map.center.head : map.center.lab"
            :zoom="map.zoom"
            :language="map.language"
            class="google-map w-100 h-100"
          >
            <Marker
              :options="selectedLocation === 'lab' ? markerOptions.head : markerOptions.lab"
              class="marker"
            />
          </GoogleMap>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import { useLanguageStore } from '~/stores/language'
import config from '@/config/config.json';
import logo from '/imgs/logo.png';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const map = {
  key: 0,
  apiKey: config.google.map,
  center: {
    head: { lat: 36.362711, lng: 127.438882 },
    lab: { lat: 37.400267551824065, lng: 126.99056672142724 }
  },
  zoom: 15,
  language: '',
};
const markerOptions = {
  head : {
    position: { lat: 36.362711, lng: 127.438882 },
    title: "Head Office",
    icon: logo,
  },
  lab: {
    position: { lat: 37.400267551824065, lng: 126.99056672142724 },
    title: "Lab",
    icon: logo,
  }
};
const companyItem = [
  {
    icon: '/imgs/company/icon1.svg',
    title: 'mobile.common.head',
    content: 'mobile.common.headAddr',
  },
  {
    icon: '/imgs/company/icon2.svg',
    title: 'mobile.common.lab',
    content: 'mobile.common.labAddr',
  },
  {
    icon: '/imgs/company/icon3.svg',
    title: 'mobile.company.section1.item.title3',
    content: 'mobile.company.section1.item.content3',
  },
  {
    icon: '/imgs/company/icon4.svg',
    title: 'mobile.company.section1.item.title4',
    content: 'mobile.company.section1.item.content4',
  },
  {
    icon: '/imgs/company/icon5.svg',
    title: 'mobile.company.section1.item.title5',
    content: 'mobile.company.section1.item.content5',
  },
  {
    icon: '/imgs/company/icon6.svg',
    title: 'mobile.company.section1.item.title6',
    content: 'mobile.company.section1.item.content6',
  },
];
const businessImgs = [
  {path: 'imgs/company/business1.png', text: 'mobile.company.section2.one', hover: 'mobile.company.section2.hover1'},
  {path: 'imgs/company/business2.png', text: 'mobile.company.section2.two', hover: 'mobile.company.section2.hover2'},
  {path: 'imgs/company/business3.png', text: 'mobile.company.section2.three', hover: 'mobile.company.section2.hover3'}
];
const historyTitle = [
  {
    title: 'mobile.company.section3.tab1.title1-1',
    subTitle: 'mobile.company.section3.tab1.title1-2',
    content: 'mobile.company.section3.tab1.sub1'
  },
  {
    title: 'mobile.company.section3.tab1.title2-1',
    subTitle: 'mobile.company.section3.tab1.title2-2',
    content: 'mobile.company.section3.tab1.sub2'
  }
];
const historyContent = {
  current : [
    {
      year: '2023',
      content: [
        {month: '11', text: 'mobile.company.section3.tab2.2023.11'},
        {month: '08', text: 'mobile.company.section3.tab2.2023.08'},
        {month: '05', text: 'mobile.company.section3.tab2.2023.05'},
        {month: '02', text: 'mobile.company.section3.tab2.2023.02'},
      ]
    },
    {
      year: '2022',
      content: [
        {month: '06', text: 'mobile.company.section3.tab2.2022.06'},
        {month: '　', text: 'mobile.company.section3.tab2.2022.text1'},
      ]
    },
    {
      year: '2021',
      content: [
        {month: '　', text: 'mobile.company.section3.tab2.2021.text1'},
        {month: '　', text: 'mobile.company.section3.tab2.2021.text2'},
      ]
    },
    {
      year: '2020',
      content: [
        {month: '　', text: 'mobile.company.section3.tab2.2020.text1'},
      ]
    },
  ],
  past: [
    {
      year: '2019',
      content: [
        {month: '　', text: 'mobile.company.section3.tab2.2019.text1'},
        {month: '　', text: 'mobile.company.section3.tab2.2019.text2'},
      ]
    },
    {
      year: '2018',
      content: [
        {month: '　', text: 'mobile.company.section3.tab2.2018.text1'},
        {month: '　', text: 'mobile.company.section3.tab2.2018.text2'},
      ]
    },
    {
      year: '2017',
      content: [
        {month: '　', text: 'mobile.company.section3.tab2.2017.text1'},
      ]
    },
    {
      year: '2016',
      content: [
        {month: '06', text: 'mobile.company.section3.tab2.2016.06'},
      ]
    },
  ]
};
const patentItem = [
  { img: '/imgs/company/mobile/cert1.png', text: 'mobile.company.section4.1'},
  { img: '/imgs/company/mobile/cert2.png', text: 'mobile.company.section4.2'},
  { img: '/imgs/company/mobile/cert3.png', text: 'mobile.company.section4.3'},
  { img: '/imgs/company/mobile/cert4.png', text: 'mobile.company.section4.4'},
  { img: '/imgs/company/mobile/cert5.png', text: 'mobile.company.section4.5'},
  { img: '/imgs/company/mobile/cert6.png', text: 'mobile.company.section4.6'},
];
const selectedLocation = ref('lab');
const store = useLanguageStore();

const getLanguage = computed(() => store.lang);

const location = (type: 'head' | 'lab'): void => {
  switch(type) {
    case 'head' : selectedLocation.value = 'lab'; break;
    case 'lab' : selectedLocation.value = 'head'; break;
    default: break;
  }
};

watch(getLanguage, (val) => {
  if (val != null) {
    map.language = val;
  }
});
</script>
<style lang="scss" scoped>
.company-wrap {
  width: 100%;
  .greeting, .history {
    width: 90%; margin: 0 auto;
    padding: 70px 0;
    .context { white-space: pre-wrap; }
    img {width: 100%;}
  }
  .company {
    width: 90%; margin: 0 auto;
    padding-bottom: 70px;
    .company-items {
      width: 100%;
      height: 360px;
      background: var(--home-bg-gray);
      border-radius: 20px;
      .icon {
        width: 120px;
        height: 120px;
        background: var(--home-white);
        border-radius: 50%;
      }
    }
  }
  .business {
    width: 90%; margin: 0 auto;
    .business-img {
      overflow-x: hidden;
      .image-container {
        display: inline-block;
        margin-right: 35px;
        box-shadow: none;
        &:hover {.text { opacity: 0; transition: opacity 0s;}}
        .text {
          position: absolute;
          bottom: 50px;
          left: 40px;
          text-align: left;
          transition-delay: 0.5s;
        }
        .v-card-hover {
            position: absolute;
            bottom: 0;
            opacity: 1;
            border-radius: 0px 20px;
            background: var(--home-red);
          }
      }
    }
  }
  .history {
    .h-tab {
      position: relative; padding: 0 0 40px 48px;
      &::before {
        content:""; position:absolute; left:8px; top:10px;
        width: 1px; height:100%; background:#d21123;
      }
      &:last-child::before {
        background: transparent;
      }
      .year {
        position: relative; line-height: 1;
        &::before {
          content:""; position: absolute;
          left:-58px; top:50%; transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 100%;
          background:#d21123; border: 13px solid #FAE7E9;
          box-sizing: border-box;
        }
        ul { padding: 20px 0 74px; }
        li {font-size: 17px; color:#000; line-height: 29px;  }
      }
    }
  }
  .patent {
    .patent-img {
      border: 6px solid var(--home-white);
      background: var(--home-white);
    }
  }
  .client {
    background: var(--home-bg-gray);
    div {
      width: 90%; margin: 0 auto;
      .client-img {
        width: 90%;
        border: 1px solid #c9c9c9;
        filter: grayscale(100%);
      }
    }
  }
  .location {
    width: 90%; margin: 0 auto;
    .location-addr { width: 100%; height: 50%; }
    .location-map {
      width: 100%; height: 50%;
      .google-map {
        border: 1px solid #707070;
        .gm-style {
          img {width: 10px; height: 10px;}
        }
      }
    }
    .select-location {cursor: pointer;}
    .selected { color: var(--home-gray);}
  }
}
</style>