<template>
  <div class="index" v-if="deviceType === 'PC'">
    <Main />
  </div>
  <div class="index" v-else>
    <MainMobile />
  </div>
</template>
<script>
import Main from '~/components/main/Main.vue';
import MainMobile from '~/components/mobile/main/MainMobile.vue';

export default {
  components: { Main, MainMobile},
  props: ["deviceType"],
  setup() {
    useHead({
      title: '홈페이지',
      meta: [
        { name: 'description', content: '홈페이지 입니다.' }
      ],
    })
  }
}
</script>
<style lang="scss" scoped>
</style>