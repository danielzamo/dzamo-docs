import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: '@dzDocs',
  tagline: 'By Docusaurus',
  favicon: 'img/favicon.ico',

  url: 'https://dzamo-docs.vercel.app',
  baseUrl: '/',

  organizationName: 'danielzamo', // Usually your GitHub org/user name.
  projectName: 'dzamo-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '@dzDocs',
        logo: {
          alt: 'dzDocs logo',
          src: 'img/dz-docs.book.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Páginas',
          },
//          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://dzamo.gitlab.io',
            label: 'Gitlab page',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '@dzDocs',
            items: [
              {
                label: 'Páginas',
                to: '/docs/index1',
              },
            ],
          },
          {
            title: 'Comunidad Docusaurus',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'Más',
            items: [
//              { label: 'Blog', to: '/blog', },
              {
                label: 'Docusaurus en GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
