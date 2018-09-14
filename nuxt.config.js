module.exports = {
  loading: {
    color: '#66CDAA'
  },
  // 设置头部
  head: {
    titleTemplate: '%s - 艺启学',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width = device-width, initial-scale = 1.0, maximum-scale = 1.0, user-scalable = 0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Meta description'
      }
    ]
  },
  css: [
    // 引入reset
    '~/assets/lib/style/reset.css',
    '~/assets/lib/style/default.css',
  ],
  plugins: [
    // 引入mint-ui
    '~plugins/mint-ui-plugins.js'
  ],
  build: {
    // 引入公共scss
    styleResources: {
      // 主题
      scss: './assets/themes/default.scss',
    },
    // 按需加载mint-ui
    babel: {
      "plugins": [
        ["component", [{
          "libraryName": "mint-ui",
          "style": true
        }]]
      ]
    },
    // 设置vw
    postcss: [
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-px-to-viewport')({
        viewportWidth: 750,
        viewportHeight: 1334,
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore', '.hairlines'],
        minPixelValue: 1,
        mediaQuery: false
      }),
      require('postcss-aspect-ratio-mini')(),
      require('postcss-cssnext')(),
      // 解决postcss-viewport-units与mint-ui冲突
      require('postcss-viewport-units')({
        filterRule: rule => rule.selector.indexOf('::after') === -1 &&
          rule.selector.indexOf('::before') === -1 &&
          rule.selector.indexOf(':after') === -1 &&
          rule.selector.indexOf(':before') === -1
      }),
      require('cssnano')({
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      }),

    ]
  }
}