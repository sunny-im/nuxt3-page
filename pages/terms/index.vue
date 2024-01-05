<template>
  <div v-if="deviceType === 'PC'">
    <Terms/>
  </div>
  <div v-else>
    <TermsMobile/>
  </div>
  
</template>
<script>
import Terms from '~/components/terms/Terms.vue';
import TermsMobile from '~/components/mobile/terms/TermsMobile.vue';

export default {
  components: { Terms, TermsMobile },
  props: ["deviceType"],
}
</script>