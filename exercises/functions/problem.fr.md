# LES FONCTIONS

LESS fournit une variété de fonctions qui transforment les couleurs, manipuler des chaînes et effectuent des mathématiques. Elles sont documentées pleinement à la référence de fonction.

L'exemple suivant utilise la fonction `percentage` pour convertir 0,5 à 50% et de la fonction `saturation` pour augmenter la saturation de la couleur de `@base` de 5%:

**input**
```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width);
  color: saturate(@base, 5%);
}
```

**output**
```css
.class {
  width: 50%;
  color: #f6430f;
}
```

# EXERCISE

Ecrire une feuille de style:
- Définit une variable `@width` et définit sa valeur à `0.05`.
- Définit un ruleset `.coln` et définit sa propriété `margin` à la valeur en pourcentage de `@width`. Utilisez la fonction `percentage` pour effectuer la conversion.

--
## INDICES

Pour faire un MOINS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
