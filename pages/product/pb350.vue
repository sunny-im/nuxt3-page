<template>
  <div v-if="deviceType === 'PC'">
    <PB350 />
  </div>
  <div v-else>
    <PB350Mobile />
  </div>
</template>

<script>
import PB350 from '~/components/product/powerbank/PB350.vue';
import PB350Mobile from '~/components/mobile/product/powerbank/PB350Mobile.vue';

export default {
  components: { PB350,PB350Mobile },
  props: ["deviceType"],
  setup() {
    useHead({
      title: '충전',
      meta: [
        { name: 'description', content: '충전' }
      ],
    })
  }
}
</script>