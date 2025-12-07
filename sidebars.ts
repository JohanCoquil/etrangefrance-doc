import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Débuter',
      items: [
        'premiers-pas',
        'creer-personnage',
        'gestion-personnages',
      ],
    },
    {
      type: 'category',
      label: 'Pour les Joueurs',
      items: [
        'joueur',
        'rejoindre-partie',
        'utiliser-personnage',
        'partie-en-cours',
        'cartes-et-tirages',
      ],
    },
    {
      type: 'category',
      label: 'Pour les Maîtres de Jeu',
      items: [
        'mj',
        'creer-partie',
        'gerer-sessions',
        'animer-session',
        'outils-mj',
      ],
    },
    {
      type: 'category',
      label: 'Fonctionnalités',
      items: [
        'chat-temps-reel',
        'chat-vocal',
        'synchronisation',
        'notifications',
      ],
    },
    {
      type: 'category',
      label: 'Aide & Dépannage',
      items: [
        'faq',
        'problemes-courants',
      ],
    },
  ],
};

export default sidebars;
