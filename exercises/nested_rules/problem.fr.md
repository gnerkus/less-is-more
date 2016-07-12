# RÈGLES IMBRIQUÉS

Lors de l'écriture HTML que vous avez sans doute remarqué qu'il a une hiérarchie imbriquée et visuelle claire. CSS, d'autre part, ne fonctionne pas. Voici un exemple de certains styles typiques pour la navigation d'un site:

```less
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

Vous remarquerez que le `ul`,` li`, et `a` sélecteurs sont imbriqués dans le sélecteur `nav`. Ceci est une excellente façon d'organiser votre CSS et le rendre plus lisible. Lorsque vous générez le CSS, vous obtiendrez quelque chose comme ceci:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

# EXERCICE
Ecrire une feuille de style:
- Définit un `.red-text` mixin qui définit la couleur `#F44336`.
- Définit le `margin` à '0' pour un `ul` contenu dans un élément `aside` utilisant la nidification.
- Ajoute la `.red-text` mixin aux liens contenus dans un élément `aside` utilisant la nidification.

--
## INDICES

Pour faire un MOINS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
