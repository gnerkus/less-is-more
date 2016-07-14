# IMPORTATION

Un fichier LESS ou CSS peut être importé dans un autre fichier LESS et toutes les variables et mixins définies sera disponible. L'extension `.less` est facultative pour les importations de fichiers LESS.

```less
// colors.less
@red: #F44336;
@blue: #2196F3;
```

**input**
```less
// base.less
@import "colors";

.panel {
  color: @red;
}
```

**output**
```css
.panel {
  color: #F44336;
}
```

# EXERCISE
- Ecrire un stylesheet, `variables.less`, qui définit deux variables:
   - `@padding` avec une valeur fixée à `10px`
   - `@margin` avec une valeur fixée à `5% `
- Rédiger une autre feuille de style:
   - Importe le stylesheet de `'variables'`.
   - Définit un ensemble de règles, `.card`, qui définit la valeur de` `@padding` à padding`; la valeur de `@margin` à `margin` et la valeur de `color` à `#111111`.

--
## INDICES

Pour faire un MOINS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
