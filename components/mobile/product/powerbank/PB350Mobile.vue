<template>
  <ProductTemplateMobile
    :mainText="mainText"
    :topImg="topImg"
    :productNames="productNames"
    :meritItem="meritItem"
    :specItem="specItem"
    :specItem2="specItem2"
    :specImg="specImg"
    :specImg2="specImg2"
    :isSpec="isSpec"
    :specType="specType"
    :powerBank="powerBank"
  />
</template>

<script setup lang="ts">
import ProductTemplateMobile from '~/components/mobile/common/ProductTemplateMobile.vue';

const mainText = 'mobile.product.pb350.mainText';
const topImg = '/imgs/product/pb350/mobile/top.png';
const productNames = ['BPB-350', 'BDP1-200', 'BDP2-350'];
const meritItem = [
  {
    img: '/imgs/product/pb350/mobile/merit1.png',
    text1: 'mobile.product.pb350.merit.1.text1',
    text2: 'mobile.product.pb350.merit.1.text2'
  },
  {
    img: '/imgs/product/pb350/mobile/merit2.png',
    text1: 'mobile.product.pb350.merit.2.text1',
    text2: 'mobile.product.pb350.merit.2.text2'
  },
  {
    img: '/imgs/product/pb350/mobile/merit3.png',
    text1: 'mobile.product.pb350.merit.3.text1',
    text2: 'mobile.product.pb350.merit.3.text2'
  },
  {
    img: '/imgs/product/pb350/mobile/merit4.png',
    text1: 'mobile.product.pb350.merit.4.text1',
    text2: 'mobile.product.pb350.merit.4.text2'
  },
  {
    img: '/imgs/product/pb350/mobile/merit5.png',
    text1: 'mobile.product.pb350.merit.5.text1',
    text2: 'mobile.product.pb350.merit.5.text2'
  }
];
const specItem = [
  {title: 'mobile.product.common.specItem.key1', content: 'mobile.product.pb350.specItem.value1'},
  {title: 'mobile.product.common.specItem.key2', content: 'mobile.product.pb350.specItem.value2'},
  {title: 'mobile.product.common.specItem.key3', content: 'mobile.product.pb350.specItem.value3'},
  {title: 'mobile.product.common.specItem.key4', content: 'mobile.product.pb350.specItem.value4'},
  {title: 'mobile.product.common.specItem.key5', content: 'mobile.product.pb350.specItem.value5'},
  {title: 'mobile.product.common.specItem.key6', content: 'mobile.product.pb350.specItem.value6'},
  {title: 'mobile.product.common.specItem.key7', content: 'mobile.product.pb350.specItem.value7'},
  {title: 'mobile.product.common.specItem.key8', content: 'mobile.product.pb350.specItem.value8'},
  {title: 'mobile.product.common.specItem.key9', content: 'mobile.product.pb350.specItem.value9'},
  {title: 'mobile.product.common.specItem.key10', content: 'mobile.product.pb350.specItem.value10'},
  {title: 'mobile.product.common.specItem.key13', content: 'mobile.product.pb350.specItem.value13'},
  {title: 'mobile.product.common.specItem.key14', content: 'mobile.product.pb350.specItem.value14'},
];
const specItem2 = [
  {title: 'mobile.product.common.specItem.key1', content: 'mobile.product.pb350.specItem2.value1', content2: 'mobile.product.pb350.specItem2.value1-2'},
  {title: 'mobile.product.common.specItem.key4', content: 'mobile.product.pb350.specItem2.value4', content2: 'mobile.product.pb350.specItem2.value4-2'},
  {title: 'mobile.product.common.specItem.key15', content: 'mobile.product.pb350.specItem2.value15', content2: 'mobile.product.pb350.specItem2.value15-2'},
  {title: 'mobile.product.common.specItem.key6', content: 'mobile.product.pb350.specItem2.value6'},
  {title: 'mobile.product.common.specItem.key7', content: 'mobile.product.pb350.specItem2.value7'},
  {title: 'mobile.product.common.specItem.key8', content: 'mobile.product.pb350.specItem2.value8'},
  {title: 'mobile.product.common.specItem.key13', content: 'mobile.product.pb350.specItem2.value13'},
  {title: 'mobile.product.common.specItem.key14', content: 'mobile.product.pb350.specItem2.value14'},
];
const specImg = '/imgs/product/pb350/mobile/spec.png';
const specImg2 = '/imgs/product/pb350/mobile/spec2.png';
const isSpec = true;
const specType = 'quick';
const powerBank = true;
</script>

<style lang="scss" scoped>
</style>