# PORTÉE

Portée en LESS est similaire à celle des langages de programmation. Variables et mixins sont d'abord cherché localement, et si elles ne sont pas trouvés, le compilateur se penchera dans le champ d'application de parent, et ainsi de suite.

**input**
```less
@material-red: #F44336;

#page {
  @material-red: #D32F2F;
  #header {
    color: @material-red;
  }
}
```

**output**
```css
#page #header {
  color: #D32F2F;
}
```

Vous remarquerez que la couleur de `#header` est réglé sur la valeur qui a été définie dans le `#page` ruleset.

# EXERCISE

Ecrire une feuille de style:
- Définit une variable `@padding` et définit sa valeur à `0.01` en pour cent. Utilisez la fonction `percentage`.
- Définit un ruleset `.card`.
- Définit une variable `@padding` dans le ruleset `.card` et définit sa valeur à `10px`.
- Définit un ruleset `.footer` dans le ruleset `.card` et définit son rembourrage à `@padding`.

--
## INDICES

Pour faire un LESS (SCSS) stylesheet, créer un nouveau fichier avec une extension `.less` et commencer à écrire MOINS. Lorsque vous avez terminé, vous devez exécuter:

```sh
$ less-is-more verify stylesheet.less
```

procéder. Votre stylesheet sera testé, un rapport sera généré, et la leçon sera marquée 'terminé' si vous réussissez.
