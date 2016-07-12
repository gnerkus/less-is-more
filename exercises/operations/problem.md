# OPERATIONS

Arithmetic operations like `+`, `-`, `*` and `/` can be applied to numbers, colours and variables. If possible, mathematical operations take units into account and convert numbers before applying operations. For example:

**input**
```less
@padding: 5px;
h1 {
  padding: @padding;
}
h1.page-title {
  padding: (@padding * 2);
}
```

When compiled, a padding of 10px, twice the value of `@padding`, will be applied to the `.page-title`.

**output**
```css
h1 {
  padding: 5px;
}
h1.page-title {
  padding: 10px;
}
```

Colours are split into their red, green, blue and alpha dimensions. The operation is applied to each color dimension separately. Operations on colours always produce valid colours.

**input**
```less
@color: #224488 / 2;
a {
  color: @color;
}
```

**output**
```css
a {
  color: #112244;
}
```

While operations work without parentheses, it is best practice to use them.

# EXERCISE

Write a stylesheet that:
- Defines a variable `@container-margin` and sets its value to 20px.
- Defines a ruleset `.container` that sets the margin to `@container-margin`.
- The `.container` ruleset should set the margin to half (1 / 2) of `@container-margin` when the maximum width is `480px`.

--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
