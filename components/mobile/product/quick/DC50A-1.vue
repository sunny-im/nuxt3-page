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

<script>
import ProductTemplate from '../../common/ProductTemplate.vue'

export default {
  components: { ProductTemplate },
  data: () => ({
    mainText: 'product.dc50a-1.mainText',
    topImg: '/imgs/product/dc50a-1/top.png',
    productName: 'BDC1-050-A',
    meritItem: [
      {
        img: '/imgs/product/dc50a-1/merit1.png',
        text1: 'product.dc50a-1.merit.1.text1',
        text2: 'product.dc50a-1.merit.1.text2'
      },
      {
        img: '/imgs/product/dc50a-1/merit2.png',
        text1: 'product.dc50a-1.merit.2.text1',
        text2: 'product.dc50a-1.merit.2.text2'
      },
      {
        img: '/imgs/product/dc50a-1/merit3.png',
        text1: 'product.dc50a-1.merit.3.text1',
        text2: 'product.dc50a-1.merit.3.text2'
      },
      {
        img: '/imgs/product/dc50a-1/merit4.png',
        text1: 'product.dc50a-1.merit.4.text1',
        text2: 'product.dc50a-1.merit.4.text2'
      },
      {
        img: '/imgs/product/dc50a-1/merit5.png',
        text1: 'product.dc50a-1.merit.5.text1',
        text2: 'product.dc50a-1.merit.5.text2'
      },
      {
        img: '/imgs/product/dc50a-1/merit6.png',
        text1: 'product.dc50a-1.merit.6.text1',
        text2: 'product.dc50a-1.merit.6.text2'
      }
    ],
    specItem: [
      {title: 'product.common.specItem.key1', content: 'product.dc50a-1.specItem.value1'},
      {title: 'product.common.specItem.key2', content: 'product.dc50a-1.specItem.value2'},
      {title: 'product.common.specItem.key3', content: 'product.dc50a-1.specItem.value3'},
      {title: 'product.common.specItem.key4', content: 'product.dc50a-1.specItem.value4'},
      {title: 'product.common.specItem.key5', content: 'product.dc50a-1.specItem.value5'},
      {title: 'product.common.specItem.key6', content: 'product.dc50a-1.specItem.value6'},
      {title: 'product.common.specItem.key7', content: 'product.dc50a-1.specItem.value7'},
      {title: 'product.common.specItem.key8', content: 'product.dc50a-1.specItem.value8'},
      {title: 'product.common.specItem.key9', content: 'product.dc50a-1.specItem.value9'},
      {title: 'product.common.specItem.key10', content: 'product.dc50a-1.specItem.value10'},
      {title: 'product.common.specItem.key11', content: 'product.dc50a-1.specItem.value11'},
      {title: 'product.common.specItem.key13', content: 'product.dc50a-1.specItem.value13'},
      {title: 'product.common.specItem.key14', content: 'product.dc50a-1.specItem.value14'},
    ],
    specImg: '/imgs/product/dc50a-1/spec.png',
    isSpec: true,
    specType: 'quick',
  }),
}
</script>

<style lang="scss" scoped>
</style>