/**
 * categories v1 | https://github.com/xzMhehe/hexo-theme-stellar-codingce/
 */

hexo.extend.generator.register('categories', function (locals) {
  if (locals.categories && locals.categories.length > 0) {
    return {
      path: hexo.config.category_dir + '/index.html',
      data: locals.posts,
      layout: ['categories']
    }
  } else {
    return {};
  }
});
