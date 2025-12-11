# 🔐 Configuration des secrets GitHub

Ce fichier sert de référence pour configurer les secrets nécessaires au déploiement automatique.

## 📝 Secrets à configurer

Voici les secrets que vous devez ajouter dans les paramètres de votre dépôt GitHub :

### `SFTP_SERVER` (requis)
L'adresse de votre serveur SFTP (sans le protocole).

**Exemple :**
```
sftp.monhebergeur.com
```
ou
```
monhebergeur.com
```

### `SFTP_USERNAME` (requis)
Votre nom d'utilisateur SFTP.

**Exemple :**
```
monnom
```

### `SFTP_PASSWORD` (requis)
Votre mot de passe SFTP.

**Exemple :**
```
monMotDePasseSecret123
```

### `SFTP_PORT` (optionnel)
Le port SFTP. Par défaut, utilise le port 22.

**Exemple :**
```
22
```

### `SFTP_REMOTE_DIR` (optionnel)
Le dossier distant où déployer la documentation. Par défaut, utilise la racine `/`.

**Exemples :**
```
/public_html/doc/
```
ou
```
/doc/
```
ou
```
/www/documentation/
```

## 🔧 Comment ajouter les secrets

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (Paramètres) en haut
3. Dans le menu de gauche, cliquez sur **Secrets and variables** → **Actions**
4. Cliquez sur **New repository secret**
5. Remplissez le **Name** (nom du secret) et la **Value** (valeur)
6. Cliquez sur **Add secret**
7. Répétez pour chaque secret nécessaire

## ⚠️ Important

- ❌ **NE partagez JAMAIS ces secrets** publiquement
- ❌ **NE commitez JAMAIS** ces valeurs dans le code
- ✅ Les secrets sont automatiquement **masqués** dans les logs GitHub Actions
- ✅ Seuls les **contributeurs autorisés** peuvent voir/modifier les secrets

## 🔍 Vérification

Pour vérifier que vos secrets sont bien configurés :

1. Allez dans **Settings** → **Secrets and variables** → **Actions**
2. Vous devriez voir la liste de vos secrets (les valeurs sont masquées)
3. Si un secret manque, ajoutez-le

## 📚 Plus d'informations

Consultez le [Guide de déploiement complet](DEPLOYMENT.md) pour plus de détails.
