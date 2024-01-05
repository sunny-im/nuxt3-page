<template>
  <div v-if="deviceType === 'PC'">
    <CSMS />
  </div>
  <div v-else>
    <CSMSMobile />
  </div>
</template>

<script>
import CSMS from '~/components/product/csms/CSMS.vue';
import CSMSMobile from '~/components/mobile/product/csms/CSMSMobile.vue';

export default {
  components: { CSMS, CSMSMobile },
  props: ["deviceType"],
  setup() {
    useHead({
      title: 'CSMS(Charging Station Management System)',
      meta: [
        { name: 'description', content: '통합관제시스템입니다.' }
      ],
    })
  }
}
</script>