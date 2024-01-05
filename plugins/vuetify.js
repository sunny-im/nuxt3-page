import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        variables: {},
        colors: {
          primary: '#0069B8',
          secondary: '#ccc',
          accent: '#AA6063',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          black: '#000000',
          red: '#d21123',
          white: '#ffffff'
        }
      }
    },
  })
  nuxtApp.vueApp.use(vuetify)
})