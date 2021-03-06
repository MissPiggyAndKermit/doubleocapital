const environment = process.env.NODE_ENV || 'local'
const env = require(`./env/${environment}.js`)

module.exports = {
  generate: {
    fallback: true,
    dir: 'docs'
  },
  mode: 'spa',
  target: 'static',
  router: {
    base: env.BASE_URL
  },
  head: {
    title: 'Double O Capital Ltd.',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
      }, {
        name: 'robots',
        content: 'noindex'
      }, {
      }, {
        name: 'googlebot',
        content: 'noindex'
      }, {
        hid: 'description',
        name: 'description',
        content: '持続可能な資産運用を誠実にサポートする、Double O Capital Ltd.のwebサイトです。最新のマネートレンド情報から一生涯マンツーマン型で継続的な価値ある提案を。'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Double O Capital Ltd.'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://double-o.jp'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: 'Double O Capital Ltd.'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Double O Capital Ltd.'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://haruka-sano.github.io/doubleocapital/og-image.png'
      }, {
        name: 'application-name',
        content: 'Double O Capital Ltd.'
      },
      { name: "msapplication-TileColor", content: "#E60012" },
      { name: "msapplication-TileImage", content: `${env.BASE_URL}mstile-150x150.png` },
      { name: "msapplication-config", content: `${env.BASE_URL}browserconfig.xml` },
      { name: "theme-color", content: "#E60012" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${env.BASE_URL}favicon.ico` },
      { rel: 'apple-touch-icon', type: 'image/png', href: `${env.BASE_URL}apple-touch-icon.png` },
      { rel: "icon", type: "image/png", href: `${env.BASE_URL}favicon-16x16.png`, sizes: "16x16" },
      { rel: "icon", type: "image/png", href: `${env.BASE_URL}favicon-32x32.png`, sizes: "32x32" },
      { rel: "icon", type: "image/png", href: `${env.BASE_URL}android-chrome-192x192.png`, sizes: "192x192" },
      { rel: "icon", type: "image/png", href: `${env.BASE_URL}android-chrome-256x256.png`, sizes: "256x256" },
      { rel: "manifest", href: `${env.BASE_URL}site.webmanifest` },
      { rel: "mask-icon", href: `${env.BASE_URL}safari-pinned-tab.svg`, color: "#231815" },
      { rel: "shortcut icon", href: `${env.BASE_URL}favicon.ico` }
    ]
  },
  //loading: false,
  loading: {
    color: '#E60012',
    height: '2px',
    throttle: 0
  },
  css: [
    '~/assets/css/style.styl'
  ],
  plugins: [
    {
      src: '~/plugins/vue-parallax-js',
      ssr: false
    }, '~/plugins/scroll', '~/plugins/vue-scrollto'
  ],
  modules: [
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics', {
        id: ''
      }
    ],
  ],
  styleResources: {
    stylus: './assets/css/_variables.styl'
  },
  /*
  build: extend = function(config, ctx) {
    plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    return pass;
  }
  */
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    }
  }
}
