# Avant de se lancer précipitamment dans la programmation, il est crucial d'analyser le projet dans son ensemble et de se poser les bonnes questions. Ci-dessous, le résumé des questions/réponses émisent au début de ce projet : 

Quel Framework utiliser (React, Vue ou Angular) ?
<p>→ React.</p>

Où seront stockées les données ? API REST ou en local ?
<p>→ Les données relatives à l'infrastructure du site seront stockées en local, tandis que les données des vidéos et créateurs de contenus proviendront de l'API Youtube.</p>

Comment structurer le site ? Quelles pages et à combien se limiter ?
<p>→ On se limitera à 4 pages :</p>
<ul>
<li>La page d'acceuil (Home),</li>
<li>La page des abonnements (Subscriptions),</li>
<li>La page des vidéos likées (Favorites),</li>
<li>La page d'inscription/connexion (Account).</li>
</ul>

Comment gérer le passage d'une page à l'autre ?
<p>→ Utilisation de la librairie react-router-dom.</p>

Quels composants pourront être crées pour faciliter la maintenabilité du site ?
<p>→ On se limitera à 5 composants :</p>
<ul>
<li>La barre de navigation du haut (TopNavbar, utilisable dans Home),</li>
<li>La barre de navigation de gauche (LeftNavbar, utilisable dans Home),</li>
<li>Composant comprenant la vidéo et les informations principales (CardVideo, utilisable dans Home et Favorites),</li>
<li>Composant comprenant le profil du réalisateur de la vidéo (CardProfile, utilisable dans Subscriptions),</li>
<li>Composant de tags comprenant les mots clefs des vidéos (Tagsbar, utilisable dans Home),</li>
</ul>

Les composants pourront-ils être testés ?
<p>→ Oui, il faudra donc sortir la logique des composants fonctionnels pour pouvoir les tester les fonctions.</p>

Comment et avec quoi les composants seront-ils testés ?
<p>→ Seuls des tests unitaires seront réalisés, à l'aide de : </p>
<ul>
<li>Jest : outil permettant de tester du code JS/TS.</li>
<li>React Testing Library : outil permettant de tester des composants React.</li>
<li>MSW : outil permettant de faire des simulations d'API.</li>
</ul>

Les données seront-elles sécurisées ?
<p>→ Etant donné que les données sensibles (celles des utilisateurs inscrits) seront stockées sur Firebase (partie backend), cela génère une première couche de sécurité.</p>

Comment seront gérés les données en cache ?
<p>→ Oui, grâce à la propriété localStorage de Web Storage API.</p>

Comment seront gérés les formulaires et leur validation ?
<p>→ On utilisera les trois éléments suivants :</p>
<ul>
<li>Pour la partie front : la bibliothèque React Hook Form (plutôt que Formik),</li>
<li>Pour la validation : la bibliothèque Yup</li>
<li>Pour la partie back : le service d'hébergement Firebase.</li>
</ul>


Comment seront gérés la création de compte et connexion d'un utilisateur ?

Quelles seront les méthodologies appliquées à ce projet ?

Quelles seront les fonctions principales à réaliser lors du premier sprint ?


