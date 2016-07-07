# LES VARIABLES

Les variables sont un moyen de stocker des informations (par exemple des tailles de remplissage, couleurs) qui sont destinés à être réutilisés dans toute une feuille de style. Pour créer une variable, ajoutez le symbole `@` au début du nom de la variable. Voici un exemple:

**Input:**
```less
@matériau-rose: #E91E63;
@matériau-léger-rose: @matériau-pink + #111;

#header {
  color: @material-light-pink;
}
```

Lorsque le MOINS est traité, il prend la variable que nous définissons pour le `@matériau-léger-rose` et sorties CSS normale avec notre valeur de la variable placée dans le CSS. Cela peut être extrêmement puissant lorsque l'on travaille avec des couleurs de la marque et de garder leur cohérence dans l'ensemble du site.

**Output:**
```css
#header {
  color: #fa2f74;
}
```

# EXERCICE

Ecrire une feuille de style qui définit une variable `@color`, définit sa valeur à« #000 », et l'utilise pour définir le style de `color` du `body` élément.

--
## INDICES

Pour faire un MOINS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
