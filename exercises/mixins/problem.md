# MIXINS

Mixins are a way of including ("mixing in") properties from one rule-set into another rule-set. So say we have the following rule-set defined for the `'bordered'` class:

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

If we want to use these properties inside other rule-sets, we can drop the name of the class where we want the properties to be defined:

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

When we process the LESS file, we see that the declarations in `.bordered` have been added to both `#menu a` and `.post a`.

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

# EXERCISE

- Define a variable `@material-blue` and set its value to `#2196F3`.
- Write a mixin `.header` that sets the background-color to the value of the variable `@material-blue`.
- Add the mixin to the `.article-header` rule-set.

--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
