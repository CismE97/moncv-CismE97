# moncv
CV / Portfolio réalisé durant le module "PROJET DE TECHNOLOGIES WEB" de 2ème année de Bachelor en Informatique de Gestion à la He-Arc de Neuchâtel.
Le site que j'ai réalisé est visible [ici](https://heg-web.github.io/moncv-CismE97/).
## Processus
Afin de réaliser ce CV, j'ai suivi les étapes suivantes : 

1. Installation des outils nécessaires. 
2. Développement du HTML
3. Développement du CSS
4. Ajout de bootstrap (avec adaptation de l'HTML / CSS)

## Outils / Technologies utilisés

- Node.js
- npm
- Webpack

- Bootstrap
- Mardown

- Visual Studio Code
- Git et GitHub

## Processus détaillé
### Installation des outils
1. Installer [Visual Studio Code](https://code.visualstudio.com/Download)
2. Installer [Git](https://git-scm.com/downloads)
3. Configuration de eslint : Ajouter le code ci-dessous dans le fichier .eslintrc.js
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

### Installation de node.js
1. Téléchargement et installation de Node.js / Vue.js pour avoir npm. (Installation globale pour tous les projets). ``` npm install -g vue-cli ```
2. Création d'un nouveau projet (utilise le template webpack) ``` vue init webpack nomDuProjet ```
3. ??  ``` code . ```
4. Installation des dépendances . ``` npm install ```
4. Cleanup ``` npm uninstall vue --save ```

#### Démarrage du serveur de développement
``` bash
npm run dev
```
#### Déploiement avec GitHub
1. Prérequis : Créer un compte GitHub et avoir son projet configurer avec git. 
2. Génération des fichiers minifiés ```npm run build ```
3. Création de la branche gh-pages  (??)
La branche master sera déployée sur la branche gh-pages cette page sera hébergée par GitHub.
[GitHub Pages](https://pages.github.com/)

4. Configuarion du deploiement
- Installation d'un plugin pour 'commit' et 'push' automatiquement.
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
6. On peut exécuter la commande ```npm run deploy```
7. Le site est visible à l'adresse http://usernameABC.github.io/repositoryYXZ 


### Installation de  [Bootstrap V3](https://getbootstrap.com/docs/3.3/)
```
 npm install bootstrap-css-only@3 --save
 npm install bootstrap.native --save
```

## Installation de Jquery
1. Installation du Package ```npm install jquery```
2. Configuration pour webpack : 
    Ajouter les lignes ci-dessous dans le fichier WEBPACK.DEV.CONF.JS AND WEBPACK.PROD.CONF.JS
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
    ...
    ...
    globals: {
        $: false
    },
    ...
    ...

### Ajout de librairies Jquery
#### jquery-smooth-scroll
jquery-smooth-scroll permet un défilement fluide pour les liens de même page.
1. Installation : ```npm install jquery-smooth-scroll```
2. Exemple d'utilisation : Sur cet exemple, l'effet de scroll est ajouté sur tous les liens (balise <a>).
```javascript
$(document).ready(() => {
    $('a').smoothScroll();
});
``` 
#### Chart.js
Permet la création simple de différentes sortes de graphiques.
1. Installation  ```npm install chart.js --save```
2. Utilisation : Importer dans le fichier main.js  ```import Chart from 'chart.js';```

Un exemple de transformation de progress bar est visible dans le fichier [main.js](https://github.com/heg-web/moncv-CismE97/blob/master/src/main.js) ou dans la [documentation officiel](http://www.chartjs.org/). 



# build for production and view the bundle analyzer report


## Utilisation de Git / GitHub
git init create a new local git repository
git add . add all modified and new files to stage
git commit -m 'msg' commit staged files with msg
git push send commits to remote server
git pull download remote commits
git clone copy a remote repository
.gitignore ignore files or folders


* text eol=lf


