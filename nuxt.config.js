export default {
  components: true,
  ssr: true,
  target: 'static',
  modern: 'client',
  head: {
    title: 'example-nuxt-ie',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
  loading: { color: '#fff' },
  build: {
    transpile: ['ufo']
  }
}
