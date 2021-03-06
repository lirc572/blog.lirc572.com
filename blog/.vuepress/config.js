module.exports = {
  title: 'lirc572\'s Blog',
  description: 'lirc572\'s blog',
  theme: '@vuepress/theme-blog',
  head: [
    ['link', { rel: 'icon', href: '/icon/lirc572.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    /* The next 3 lines are for metingjs + aplayer */
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js' }],
  ],
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: {
          '/': 'Warning',
          '/zh/': '注意',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'dangerous',
        defaultTitle: {
          '/': 'Warning',
          '/zh/': '警告',
        },
      },
    ],
    [
      require('./meting-plugin.js')
    ],
    [
      require('./deprecated')
    ],
  ],
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#dateformat
     */
    dateFormat: 'ddd YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#nav
     */
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: 'About',
        link: '/about/',
      }
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/lirc572',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/lirc572',
        },
        {
          type: 'mail',
          link: 'mailto:lirc572@gmail.com',
        }
      ],
      copyright: [
        {
          text: 'Powered by VuePress | lirc572 © 2020-present',
          link: '/',
        },
      ],
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#directories
     */
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      }
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#frontmatters
     */
    // frontmatters: [
    //   {
    //     id: "tag",
    //     keys: ['tag', 'tags'],
    //     path: '/tag/',
    //   },
    //   {
    //     id: "location",
    //     keys: ['location'],
    //     path: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#globalpagination
     */
    // globalPagination: {
    //   lengthPerPage: 10,
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#sitemap
     */
    sitemap: {
      hostname: 'https://blog.lirc572.com/'
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
     */
    comment: {
      service: 'disqus',
      shortname: 'lirc572',
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
     */
    // newsletter: {
    //   endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    // },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
     */
    // feed: {
    //   canonical_base: 'https://example.vuepress-theme-blog.ulivz.com/',
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
     */
    // summary:false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
     */
    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
     */
    pwa: {
      serviceWorker: true,
      updatePopup: true,
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
     */
    smoothScroll: true
  },
}
