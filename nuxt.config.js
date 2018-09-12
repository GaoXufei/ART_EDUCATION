module.exports = {
  head: {
    titleTemplate: '%s - 艺启学',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width = device-width, initial-scale = 1.0, maximum-scale = 1.0, user-scalable = 0' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  plugins: [
    '~plugins/mint-ui-plugins.js'
  ],
  build: {
    babel: {
      "plugins": [["component", [
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ]]]
    },

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
      require('postcss-viewport-units')({
        filterRule: rule => rule.selector.indexOf('::after') === -1
          && rule.selector.indexOf('::before') === -1
          && rule.selector.indexOf(':after') === -1
          && rule.selector.indexOf(':before') === -1
      }),
      require('cssnano')({
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      }),

    ]
  }
}