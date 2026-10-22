import { readFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = (process.env.SITE_URL || 'https://jichangtu.com').replace(/\/$/, '');
const key = process.env.INDEXNOW_KEY || '892418c7f103761f8387605776fb718e';
const keyLocation = `${siteUrl}/${key}.txt`;
const endpoint = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';

async function readUrls() {
  const sitemapPath = path.resolve('_site/sitemap.xml');
  let xml;

  try {
    xml = await readFile(sitemapPath, 'utf8');
  } catch {
    const response = await fetch(`${siteUrl}/sitemap.xml`);
    if (!response.ok) throw new Error(`无法读取线上 sitemap：HTTP ${response.status}`);
    xml = await response.text();
  }

  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(`${siteUrl}/`) || url === `${siteUrl}/`);

  return [...new Set(urls)];
}

async function verifyKey() {
  const response = await fetch(keyLocation, { cache: 'no-store' });
  const body = (await response.text()).trim();
  if (!response.ok || body !== key) {
    throw new Error(`IndexNow 密钥文件尚未生效：${keyLocation}（HTTP ${response.status}）`);
  }
}

async function submit(urlList) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(siteUrl).host,
      key,
      keyLocation,
      urlList,
    }),
  });

  const responseBody = await response.text();
  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow 提交失败：HTTP ${response.status}${responseBody ? ` - ${responseBody}` : ''}`);
  }

  return response.status;
}

const urlList = await readUrls();
if (!urlList.length) throw new Error('sitemap 中没有可提交的本站 URL。');
if (urlList.length > 10000) throw new Error(`URL 数量 ${urlList.length} 超过 IndexNow 单次 10000 条限制。`);

await verifyKey();
const status = await submit(urlList);
console.log(`IndexNow 提交成功：HTTP ${status}，共 ${urlList.length} 个 URL。`);
console.log(`密钥位置：${keyLocation}`);
