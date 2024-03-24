
# MarAppart - Readme

## Description du Projet

MarAppart est une plateforme dédiée à la location d'appartements au Maroc. L'objectif principal de MarAppart est de simplifier et d'accélérer le processus de recherche de location pour les résidents, les étrangers au Maroc et les touristes. En offrant une variété d'appartements avec des informations détaillées sur leurs caractéristiques et leur localisation, MarAppart vise à devenir une référence incontournable pour ceux qui cherchent un lieu de résidence au Maroc.

## Captures d'Écran

### Page d'Accueil

![Page d'Accueil](https://github.com/HichamElquagh/Mar-Appart.ma/blob/main/client/src/assets/image1.png)

### Page de Filtre

![Page de Filtre](https://github.com/HichamElquagh/Mar-Appart.ma/blob/main/client/src/assets/image.png)

## Objectifs du Projet

1. **Faciliter le processus de recherche** en proposant une interface conviviale et intuitive.
2. **Fournir des informations détaillées sur les appartements** pour garantir une transparence totale.
3. **Optimiser le temps de recherche** en offrant une expérience efficace et rapide.
4. **Créer une réputation solide sur le marché** et étendre les services pour satisfaire les besoins des clients.

## Description Fonctionnelle et Technique

### Arborescence du Site

- **Home**
- **Filter**
- **Contact**
- **A propos**
- **Login/Sign up**

### Description Fonctionnelle du Site

- **Home**: Page principale affichant les appartements disponibles avec un appel à l'action pour afficher plus d'informations ou réserver.
- **Filter**: Permet aux utilisateurs de filtrer les appartements selon différents critères.
- **Contact**: Page permettant aux visiteurs de contacter la société pour des informations ou des recommandations.
- **A propos**: Fournit des informations sur la société derrière le site.
- **Login/Sign up**: Permet aux utilisateurs de créer un compte ou de se connecter.

### Description Fonctionnelle du Back-office

#### Admin

- **Gestion des logements**: ajouter, modifier ou supprimer des logements avec diverses informations.
- **Gestion des réservations**: visualiser, annuler ou accepter des réservations, générer des factures.
- **Gestion des utilisateurs**: visualiser, ajouter ou supprimer des utilisateurs, gérer les droits d'accès.
- **Génération de rapports**: statistiques de la plateforme.

#### Utilisateur

- **Connexion à un espace personnel sécurisé**.
- **Gestion des logements**: ajouter, modifier ou supprimer des logements avec diverses informations.
- **Recherche de logements**: selon des critères spécifiques.
- **Réservation de logements**: en ligne, paiement en ligne, historique des réservations.
- **Notation et commentaires**: des logements réservés.

### Technologies Utilisées et Architecture du Projet

#### Front-End

- JavaScript/React.js
- HTML
- CSS/Tailwind

#### Back-End

- Node.js/Express

#### Base de Données

- MongoDB

#### Architecture du Projet

- Modèle-Vue-Contrôleur (MVC)

## Utilisation

### Installation

1. Clonez le dépôt depuis GitHub :
```bash
git clone https://github.com/votre-utilisateur/marappart.git
````
2. Accédez au répertoire du projet :
```bash
cd Mar-Appart.ma
````
3. Installez les dépendances du front-end :
````bash
cd client
npm install
````
4. Installez les dépendances du back-end :
````bash
cd ..
cd server
npm install
````
### Configuration

- Créez un fichier .env à la racine du dossier server et configurez les variables d'environnement selon vos besoins, notamment les informations de la base de données et les clés d'API.

- Assurez-vous d'avoir une base de données MySQL ou MongoDB configurée avec les tables nécessaires pour le bon fonctionnement de l'application.

### Exécution
1. Démarrez le serveur back-end :
````bash
cd ..
cd server
npm run devstart
````
2.Démarrez le client front-end :
````bash
cd ..
cd client
npm run dev
````
### Testing 
````bash
cd ..
cd server
npm test








   

