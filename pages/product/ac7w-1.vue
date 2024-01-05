<template>
  <div v-if="deviceType === 'PC'">
    <AC7W />
  </div>
  <div v-else>
    <AC7W1Mobile />
  </div>
</template>

<script>
import AC7W from '~/components/product/slow/AC7W-1.vue';
import AC7W1Mobile from '~/components/mobile/product/slow/AC7W-1Mobile.vue';

export default {
  components: { AC7W, AC7W1Mobile },
  props: ["deviceType"],
  setup() {
    useHead({
      title: '벽부형',
      meta: [
        { name: 'description', content: '성능을 발휘합니다.' }
      ],
    })
  }
}
</script>