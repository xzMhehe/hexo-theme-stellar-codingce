/**
 * 404 v1 | https://github.com/xzMhehe/hexo-theme-stellar-codingce/
 */

hexo.extend.generator.register('404', function (locals) {
  return {
    path: '/404.html',
    layout: ['404']
  }
});