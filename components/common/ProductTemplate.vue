<template>
  <div class="product-wrap d-flex flex-column align-center">
    <pre>
      <p class="title f28 d-flex justify-center text-center font-weight-regular">
        {{ $t(mainText) }}
      </p>
    </pre>
    <div>
      <v-img :src="topImg" alt="BAC1-007S" width="1420" height="980">
        <div v-if="powerBank" v-for="name, idx in productNames">
          <p
            class="f42 b-white"
            :class="'product-name' + idx"
          >{{ name }}</p>
        </div>
        <div v-else>
          <p class="f42 b-white product-name">{{ productName }}</p>
        </div>
      </v-img>
    </div>
    <div class="merit-box">
      <p class="box-title f50 d-flex justify-center">{{ $t('pc.product.common.meritTitle') }}</p>
      <div
        v-for="item, idx in meritItem"
        class="d-flex justify-center merit-item"
      >
        <template v-if="idx % 2 === 0">
          <img :src="item.img" alt=""/>
          <div class="merit-text right text-left">
            <p class="f28 pb-5">{{ $t(item.text1) }}</p>
            <pre><p class="f18-2 b-gray2">{{ $t(item.text2) }}</p></pre>
          </div>
        </template>
        <template v-else>
          <div class="merit-text left text-right">
            <p class="f28 pb-5">{{ $t(item.text1) }}</p>
            <pre><p class="f18-2 b-gray2">{{ $t(item.text2) }}</p></pre>
          </div>
          <img :src="item.img" alt="">
        </template>
      </div>
    </div>
    <div class="spec-box" v-if="isSpec">
      <p class="box-title f50 d-flex justify-center">{{ $t('pc.product.common.specTitle') }}</p>
      <div
        class="d-flex justify-center w-100 align-center"
        :class="specType === 'quick' ? 'quick-spec-table' : 'spec-table'"
      >
        <div density="compact" class="table">
          <div v-for="item in specItem" class="d-flex">
            <div class="spec-title f18-2 d-flex align-center justify-center b-white">
              <p>{{ $t(item.title) }}</p>
            </div>
            <div class="pl-10 d-flex align-start justify-center flex-column">
              <p class="f18-1">{{ $t(item.content) }}</p>
              <v-divider
                color="black"
                width="600"
              ></v-divider>
            </div>
          </div>
        </div>
        <img :src="specImg" alt="">
      </div>
      <div
        v-if="powerBank"
        class="power-spec-table d-flex justify-space-between align-center w-100"
      >
        <div density="compact" class="table">
          <div v-for="item in specItem2" class="d-flex">
            <div class="spec-title f18-2 d-flex align-center justify-center b-white">
              <p class="">{{ $t(item.title) }}</p>
            </div>
            <div class="pl-10 d-flex align-start justify-center flex-column">
              <div class="f18-1 d-flex">
                <p style="width: 270px;">{{ $t(item.content) }}</p>
                <p v-if="item.content2">{{ $t(item.content2) }}</p>
              </div>
              <v-divider
                color="black"
                width="600"
              ></v-divider>
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
    mainText: String,
    topImg: String,
    productName: String,
    productNames: Array,
    meritItem: Array,
    specItem: Array,
    specItem2: Array,
    specImg: String,
    specImg2: String,
    isSpec: Boolean,
    specType: String,
    powerBank: Boolean
  },
}
</script>

<style lang="scss" scoped>
.product-wrap {
  padding: 0 250px;
  .title { padding-top: 140px; }
  .product-name, .product-name0, .product-name1, .product-name2 {position: absolute; bottom: 0; padding-bottom: 80px;}
  .product-name {padding-left:80px;}
  .product-name0 {padding-left:330px;}
  .product-name1 {padding-left:802px;}
  .product-name2 {padding-left:1078px;}
  .merit-box {
    width: 1420px;
    padding: 200px 0 140px 0;
    .merit-item {
      img {width: 710px; height: 400px;}
      .merit-text {
        width: 710px;
        padding-top: 135px;
        background: var(--home-bg-gray);
      }
      .left { padding-right: 100px;}
      .right { padding-left: 100px;}
    }
  }
  .box-title { padding-bottom: 60px;}
  .spec-box {
    .spec-table, .quick-spec-table, .power-spec-table {
      margin-bottom: 140px;
      .table {
        width: 840px;
        .spec-title {
          background: #444444;
          border-radius: 30px;
          width: 160px;
          height: 40px;
          margin-bottom: 10px;
        }
      }
    }
    .spec-table {height: 540px;}
    .quick-spec-table {height: 640px;}
    .power-spec-table {height: 390px;}
  }
}
</style>