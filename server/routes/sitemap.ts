import { SitemapStream, streamToPromise } from 'sitemap';

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: 'https://test.kr/',
  });

  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0, });

  sitemap.end();

  const sitemapString = await streamToPromise(sitemap);
  event.node.res.setHeader('content-type', 'text/xml');
  event.node.res.end(sitemapString);
});