# DIRECTIVES IMBRIQUÉS ET BUBBLING

Directives CSS stylesheet comme @font-face, @media ou @supports doivent normalement être placés au niveau supérieur d'une feuille de style ou à l'intérieur d'autres directives. MOINS leur permet aussi d'être imbriqués dans rulesets, mixins ou toute autre structure moins. Les deux conditionnelle (`@ media`) et non conditionnelle (`@font-face`) sont retirés de rulesets ils sont et placés sur le dessus.

Pour des directives non-conditionnelles, l'ordre relatif par rapport aux autres éléments à l'intérieur de la même ruleset reste inchangé.

**input**
```less
#a {
  color: blue;
  @font-face {
    src: made-up-url;
  }
  padding: 2 2 2 2;
}
```

**output**
```css
#a {
  color: blue;
}
@font-face {
  src: made-up-url;
}
#a {
  padding: 2 2 2 2;
}
```

Les directives conditionnelles copient tous les sélecteurs rencontrés dans leurs propres corps.

**input**
```less
.complicated .selector {
  margin: 4 4 4 4;
  @media print {
    margin: 0 0 0 0;
  }
}
```

**output**
```css
.complicated .selector { //place 1
  margin: 4 4 4 4;
}
@media print {
  .complicated .selector {//place 2
    margin: 0 0 0 0;
  }
}
```

# EXERCICE
Ecrire une feuille de style:
- Définit le ruleset `.screen-color` qui définit la couleur du texte à `#212121` lorsque le média est `'screen'` utilisant la nidification.
- Le `.screen-color` ruleset devrait définir la couleur du texte à `#333333` lorsque le média est `'screen'` et la largeur minimale est `768px` utilisant la nidification.

--
## INDICES

Pour faire un MOINS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
