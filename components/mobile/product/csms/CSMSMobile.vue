<template>
  <ProductTemplateMobile
    :mainText="mainText"
    :topImg="topImg"
    :productName="productName"
    :meritItem="meritItem"
  />
</template>

<script setup lang="ts">
import ProductTemplateMobile from '~/components/mobile/common/ProductTemplateMobile.vue';

const mainText = 'mobile.product.csms.mainText';
const topImg = '/imgs/product/csms/mobile/top.png';
const productName = 'CSMS';
const meritItem = [
  {
    img: '/imgs/product/csms/mobile/merit1.png',
    text1: 'mobile.product.csms.merit.1.text1',
    text2: 'mobile.product.csms.merit.1.text2'
  },
  {
    img: '/imgs/product/csms/mobile/merit2.png',
    text1: 'mobile.product.csms.merit.2.text1',
    text2: 'mobile.product.csms.merit.2.text2'
  },
  {
    img: '/imgs/product/csms/mobile/merit3.png',
    text1: 'mobile.product.csms.merit.3.text1',
    text2: 'mobile.product.csms.merit.3.text2'
  },
  {
    img: '/imgs/product/csms/mobile/merit4.png',
    text1: 'mobile.product.csms.merit.4.text1',
    text2: 'mobile.product.csms.merit.4.text2'
  }
];
const isSpec = false;
</script>

<style lang="scss" scoped>
</style>