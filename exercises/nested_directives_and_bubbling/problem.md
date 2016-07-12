# NESTED DIRECTIVES AND BUBBLING

CSS stylesheet directives like @font-face, @media or @supports must normally be placed on a stylesheet's top level or inside other directives. LESS allows them also to be nested into rulesets, mixins or any other less structure. Both conditional (`@media`) and non-conditional (`@font-face`) are removed from rulesets they are in and placed on top.

For non-conditional directives, the relative order against other elements inside the same ruleset remains unchanged.

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

Conditional directives copy all encountered selectors into their own bodies.

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

# EXERCISE
Write a stylesheet that:
- Defines the ruleset `.screen-color` that sets the text color to `#212121` when the media is `'screen'` using nesting.
- The `.screen-color` ruleset should set the text color to `#333333` when the media is `'screen'` and the minimum width is `768px` using nesting.

--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
