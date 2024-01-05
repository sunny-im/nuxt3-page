<template>
  <div class="lang-wrap">
    <v-list
      class="d-flex"
    >
      <v-list-item
        v-for="item in languageList"
        :key="item.name"
        min-height="17"
        :ripple="false"
        variant="plain"
        :class="{ 'selected-lang': item.value === selectedLang, 'lang': true }"
        @click="selectLanguage(item.value)"
      >
        <v-list-item-title
          v-text="item.name"
          class="lang-title"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '~/stores/language'
import { useI18n } from 'vue-i18n';

const languageList = [
  { name: 'KR', value: 'ko' },
  { name: 'JP', value: 'ja' },
  { name: 'EN', value: 'en' },
];
const selectedLang = ref('');
const store = useLanguageStore();
const { locale, setLocale } = useI18n();

onMounted(() => {
  const savedLang = localStorage.getItem('lang');
  const defaultLang = savedLang || 'ko';
  if (defaultLang) {
    changeLanguage(defaultLang);
    store.setLanguage(defaultLang);
  }
});

const selectLanguage = (value: any) => {
  setLocale(value);
  selectedLang.value = value;
  setLanguage();
};

const changeLanguage = (locale: any) => {
  setLocale(locale);
  selectedLang.value = locale;
};

const setLanguage = () => {
  store.setLanguage(selectedLang.value);
};
</script>

<style lang="scss" scoped>
.lang-wrap {
  width: 76px;
  .lang, .selected-lang {
    padding: 0 7px 0 0;
    color: #191919;
    opacity: 0.6;
    .lang-title {font-size: 14px;}
  }
  .selected-lang {
    text-decoration: underline;
    opacity: 1;
  }
}
</style>