<template>
  <div v-if="deviceType === 'PC'">
    <DC100 />
  </div>
  <div v-else>
    <DC1001Mobile />
  </div>
</template>

<script>
import DC100 from '~/components/product/quick/DC100-1.vue';
import DC1001Mobile from '~/components/mobile/product/quick/DC100-1Mobile.vue';

export default {
  components: { DC100,DC1001Mobile },
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