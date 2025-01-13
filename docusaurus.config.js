
module.exports = {
  title: 'NameRate',
  tagline: 'Оценивай и монетизируй никнеймы',
  url: 'https://<your-username>.github.io',
  baseUrl: '/namerate-docs/',
  favicon: 'img/favicon.ico',
  organizationName: '<your-username>', 
  projectName: 'namerate-docs',
  themeConfig: {
    navbar: {
      title: 'NameRate',
      logo: {
        alt: 'NameRate Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/docs/intro', label: 'Документация', position: 'left' },
        { href: 'https://t.me/NameRateBot', label: 'Telegram Bot', position: 'right' },
        { href: 'https://github.com/<your-username>/namerate-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            { label: 'О проекте', to: '/docs/about' },
            { label: 'Дорожная карта', to: '/docs/roadmap' },
            { label: 'Токеномика', to: '/docs/tokenomics' },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            { label: 'Telegram', href: 'https://t.me/NameRate' },
            { label: 'Instagram', href: 'https://www.instagram.com/nameratebot/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NameRate. Все права защищены.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        theme: { customCss: require.resolve('./static/css/custom.css') },
      },
    ],
  ],
};
    