---
sidebar_position: 15
---

# 🔄 Synchronisation

Comprendre comment vos données sont synchronisées entre votre appareil et le serveur.

## 🎯 Fonctionnement

L'application synchronise automatiquement vos données :
- **Entre appareils** : accessibles depuis différents appareils
- **En temps réel** : mises à jour instantanées pendant les sessions
- **Sauvegarde automatique** : vos données sont sécurisées

## 📱 Synchronisation automatique

### Quand ça se synchronise

La synchronisation se fait automatiquement :
- **Au démarrage** : quand vous ouvrez l'application
- **Pendant l'utilisation** : en arrière-plan régulièrement
- **Après les actions** : après création/modification importantes
- **Pendant les sessions** : en temps réel pour les événements de jeu

### Ce qui est synchronisé

Toutes vos données importantes :
- **Personnages** : vos PJ créés
- **Parties** : parties auxquelles vous participez
- **Sessions** : sessions de jeu
- **Progression** : avancement et historique

## 🌐 Connexion requise

### Fonctionnalités nécessitant internet

Ces fonctionnalités nécessitent une connexion internet :
- **Synchronisation des données** : sauvegarde en ligne
- **Chat temps réel** : communication instantanée
- **Chat vocal** : communication vocale
- **Présence** : voir qui est en ligne
- **Tirages synchronisés** : résultats partagés
- **Images partagées** : diffusion d'images

### Fonctionnalités hors ligne

Vous pouvez utiliser hors ligne :
- **Consulter vos personnages** : données locales
- **Lire les règles** : informations de référence
- **Préparer** : créer/modifier vos personnages (synchronisé après reconnexion)

## 🔄 Synchronisation bidirectionnelle

### Des modifications locales vers le serveur

Vos actions locales sont envoyées au serveur :
- **Création de personnage** : ajouté en ligne
- **Modification** : changements sauvegardés
- **Actions en session** : tirages, messages, etc.

### Du serveur vers votre appareil

Les données distantes sont récupérées :
- **Parties** : parties auxquelles vous participez
- **Sessions** : sessions de jeu disponibles
- **Mises à jour** : changements faits par d'autres

## 👥 Synchronisation en session

### Temps réel

Pendant une session active :
- **Messages** : synchronisés instantanément
- **Tirages** : visibles par tous immédiatement
- **Présence** : mise à jour en temps réel
- **Images** : partagées instantanément
- **Chat vocal** : communication directe

### Tous les participants voient la même chose

La synchronisation garantit que :
- Tous les participants voient les **mêmes messages**
- Tous les participants voient les **mêmes tirages**
- La **présence** est la même pour tous
- Les **images** apparaissent simultanément

## 📊 État de synchronisation

### Vérifier la synchronisation

L'application gère automatiquement :
- **État de connexion** : connecté ou hors ligne
- **Synchronisation en cours** : indicateurs visuels
- **Erreurs** : notifications en cas de problème

### Problèmes de connexion

Si vous perdez la connexion :
- Les données sont **sauvegardées localement**
- La **synchronisation reprend** automatiquement à la reconnexion
- Aucune donnée n'est **perdue**

## 🔧 Resynchronisation manuelle

### Si nécessaire

Dans certains cas, vous pouvez forcer une resynchronisation :

1. **Ouvrez l'onglet Param** ⚙️
2. **Accédez à la BDD** (pour les MJ)
3. **Utilisez l'option "Resync"** si disponible

### Quand resynchroniser

Resynchronisez si :
- Des **données manquent** après reconnexion
- Des **modifications** ne semblent pas prises en compte
- Vous **changez d'appareil** et voulez récupérer vos données

## 💾 Données locales

### Stockage local

Toutes vos données sont aussi stockées localement :
- **Base SQLite** : sur votre appareil
- **Accessibles hors ligne** : consultation possible
- **Sauvegarde** : données protégées localement

### Sécurité

Vos données sont :
- **Sécurisées** : stockage local protégé
- **Synchronisées** : sauvegarde en ligne
- **Accessibles** : depuis plusieurs appareils

## 🔐 Confidentialité

### Vos données

- Vos **personnages** sont privés jusqu'à ce que vous les partagiez dans une partie
- Les **parties** sont visibles par les participants uniquement
- Les **messages** sont privés à la session

## 💡 Astuces

### Optimisation

- **Restez connecté** : pour une synchronisation optimale
- **Vérifiez votre connexion** : avant une session importante
- **Synchronisez régulièrement** : l'application le fait automatiquement

### Changement d'appareil

Si vous changez d'appareil :
- Vos données sont **automatiquement synchronisées**
- Vous retrouvez **tout** sur le nouvel appareil
- Aucune **perte de données**

## 📚 En savoir plus

- **[Chat temps réel](/docs/chat-temps-reel)** - Synchronisation des messages
- **[Problèmes courants](/docs/problemes-courants)** - Résolution de problèmes de sync

