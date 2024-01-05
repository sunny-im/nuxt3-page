<template>
  <div v-if="deviceType === 'PC'">
    <Company/>
  </div>
  <div v-else>
    <CompanyMobile/>
  </div>
</template>
<script>
import Company from '~/components/company/Company.vue';
import CompanyMobile from '~/components/mobile/company/CompanyMobile.vue';

export default {
  components: { Company, CompanyMobile },
  props: ["deviceType"],
  setup() {
    useHead({
      title: '기업소개',
      meta: [
        { name: 'description', content: '기업소개' }
      ],
    })
  }
}
</script>