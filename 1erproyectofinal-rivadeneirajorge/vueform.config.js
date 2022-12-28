import es from '@vueform/vueform/locales/es'
import vueform from '@vueform/vueform/themes/vueform'

export default {
  theme: vueform,
  locales: { es },
  locale: 'es',
  apiKey: 'p1uy-g9bu-jyzn-p2nf-obpl',
  endpoints: {
    create_user: {
      url: '/users',
      method: 'post'
    }
  }
}

