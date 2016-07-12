# MIXINS

Mixins sont une façon d'inclure ("mélange dans") propriétés de l'une des règles définie dans un autre ensemble de règles. Donc, dire que nous avons l'ensemble de règles suivant défini pour le `'bordered'` classe:

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

Si nous voulons utiliser ces propriétés à l'intérieur d'autres ensembles de règles, nous pouvons laisser tomber le nom de la classe où nous voulons que les propriétés à définir:

**Input**
```less
#menu a {
  color: #111;
  .bordered;
}

.post a {
  color: red;
  .bordered;
}
```

Lorsque nous traitons le fichier MOINS, nous voyons que les déclarations dans `.bordered` ont été ajoutés à la fois` et `#menu a` .post a`.

**Output**
```css
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

# EXERCICE

- Définir un `@ matériau blue` variable et définir sa valeur à` # 2196F3`.
- Ecrire un .header` mixin `qui définit la couleur d'arrière plan à la valeur de la` @ matériau blue` variable.
- Ajouter le mixin à la `ensemble de règles de .L'article-header`.

## INDICES

Pour faire un MOINS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
