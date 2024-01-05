<template>
  <div class="company-wrap">
    <div class="greeting">
      <div class="d-flex justify-space-between pb-16">
        <div>
          <pre><p class="f46 pb-10">{{ $t('pc.company.section1.sub') }}</p></pre>
          <pre><p class="f18-2 pb-15">{{ $t('pc.company.section1.content') }}</p></pre>
          <pre><p class="p20 font-weight-bold">{{ $t('pc.company.section1.from') }}</p></pre>
        </div>
        <img src="/imgs/company/greeting.png" alt="">
      </div>
    </div>
    <div class="d-flex justify-center company w-100">
      <div
        v-for="item in companyItem"
        class="company-items d-flex align-center justify-center flex-column mr-5"
        @mouseover="item.isHover = true"
        @mouseleave="item.isHover = false"
      >
        <div class="icon d-flex justify-center">
          <img :src="item.isHover ? item.hoverIcon : item.icon">
        </div>
        <p class="f22 pt-8 pb-2">{{ $t(item.title) }}</p>
        <pre><p class="f15 text-center">{{ $t(item.content) }}</p></pre>
      </div>
    </div>
    <div class="business">
      <p class="f50 d-flex justify-center pb-11">{{ $t('pc.company.section2.title') }}</p>
      <v-divider
        :thickness="2"
        class="border-opacity-100 pb-16 divider"
        color="black"
      ></v-divider>
      <div class="business-img d-flex align-center justify-center">
        <v-card
          v-for="(item, idx) in businessImgs"
          class="image-container"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-img
              :src="item.path" alt=""
              cover
              width="450"
              height="540"
              v-bind="props"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="v-card-hover w-100 transition-fast-in-fast-out d-flex align-center justify-start"
                  style="height: 100%;"
                >
                  <div class="text-overlay b-white pl-10">
                    <p class="f48">{{ `0${idx+1}` }}</p>
                    <p class="f28">{{ $t(item.text) }}</p>
                    <pre><p class="f18-2 pt-5">{{ $t(item.hover) }}</p></pre>
                  </div>
                </div>
              </v-expand-transition>
              <div class="text b-white">
                <p class="f48">{{ `0${idx+1}` }}</p>
                <p class="f28">{{ $t(item.text) }}</p>
              </div>
            </v-img>
          </v-hover>
        </v-card>
      </div>
    </div>
    <div class="history">
      <p class="f50 d-flex justify-center pb-11">{{ $t('pc.company.section3.title') }}</p>
      <v-divider
        :thickness="2"
        class="border-opacity-100 pb-16"
        color="black"
      ></v-divider>
      <div class="d-flex w-100">
        <div class="h-left w-50">
          <div class="history-tab1">
            <p class="f34">{{ $t('pc.company.section3.tab1.title1-1') }}</p>
            <p class="f46">{{ $t('pc.company.section3.tab1.title1-2') }}</p>
            <pre><p class="f24 b-gray2 pt-5 pb-15">{{ $t('pc.company.section3.tab1.sub1') }}</p></pre>
            <img src="/imgs/company/history1.png" alt="history">
          </div>
          <div class="history-tab2">
            <p class="f34">{{ $t('pc.company.section3.tab1.title2-1') }}</p>
            <p class="f46">{{ $t('pc.company.section3.tab1.title2-2') }}</p>
            <pre><p class="f24 b-gray2 pt-5 pb-15">{{ $t('pc.company.section3.tab1.sub2') }}</p></pre>
            <img src="/imgs/company/history2.png" alt="history">
          </div>
        </div>
        <div class="h-right w-50 pl-14">
          <div class="h-tab" v-for="item in historyContent">
            <p class="f36 pb-5 year pl-10">{{item.year}}</p>
            <ul class="pl-10">
              <li class="pb-2" v-for="content in item.content">
                <span class="f18-1 b-black3 font-weight-bold pr-2">{{content.month}}</span>
                <span class="f18-2 b-black3">{{$t(content.text)}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="patent b-white">
      <v-img src="/imgs/company/patent.png" height="776" alt="" cover>
        <div class="d-flex flex-column align-center justify-center h-100">
          <p class="f50 pb-10">{{ $t('pc.company.section4.title') }}</p>
          <div class="w-100 d-flex justify-space-around align-center">
            <div
              v-for="item,idx in patentItem"
              class="h-100"
              :class="{'patent-img-wrap': [0,1,2,3,4].includes(idx)}"
            >
              <img :src="item.img" alt="" class="patent-img">
              <pre><p class="f18-2 text-center">{{ $t(item.text) }}</p></pre>
            </div>
          </div>
        </div>
      </v-img>
    </div>
    <div class="client">
      <p class="f50 d-flex justify-center pb-11">{{ $t('pc.company.section5.title') }}</p>
      <v-divider
        :thickness="2"
        class="border-opacity-100 pb-16"
        color="black"
      ></v-divider>
      <p class="f24 font-weight-bold pb-10">{{ $t('pc.company.section5.sub1') }}</p>
      <div class="d-flex flex-wrap">
        <div v-for="idx in 12" :key="idx">
          <img :src="`imgs/company/ev-client${idx}.png`" :alt="`ev-client${idx+1}`" class="client-img mr-3 mb-10">
        </div>
      </div>
      <p class="f24 font-weight-bold pb-10 pt-15">{{ $t('pc.company.section5.sub2') }}</p>
      <div class="d-flex flex-wrap">
        <div v-for="idx in 9" :key="idx">
          <img :src="`imgs/company/etc-client${idx}.png`" :alt="`etc-client${idx}`" class="client-img mr-3 mb-10">
        </div>
      </div>
    </div>
    <div class="location">
      <p class="f50 d-flex justify-center pb-11">{{ $t('pc.company.section6.title') }}</p>
      <div style="height: 600px;" class="d-flex w-100">
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
            <p class="f30 pt-10 pb-7">{{ $t('pc.common.head') }} <v-icon>mdi-arrow-right</v-icon></p>
            <p>{{ $t('pc.common.headAddr2') }}</p>
            <span class="pr-2">Tel. {{ $t('pc.common.headTel') }}</span>
            <span>Fax. {{ $t('pc.common.headFax') }}</span>
          </div>
          <v-divider></v-divider>
          <div
            class="h-50 select-location"
            @click="location('lab')"
            :class="selectedLocation === 'lab' ? 'selected' : ''"
          >
            <p class="f30 pt-10 pb-7">{{ $t('pc.common.lab') }} <v-icon>mdi-arrow-right</v-icon></p>
            <p>{{ $t('pc.common.labAddr2') }}</p>
            <span class="pr-2">Tel. {{ $t('pc.common.labTel') }}</span>
            <span>Fax. {{ $t('pc.common.labTel') }}</span>
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
    hoverIcon: '/imgs/company/hover-icon1.svg',
    title: 'pc.common.head',
    content: 'pc.common.headAddr',
    isHover: false,
  },
  {
    icon: '/imgs/company/icon2.svg',
    hoverIcon: '/imgs/company/hover-icon2.svg',
    title: 'pc.common.lab',
    content: 'pc.common.labAddr',
    isHover: false,
  },
  {
    icon: '/imgs/company/icon3.svg',
    hoverIcon: '/imgs/company/hover-icon3.svg',
    title: 'pc.company.section1.item.title3',
    content: 'pc.company.section1.item.content3',
    isHover: false,
  },
  {
    icon: '/imgs/company/icon4.svg',
    hoverIcon: '/imgs/company/hover-icon4.svg',
    title: 'pc.company.section1.item.title4',
    content: 'pc.company.section1.item.content4',
    isHover: false,
  },
  {
    icon: '/imgs/company/icon5.svg',
    hoverIcon: '/imgs/company/hover-icon5.svg',
    title: 'pc.company.section1.item.title5',
    content: 'pc.company.section1.item.content5',
    isHover: false,
  },
  {
    icon: '/imgs/company/icon6.svg',
    hoverIcon: '/imgs/company/hover-icon6.svg',
    title: 'pc.company.section1.item.title6',
    content: 'pc.company.section1.item.content6',
    isHover: false,
  },
];
const businessImgs = [
  {path: 'imgs/company/business1.png', text: 'pc.company.section2.one', hover: 'pc.company.section2.hover1'},
  {path: 'imgs/company/business2.png', text: 'pc.company.section2.two', hover: 'pc.company.section2.hover2'},
  {path: 'imgs/company/business3.png', text: 'pc.company.section2.three', hover: 'pc.company.section2.hover3'}
];
const historyContent = [
  {
    year: '2023',
    content: [
      {month: '11', text: 'pc.company.section3.tab2.2023.11'},
      {month: '08', text: 'pc.company.section3.tab2.2023.08'},
      {month: '05', text: 'pc.company.section3.tab2.2023.05'},
      {month: '02', text: 'pc.company.section3.tab2.2023.02'},
    ]
  },
  {
    year: '2022',
    content: [
      {month: '06', text: 'pc.company.section3.tab2.2022.06'},
      {month: '　', text: 'pc.company.section3.tab2.2022.text1'},
    ]
  },
  {
    year: '2021',
    content: [
      {month: '　', text: 'pc.company.section3.tab2.2021.text1'},
      {month: '　', text: 'pc.company.section3.tab2.2021.text2'},
    ]
  },
  {
    year: '2020',
    content: [
      {month: '　', text: 'pc.company.section3.tab2.2020.text1'},
    ]
  },
  {
    year: '2019',
    content: [
      {month: '　', text: 'pc.company.section3.tab2.2019.text1'},
      {month: '　', text: 'pc.company.section3.tab2.2019.text2'},
    ]
  },
  {
    year: '2018',
    content: [
      {month: '　', text: 'pc.company.section3.tab2.2018.text1'},
      {month: '　', text: 'pc.company.section3.tab2.2018.text2'},
    ]
  },
  {
    year: '2017',
    content: [
      {month: '　', text: 'pc.company.section3.tab2.2017.text1'},
    ]
  },
  {
    year: '2016',
    content: [
      {month: '06', text: 'pc.company.section3.tab2.2016.06'},
    ]
  },
];
const patentItem = [
  { img: '/imgs/company/cert1.png', text: 'pc.company.section4.1'},
  { img: '/imgs/company/cert2.png', text: 'pc.company.section4.2'},
  { img: '/imgs/company/cert3.png', text: 'pc.company.section4.3'},
  { img: '/imgs/company/cert4.png', text: 'pc.company.section4.4'},
  { img: '/imgs/company/cert5.png', text: 'pc.company.section4.5'},
  { img: '/imgs/company/cert6.png', text: 'pc.company.section4.6'},
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
    // console.log(map.language);
  }
});

</script>

<style lang="scss" scoped>
.company-wrap {
  .greeting, .history {
    padding-top: 140px;
    width: 80%;
    margin: 0 auto;
  }
  .company {
    padding: 100px 5px 140px 25px;
    .company-items {
      width: 295px;
      height: 360px;
      background: var(--home-bg-gray);
      border-radius: 20px;
      &:hover{
        transition-duration: 1s;
        background: var(--home-red);
        // img { filter: invert(13%) sepia(98%) saturate(4329%) hue-rotate(348deg) brightness(90%) contrast(97%); }
        p {color: var(--home-white);}
      }
      .icon {
        width: 120px;
        height: 120px;
        background: var(--home-white);
        border-radius: 50%;
      }
    }
  }
  .business {
    width: 90%;
    margin: 0 auto;
    .divider {width: 90%;margin: 0 auto;}
    .business-img {
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
    .h-left {
      .history-tab1 { padding-bottom: 262px; }
      .history-tab2 { padding-bottom: 196px; }
    }
    .h-right {
      .h-tab {
        position: relative; padding: 0 0 80px 48px;
        &::before {
          content:""; position:absolute; left:8px; top:10px;
          width: 1px; height:100%; background:#d21123;
        }
        &:last-child::before {
          background: transparent;
        }
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
    padding: 140px 0 0;
    .patent-img {
      border: 6px solid var(--home-white);
      background: var(--home-white);
    }
  }
  .client {
    background: var(--home-bg-gray);
    padding: 194px 250px 140px;
    .client-img {
      border: 1px solid #c9c9c9;
      filter: grayscale(100%);
    }
  }
  .location {
    padding: 140px 250px;
    .location-addr { width: 40%; }
    .location-map {
      width: 60%;
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