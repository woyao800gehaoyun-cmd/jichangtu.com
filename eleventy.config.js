import pluginRss from '@11ty/eleventy-plugin-rss';
import path from 'node:path';

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({ public: '/' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'assets/js' });

  eleventyConfig.addWatchTarget('./src/assets/css/');
  eleventyConfig.addWatchTarget('./src/assets/js/');

  eleventyConfig.addFilter('dateZh', (value) => {
    const date = value instanceof Date ? value : new Date(value);
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Shanghai',
    }).format(date);
  });

  eleventyConfig.addFilter('isoDate', (value) => {
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString();
  });

  eleventyConfig.addFilter('limit', (array, limit) => (array ?? []).slice(0, limit));
  eleventyConfig.addFilter('json', (value) => JSON.stringify(value));
  eleventyConfig.addFilter('startsWith', (value = '', prefix = '') => value.startsWith(prefix));
  eleventyConfig.addFilter('rejectUrl', (array = [], url = '') => array.filter((item) => item.url !== url));
  eleventyConfig.addFilter('unique', (array = []) => [...new Set(array)]);
  eleventyConfig.addFilter('pluck', (array = [], pathValue = '') => {
    const keys = pathValue.split('.');
    return array.map((item) => keys.reduce((value, key) => value?.[key], item)).filter(Boolean);
  });

  eleventyConfig.addFilter('relativeAsset', (pageUrl, assetPath) => {
    const cleanUrl = pageUrl === '/' ? '' : pageUrl.replace(/^\//, '').replace(/\/$/, '');
    const depth = cleanUrl ? cleanUrl.split('/').length : 0;
    return `${depth ? '../'.repeat(depth) : './'}${assetPath.replace(/^\//, '')}`;
  });

  eleventyConfig.addFilter('absoluteUrl', (url, base) => new URL(url, base).href);
  eleventyConfig.addFilter('urlEncode', (value = '') => encodeURIComponent(value));

  eleventyConfig.addCollection('posts', (collectionApi) =>
    collectionApi.getFilteredByGlob('src/blog/posts/*.md')
      .filter((post) => !post.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection('featuredPosts', (collectionApi) =>
    collectionApi.getFilteredByGlob('src/blog/posts/*.md')
      .filter((post) => !post.data.draft && post.data.featured)
      .sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    templateFormats: ['njk', 'md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    pathPrefix: '/',
  };
}
