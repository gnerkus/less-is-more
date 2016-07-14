# NAMESPACES et ACCESSEURS

LESS fournit une fonctionnalité de namespaces qui vous permet d'organiser vos mixins en groupes. Namespaces vous permettent d'éviter les conflits de noms dans des projets plus importants, ainsi que encapsuler / isoler un groupe de mixins de monde extérieur.

Vous définissez l'espace de noms comme un ruleset, avec un `#` annexée au début du titre de l'espace de noms. Vous définissez ensuite vos mixins dans le ruleset. L'exemple ci-dessous définit la `.button`, `.tab` et `.citation` mixins dans le `#ns` espace de noms:

```less
#ns {
  .button {
    display: block;
    border: 1px solid black;
    background-color: #FAFAFA;
  }
  .tab {
    // Sample declarations
  }
  .citation {
    // Sample declarations
  }
}
```

Le `.button`,` `.tab` et .citation` mixins ne peut être accessible via le `#ns` espace de noms. Si nous avons besoin d'appliquer le mixin ``.button` à un `#header a` ruleset, nous faisons cela:

**input**
```less
@material-orange: #FF9800;
#header a {
  color: @material-orange;
  #ns > .button;
}
```

Cela donne le CSS correspondant:

**output**
```css
#ns .button {
  display: block;
  border: 1px solid black;
  background-color: #FAFAFA;
}
#header a {
  color: #FF9800;
  display: block;
  border: 1px solid black;
  background-color: #FAFAFA;
}
```

# EXERCISE

Ecrire une feuille de style:
- Définit un espace de noms `#header-styles`.
- Définit le mixin `.header-lg` qui définit la valeur de la `font-size` à `32px`. Ce mixin doit être défini dans le `#header-styles` espace de noms.
- Définit le ruleset `.page-header` qui définit la `color` à `#111111` et utilise le mixin `.header-lg`.

--
## INDICES

Pour faire un LESS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
