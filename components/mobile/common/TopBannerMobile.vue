<template>
  <div class="main-banner" id="main-banner">
    <v-carousel
      v-if="currentPath === '/'"
      hide-delimiters
      height="100vh"
      cycle
      class="cover-img"
    >
      <v-carousel-item
        v-for="item in mobileBanners.main"
        :src="item.path"
        cover
      >
        <pre>
          <p class="main-text b-white f28">{{ $t(item.text) }}</p>
        </pre>
      </v-carousel-item>
    </v-carousel>
    <div v-else style="padding-top: 6vh;">
      <template v-if="currentPath === '/company'">
        <v-img :src="mobileBanners.company">
          <p class="title f30 b-white h-100 d-flex justify-center align-center">test</p>
        </v-img>
      </template>
      <template v-if="currentPath === '/technology'">
        <v-img :src="mobileBanners.technology">
          <p class="title f30 b-white h-100 d-flex justify-center align-center">test</p>
        </v-img>
      </template>
      <div v-for="item in mobileBanners.products">
        <template v-if="currentPath.includes(item.path)">
          <v-img :src="item.img">
            <div class="d-flex flex-column product">
              <p class="f14 b-white">{{ $t(item.text1) }}</p>
              <p class="f30 b-red font-weight-bold">{{ $t(item.text2) }}</p>
            </div>
          </v-img>
        </template>
      </div>
      <template v-if="currentPath === '/contact'">
        <v-img :src="mobileBanners.contact">
          <p class="title f30 b-white h-100 d-flex justify-center align-center">Contact us</p>
        </v-img>
      </template>
      <template v-if="currentPath === '/recruit'">
        <v-img :src="mobileBanners.recruit">
          <p class="title f30 b-white h-100 d-flex justify-center align-center">Recruit</p>
        </v-img>
      </template>
      <template v-if="currentPath === '/terms'">
        <v-img :src="mobileBanners.terms">
          <p class="title f30 b-white h-100 d-flex justify-center align-center">Privacy policy</p>
        </v-img>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const props = defineProps({
  deviceType: String,
});

const route = useRoute();
onMounted(() => {
  currentPath.value = route.path;
});

const currentPath = ref('');
const mobileBanners = {
  main: [
    {path:'/imgs/main/mobile/main1.png', text: 'mobile.topBanner.mainText.1' },
    {path:'/imgs/main/mobile/main2.png', text: 'mobile.topBanner.mainText.2' },
    {path:'/imgs/main/mobile/main3.png', text: 'mobile.topBanner.mainText.3' },
  ],
  company: '/imgs/company/mobile/company.png',
  technology: '/imgs/technology/mobile/technology.png',
  products: [
    { 
      path:'/ac7s-1',
      img: '/imgs/product/ac7s-1/mobile/main.png',
      text1: 'mobile.topBanner.ac7s-1.1', text2: 'mobile.topBanner.ac7s-1.2'
    },
    {
      path:'/ac7w-1',
      img: '/imgs/product/ac7w-1/mobile/main.png', 
      text1: 'mobile.topBanner.ac7w-1.1', text2: 'mobile.topBanner.ac7w-1.2'
    },
    { 
      path:'/dc50a-1', 
      img: '/imgs/product/dc50a-1/mobile/main.png', 
      text1: 'mobile.topBanner.dc50a-1.1', text2: 'mobile.topBanner.dc50a-1.2'
    },
    { 
      path:'/dc90a-1', 
      img: '/imgs/product/dc90a-1/mobile/main.png', 
      text1: 'mobile.topBanner.dc90a-1.1', text2: 'mobile.topBanner.dc90a-1.2'
    },
    { 
      path:'/dc100-1', 
      img: '/imgs/product/dc100-1/mobile/main.png',
      text1: 'mobile.topBanner.dc100-1.1', text2: 'mobile.topBanner.dc100-1.2'
    },
    { 
      path:'/pb350', 
      img: '/imgs/product/pb350/mobile/main.png', 
      text1: 'mobile.topBanner.pb350.1', text2: 'mobile.topBanner.pb350.2'
    },
    { 
      path:'/csms', 
      img: '/imgs/product/csms/mobile/main.png', 
      text1: 'mobile.topBanner.csms.1', text2: 'mobile.topBanner.csms.2'
    }
  ],
  contact: '/imgs/contact/mobile/contact-us.png',
  recruit: '/imgs/recruit/mobile/recruit.png',
  terms: '/imgs/terms/mobile/terms.png',
};
watch(() => route.path, (newPath) => {
  currentPath.value = newPath;
});
</script>

<style lang="scss" scoped>
#main-banner {
  .main-text { padding: 135px 0 0 30px;}
  .product {position: relative; top: 18%; left: 5%;}
}
</style>