<template>
  <div class="contact-wrap">
    <p class="title f50 d-flex justify-center">{{ $t('pc.contact.title') }}</p>
    <v-divider
      :thickness="2"
      class="border-opacity-100 mt-10 mb-10"
      color="black"
    ></v-divider>
    <div class="contact w-100">
      <form
        class="gform d-flex justify-space-around flex-wrap w-100"
        method="POST"
        :action=url
        target="frAttachFiles"
      >
        <div style="width: 50%;">
          <pre><p class="contact-text f32 pb-12">{{ $t('pc.contact.sub') }}</p></pre>
          <p class="contact-address f16 pb-8">
            <span class="font-weight-bold">[{{ $t('pc.common.head') }}]</span><br>
            {{$t('pc.common.headAddr2')}}<br>
            T. {{ $t('pc.common.headTel') }}
          </p>
          <p class="contact-address f16 pb-8">
            <span class="font-weight-bold">[{{ $t('pc.common.lab') }}]</span><br>
            {{ $t('pc.common.labAddr2') }}<br>
            T. {{ $t('pc.common.labTel') }}
          </p>
          <p>test@test.kr</p>
        </div>
        <div class="contact-form">
          <div>
            <v-select
              :items="types.map(type => $t(type))"
              :value="$t(selectedType)"
              @update:model-value="change"
              variant="outlined"
              name="type"
            ></v-select>
            <div v-if="selectedType.includes('채용') || selectedType.includes('採用')">
              <div v-for="item in formRecruit">
                <v-text-field
                  variant="outlined"
                  :label="$t(item.label)"
                  :type="item.type"
                  :name="item.name"
                  v-model="item.value"
                ></v-text-field>
              </div>
            </div>
            <div v-else>
              <div v-for="item in form">
                <v-text-field
                  variant="outlined"
                  :label="$t(item.label)"
                  :type="item.type"
                  :name="item.name"
                  v-model="item.value"
                ></v-text-field>
              </div>
            </div>
            <v-textarea :label="$t('pc.contact.placeholder.context')" variant="outlined" type="text" name="message" v-model="message"></v-textarea>
          </div>
        </div>
        <v-divider
          v-if="currentLocale === 'ko'"
          :thickness="2"
          class="border-opacity-100 mt-8"
          color="black"
        ></v-divider>
        <div class="terms w-100" v-if="currentLocale === 'ko'">
          <p class="pt-8 pb-8 pl-8 title f20 font-weight-bold">{{ $t('pc.contact.terms.title') }}</p>
          <pre><div class="terms-policy pl-4 pr-4 pt-4 pb-4">{{ $t('pc.contact.terms.content') }}</div></pre>
          <v-checkbox
            :label="$t('pc.contact.terms.agree')"
            v-model="agree"
            class="pl-4"
          ></v-checkbox>
        </div>
        <v-divider
          v-if="currentLocale === 'ko'"
          :thickness="2"
          class="border-opacity-100 mb-8"
          color="black"
        ></v-divider>
        <v-btn
          type="submit"
          rounded
          :ripple=false
          width="180"
          height="54"
          color="black"
          class="submit-btn"
          :disabled="currentLocale === 'ko' ? !agree : false"
          @click="submit"
        >{{ $t('pc.common.send') }}</v-btn>
      </form>
      <iframe name="frAttachFiles" style="display: none;"></iframe>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ $t(text) }}

      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
        >X</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '~/stores/language'
import config from '@/config/config.json'

interface FormItem {
  label: string;
  type: string;
  name: string;
  value: string;
}

const store = useLanguageStore();
const currentLocale = ref(store.lang);
watch(store, (val) => {
  if (val != null) currentLocale.value = val.lang;
});

const url = ref(config.google.url);
const agree = ref(false);
const types = [
  'pc.contact.placeholder.type1', 'pc.contact.placeholder.type2', 'pc.contact.placeholder.type3', 'pc.contact.placeholder.type4'
];
const selectedType = ref('pc.contact.placeholder.type1');
const form: Ref<FormItem[]> = ref([
  { label : 'pc.contact.placeholder.name', type: 'text', name: 'name', value: '' },
  { label : 'pc.contact.placeholder.company', type: 'text', name: 'company', value: '' },
  { label : 'pc.contact.placeholder.dept', type: 'text', name: 'dept', value: '' },
  { label : 'pc.contact.placeholder.mobile', type: 'text', name: 'mobile', value: '' },
  { label : 'pc.contact.placeholder.email', type: 'email', name: 'email', value: '' },
]);
const formRecruit: Ref<FormItem[]> = ref([
  { label : 'pc.contact.placeholder.name', type: 'text', name: 'name', value: '' },
  { label : 'pc.contact.placeholder.mobile', type: 'text', name: 'mobile', value: '' },
  { label : 'pc.contact.placeholder.email', type: 'email', name: 'email', value: '' },
]);
const message =  ref('');
const snackbar = ref(false);
const text = ref('pc.contact.snackbar');
const timeout = ref(2000);

const change = (value: any) => {
  selectedType.value = value;
};
const submit = () => {
  snackbar.value = !snackbar.value;
  setTimeout(() => {
    form.value.map((item: FormItem)=> item.value='');
    message.value = '';
    agree.value = !agree.value;
  },100);
};
</script>

<style lang="scss" scoped>
.contact-wrap {
  padding: 0 250px;
  .title {padding-top: 140px;}
  .contact {
    padding-bottom: 80px;
    .gform {
      .contact-form {
        width: 45%;
      }
      .terms {
        height: 354px;
        background: #f5f5f8;
        .terms-policy {
          border: 1px solid #999999;
          background: var(--home-white);
          height: 200px;
          margin: 0 30px 0;
          overflow-y: auto;
          overflow-x: auto;
        }
      }
    }
  }
}
</style>