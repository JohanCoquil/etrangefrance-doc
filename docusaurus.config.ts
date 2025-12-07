import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Étrange France - Guide Utilisateur',
  tagline: 'Guide complet pour jouer avec l\'application mobile Étrange France',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://api.scriptonautes.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'etrangefrance', // Usually your GitHub org/user name.
  projectName: 'etrangefrance-doc', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/etrangefrance/EtrangeFrance/tree/main/Docs/',
        },
        blog: false, // Désactivé pour se concentrer sur la documentation
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Étrange France',
      logo: {
        alt: 'Étrange France Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://api.scriptonautes.net',
          label: 'Télécharger l\'application',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Joueurs',
              to: '/docs/joueur',
            },
            {
              label: 'MJ',
              to: '/docs/mj',
            },
          ],
        },
        {
          title: 'Projet',
          items: [
            {
              label: 'Site officiel de l\'application',
              href: 'https://api.scriptonautes.net',
            },

            {
              label: 'Site officiel du JdR papier',
              href: 'https://www.etrange-france.fr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Étrange France. L'univers "Étrange France" est la propriété de Fletch.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
