---
sidebar_position: 12
---

# 🛠️ Outils MJ

Découvrez toutes les fonctionnalités avancées destinées aux maîtres de jeu.

## 📍 Accéder aux outils

Les outils MJ sont accessibles depuis l'onglet **Param** ⚙️ :

- **Logs** : journalisation et suivi des événements
- **BDD** : consultation de la base de données locale
- **Test Présence** : test de la connexion temps réel

## 📜 Logs

### Consulter les logs

Les logs enregistrent tous les événements importants :
- **Actions réseau** : requêtes API, synchronisations
- **Événements temps réel** : connexions Ably, messages
- **Actions utilisateur** : créations, modifications
- **Erreurs** : problèmes rencontrés

### Utilisation

1. **Ouvrez l'onglet Param** ⚙️
2. **Sélectionnez "Logs"**
3. **Consultez l'historique** des événements
4. **Filtrez** si nécessaire (selon les options disponibles)

### Utilité

Les logs sont utiles pour :
- **Déboguer** des problèmes de synchronisation
- **Comprendre** le comportement de l'application
- **Vérifier** les connexions temps réel
- **Diagnostiquer** des erreurs

## 💾 Base de données (BDD)

### Consulter la base locale

Vous pouvez consulter toutes les données stockées localement :

1. **Ouvrez l'onglet Param** ⚙️
2. **Sélectionnez "BDD"**
3. **Parcourez les tables** disponibles
4. **Consultez les données** enregistrées

### Données visibles

La base locale contient :
- **Personnages** : tous les PJ et PNJ
- **Parties** : vos parties créées
- **Sessions** : sessions de jeu
- **Scénarios** : scénarios disponibles
- **Données de référence** : voies, capacités, professions, etc.

### Utilité

La consultation de la BDD permet de :
- **Vérifier les données** : s'assurer que tout est bien enregistré
- **Comprendre la structure** : voir comment sont organisées les données
- **Diagnostiquer** : identifier des problèmes de synchronisation

## 🔧 Test Présence Ably

### Vérifier la connexion temps réel

Cet outil permet de tester la connexion Ably :

1. **Ouvrez l'onglet Param** ⚙️
2. **Sélectionnez "Test Présence"**
3. **Chargez un utilisateur** : sélectionnez votre utilisateur
4. **Connectez-vous** : testez la connexion Ably
5. **Vérifiez l'état** : voyez si la connexion fonctionne

### Indicateurs

Vous pouvez voir :
- **État de connexion** : connected, disconnected, etc.
- **Membres en ligne** : liste des utilisateurs connectés
- **Messages de statut** : informations sur la connexion

### Vérification de la configuration

Un bouton permet de **vérifier la configuration Ably** :
- Confirme que la clé API est bien définie
- Vérifie que la connexion peut être établie

## 🔄 Synchronisation

### Resynchroniser les données

Si vous rencontrez des problèmes de synchronisation :

1. **Dans l'écran BDD**, utilisez l'option **"Resync"** si disponible
2. Les données sont **resynchronisées** avec le serveur distant
3. Vous pouvez vérifier dans les **Logs** que la sync a fonctionné

### Synchronisation automatique

La synchronisation se fait automatiquement :
- **Au démarrage** de l'application
- **Périodiquement** pendant l'utilisation
- **Après certaines actions** importantes

## 📊 Monitoring

### Suivre l'activité

Utilisez les outils pour :
- **Vérifier** que tout fonctionne correctement
- **Détecter** des problèmes avant qu'ils n'affectent les joueurs
- **Comprendre** le comportement de l'application

### Diagnostics

En cas de problème :
1. **Consultez les Logs** : voir ce qui s'est passé
2. **Vérifiez la BDD** : s'assurer que les données sont présentes
3. **Testez la présence** : vérifier la connexion temps réel
4. **Resynchronisez** si nécessaire

## ⚙️ Paramètres avancés

Dans l'onglet **Param** ⚙️, vous pouvez aussi accéder à :
- **Configuration temps réel** : paramètres Ably
- **Préférences** : options de l'application
- **Notifications** : gestion des alertes

## 💡 Conseils

### Maintenance régulière

- **Consultez les logs** régulièrement pour détecter les problèmes
- **Vérifiez la synchronisation** avant une session importante
- **Testez la connexion** si vous avez des doutes

### Avant une session

- **Testez la présence** : assurez-vous que le temps réel fonctionne
- **Vérifiez vos données** : parties, scénarios, etc.
- **Préparez vos outils** : images, documents à partager

### Pendant une session

- **Surveillez les logs** si quelque chose ne fonctionne pas
- **Utilisez la resynchronisation** si des données manquent
- **Restez connecté** : gardez l'application active

## 📚 En savoir plus

- **[Animer une session](/docs/animer-session)** - Utiliser les outils pendant le jeu
- **[Problèmes courants](/docs/problemes-courants)** - Résolution de problèmes

