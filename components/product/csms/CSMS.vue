<template>
  <ProductTemplate
    :mainText="mainText"
    :topImg="topImg"
    :productName="productName"
    :meritItem="meritItem"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '../../common/ProductTemplate.vue'

const mainText = 'pc.product.csms.mainText';
const topImg = '/imgs/product/csms/top.png';
const productName = 'home CSMS';
const meritItem = [
  {
    img: '/imgs/product/csms/merit1.png',
    text1: 'pc.product.csms.merit.1.text1',
    text2: 'pc.product.csms.merit.1.text2'
  },
  {
    img: '/imgs/product/csms/merit2.png',
    text1: 'pc.product.csms.merit.2.text1',
    text2: 'pc.product.csms.merit.2.text2'
  },
  {
    img: '/imgs/product/csms/merit3.png',
    text1: 'pc.product.csms.merit.3.text1',
    text2: 'pc.product.csms.merit.3.text2'
  },
  {
    img: '/imgs/product/csms/merit4.png',
    text1: 'pc.product.csms.merit.4.text1',
    text2: 'pc.product.csms.merit.4.text2'
  }
];
</script>

<style lang="scss" scoped>
</style>