<template>
  <div class="main-banner" v-if="deviceType === 'PC'">
    <v-carousel
      v-if="currentPath === '/'"
      height="980px"
      hide-delimiters
      cycle
      class="cover-img"
    >
      <v-carousel-item
        v-for="item in banners.main"
        :src="item.path"
        cover
      >
        <pre>
          <p class="main-text f56 b-white">{{ $t(item.text) }}</p>
        </pre>
      </v-carousel-item>
    </v-carousel>
    <div v-else style="padding-top: 8vh;">
      <template v-if="currentPath === '/company'">
        <v-img :src="banners.company" height="400" cover>
          <p class="title f60 b-white h-100 d-flex justify-center align-center">홈페이지</p>
        </v-img>
      </template>
      <template v-if="currentPath === '/technology'">
        <v-img :src="banners.technology" height="400" cover>
          <p class="title f60 b-white h-100 d-flex justify-center align-center">홈페이지</p>
        </v-img>
      </template>
      <div v-for="item in banners.products">
        <template v-if="currentPath.includes(item.path)">
          <v-img :src="item.img" height="400" cover>
            <div class="d-flex flex-column product">
              <p class="f20 b-white">{{ $t(item.text1) }}</p>
              <p class="f56 b-red font-weight-bold">{{ $t(item.text2) }}</p>
            </div>
          </v-img>
        </template>
      </div>
      <template v-if="currentPath === '/contact'">
        <v-img :src="banners.contact" height="400" cover>
          <p class="title f60 b-white h-100 d-flex justify-center align-center">Contact us</p>
        </v-img>
      </template>
      <template v-if="currentPath === '/recruit'">
        <v-img :src="banners.recruit" height="400" cover>
          <p class="title f60 b-white h-100 d-flex justify-center align-center">Recruit</p>
        </v-img>
      </template>
      <template v-if="currentPath === '/terms'">
        <v-img :src="banners.terms" height="400" cover>
          <p class="title f60 b-white h-100 d-flex justify-center align-center">Privacy policy</p>
        </v-img>
      </template>
    </div>
  </div>
  <div v-else>
    <TopBannerMobile />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import TopBannerMobile from '@/components/mobile/common/TopBannerMobile.vue';

const props = defineProps({
  deviceType: String,
});

const route = useRoute();
const currentPath = ref('');
const banners = {
  main: [
    { path: '/imgs/main/main1.png', text: 'pc.topBanner.mainText.1' },
    { path: '/imgs/main/main2.png', text: 'pc.topBanner.mainText.2' },
    { path: '/imgs/main/main3.png', text: 'pc.topBanner.mainText.3' },
  ],
  company: '/imgs/company/company.png',
  technology: '/imgs/technology/technology.png',
  products: [
    { path:'/ac7s-1', img: '/imgs/product/ac7s-1/main.png', text1: 'pc.topBanner.ac7s-1.1', text2: 'pc.topBanner.ac7s-1.2'},
    { path:'/ac7w-1', img: '/imgs/product/ac7w-1/main.png', text1: 'pc.topBanner.ac7w-1.1', text2: 'pc.topBanner.ac7w-1.2'},
    { path:'/dc50a-1', img: '/imgs/product/dc50a-1/main.png', text1: 'pc.topBanner.dc50a-1.1', text2: 'pc.topBanner.dc50a-1.2'},
    { path:'/dc90a-1', img: '/imgs/product/dc90a-1/main.png', text1: 'pc.topBanner.dc90a-1.1', text2: 'pc.topBanner.dc90a-1.2'},
    { path:'/dc100-1', img: '/imgs/product/dc100-1/main.png', text1: 'pc.topBanner.dc100-1.1', text2: 'pc.topBanner.dc100-1.2'},
    { path:'/pb350', img: '/imgs/product/pb350/main.png', text1: 'pc.topBanner.pb350.1', text2: 'pc.topBanner.pb350.2'},
    { path:'/csms', img: '/imgs/product/csms/main.png', text1: 'pc.topBanner.csms.1', text2: 'pc.topBanner.csms.2'}
  ],
  contact: '/imgs/contact/contact-us.png',
  recruit: '/imgs/recruit/recruit.png',
  terms: '/imgs/terms/terms.png',
};
onMounted(() => {
  currentPath.value = route.path;
});

watch(() => route.path, (newPath) => {
  currentPath.value = newPath;
});

</script>

<style lang="scss" scoped>
.main-banner {
  .main-text { padding-left: 250px; padding-top: 200px;}
  .product {position: relative; top: 25%; left: 15%;}
}
</style>