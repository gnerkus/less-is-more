# ÉCHAPPER

Escaping vous permet d'utiliser toute chaîne arbitraire comme une propriété ou une valeur variable. Vous échappez une chaîne en ajoutant `~` au début de la chaîne:

**Input:**
```less
.weird-element {
  content: ~"^//* some horrible but needed css hack";
}
```

**Output:**
```css
.weird-element {
  content: ^//* some horrible but needed css hack;
}
```

# EXERCISE

Ecrire une feuille de style:
- Définit la règle énoncée `.coloured-block` qui fixe le` background-color` à `green` en utilisant une chaîne échappée.

--
## INDICES

Pour faire un MOINS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
