# 🚀 Guide de déploiement automatique

Ce guide explique comment configurer le déploiement automatique de la documentation via GitHub Actions.

## 📋 Prérequis

- Un dépôt GitHub avec votre documentation
- Un hébergeur FTP/SFTP
- Les identifiants FTP de votre hébergeur

## 🔐 Configuration des secrets GitHub

Pour que le déploiement automatique fonctionne, vous devez configurer des secrets dans votre dépôt GitHub :

### Étapes pour ajouter les secrets

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, allez dans **Secrets and variables** → **Actions**
4. Cliquez sur **New repository secret**
5. Ajoutez les secrets suivants :

#### Secrets requis

| Nom du secret | Description | Exemple |
|--------------|-------------|---------|
| `FTP_SERVER` | Adresse du serveur FTP (sans `ftp://` ou `sftp://`) | `ftp.monhebergeur.com` ou `monhebergeur.com` |
| `FTP_USERNAME` | Nom d'utilisateur FTP | `monnom` |
| `FTP_PASSWORD` | Mot de passe FTP | `monMotDePasseSecret123` |
| `FTP_REMOTE_DIR` | (Optionnel) Dossier distant où déployer | `/public_html/doc/` ou `/doc/` |

### Exemple de configuration

Pour un hébergeur classique :
- **FTP_SERVER** : `ftp.monhebergeur.com`
- **FTP_USERNAME** : `monnom`
- **FTP_PASSWORD** : `motdepasse123`
- **FTP_REMOTE_DIR** : `/public_html/doc/` (ou le chemin vers votre dossier de documentation)

> ⚠️ **Important** : Ne partagez JAMAIS ces secrets publiquement. Ils sont automatiquement masqués dans les logs GitHub Actions.

## 🔄 Déclenchement du déploiement

Le déploiement se déclenche automatiquement :

1. **Lors d'un push sur la branche `main`** : Chaque fois que vous mergez une Pull Request ou que vous poussez directement sur `main`
2. **Manuellement** : Vous pouvez aussi déclencher le déploiement manuellement depuis l'onglet "Actions" de GitHub

## 📦 Processus de déploiement

Quand le workflow se déclenche, il :

1. ✅ **Checkout le code** : Récupère le code source depuis GitHub
2. ✅ **Installe Node.js** : Configure l'environnement Node.js (version 20)
3. ✅ **Installe les dépendances** : Exécute `npm ci` pour installer les packages
4. ✅ **Build le site** : Exécute `npm run build` pour générer les fichiers statiques
5. ✅ **Déploie via FTP** : Uploade le contenu du dossier `build/` sur votre serveur FTP
6. ✅ **Confirme le déploiement** : Affiche un message de succès

## 🔍 Vérifier le déploiement

### Sur GitHub

1. Allez dans l'onglet **Actions** de votre dépôt
2. Cliquez sur le workflow **"Deploy to FTP"**
3. Vérifiez que toutes les étapes sont vertes (✅)

### En cas d'erreur

Si le déploiement échoue :

1. **Vérifiez les logs** : Dans l'onglet Actions, cliquez sur le workflow qui a échoué
2. **Vérifiez les secrets** : Assurez-vous que tous les secrets sont correctement configurés
3. **Vérifiez les permissions FTP** : Votre compte FTP doit avoir les droits d'écriture sur le dossier cible
4. **Vérifiez le chemin** : Le `FTP_REMOTE_DIR` doit exister et être accessible

## 🛠️ Configuration avancée

### Modifier le workflow

Le fichier `.github/workflows/deploy.yml` peut être modifié pour :

- Changer la branche déclencheuse (par défaut `main`)
- Ajouter des étapes supplémentaires
- Modifier les options FTP

### Déploiement sur un sous-dossier

Si votre documentation est dans un sous-dossier (ex: `/doc/`), assurez-vous que :

1. Le `baseUrl` dans `docusaurus.config.ts` correspond au chemin
2. Le `FTP_REMOTE_DIR` pointe vers le bon dossier sur le serveur

## 📝 Notes importantes

- ⚠️ Le workflow utilise `npm ci` au lieu de `npm install` pour des installations plus rapides et reproductibles
- ⚠️ Les fichiers dans le dossier `build/` sont uploadés, pas le dossier lui-même
- ⚠️ Par défaut, `dangerous-clean-slate` est à `false` pour éviter de supprimer des fichiers existants
- ✅ Le cache npm est utilisé pour accélérer les builds

## 🔗 Ressources

- [Documentation GitHub Actions](https://docs.github.com/en/actions)
- [Documentation FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)

