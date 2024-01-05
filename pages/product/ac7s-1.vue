<template>
  <div v-if="deviceType === 'PC'">
    <AC7S />
  </div>
  <div v-else>
    <AC7S1Mobile />
  </div>
</template>

<script>
import AC7S from '~/components/product/slow/AC7S-1.vue';
import AC7S1Mobile from '~/components/mobile/product/slow/AC7S-1Mobile.vue';
export default {
  components: { AC7S, AC7S1Mobile },
  props: ["deviceType"],
  setup() {
    useHead({
      title: '스탠드형',
      meta: [
        { name: 'description', content: '성능을 발휘합니다.' }
      ],
    })
  }
}
</script>