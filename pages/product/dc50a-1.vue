<template>
  <div v-if="deviceType === 'PC'">
    <DC50A />
  </div>
  <div v-else>
    <DC50A1Mobile />
  </div>
</template>

<script>
import DC50A from '~/components/product/quick/DC50A-1.vue';
import DC50A1Mobile from '~/components/mobile/product/quick/DC50A-1Mobile.vue';

export default {
  components: { DC50A,DC50A1Mobile },
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