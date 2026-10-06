export default {
  features: [
    { icon: 'book', title: '教程中心', description: '按平台与使用场景组织，从安装到排错形成清晰阅读路径。', url: '/guides/' },
    { icon: 'shield', title: '独立评测', description: '预留测试环境、数据记录、优缺点与更新说明等标准模块。', url: '/reviews/' },
    { icon: 'compare', title: '横向对比', description: '统一口径梳理差异，帮助读者快速定位适合自己的方案。', url: '/compare/' },
    { icon: 'tag', title: '品牌资料库', description: '集中整理基础资料、相关文章、更新记录与常见问题。', url: '/brands/' },
    { icon: 'search', title: '长尾问题', description: '围绕真实搜索问题，提供直接答案与可继续阅读的内链。', url: '/blog/' },
    { icon: 'help', title: 'FAQ 知识库', description: '收录高频问题、平台差异和基础概念，减少信息查找成本。', url: '/topics/' },
  ],
  topics: [
    { title: '从零开始的客户端指南', description: '覆盖选择、安装、基础设置、更新与常见问题的连续阅读路径。', count: 12, url: '/guides/', icon: 'monitor', accent: 'bg-[#eaf0ff] text-[#4361ee]' },
    { title: '服务选择与评测方法', description: '了解评测口径、需求判断、风险识别和对比信息的阅读方式。', count: 9, url: '/reviews/', icon: 'shield', accent: 'bg-[#e8f8f5] text-[#11877f]' },
    { title: 'AI 工具效率手册', description: '预留 AI 工具分类、上手教程、场景对比和工作流实践内容。', count: 10, url: '/ai-tools/', icon: 'bot', accent: 'bg-[#f1ebff] text-[#7c4dca]' },
    { title: '流媒体与数字生活', description: '围绕平台说明、设备支持、常见问题与数字资源建立专题。', count: 8, url: '/streaming/', icon: 'play', accent: 'bg-[#fff0e8] text-[#d86d2f]' },
  ],
  brands: [
    { name: '示例品牌 Alpha', label: '资料待补充', description: '基础信息 / 评测 / 教程', mark: 'A' },
    { name: '示例品牌 Beta', label: '资料待补充', description: '基础信息 / 更新记录', mark: 'B' },
    { name: '示例品牌 Cloud', label: '结构占位', description: '服务说明 / 常见问题', mark: 'C' },
    { name: '示例工具 Delta', label: '结构占位', description: '客户端下载 / 教程', mark: 'D' },
    { name: '示例平台 Echo', label: '资料待补充', description: '平台说明 / 对比内容', mark: 'E' },
    { name: '更多资料页面', label: '持续扩展', description: '查看完整品牌索引', mark: '+' },
  ],
  comparisons: [
    { dimension: '适用场景', a: '日常浏览占位', b: '多设备占位', c: '进阶需求占位' },
    { dimension: '客户端支持', a: '桌面 / 移动', b: '多平台预留', c: '按资料补充' },
    { dimension: '信息透明度', a: '基础信息', b: '更新记录', c: '说明文档' },
    { dimension: '内容状态', a: '等待编辑', b: '等待编辑', c: '等待编辑' },
  ],
  faqs: [
    { question: '本站主要提供哪些类型的内容？', answer: '本站将围绕服务推荐与评测、客户端教程、工具下载、AI 与流媒体工具、数字资源等方向建立结构化中文内容。' },
    { question: '页面中的服务入口是否包含推广链接？', answer: '机场推荐页中的第三方入口会明确标注“推广链接”，并使用适当的链接属性；服务价格、套餐和可用性以服务方页面为准。' },
    { question: '后续文章会如何保证信息清晰？', answer: '文章模板预留发布时间、更新时间、测试条件、资料来源、结论边界和相关内链，便于持续校对与维护。' },
    { question: '如何快速找到适合自己的内容？', answer: '可以从顶部分类进入，也可以通过专题聚合、品牌资料库和文章索引按主题继续浏览。' },
    { question: '外部链接和合作内容会如何处理？', answer: '正式上线后，外部跳转、合作关系与可能影响判断的信息会在相应页面中明确标注。' },
  ],
};
