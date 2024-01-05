import RSS from 'rss';
export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: '',
    description: '',
    site_url: 'https://test.kr',
    feed_url: 'https://test.kr/rss',
  });

  feed.item({
    title: '홈페이지 rss 테스트',
    url: 'https://test.kr/',
    date: new Date(),
    description: '홈페이지 입니다.',
  });

  const feedString = feed.xml({ indent: true });
  event.node.res;
  event.node.res.setHeader('content-type', 'text/xml');
  event.node.res.end(feedString);
});