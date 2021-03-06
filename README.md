# moncv-CismE97 (Cv de Christe Thibaud)
CV / Portfolio réalisé durant le module "PROJET DE TECHNOLOGIES WEB" de 2ème année de Bachelor en Informatique de Gestion à la He-Arc de Neuchâtel.
Le site que j'ai réalisé est visible [ici](https://heg-web.github.io/moncv-CismE97/).

## Processus
Afin de réaliser ce CV, j'ai suivi les étapes suivantes : 
1. Installation des outils nécessaires (Visual Studio Code, Git)
2. Installation Node.js 
3. Développement du HTML
4. Développement du CSS
5. Ajout de bootstrap (avec adaptation de l'HTML / CSS)
6. Ajout de Jquery
7. Ajout de jquery-smooth-scroll
8. Ajout de Chart.js
9. Ajout de scrollreveal

## Outils / Technologies utilisées
- [Node.js](#installation-de-nodejs)
- npm
- Webpack

- [Bootstrap](#installation-de--bootstrap-v3)
- [jquery-smooth-scroll](#jquery-smooth-scroll)
- [Chart.js](#chartjs)
- [scrollreveal](https://github.com/heg-web/moncv-CismE97#scrollreveal)

- [Visual Studio Code](#installation-des-outils)
- Git et GitHub

## Processus détaillé
### Installation des outils
1. Installer [Visual Studio Code](https://code.visualstudio.com/Download)
2. Installer [Git](https://git-scm.com/downloads)
`

### Installation de node.js
NodeJS est une plateforme basée sur le moteur JavaScript V8 de Chrome et permet aux développerur de réaliser des applications/sites en utilisant du JavaScript.

1. Téléchargement et installation de Node.js / Vue.js pour avoir npm. (Installation globale pour tous les projets). ``` npm install -g vue-cli ```
2. Création d'un nouveau projet (utilise le template webpack) ``` vue init webpack nomDuProjet ```
3. Installation des dépendances . ``` npm install ```
4. Cleanup ``` npm uninstall vue --save ``` (On supprime vue.js car on n'en a pas besoin pour ce projet)
5. Configuration de eslint : Ajouter le code ci-dessous dans le fichier .eslintrc.js de votre projet

```
{
  ...,
  "rules": {
    // enforce semi
    "semi":  ["error", "always"],
    // use 4 spaces indent
    "indent": ["error", 4],
    // make rule equal vs code auto formatting
    "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never"
    }],
    ...
  },
  ...
}
``` 
6. Correction de la configuration de webpack. Il faut donc remplacer la ligne suivante dans le fichier build/webpack.dev.conf : ```devtool: 'source-map'```

#### Démarrage du serveur de développement
``` bash
npm run dev
```

#### Déploiement avec GitHub
1. Prérequis : Créer un compte GitHub et avoir son projet configuré avec git. (Voir [aide Git](#aide-de-git))
2. Génération des fichiers minifiés ```npm run build ```
3. Création la branche gh-pages : La branche master sera déployée sur la branche gh-pages. Cette page sera hébergée par GitHub.
[GitHub Pages](https://pages.github.com/)

4. Configuarion du deploiement : Installation d'un plugin pour 'commit' et 'push' automatiquement.
 ```npm install push-dir --save-dev```

Puis on ajoute les lignes ci-dessous dans le fichier package.json
 ```
{
...,
  "scripts": {
    ...,
    "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup --verbose"
  },
...
}
 ```

5. On commit tous les derniers changements :
``` bash 
git add . --all
git commit -m
```
6. Exécution de la commande ```npm run deploy```
7. Site visible à l'adresse http://usernameABC.github.io/repositoryYXZ 


### Installation de  [Bootstrap V3](https://getbootstrap.com/docs/3.3/)
Bootstrap est un regrupement d'outils permettant de réaliser des designs facilement.

```
 npm install bootstrap-css-only@3 --save
 npm install bootstrap.native --save
```

### Installation de Jquery
Jquery est une bibliothèque Javascript facilitant l'écriture de code Javascript.

1. Installation du Package ```npm install jquery```
2. Configuration pour webpack : 
    Ajouter les lignes ci-dessous dans le fichier WEBPACK.DEV.CONF.JS et WEBPACK.PROD.CONF.JS
    ```
    ...
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ...
    ```
    Et dans le fichier .ESLINTRC.JS
    ```
    ...
    globals: {
        $: false
    },
    ...
    ```

### Ajout de librairies Jquery
#### [jquery-smooth-scroll](https://www.npmjs.com/package/jquery-smooth-scroll)
jquery-smooth-scroll permet un défilement fluide pour les liens de même page.
1. Installation : ```npm install jquery-smooth-scroll```
2. Exemple d'utilisation : Sur cet exemple, l'effet de scroll est ajouté sur tous les liens (balise ```<a>```).
```javascript
$(document).ready(() => {
    $('a').smoothScroll();
});
``` 
#### [Chart.js](https://www.npmjs.com/package/chart.js)
Permet la création simple de différentes sortes de graphiques.
1. Installation  ```npm install chart.js --save```
2. Utilisation : Importer dans le fichier main.js  ```import Chart from 'chart.js';```

Un exemple de transformation de progress bar est visible dans le fichier [main.js](https://github.com/heg-web/moncv-CismE97/blob/master/src/main.js) ou dans la [documentation officielle](http://www.chartjs.org/).

#### [scrollreveal](https://scrollrevealjs.org/)
Permet de faire apparaître les éléments du DOM au fur et à mesure et que l'utilisateur scroll. 
1. Installation de la librairie : ```npm install scrollreveal```
2. Utilisation : Importer dans le fichier main.js : ```import Chart from 'chart.js';```
3. Exemple d'utilisation : _Ajoute l'effet sur tous les titres h2_

```javascript
$(document).ready(() => {
    let element = new ScrollReveal();
    element.reveal('h2');
});
```

### Aide de [Git](https://git-scm.com/)
Git est un système de gestion des versions décentralisé.
#### Nouveau projet
- Initialisation de git dans le répertoire actuel : ```git init```

#### Clone d'un projet existant
- Téléchargment d'un dépôt existant. Exemple avec le dépot du projet : ```git clone https://github.com/heg-web/moncv-CismE97.git```

#### Commandes indispensables
- Ajout des fichiers modifiés dans le stage : ```git add . ```
- Création d'un commit avec un message : ```git commit -m 'msg'```
- Envoi des derniers commits sur le dépôt distant : ```git push```
- Téléchargement des derniers commits depuis le dépôt distant : ```git pull```

#### Configurations
- Spécifier à Git d’utiliser le Line Feed (caractère de contrôle indiquant le passage à la ligne de texte suivante) comme caractère de fin de ligne.
Ajouter  ```* text eol=lf``` suivante dans le fichier : .gitattributes

- Le fichier .gitignore permet d'indiquer à git d'ignorer certains fichiers
- Le fichier .gitattribute a été configuré [ainsi](https://github.com/heg-web/moncv-CismE97/blob/master/.gitattributes)

