<template>
  <div v-if="deviceType === 'PC'">
    <Recruit />
  </div>
  <div v-else>
    <RecruitMobile />
  </div>
</template>

<script>
import Recruit from '~/components/recruit/Recruit.vue';
import RecruitMobile from '~/components/mobile/recruit/RecruitMobile.vue';

export default {
  components: { Recruit, RecruitMobile },
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