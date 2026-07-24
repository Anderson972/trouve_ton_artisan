# Trouve ton artisan

Plateforme web permettant aux particuliers de la région Auvergne-Rhône-Alpes de trouver un artisan
et de le contacter via un formulaire de contact.

Le projet est composé de trois parties :

- **BDD** : scripts SQL de création et d'alimentation de la base MySQL
- **API** : API REST Node.js / Express / Sequelize
- **client** : application front-end React (Vite)

---

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- npm
- [MySQL](https://www.mysql.com/) 8
- [Git](https://git-scm.com/)
- Un compte SMTP pour l'envoi des e-mails du formulaire de contact
  (Mailtrap en développement)

---

## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/Anderson972/trouve_ton_artisan.git
cd trouve_ton_artisan
```

### 2. Créer et alimenter la base de données

Depuis MySQL Workbench (ou en ligne de commande), exécuter les deux scripts
du dossier `BDD/` **dans cet ordre** :

1. `bdd_trouver_un_artisan.sql` — création du schéma et des tables
2. `alimentation.sql` — insertion des données

> L'ordre est important : le script d'alimentation dépend des tables et des
> clés étrangères créées par le premier script.

### 3. Installer et configurer l'API

```bash
cd API
npm install
```

Créer un fichier `.env` à la racine du dossier `API/` en s'appuyant sur
`.env.example` :

```env
# Base de données
DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouver_un_artisan
DB_USER=root
DB_PASSWORD=votre_mot_de_passe

# Serveur
PORT=3000

# Sécurité
API_KEY=votre_cle_api
SITE_URL=http://localhost:5173 (port de base Vite)

# Envoi des e-mails (formulaire de contact)
MAIL_HOST=
MAIL_PORT=
MAIL_NAME=
MAIL_PASSWORD=
```

| Variable | Description |
|---|---|
| `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | Connexion à la base MySQL |
| `PORT` | Port d'écoute de l'API |
| `API_KEY` | Clé attendue dans l'en-tête `x-api-key` de chaque requête |
| `SITE_URL` | Origine autorisée par le CORS (URL du front) |
| `MAIL_*` | Identifiants du serveur SMTP |
| `DB_CA_CERT` | *(production uniquement)* certificat CA pour la connexion SSL à la base distante |

### 4. Installer et configurer le client

```bash
cd ../client
npm install
```

Créer un fichier `.env` à la racine du dossier `client/` :

```env
VITE_API_URL=http://localhost:3000
VITE_API_KEY=votre_cle_api
```

> **Important** : `VITE_API_KEY` doit avoir **exactement la même valeur** que
> `API_KEY` côté API, sinon toutes les requêtes seront rejetées avec une
> erreur `401`.

---

## Lancement

L'API et le client se lancent séparément, dans **deux terminaux distincts**.

### API

```bash
cd API
npm start ou npx nodemon server.js
```

L'API démarre sur `http://localhost:3000`.

### Client

```bash
cd client
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

---

## Build de production

```bash
cd client
npm run build
```

Les fichiers optimisés sont générés dans le dossier `client/dist/`.

---

## Endpoints de l'API

Toutes les requêtes nécessitent l'en-tête `x-api-key`.

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/artisans` | Liste des artisans (filtres optionnels : `?nom=`, `?id_specialite=`, `?id_categories=`) |
| `GET` | `/artisans/top` | Les trois artisans du mois |
| `GET` | `/artisans/:id` | Fiche complète d'un artisan |
| `GET` | `/categories` | Catégories et leurs spécialités |
| `POST` | `/contact` | Envoi du formulaire de contact à un artisan |

---

## Technologies

**Back-end**
- Node.js / Express
- Sequelize (ORM)
- MySQL
- Nodemailer
- Helmet, CORS, express-rate-limit

**Front-end**
- React (Vite)
- React Router
- Bootstrap 5 / Sass
- react-helmet-async

**Outils**
- Figma (maquettes)
- Git / GitHub
- Visual Studio Code

---

## Auteur

Luce Anderson — Devoir bilan, Centre Européen de Formation
