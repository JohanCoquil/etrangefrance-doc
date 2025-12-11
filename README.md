# 📚 Documentation Étrange France

Documentation utilisateur de l'application mobile Étrange France, construite avec [Docusaurus](https://docusaurus.io/).

## 🚀 Développement local

Pour démarrer le serveur de développement local :

```bash
npm start
```

Cette commande démarre un serveur de développement local et ouvre une fenêtre de navigateur. La plupart des changements sont reflétés instantanément sans avoir besoin de redémarrer le serveur.

## 🏗️ Build

Pour générer le site statique de production :

```bash
npm run build
```

Le site statique sera généré dans le dossier `build/`. Vous pouvez le servir avec n'importe quel serveur statique.

## 📝 Contenu

La documentation est organisée dans le dossier `docs/` :

- **Débuter** : Guides pour prendre en main l'application
- **Pour les Joueurs** : Fonctionnalités destinées aux joueurs
- **Pour les Maîtres de Jeu** : Outils et guides pour les MJ
- **Fonctionnalités** : Détails sur toutes les fonctionnalités
- **Aide & Dépannage** : Résolution de problèmes

## 🌐 Déploiement

### Déploiement automatique (recommandé)

La documentation est déployée automatiquement via GitHub Actions lorsque vous mergez une Pull Request vers `main`.

Consultez le guide complet : [Guide de déploiement](.github/DEPLOYMENT.md)

**Configuration requise** : Configurez les secrets GitHub (SFTP_SERVER, SFTP_USERNAME, SFTP_PASSWORD, SFTP_REMOTE_DIR, SFTP_PORT)

### Déploiement manuel

Pour déployer manuellement la documentation :

1. Build le site : `npm run build`
2. Déployez le contenu du dossier `build/` sur votre hébergeur via SFTP

### Déploiement GitHub Pages (alternative)

```bash
npm run deploy
```

Cette commande build le site et le déploie sur GitHub Pages (nécessite une configuration spécifique).

## 📖 En savoir plus

- [Documentation Docusaurus](https://docusaurus.io/docs)
- [Étrange France - Site officiel](https://www.etrange-france.fr)
