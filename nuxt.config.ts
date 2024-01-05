interface LangMap {
  en: string;
  ja: string;
  ko: string;
}
const langMap: LangMap = {
  en: 'en',
  ja: 'jp',
  ko: 'ko'
}
export default defineNuxtConfig({
  components: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'homepage',
      meta: [
        { hid: 'og:author', property: 'og:author', content: 'sunny.im'},
        { hid: 'og:title', property: 'og:title', content: '홈페이지'},
        { hid: 'og:description', property: 'og:description', content: '홈페이지입니다'},
        { hid: 'og:keyword', property: 'og:keyword', content: 'nuxt3, 홈페이지, vue'},
        { hid: 'og:image', property: 'og:image', content: '/imgs/logo.png'},
        {name: 'theme-color', content: '#ffffff'},
        {name: 'naver-site-verification', content: 'da72e2521e537aa89fb138b492815e229fb94938'},
        {name: 'google-site-verification', content: '5ZxWNyBuUByhSW_DCR1xvWvRFkPGKX1XEGegg3xWEMM'},
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          src: 'https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js',
          type: 'text/javascript',
        },
      ],
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-gtag'
  ],
  imports: {
    dirs: ['./stores']
  },
  i18n: {
    defaultLocale: process.client ? (langMap[localStorage.getItem('lang') as keyof LangMap] || 'ko') : 'ko',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    locales: [
      {code: 'ko', iso: 'ko_KR', file: './locales/ko.json', name: 'Korean'},
      {code: 'en', iso: 'en-US', file: './locales/en.json', name: 'English'},
      {code: 'ja', iso: 'ja_JP', file: './locales/jp.json', name: 'Japanese'},
    ],
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify', '@fawmi/vue-google-maps'],
  },
  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      gtagId: 'GTM-P6VG4XWS',
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    '@/plugins/vue-global-setup',
  ],
  nitro: {
    prerender: {
      routes: [ '/rss', '/sitemap' ]
    }
  },
  gtag: {
    id: 'G-LMKFMJRVWE'
  }
})