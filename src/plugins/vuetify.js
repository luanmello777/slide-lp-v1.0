/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#000A14', // Azul Escuro
          secondary: '#72FFFF', // Azul Claro
          terciary: '#FFC50D', // Amarelo
          quartiary: '#DC3657' // Vermelho Rosado
        },
      },
    },
  },
})
