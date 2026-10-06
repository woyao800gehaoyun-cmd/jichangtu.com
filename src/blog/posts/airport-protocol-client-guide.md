---
layout: layouts/post.njk
title: SS、V2Ray、Trojan 与 Clash 有什么区别？机场协议和客户端指南
description: 区分 SS、SSR、V2Ray、Trojan 等节点协议与 Clash、v2rayN、v2rayNG、Shadowrocket、sing-box 等客户端，避免订阅格式不兼容。
date: 2026-10-02
updatedAt: 2026-10-06
category: 客户端教程
tags: [SS 机场, V2Ray 机场, Trojan 机场, Clash 机场, Shadowrocket]
featured: false
readingTime: 约 9 分钟
permalink: /blog/airport-protocol-client-guide/index.html
---

选择机场时，经常会看到 SS 机场、SSR 机场、V2Ray 机场、Trojan 机场和 Clash 机场。这里面有的是协议，有的是客户端生态，还有的是服务方为了方便理解使用的标签。先分清概念，才能避免订阅导入失败。

## 协议和客户端不是一回事

- **协议**决定节点连接和传输方式；
- **订阅格式**决定服务方如何把节点信息交给软件；
- **客户端**负责解析订阅、选择节点和设置系统代理。

因此，Clash 机场通常表示提供 Clash 兼容订阅，并不代表“Clash”本身是一条线路。V2RayN 机场或 Shadowrocket 机场也多半是在描述客户端兼容性。

## SS、SSR、V2Ray 与 Trojan

### SS 机场

SS 通常指 Shadowsocks。它结构相对简洁，客户端生态成熟。购买前仍需确认具体加密方式是否被自己的客户端支持。

### SSR 机场

SSR 是较早期的扩展方案。现在部分客户端已不再重点维护相关兼容，选择 SSR 机场时要先确认自己的软件是否仍能解析。

### V2Ray 机场

V2Ray 常用于泛指一组相关协议与实现。具体节点可能使用不同传输配置，不能只凭“V2Ray”标签判断速度。Windows 用户常搜索 V2RayN 机场或 v2rayN 机场，Android 用户则常使用 v2rayNG。

### Trojan 机场

Trojan 是另一类常见连接方案。是否适合取决于客户端支持、线路质量和服务方配置，而不是名称本身。

## 常见客户端怎么选？

| 平台 | 常见选择 | 需要确认 |
| --- | --- | --- |
| Windows | Clash Verge、Clash Meta、v2rayN | 官方来源、订阅格式 |
| macOS | Clash Verge、Clash Meta、sing-box 生态 | 芯片架构、系统版本 |
| Android | v2rayNG、Clash Meta 兼容客户端、sing-box | 后台权限、省电策略 |
| iOS | Shadowrocket、Quantumult X、Stash | 商店来源、格式转换 |

Clash for Windows 机场是常见搜索词，但 Clash for Windows 已停止维护后，不建议继续从随机下载站安装旧包。应优先选择有持续更新记录的替代客户端。

## Shadowrocket、Quantumult X 和 Stash

Shadowrocket 机场通常提供适合小火箭的订阅入口。Quantumult X 机场和 Stash 机场的规则与订阅格式可能不同，同一条链接未必能在三个客户端中直接使用。

如果服务面板提供多个订阅按钮，应按客户端名称选择，而不是随便复制第一条链接。详细导入步骤见[机场订阅链接指南](/blog/airport-subscription-guide/)。

## v2rayN、v2rayNG 与 sing-box

v2rayN 主要用于 Windows，v2rayNG 常用于 Android，sing-box 则有跨平台实现。所谓 v2rayNG 机场或 sing-box 机场，关键仍是服务方是否提供兼容配置。

遇到节点不显示时，依次检查客户端版本、订阅格式、节点协议支持和本地筛选条件。不要为了“兼容”从不可信来源下载修改版客户端。

## 选择原则

协议名称不能替代线路测试。更合理的顺序是：先确定系统和可信客户端，再确认订阅兼容性，最后比较线路、倍率与晚高峰表现。设备层面的选择可继续阅读[Windows、Mac、Android 与 iOS 机场客户端指南](/blog/airport-device-platform-guide/)。

