## Fonctions terminées :
<ul>
<li>Récupérer les données de l'API TMDB, dédiée aux films. :white_check_mark:</li>
<li>Créer un carousel contenant les films sortis récemment, issus de TMDB API. :white_check_mark:</li>
<li>Créer une grille responsive de 20 films les mieux notés, issus de TMDB API. :white_check_mark:</li>
<li>Créer un slider de tags sur la page d'Accueil. :white_check_mark:</li>
<li>Créer une page permettant de se connecter ou s'inscrire. :white_check_mark:</li>
<li>Rendre la navbar et sidebar responsive. :white_check_mark:</li>
<li>Gérer l'ouverture, la mi-ouverture et la fermeture de la sidebar. :white_check_mark:</li>
<li>Compartimenter la sidebar comme celle de YouTube. :white_check_mark:</li>
<li>Lier la totalité des pages entre elles. :white_check_mark:</li>
</ul>

#### Fonctions à réaliser :
<ul>
<li>Filtrer les vidéos grâce aux tags.</li>
<li>Filtrer les vidéos grâce à la barre de recherche.</li>
<li>Récupérer les données de l'API Spotify, dédiée aux musiques.</li>
<li>Récupérer les données de l'API RAWG, dédiée aux jeux.</li>
<li>Lier le formulaire d'inscription/connexion à Firebase afin de stocker les données.</li>
<li>Utiliser Redux pour gérer les states vis à vis des likes, commentaires et abonnements.</li>
</ul>

## Avant de se lancer dans la programmation du site web, il est crucial d'analyser le projet dans son ensemble et de se poser les bonnes questions. Ci-dessous, le résumé des questions/réponses émisent au début du projet : 

##### Quel Framework front-end sera utilisé (React, Vue, Angular ou autre) ?
<p>→ React.</p>

##### Où seront stockées les données ? API REST ou en local ?
<p>→ Les données relatives à l'infrastructure du site seront stockées en local, tandis que les données des vidéos et créateurs de contenus proviendront de l'API.</p>

##### Quelle API sera utilisée ? 
<p>Initialement YouTube API devait être utilisée, mais elle sera remplacée (en raison de quotas trop récurents et trop restreignants).</p>
<p>→ On utilisera donc 3 APIs :</p>
<ul>
<li>TMDB API, dédiée aux films.</li>
<li>Spotify API, dédiée aux musiques.</li>
<li>RAWG API, dédiée aux jeux.</li>
</ul>

Pour plus d'informations : [Calculateur des quotas de YouTube API](https://developers.google.com/youtube/v3/determine_quota_cost).

##### Comment structurer le site ? Quelles pages seront accessibles ?
<p>→ On se limitera à 4 pages :</p>
<ul>
<li>La page d'accueil (Home),</li>
<li>La page des abonnements (Subscriptions),</li>
<li>La page des vidéos likées (Favorites),</li>
<li>La page d'inscription/connexion (Account).</li>
</ul>

##### Comment gérer le passage d'une page à l'autre ?
<p>→ Utilisation de la librairie react-router-dom.</p>

##### Quels composants pourront être crées pour faciliter la maintenabilité du site ?
<p>→ On se limitera à 5 composants :</p>
<ul>
<li>La barre de navigation du haut (TopNavbar, utilisable dans Home),</li>
<li>La barre de navigation de gauche (LeftNavbar, utilisable dans Home),</li>
<li>Composant comprenant la vidéo et les informations principales (CardVideo, utilisable dans Home et Favorites),</li>
<li>Composant comprenant le profil du réalisateur de la vidéo (CardProfile, utilisable dans Subscriptions),</li>
<li>Composant de tags comprenant les mots clefs des vidéos (Tagsbar, utilisable dans Home),</li>
</ul>

##### Les composants pourront-ils être testés ?
<p>→ Oui, il faudra donc sortir la logique des composants fonctionnels pour pouvoir tester les fonctions.</p>

##### Comment et avec quoi les composants seront-ils testés ?
<p>→ Seuls des tests unitaires seront réalisés, à l'aide de : </p>
<ul>
<li>Jest : outil permettant de tester du code JS/TS.</li>
<li>React Testing Library : outil permettant de tester des composants React.</li>
<li>MSW : outil permettant de faire des simulations d'API.</li>
</ul> 

##### Les données seront-elles sécurisées ?
<p>→ Etant donné que les données sensibles (celles des utilisateurs inscrits) seront stockées sur Firebase (partie backend), cela génère une première couche de sécurité.</p>

##### Comment seront gérés les données en cache ?
<p>→ Oui, grâce à la propriété localStorage de Web Storage API.</p>

##### Comment seront gérés les formulaires et leur validation ?
<p>→ On utilisera les trois éléments suivants :</p>
<ul>
<li>Pour la partie front : la bibliothèque React Hook Form (plutôt que Formik),</li>
<li>Pour la validation : la bibliothèque Yup,</li>
<li>Pour la partie back : le service d'hébergement Firebase.</li>
</ul>

##### Comment seront gérés la création de compte et connexion d'un utilisateur ?
<p>→ On utilisera les propriétés signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged de Firebase.</p>

##### Quelles seront les méthodologies appliquées à ce projet ?
<p>→ On utilisera la méthodologie agile (SCRUM, KANBAN), et on tentera de se rapprocher de la méthode TDD.</p>

##### Quelles seront les fonctions principales à réaliser lors du premier sprint ?
<p>→ Les fonctions principales à réaliser seront : </p>
<ul>
<li>La page d'accueil (Home) avec ses composants : TopNavbar, LeftNavbar, CardVideo.</li>
<li>Tester les composants cités.</li>
</ul>

##### D'où proviendront les icons ?
<p>→ De Fontawesome (Material UI aurait pu être un bon choix, mais on doit télécharger l'ensemble des icons sur le projet, ce qui n'est pas le cas avec Fontawesome).</p>

##### Quel sera le stage management du site ?
<p>→ On utilisera Redux.</p>
