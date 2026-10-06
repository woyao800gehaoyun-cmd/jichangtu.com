import airportKeywords from './airportKeywords.js';

export default [
  {
    slug: 'airport', title: '机场推荐', eyebrow: 'Service Directory', icon: 'globe',
    description: '按清晰维度收录和整理服务资料，预留筛选、评测、教程与状态更新入口。',
    intro: '本页用于集中整理机场服务入口。推荐顺序不代表绝对排名，服务价格、套餐、线路与可用性可能随时变化，请在访问服务方页面后自行核验。',
    entries: ['全部服务索引', '新手选择入口', '多设备场景', '平台支持筛选', '近期更新', '常见问题'],
    keywordGroups: airportKeywords,
    providers: [
      {
        name: '光年梯',
        mark: '光',
        label: '推广链接',
        description: '查看光年梯的服务页面、当前套餐与注册信息，具体内容以服务方页面为准。',
        url: 'https://Rumors.gntaff.com/#/?code=Mclks3w5',
      },
      {
        name: '云图机场',
        mark: '云',
        label: '推广链接',
        description: '查看云图机场的服务页面、当前套餐与注册信息，具体内容以服务方页面为准。',
        url: 'https://super.ytjcok.org/#/register?code=COsTypDq',
      },
      {
        name: '鲲鹏加速',
        mark: '鲲',
        label: '推广链接',
        description: '查看鲲鹏加速的服务页面、当前套餐与注册信息，具体内容以服务方页面为准。',
        url: 'https://kunpengjiasu.com/#/register?code=Yd7XpCEQ',
      },
    ],
  },
  {
    slug: 'reviews', title: '机场评测', eyebrow: 'Independent Reviews', icon: 'shield',
    description: '使用统一文章模板记录测试条件、实际体验、优缺点与结论边界。',
    intro: '评测栏目会将事实信息、主观体验与推测明确分开。每篇内容均预留测试日期、设备环境、客户端版本和修订记录。',
    entries: ['最新评测', '新手向评测', '多设备体验', '长期使用记录', '评测方法', '更新追踪'],
  },
  {
    slug: 'guides', title: '客户端教程', eyebrow: 'Step-by-step Guides', icon: 'book',
    description: '按系统和任务组织教程，从安装、配置到排错建立连续阅读路径。',
    intro: '教程内容强调前置条件、适用版本和可重复步骤。复杂主题会拆分为基础操作、常见问题与进阶设置，方便移动端阅读。',
    entries: ['Windows 教程', 'macOS 教程', 'iOS 教程', 'Android 教程', '常见错误', '进阶设置'],
  },
  {
    slug: 'downloads', title: '客户端下载', eyebrow: 'Client Library', icon: 'download',
    description: '集中整理不同平台客户端、官方来源、版本说明与配套教程入口。',
    intro: '下载资料页将优先指向官方站点、官方仓库或可信应用商店，并明确平台、架构、版本与外部链接状态。',
    entries: ['Windows 客户端', 'macOS 客户端', 'iOS 客户端', 'Android 客户端', 'Linux 客户端', '版本说明'],
  },
  {
    slug: 'ai-tools', title: 'AI 工具推荐', eyebrow: 'AI Toolkit', icon: 'bot',
    description: '围绕真实使用场景整理 AI 工具、上手教程、功能对比和工作流实践。',
    intro: '本栏目预留写作、搜索、图像、音视频和效率工具分类。正式内容将说明适用人群、核心限制、费用信息与最近核验日期。',
    entries: ['AI 写作', 'AI 搜索', '图像工具', '音视频工具', '效率工作流', '工具对比'],
  },
  {
    slug: 'streaming', title: '流媒体工具推荐', eyebrow: 'Streaming Guide', icon: 'play',
    description: '整理平台说明、设备支持、客户端工具与常见使用问题。',
    intro: '本栏目只提供信息整理和合规使用提示。内容可按平台、设备和问题类型拆分，避免将变化较快的信息长期固定化。',
    entries: ['平台资料', '设备支持', '客户端工具', '画质与格式', '常见问题', '更新记录'],
  },
  {
    slug: 'apple-id', title: '免费苹果 ID 共享', eyebrow: 'Apple ID Resources', icon: 'globe',
    description: '预留资源说明、使用前提示、安全边界和常见问题模块。',
    intro: '本页当前不提供任何真实账号或密码。正式运营前需要建立清晰的安全提示、有效性状态和隐私边界，并避免收集用户敏感信息。',
    entries: ['使用前说明', '安全提示', '地区说明', '状态更新', '常见错误', '替代方案'],
  },
  {
    slug: 'free-nodes', title: '免费节点', eyebrow: 'Public Resources', icon: 'layers',
    description: '为公开资源预留状态、更新时间、使用限制与安全提示区域。',
    intro: '本页当前不提供真实节点。正式内容应说明来源、核验时间、稳定性边界与潜在风险，不承诺可用性，也不收集用户连接信息。',
    entries: ['资源说明', '最近核验', '平台格式', '使用限制', '安全提示', '常见问题'],
  },
  {
    slug: 'topics', title: '专题聚合', eyebrow: 'Topic Clusters', icon: 'grid',
    description: '将分散文章连接成连续阅读路径，帮助读者系统理解一个主题。',
    intro: '每个专题可由核心指南、子问题文章、对比页和 FAQ 组成，并通过明确的上下文内链构成长期可维护的内容集群。',
    entries: ['客户端入门', '服务选择', '评测方法', 'AI 效率', '流媒体指南', '数字资源'],
  },
  {
    slug: 'brands', title: '品牌资料库', eyebrow: 'Brand Library', icon: 'tag',
    description: '集中管理品牌基础资料、相关文章、更新记录、常见问题与必要声明。',
    intro: '品牌资料页不是简单广告落地页，而是品牌词搜索意图的完整信息入口。当前名称均为占位，正式录入时可通过数据文件统一管理。',
    entries: ['品牌索引 A–Z', '最新收录', '近期更新', '相关评测', '配套教程', '对比入口'],
  },
  {
    slug: 'compare', title: '产品与服务对比', eyebrow: 'Comparisons', icon: 'compare',
    description: '使用统一口径展示差异，同时保留正文解释、适用人群和更新时间。',
    intro: '对比内容会区分可量化信息与定性体验。表格负责快速扫描，正文负责说明测试条件和结论，不用单一参数代替真实选择。',
    entries: ['服务对比', '客户端对比', 'AI 工具对比', '平台对比', '对比方法', '选择清单'],
  },
  {
    slug: 'about', title: '关于我们', eyebrow: 'About Jichangtu', icon: 'sparkles',
    description: '了解本站的内容原则、更新机制、合作标注方式与长期建设方向。',
    intro: '机场图是一个面向中文用户的网络工具与数字生活内容站。我们希望用清晰结构、明确来源和持续更新，降低读者查找与理解信息的成本。',
    entries: ['内容原则', '编辑流程', '更新机制', '合作说明', '勘误反馈', '免责声明'],
  },
];
