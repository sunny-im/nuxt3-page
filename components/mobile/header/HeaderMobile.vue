<template>
  <v-layout>
    <v-app-bar
      color="white"
      scroll-behavior="elevate"
      class="flex-row align-center"
      id="nav-bar"
      style="box-shadow: none;"
      density="comfortable"
      extension-height="0"
    >
      <div class="header d-flex align-center justify-space-between h-100 w-100">
        <NuxtLink to="/" class="logo">
          <v-img
            src="/imgs/logo@2x.png"
            max-height="100"
            max-width="70"
          ></v-img>
        </NuxtLink>
        <div class="d-flex align-center">
          <LangButtonMobile />
          <div class="pl-7">
            <v-app-bar-nav-icon @click.stop="drawerM = !drawerM"></v-app-bar-nav-icon>
          </div>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawerM"
      temporary
      location="right"
      id="menu-list"
      style="top: 0 !important; height: 100%; z-index: 9999; width: 85%; overflow-y: auto;"
    >
      <div class="text-right pt-5 pb-5" style="width: 90%;">
        <v-icon @click="drawerM = false" class="close">mdi-close</v-icon>
      </div>
      <v-divider></v-divider>
      <v-list v-for="item in menu" class="pt-5 a">
        <div v-if="item.title.includes('product')">
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                class="font-weight-bold pb-5 pl-3 f20"
                :ripple="false"
                depressed
                variant="plain"
                style="opacity: 1;"
              >{{ $t(item.title) }}</v-list-item>
            </template>
            <div v-for="sub in subMenu">
              <NuxtLink :to="sub.path">
                <v-list-item class="f16 font-weight-bold">{{ $t(sub.title) }}</v-list-item>
              </NuxtLink>
              <v-list-item v-for="menu in sub.menus">
                <NuxtLink :to="menu.path">
                  <p class="pl-4">{{ $t(menu.name) }}</p>
                </NuxtLink>
                </v-list-item>
            </div>
          </v-list-group>
        </div>
        <div v-else>
          <NuxtLink :to="item.path">
            <p class="font-weight-bold pb-5 pl-3 f20">{{ $t(item.title) }}</p>
          </NuxtLink>
        </div>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import LangButtonMobile from '~/components/mobile/header/LangButtonMobile.vue';

const drawerM = ref(false);
const menu = [
  { title: 'mobile.menu.company', path: '/company' },
  { title: 'mobile.menu.technology', path: '/technology' },
  { title: 'mobile.menu.product', path: '' },
  { title: 'mobile.menu.recruit', path: '/recruit' },
  { title: 'mobile.menu.contact', path: '/contact' },
];
const subMenu = [
  { 
    title: 'mobile.menu.slow',
    menus: [ 
      { name: 'mobile.menu.mobile.slow-sub1', path: '/product/ac7s-1' },
      { name: 'mobile.menu.mobile.slow-sub2', path: '/product/ac7w-1' },
    ], 
  },
  { 
    title: 'mobile.menu.quick',
    menus: [
      { name: 'mobile.menu.mobile.quick-sub1', path: '/product/dc50a-1' },
      { name: 'mobile.menu.mobile.quick-sub2', path: '/product/dc90a-1' },
      { name: 'mobile.menu.mobile.quick-sub3', path: '/product/dc100-1' }
    ], 
  },
  { 
    title: 'mobile.menu.powerbank',
    path: '/product/pb350'
  },
  { 
    title: 'mobile.menu.system',
    path: '/product/csms'
  },
];
</script>

<style lang="scss" scoped>
#nav-bar {
  opacity: 0.9; max-width: 100vw;
  .header { 
    top: 0;
    left: 0;
    background: var(--home-white) 0% 0% no-repeat padding-box;
    opacity: 0.9;
    padding: 0 20px;
    .logo { width: 100px;}
  }
}
.close { font-size: 30px; }
</style>