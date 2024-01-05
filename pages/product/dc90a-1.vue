<template>
  <div v-if="deviceType === 'PC'">
    <DC90A />
  </div>
  <div v-else>
    <DC90A1Mobile />
  </div>
</template>

<script>
import DC90A from '~/components/product/quick/DC90A-1.vue';
import DC90A1Mobile from '~/components/mobile/product/quick/DC90A-1Mobile.vue';

export default {
  components: { DC90A,DC90A1Mobile },
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