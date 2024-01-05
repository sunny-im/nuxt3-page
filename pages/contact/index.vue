<template>
  <div v-if="deviceType === 'PC'">
    <Contact/>
  </div>
  <div v-else>
    <ContactMobile/>
  </div>
</template>
<script>
import Contact from '~/components/contact/Contact.vue';
import ContactMobile from '~/components/mobile/contact/ContactMobile.vue';

export default {
  components: { Contact, ContactMobile },
  props: ["deviceType"],
  setup() {
    useHead({
      title: '문의하기',
      meta: [
        { name: 'description', content: '문의내용을 작성해주세요.' }
      ],
    })
  }
}
</script>