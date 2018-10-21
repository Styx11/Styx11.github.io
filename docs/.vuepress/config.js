module.exports = {
  title: 'My Blog',
  description: 'Just playing around',
  themeConfig: {
    head: [
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './icons/hero.jpg' }]
    ],
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Blog',
        link: '/blog/JavaScript',
        items: [
          { text: 'JavaScipt', link: '/blog/JavaScript/' },
          { text: 'CSS', link: '/blog/CSS/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/Styx11' },
    ],
    sidebar: {
      '/blog/JavaScript/': [
        '',
        'one',  /* /foo/one.html */
        'two'
      ],
      '/blog/CSS/': [
        '',
        'one',
        'two'
      ]
    }
    // sidebar: [
    //   {
    //     title: 'JavaScript', // 侧边栏名称
    //     collapsable: false, // 可折叠
    //     children: [
    //       '/blog/JavaScript/another'
    //     ]
    //   },
    //   {
    //     title: 'CSS', // 侧边栏名称
    //     collapsable: false, // 可折叠
    //     children: [
    //       '/blog/CSS/CSS3', // 你的md文件地址
    //       '/blog/CSS/position'
    //     ]
    //   }
    // ]
  }
}