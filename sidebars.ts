const sidebars = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Guide du Joueur',
      collapsed: false,
      items: [
        'joueur/introduction-joueur',
        'joueur/installation',
        'joueur/decouverte-interface',

        {
          type: 'category',
          label: 'Personnages',
          items: [
            'joueur/personnages/overview',
            'joueur/personnages/creation',
            'joueur/personnages/caracteristiques',
            'joueur/personnages/avatar',
            'joueur/personnages/notes-capacites',
            'joueur/personnages/synchronisation',
          ],
        },

        {
          type: 'category',
          label: 'Parties',
          items: [
            'joueur/parties/rejoindre',
            'joueur/parties/interface-joueur',
            'joueur/parties/tirages-en-partie',
            'joueur/parties/chat-textuel',
            'joueur/parties/chat-vocal',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Guide du MJ',
      collapsed: false,
      items: [
        'mj/introduction-mj',
        'mj/creation-partie',
        'mj/gestion-joueurs',
        'mj/interface-mj',
        'mj/tirages-mj',

        {
          type: 'category',
          label: 'Scénarios',
          items: [
            'mj/scenarios/overview',
            'mj/scenarios/consultation-scenario',
            'mj/scenarios/gestion-documents',
            'mj/scenarios/envoyer-document',
          ],
        },

        'mj/outils-mj',
      ],
    },

    {
      type: 'category',
      label: 'Système de jeu',
      collapsed: false,
      items: [
        'systeme/cartes',
        'systeme/modes-de-tirage',
        'systeme/difficulte',
        'systeme/bonus-capacites',
        'systeme/probabilites',
      ],
    },

    {
      type: 'category',
      label: 'Annexes',
      collapsed: true,
      items: [
        'annexes/faq',
        'annexes/glossaire',
        'annexes/changelog',
        'about',
      ],
    },
  ],
};

export default sidebars;
