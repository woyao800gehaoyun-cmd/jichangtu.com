export default {
  features: [
    { icon: 'book', title: '教程中心', description: '从订阅导入、平台配置到故障排查，按步骤完成每一次操作。', url: '/guides/' },
    { icon: 'shield', title: '机场评测', description: '以线路、晚高峰、倍率、设备数和服务透明度建立统一评测框架。', url: '/reviews/' },
    { icon: 'compare', title: '横向对比', description: '比较直连、中转、BGP 与 IPLC 等方案，理解差异后再做选择。', url: '/compare/' },
    { icon: 'tag', title: '品牌资料库', description: '集中查看服务入口、相关文章、风险提示和最近更新信息。', url: '/brands/' },
    { icon: 'search', title: '问题解答', description: '围绕订阅失败、节点不显示、速度慢和连接超时提供排查路径。', url: '/blog/' },
    { icon: 'help', title: '专题知识库', description: '将零散问题整理成连续阅读路径，适合新手系统了解相关概念。', url: '/topics/' },
  ],
  topics: [
    { title: '新手选购与避坑', description: '从预算、付款周期、设备数量到运营风险，建立第一次选择服务的判断顺序。', count: 4, url: '/blog/airport-selection-guide/', icon: 'shield', accent: 'bg-[#fff7ed] text-[#b45309]' },
    { title: '线路、协议与客户端', description: '弄清直连、中转、IPLC、SS、V2Ray、Trojan 与常用客户端之间的关系。', count: 4, url: '/blog/airport-line-types/', icon: 'monitor', accent: 'bg-[#ecfdf5] text-[#047857]' },
    { title: '场景与地区节点', description: '按流媒体、AI、外贸、远程办公以及香港、日本、新加坡等地区需求选择。', count: 3, url: '/blog/airport-use-cases/', icon: 'globe', accent: 'bg-[#f3f0ea] text-[#57534e]' },
    { title: '故障诊断与提速', description: '处理订阅导入失败、节点不显示、网页打不开、延迟高和晚高峰变慢。', count: 3, url: '/blog/airport-troubleshooting/', icon: 'layers', accent: 'bg-[#fef3c7] text-[#92400e]' },
  ],
  brands: [
    { name: '光年梯', label: '本站主推', description: '¥18 / 120G / IEPL / GNT80', mark: '光', url: '/blog/guangnianti-review/' },
    { name: '云图机场', label: '测评入口', description: '¥18 / 100G / IEPL / yt88', mark: '云', url: '/blog/yuntu-review/' },
    { name: '鲲鹏加速', label: '测评入口', description: '¥12 / 直连 / 暂无优惠码', mark: '鲲', url: '/blog/kunpeng-review/' },
    { name: '瞬云机场', label: '测评入口', description: '¥18 / 100G / IPLC / 20OFF', mark: '瞬', url: '/blog/shunyun-review/' },
    { name: 'Clash 客户端', label: '知识条目', description: '订阅格式 / 平台选择 / 导入排错', mark: 'C', url: '/blog/airport-protocol-client-guide/' },
    { name: 'Shadowrocket', label: '知识条目', description: 'iOS 客户端 / 订阅导入 / 常见问题', mark: 'S', url: '/blog/airport-device-platform-guide/' },
    { name: 'sing-box', label: '知识条目', description: '协议生态 / 客户端差异 / 配置边界', mark: 'S', url: '/blog/airport-protocol-client-guide/' },
  ],
  comparisons: [
    { dimension: '连接方式', a: '直连线路', b: '国内中转线路', c: 'IPLC / 专线' },
    { dimension: '主要优势', a: '结构简单、价格通常较低', b: '路由更可控、晚高峰更稳', c: '跨境链路相对稳定' },
    { dimension: '需要关注', a: '本地运营商与跨境路由', b: '入口质量与中转容量', c: '真实性、带宽与成本' },
    { dimension: '适合人群', a: '轻量使用与预算敏感用户', b: '日常办公、视频和多设备', c: '对稳定性要求较高的用户' },
  ],
  principles: [
    { n: '01', title: '先判断使用场景，再比较套餐', text: '日常浏览、流媒体、AI、游戏和跨境办公关注的指标不同。先确定设备、地区、时段与流量需求，才能避免为用不到的参数付费。' },
    { n: '02', title: '把晚高峰和长期可维护性放在前面', text: '峰值测速只能说明某一时刻的状态。更值得记录的是工作日晚间的连接成功率、丢包、故障公告与备用节点数量。' },
    { n: '03', title: '使用小额月付完成自己的验证', text: '线路体验会受到所在地、运营商和客户端影响。先小额测试，再决定是否续费，比直接购买长期套餐更可控。' },
  ],
  faqs: [
    { question: '机场图主要提供哪些内容？', answer: '本站主要整理机场推荐与选择方法、线路和协议知识、客户端教程、故障排查、流媒体与 AI 场景指南，并通过专题和内链帮助读者连续阅读。' },
    { question: '页面中的服务入口是否包含推广链接？', answer: '是。标有“推广入口”或“推广链接”的第三方地址可能包含推广参数。本站会明确标注，但不会对价格、速度、稳定性或持续可用性作保证。' },
    { question: '为什么不直接给出永久有效的机场排名？', answer: '网络环境、地区、运营商和服务状态会变化，单次测速不能代表长期体验。本站更强调选择框架、核验时间和适用场景。' },
    { question: '新手应该从哪篇文章开始？', answer: '建议先阅读《新手如何选择机场》，再根据自己的需求查看线路类型、客户端导入和价格套餐文章。' },
    { question: '发现文章错误或希望合作，如何联系？', answer: '可通过 Telegram 联系 @rumors6688。提交勘误时请附上页面地址、问题位置和可核验资料，方便快速处理。' },
  ],
};
