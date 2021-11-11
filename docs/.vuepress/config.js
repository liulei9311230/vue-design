const { resolve } = require('path')

module.exports = {
  base: '/vue-design/',
  lang: 'zh-CN',
  title: 'Vue_design',
  description: '这是我的第一个 VuePress 站点',
  home: '',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
        ['/zh/essence-of-comp', '组件的本质'],
        ['/zh/vnode', 'VNode的起源和意义'],
        ['/zh/h', '创建 VNode 的 h 函数'],
        ['/zh/renderer', '渲染器之挂载'],
        ['/zh/renderer-patch', '渲染器之patch'],
        ['/zh/renderer-diff', '渲染器的核心 Diff 算法'],
        ['/zh/renderer-advanced', '自定义渲染器'],
        ['/zh/stateful-component', '有状态组件的设计'],
        ['/zh/observer', '基于 Proxy 的响应系统'],
    ],
  },
  // themeConfig: {
  //   // displayAllHeaders: true,
  //   sidebarDepth: 2,
  //   locales: {
  //   },
  //   // sidebar: [
  //   //   ['/zh/essence-of-comp', '组件的本质'],
  //   //   ['/zh/vnode', '先设计 VNode 吧'],
  //   //   ['/zh/h', '辅助创建 VNode 的 h 函数'],
  //   //   ['/zh/renderer', '渲染器之挂载'],
  //   //   ['/zh/renderer-patch', '渲染器之patch'],
  //   //   ['/zh/renderer-diff', '渲染器的核心 Diff 算法'],
  //   //   ['/zh/renderer-advanced', '自定义渲染器'],
  //   //   ['/zh/stateful-component', '有状态组件的设计'],
  //   //   // ['/zh/observer', '基于 Proxy 的响应系统'],
  //   //   // ['/zh/component-expand', '组件的拓展']
  //   // ],
  //   docsDir: 'docs'
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@as': resolve(__dirname, './assets'),
        '@imgs': resolve(__dirname, './assets/imgs')
      }
    }
  }
}
