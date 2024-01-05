<template>
  <ProductTemplate
    :mainText="mainText"
    :topImg="topImg"
    :productName="productName"
    :meritItem="meritItem"
    :specItem="specItem"
    :specImg="specImg"
    :isSpec="isSpec"
    :specType="specType"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '../../common/ProductTemplate.vue'

const mainText = 'pc.product.dc90a-1.mainText';
const topImg = '/imgs/product/dc90a-1/top.png';
const productName = 'BDC1-090-A';
const meritItem = [
  {
    img: '/imgs/product/dc90a-1/merit1.png',
    text1: 'pc.product.dc90a-1.merit.1.text1',
    text2: 'pc.product.dc90a-1.merit.1.text2'
  },
  {
    img: '/imgs/product/dc90a-1/merit2.png',
    text1: 'pc.product.dc90a-1.merit.2.text1',
    text2: 'pc.product.dc90a-1.merit.2.text2'
  },
  {
    img: '/imgs/product/dc90a-1/merit3.png',
    text1: 'pc.product.dc90a-1.merit.3.text1',
    text2: 'pc.product.dc90a-1.merit.3.text2'
  },
  {
    img: '/imgs/product/dc90a-1/merit4.png',
    text1: 'pc.product.dc90a-1.merit.4.text1',
    text2: 'pc.product.dc90a-1.merit.4.text2'
  },
  {
    img: '/imgs/product/dc90a-1/merit5.png',
    text1: 'pc.product.dc90a-1.merit.5.text1',
    text2: 'pc.product.dc90a-1.merit.5.text2'
  },
  {
    img: '/imgs/product/dc90a-1/merit6.png',
    text1: 'pc.product.dc90a-1.merit.6.text1',
    text2: 'pc.product.dc90a-1.merit.6.text2'
  }
];
const specItem = [
  {title: 'pc.product.common.specItem.key1', content: 'pc.product.dc90a-1.specItem.value1'},
  {title: 'pc.product.common.specItem.key2', content: 'pc.product.dc90a-1.specItem.value2'},
  {title: 'pc.product.common.specItem.key3', content: 'pc.product.dc90a-1.specItem.value3'},
  {title: 'pc.product.common.specItem.key4', content: 'pc.product.dc90a-1.specItem.value4'},
  {title: 'pc.product.common.specItem.key5', content: 'pc.product.dc90a-1.specItem.value5'},
  {title: 'pc.product.common.specItem.key6', content: 'pc.product.dc90a-1.specItem.value6'},
  {title: 'pc.product.common.specItem.key7', content: 'pc.product.dc90a-1.specItem.value7'},
  {title: 'pc.product.common.specItem.key8', content: 'pc.product.dc90a-1.specItem.value8'},
  {title: 'pc.product.common.specItem.key9', content: 'pc.product.dc90a-1.specItem.value9'},
  {title: 'pc.product.common.specItem.key10', content: 'pc.product.dc90a-1.specItem.value10'},
  {title: 'pc.product.common.specItem.key11', content: 'pc.product.dc90a-1.specItem.value11'},
  {title: 'pc.product.common.specItem.key13', content: 'pc.product.dc90a-1.specItem.value13'},
  {title: 'pc.product.common.specItem.key14', content: 'pc.product.dc90a-1.specItem.value14'},
];
const specImg = '/imgs/product/dc90a-1/spec.png';
const isSpec = true;
const specType = 'quick';
</script>

<style lang="scss" scoped>
</style>