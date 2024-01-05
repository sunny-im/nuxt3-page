<template>
  <div id="contact-wrap">
    <p class="title f28 d-flex justify-center pt-12">{{ $t('mobile.contact.title') }}</p>
    <v-divider
      :thickness="2"
      class="border-opacity-100 mt-5 mb-5"
      color="black"
    ></v-divider>
    <div class="contact">
      <div>
        <pre><p class="contact-text f23 font-weight-bold pb-8">{{ $t('mobile.contact.sub') }}</p></pre>
        <p class="contact-address f14 pb-8">
          <span class="font-weight-bold">[{{ $t('mobile.common.head') }}]</span><br>
          {{$t('mobile.common.headAddr2')}}<br>
          T. {{ $t('mobile.common.headTel') }}
        </p>
        <p class="contact-address f14 pb-8">
          <span class="font-weight-bold">[{{ $t('mobile.common.lab') }}]</span><br>
          {{ $t('mobile.common.labAddr2') }}<br>
          T. {{ $t('mobile.common.labTel') }}
        </p>
        <p class="pb-10">test@test.kr</p>
      </div>
      <form
        class="gform"
        method="POST"
        :action=url
        target="frAttachFiles"
      >
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
                center-affix
                  variant="outlined"
                  :label="$t(item.label)"
                  :type="item.type"
                  :name="item.name"
                  v-model="item.value"
                ></v-text-field>
              </div>
            </div>
            <v-textarea :label="$t('mobile.contact.placeholder.context')" variant="outlined" type="text" name="message" v-model="message"></v-textarea>
          </div>
        </div>
        <v-divider
          v-if="currentLocale === 'ko'"
          :thickness="2"
          class="border-opacity-100 mt-8"
          color="black"
        ></v-divider>
        <div class="terms w-100" v-if="currentLocale === 'ko'">
          <p class="pt-3 pb-3 pl-3 title f14 font-weight-bold">{{ $t('mobile.contact.terms.title') }}</p>
          <pre><div class="terms-policy pl-3 pr-3 pt-3 pb-3">{{ $t('mobile.contact.terms.content') }}</div></pre>
          <v-checkbox
            :label="$t('mobile.contact.terms.agree')"
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
        <div class="d-flex justify-center">
          <v-btn
            type="submit"
            rounded
            :ripple=false
            width="100"
            height="40"
            color="black"
            class="submit-btn"
            :disabled="currentLocale === 'ko' ? !agree : false"
            @click="submit"
          >{{ $t('mobile.common.send') }}</v-btn>
        </div>
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
const types = [ 'mobile.contact.placeholder.type1', 'mobile.contact.placeholder.type2', 'mobile.contact.placeholder.type3', 'mobile.contact.placeholder.type4' ];
const selectedType = ref('mobile.contact.placeholder.type1');
const form: Ref<FormItem[]> = ref([
  { label : 'mobile.contact.placeholder.name', type: 'text', name: 'name', value: '' },
  { label : 'mobile.contact.placeholder.company', type: 'text', name: 'company', value: '' },
  { label : 'mobile.contact.placeholder.dept', type: 'text', name: 'dept', value: '' },
  { label : 'mobile.contact.placeholder.mobile', type: 'text', name: 'mobile', value: '' },
  { label : 'mobile.contact.placeholder.email', type: 'email', name: 'email', value: '' },
]);
const formRecruit: Ref<FormItem[]> = ref([
  { label : 'mobile.contact.placeholder.name', type: 'text', name: 'name', value: '' },
  { label : 'mobile.contact.placeholder.mobile', type: 'text', name: 'mobile', value: '' },
  { label : 'mobile.contact.placeholder.email', type: 'email', name: 'email', value: '' },
]);
const message =  ref('');
const snackbar = ref(false);
const text = ref('mobile.contact.snackbar');
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
#contact-wrap {
  width: 90%;
  margin: 0 auto;
  .contact {
    padding-bottom: 70px;
    .gform {
      .terms {
        height: 354px;
        background: #f5f5f8;
        overflow-y: hidden;
        .terms-policy {
          border: 1px solid #999999;
          background: var(--home-white);
          height: 250px;
          margin: 0 14px 0;
          overflow-y: hidden;
          overflow-x: auto;
        }
      }
    }
  }
}
</style>