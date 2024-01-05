<template>
  <div class="product-wrap">
    <pre class="title f16 text-center font-weight-regular">
      <p>{{ $t(mainText) }}</p>
    </pre>
    <v-img :src="topImg" :alt="topImg.split('/')[5]">
      <div v-if="powerBank" v-for="name, idx in productNames">
        <p
          class="f15 b-white"
          :class="'product-name' + idx"
        >{{ name }}</p>
      </div>
      <div v-else>
        <p class="f19 b-white product-name">{{ productName }}</p>
      </div>
    </v-img>
    <div class="merit-box text-center">
      <p class="box-title f28 text-center">{{ $t('mobile.product.common.meritTitle') }}</p>
      <div
        v-for="item, idx in meritItem"
        class="merit-item"
      >
        <img :src="item.img" alt=""/>
        <div class="d-flex align-center justify-center pb-5">
          <div class="merit-text text-left">
            <p class="f16 pt-12 pb-5 pl-5 font-weight-bold">{{ $t(item.text1) }}</p>
            <pre><p class="f14 pb-12 pl-5 b-gray2">{{ $t(item.text2) }}</p></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="spec-box" v-if="isSpec">
      <p class="box-title f28 text-center pb-7">{{ $t('mobile.product.common.specTitle') }}</p>
      <div :class="specType === 'quick' ? 'quick-spec-table' : 'spec-table'">
        <div class="table">
          <div v-for="item in specItem" class="d-flex w-100">
            <div class="spec-title f14 b-white d-flex justify-center align-center">
              <p class="pt-1 pb-1">{{ $t(item.title) }}</p>
            </div>
            <div class="pl-4 spec-content">
              <p class="f14 pb-1">{{ $t(item.content) }}</p>
              <v-divider color="black"></v-divider>
            </div>
          </div>
        </div>
        <img :src="specImg" alt="">
      </div>
      <div v-if="powerBank" class="power-spec-table">
        <div class="table">
          <div v-for="item in specItem2" class="d-flex w-100">
            <div class="spec-title f14 b-white text-center">
              <p class="pt-1 pb-1">{{ $t(item.title) }}</p>
            </div>
            <div class="pl-4 spec-content">
              <div class="f14 pb-1 d-flex w-100">
                <p :class="item.content2 ? 'w-50' : ''">{{ $t(item.content) }}</p>
                <p v-if="item.content2">{{ $t(item.content2) }}</p>
              </div>
              <v-divider color="black"></v-divider>
            </div>
          </div>
        </div>
        <img :src="specImg2" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainText: { type: String },
    topImg: { type: String },
    productName: { type: String },
    productNames: { type: Array },
    meritItem: { type: Array },
    specItem: { type: Array },
    specItem2: { type: Array },
    specImg: { type: String },
    specImg2: { type: String },
    isSpec: { type: Boolean },
    specType: { type: String },
    powerBank: { type: Boolean }
  },
}
</script>

<style lang="scss" scoped>
.product-wrap {
  width: 90%; margin: 0 auto;
  .title {white-space: pre-wrap;}
  .product-name, .product-name0, .product-name1, .product-name2 {position: absolute; bottom: 0; padding-bottom: 5%;}
  .product-name {padding-left:5%;}
  .product-name0 {padding-left:15%;}
  .product-name1 {padding-left:50%;}
  .product-name2 {padding-left:78%;}
  .merit-box {
    .box-title { padding: 70px 0 30px;}
    .merit-item {
      img {width: 100%}
      .merit-text {
        width: 100%;
        background: var(--home-bg-gray);
      }
    }
  }
  .spec-box {
    .spec-table, .quick-spec-table, .power-spec-table {
      margin: 0 auto;
      .table {
        width: 100%;
        .spec-title {
          background: #444444;
          width: 25%;
          border-radius: 30px;
          margin-bottom: 10px;
        }
        .spec-content {width: 75%;}
      }
      img {width: 100%; padding: 50px 0 70px;}
    }
  }
}
</style>