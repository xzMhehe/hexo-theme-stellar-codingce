/**
 * tags v1 | https://github.com/xzMhehe/hexo-theme-stellar-codingce/
 */

hexo.extend.generator.register('tags', function (locals) {
  if (locals.tags && locals.tags.length > 0) {
    return {
      path: hexo.config.tag_dir + '/index.html',
      data: locals.posts,
      layout: ['tags']
    }
  } else {
    return {};
  }
});
