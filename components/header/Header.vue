<template>
  <div v-if="deviceType === 'PC'">
    <v-layout>
      <v-app-bar
        color="white"
        scroll-behavior="elevate"
        class="flex-row align-center"
        :class="drawer ? 'nav-bar-open' : 'nav-bar'"
        style="box-shadow: none; height: 7vh;"
        density="comfortable"
        extension-height="0"
      >
        <div class="header d-flex align-center justify-space-between h-100 w-100">
          <NuxtLink to="/" class="logo">
            <v-img
              src="/imgs/logo@2x.png"
              max-height="100"
              max-width="100"
            ></v-img>
          </NuxtLink>
          <div class="d-flex justify-space-between cursor">
            <v-list v-for="item in menu" class="pr-10">
              <NuxtLink :to="item.path" @click="drawer=false">
                <p
                  v-if="item.title.includes('product')"
                  class="menu-list font-weight-bold"
                  @mouseover="drawer = true"
                >
                  {{ $t(item.title) }}
                </p>
                <p v-else class="menu-list font-weight-bold">{{ $t(item.title) }}</p>
              </NuxtLink>
            </v-list>
          </div>
          <div class="d-flex align-center justify-end header-right">
            <LangButton />
          </div>
        </div>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        location="top"
        @mouseleave="drawer=false"
        style="height: 60%;"
      >
        <v-list
          v-for="item in subMenu"
          class="d-flex flex-column align-center f20"
        >
          <div class="d-flex w-100 align-start">
            <v-list-item style="width: 220px;"><p class="f20">{{ $t(item.title) }}</p></v-list-item>
            <v-list-item v-for="product in item.imgs">
              <NuxtLink :to="product.path" @click="drawer=false">
                <img :src="product.img" alt="" style="width: 220px; height: 80px;">
                <p class="item-title"> {{ $t(product.menu) }} </p>
              </NuxtLink>
            </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </div>
  <div v-else>
    <HeaderMobile />
  </div>
</template>

<script setup lang="ts">
import HeaderMobile from '@/components/mobile/header/HeaderMobile.vue';
import LangButton from '~/components/header/LangButton.vue';

const props = defineProps({
  deviceType: String,
});

const drawer = ref(false);
const menu = [
  { title: 'pc.menu.company', path: '/company' },
  { title: 'pc.menu.technology', path: '/technology' },
  { title: 'pc.menu.product', path: '' },
  { title: 'pc.menu.recruit', path: '/recruit' },
  { title: 'pc.menu.contact', path: '/contact' },
];
const subMenu = [
  { 
    title: 'pc.menu.slow',
    imgs: [
      { img : '/imgs/header/BAC1-007S.png', menu: 'pc.menu.slow-sub1', path: '/product/ac7s-1' },
      { img : '/imgs/header/BAC1-007W.png', menu: 'pc.menu.slow-sub2', path: '/product/ac7w-1' },
    ], 
  },
  { 
    title: 'pc.menu.quick',
    imgs: [
      { img : '/imgs/header/BDC1-050-A.png', menu: 'pc.menu.quick-sub1', path: '/product/dc50a-1' },
      { img : '/imgs/header/BDC1-090-A.png', menu: 'pc.menu.quick-sub2', path: '/product/dc90a-1' },
      { img : '/imgs/header/BDC1-100-1.png', menu: 'pc.menu.quick-sub3', path: '/product/dc100-1' }
    ], 
  },
  { 
    title: 'pc.menu.powerbank',
    imgs: [
      { img : '/imgs/header/BDP-350.png', menu: 'pc.menu.powerbank-sub1', path: '/product/pb350' }
    ], 
  },
  { 
    title: 'pc.menu.system',
    imgs: [
      { img : '/imgs/header/CSMS.png', menu: 'pc.menu.system-sub1', path: '/product/csms' }
    ], 
  },
];
</script>

<style lang="scss" scoped>
.nav-bar {opacity: 0.9; max-width: 100vw;}
.nav-bar-open {opacity: 1;}
.header { 
  top: 0;
  left: 0;
  background: var(--home-white) 0% 0% no-repeat padding-box;
  opacity: 0.9;
  padding: 0 60px;
  .logo { width: 100px;}
  .menu-list {
    &:hover {
      color: #db272b;
      text-decoration: underline #db272b 3px;
      text-underline-offset: 10px;
    }
  } 
}
img {background-color: #dddddd;}
.v-navigation-drawer--top { top: 0 !important; transition: 0.5s;}
.v-navigation-drawer--active {top: 7vh !important; transition: 0.5s;}
.item-title {font-size: 14px; color: #191919;}
.cursor {cursor: pointer;}
</style>