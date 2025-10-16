Exercice 2 – Badia Abouanane

📝 Description

Ce projet est une mini API développée dans le cadre d’un exercice personnel. Elle permet de gérer une liste de tâches (to-do list) via des opérations simples de type CRUD (Create, Read, Update, Delete). Uniquement le Create, le Read et le Delete a ete fais.

⚙️ Technologies utilisées

Node.js
Express.js
(Optionnel) JSON comme base de données temporaire

📁 Structure du projet

server.js : point d’entrée de l’application
routes/ : contient les routes de l’API
controllers/ : logique métier pour chaque route
models/ : schémas de données (ex: modèle de tâche)
package.json/ : dépendances et scripts

▶️ Lancer le projet en local

Cloner le dépôt :

bash
git clone https://github.com/B4diaa/Exercice2-BadiaAbouanane.git
cd Exercice2-BadiaAbouanane

Installer les dépendances :

bash
npm install

Lancer le serveur :

bash
node index.js

L’API sera disponible sur http://localhost:3000 (ou le port défini)

📌 Exemples d’endpoints

GET /todos : récupérer toutes les tâches
POST /todos : ajouter une nouvelle tâche
DELETE /todos/:id : supprimer une tâche

🤝 Contribuer

Tu veux améliorer ou étendre cette API ? Voici comment faire :

Fork le dépôt

Crée une branche :

bash
git checkout -b nouvelle-fonctionnalite

Apporte tes modifications

Commit et push :

bash
git add .
git commit -m "Ajout d'une fonctionnalité"
git push origin nouvelle-fonctionnalite

Ouvre une Pull Request

📬 Contact

Pour toute question ou collaboration, n’hésite pas à ouvrir une issue ou me contacter via GitHub.