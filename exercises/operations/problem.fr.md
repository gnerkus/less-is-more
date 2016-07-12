# OPERATIONS

Les opérations arithmétiques comme `+`, `-`, `*` et `/` peut être appliqué à des nombres, des couleurs et des variables. Si possible, les opérations mathématiques prennent unités en compte et convertir des nombres avant d'appliquer les opérations. Par exemple:

**input**
```less
@padding: 5px;
h1 {
  padding: @padding;
}
h1.page-title {
  padding: (@padding * 2);
}
```

Lors de la compilation, un rembourrage de 10px, deux fois la valeur de `@ padding`, sera appliquée à la `.page-title`.

**output**
```css
h1 {
  padding: 5px;
}
h1.page-title {
  padding: 10px;
}
```

Les couleurs sont divisées en leurs, dimensions, bleu et alpha vert rouge. L'opération est appliquée à chaque dimension de couleur séparément. Les opérations sur les couleurs produisent toujours des couleurs valides.

**input**
```less
@color: #224488 / 2;
a {
  color: @color;
}
```

**output**
```css
a {
  color: #112244;
}
```

Alors que les opérations fonctionnent sans parenthèses, il est préférable de la pratique de les utiliser.

# EXERCICE

Ecrire une feuille de style:
- Définit un `@conteneur-margin` variable et fixe sa valeur à 20px.
- Définit un ruleset `.container` qui définit la marge à `@ conteneur-margin`.
- Le ruleset `.container` doit fixer la marge de la moitié (1/2) de `@ conteneur-margin` lorsque la largeur maximale est `480px`.

--
## INDICES

Pour faire un MOINS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
