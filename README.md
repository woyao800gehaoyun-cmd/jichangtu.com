# 机场图 · Eleventy 中文 SEO 内容站

这是一个使用 Eleventy、Nunjucks、Markdown 与 Tailwind CSS 构建的纯静态中文内容站，适合长期发布评测、教程、对比、专题和品牌资料页。

## 技术栈

- Eleventy（11ty）静态站点生成器
- Nunjucks 页面与组件模板
- Markdown 文章内容
- Tailwind CSS
- RSS、Sitemap、Open Graph 与 JSON-LD
- GitHub 代码托管 + Cloudflare Pages 部署

## 本地开发

```bash
npm install
npm run dev
```

开发命令会同时启动 Tailwind CSS 监听和 Eleventy 本地服务器。请访问终端显示的 `http://localhost:8080/`，不要直接打开源文件。

## 构建与预览

```bash
npm run build
npx @11ty/eleventy --serve
```

构建产物位于 `_site/`。所有页面均使用相对 CSS 和 JavaScript 资源路径，即使页面位于多层目录中也能正确找到资源。

## 内容维护

文章位于 `src/blog/posts/`。复制现有 Markdown 文件并修改 front matter，即可生成新的文章详情页，并自动加入首页、文章索引、RSS 和 Sitemap。

主要配置位置：

```text
src/_data/site.js        站点名称、域名、描述
src/_data/navigation.js  顶部导航
src/_data/sections.js    栏目页数据
src/_data/home.js        首页卡片和 FAQ 数据
```

## Cloudflare Pages

- Build command：`npm run build`
- Build output directory：`_site`
- Node.js：22 或更高

Cloudflare Pages 应连接整个 GitHub 仓库，不要只上传 `_site/index.html`；构建后的 `assets/`、文章目录与公共文件需要一起部署。

## 项目目录

```text
src/
├─ _data/             # 全站结构化数据
├─ _includes/         # 布局、局部模板和宏组件
├─ assets/            # CSS 与 JavaScript
├─ blog/posts/        # Markdown 文章
├─ index.njk          # 首页
├─ section.njk        # 批量栏目页生成器
├─ sitemap.njk        # Sitemap
└─ rss.njk            # RSS
```
