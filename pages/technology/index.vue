<template>
  <div v-if="deviceType === 'PC'">
    <Technology/>
  </div>
  <div v-else>
    <TechnologyMobile />
  </div>
</template>

<script>
import Technology from '~/components/technology/Technology.vue';
import TechnologyMobile from '~/components/mobile/technology/TechnologyMobile.vue';

export default {
  components: { Technology, TechnologyMobile },
  props: ["deviceType"],
  setup() {
    useHead({
      title: '기술',
      meta: [
        { name: 'description', content: '모든 것을 담습니다.' }
      ],
    })
  }
}
</script>