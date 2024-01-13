import { createContentLoader } from "vitepress";

export default createContentLoader('blog/**/!(index).md', {
  render: true,
  excerpt: true,
  includeSrc: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, html }) => ({
        title: frontmatter.title,
        url,
        date: formatDate(frontmatter.date),
        description: convertHtmlToText(html, 200),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  }
});

function convertHtmlToText(html, maxLength) {
  let plainText = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').replace(/&ZeroWidthSpace;/g, ' ');
  plainText = plainText.slice(0, maxLength);
  if (html.length > maxLength) {
    plainText += '...';
  }

  return plainText;
}

function formatDate(raw) {
  return new Date(raw).toISOString().split('T')[0]
}
