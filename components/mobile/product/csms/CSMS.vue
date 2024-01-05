<template>
  <ProductTemplate
    :mainText="mainText"
    :topImg="topImg"
    :productName="productName"
    :meritItem="meritItem"
  />
</template>

<script>
import ProductTemplate from '../../common/ProductTemplate.vue'

export default {
  components: { ProductTemplate },
  data: () => ({
    mainText: 'product.csms.mainText',
    topImg: '/imgs/product/csms/top.png',
    productName: 'CSMS',
    meritItem: [
      {
        img: '/imgs/product/csms/merit1.png',
        text1: 'product.csms.merit.1.text1',
        text2: 'product.csms.merit.1.text2'
      },
      {
        img: '/imgs/product/csms/merit2.png',
        text1: 'product.csms.merit.2.text1',
        text2: 'product.csms.merit.2.text2'
      },
      {
        img: '/imgs/product/csms/merit3.png',
        text1: 'product.csms.merit.3.text1',
        text2: 'product.csms.merit.3.text2'
      },
      {
        img: '/imgs/product/csms/merit4.png',
        text1: 'product.csms.merit.4.text1',
        text2: 'product.csms.merit.4.text2'
      }
    ],
    isSpec: false,
  }),
}
</script>

<style lang="scss" scoped>
</style>