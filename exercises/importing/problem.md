# IMPORTING

A LESS or CSS file can be imported into another LESS file and all the variables and mixins defined will be made available. The `.less` extension is optional for LESS file imports.

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

- Write a stylesheet, `variables.less`, that defines two variables:
  - `@padding` with a value set to `10px`
  - `@margin` with a value set to `5%`
- Write another stylesheet that:
  - Imports the `variables` stylesheet.
  - Defines a ruleset, `.card`, that sets the value of `padding` to `@padding`; the value of `margin` to `@margin` and the value of `color` to `#111111`.

--
## HINTS

Pour cet exercice, vous êtes de vérifier la seconde feuille de style. Ne pas vérifier la stylesheet de `variables.less`.

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
