/**
 * friends.js v1 | https://github.com/xzMhehe/hexo-theme-stellar-codingce/
 * 格式与官方标签插件一致使用空格分隔，中括号内的是可选参数（中括号不需要写出来）
 *
 * {% ghcard user/repo [theme:xxx] %} or {% ghcard user %}
 *
 * example:
 * {% ghcard xaoxuu %}
 * {% ghcard xaoxuu/hexo-theme-stellar %}
 *
 * API: https://github.com/anuraghazra/github-readme-stats
 */

'use strict';

hexo.extend.tag.register('ghcard', function(args) {
  var params = ['show_owner', 'theme', 'title_color', 'text_color', 'icon_color', 'bg_color', 'hide_border', 'cache_seconds', 'locale'];
  args = hexo.args.map(args, params, ['repo']);
  const path = args.repo;
  var el = '';
  el += '<div class="tag-plugin ghcard">';
  el += '<a class="ghcard" rel="external nofollow noopener noreferrer" href="https://github.com/' + path + '">';
  let url = '';
  if (path.includes('/')) {
    // is repo
    const ps = path.split('/');
    url += 'https://github-readme-stats.vercel.app/api/pin/?username=' + ps[0] + '&repo=' + ps[1];
  } else {
    // is user
    url += 'https://github-readme-stats.vercel.app/api/?username=' + path;
  }
  url += '&' + hexo.args.joinURLParams(args, params);
  if (!url.includes('&show_owner=')) {
    url += '&show_owner=true';
  }
  el += '<img src="' + url + '"/>';
  el += '</a></div>';
  return el;
});
