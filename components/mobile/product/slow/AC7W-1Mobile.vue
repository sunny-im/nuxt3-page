<template>
  <ProductTemplateMobile
    :mainText="mainText"
    :topImg="topImg"
    :productName="productName"
    :meritItem="meritItem"
    :specItem="specItem"
    :specImg="specImg"
    :isSpec="isSpec"
  />
</template>

<script setup lang="ts">
import ProductTemplateMobile from '~/components/mobile/common/ProductTemplateMobile.vue';

const mainText = 'mobile.product.ac7w-1.mainText';
const topImg = '/imgs/product/ac7w-1/mobile/top.png';
const productName = 'BAC1-007W';
const meritItem = [
  {
    img: '/imgs/product/ac7w-1/mobile/merit1.png',
    text1: 'mobile.product.ac7w-1.merit.1.text1',
    text2: 'mobile.product.ac7w-1.merit.1.text2'
  },
  {
    img: '/imgs/product/ac7w-1/mobile/merit2.png',
    text1: 'mobile.product.ac7w-1.merit.2.text1',
    text2: 'mobile.product.ac7w-1.merit.2.text2'
  },
  {
    img: '/imgs/product/ac7w-1/mobile/merit3.png',
    text1: 'mobile.product.ac7w-1.merit.3.text1',
    text2: 'mobile.product.ac7w-1.merit.3.text2'
  },
  {
    img: '/imgs/product/ac7w-1/mobile/merit4.png',
    text1: 'mobile.product.ac7w-1.merit.4.text1',
    text2: 'mobile.product.ac7w-1.merit.4.text2'
  },
  {
    img: '/imgs/product/ac7w-1/mobile/merit5.png',
    text1: 'mobile.product.ac7w-1.merit.5.text1',
    text2: 'mobile.product.ac7w-1.merit.5.text2'
  }
];
const specItem = [
  {title: 'mobile.product.common.specItem.key1', content: 'mobile.product.ac7w-1.specItem.value1'},
  {title: 'mobile.product.common.specItem.key2', content: 'mobile.product.ac7w-1.specItem.value2'},
  {title: 'mobile.product.common.specItem.key3', content: 'mobile.product.ac7w-1.specItem.value3'},
  {title: 'mobile.product.common.specItem.key4', content: 'mobile.product.ac7w-1.specItem.value4'},
  {title: 'mobile.product.common.specItem.key6', content: 'mobile.product.ac7w-1.specItem.value6'},
  {title: 'mobile.product.common.specItem.key7', content: 'mobile.product.ac7w-1.specItem.value7'},
  {title: 'mobile.product.common.specItem.key8', content: 'mobile.product.ac7w-1.specItem.value8'},
  {title: 'mobile.product.common.specItem.key10', content: 'mobile.product.ac7w-1.specItem.value10'},
  {title: 'mobile.product.common.specItem.key12', content: 'mobile.product.ac7w-1.specItem.value12'},
  {title: 'mobile.product.common.specItem.key13', content: 'mobile.product.ac7w-1.specItem.value13'},
  {title: 'mobile.product.common.specItem.key14', content: 'mobile.product.ac7w-1.specItem.value14'},
];
const specImg = '/imgs/product/ac7w-1/mobile/spec.png';
const isSpec = true;
</script>

<style lang="scss" scoped>
</style>