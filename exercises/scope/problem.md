# SCOPE

Scope in LESS is similar to that of programming languages. Variables and mixins are first looked for locally, and if they aren't found, the compiler will look in the parent scope, and so on.

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

You'll notice that the `#header` color is set to the value that was defined within the `#page` ruleset.

# EXERCISE

Write a stylesheet that:
- Defines a variable `@padding` and sets its value to `0.01` in percent. Use the `percentage` function.
- Defines a ruleset `.card`.
- Defines a variable `@padding` within the `.card` ruleset and sets its value to `10px`.
- Defines a `.footer` ruleset within the `.card` ruleset and sets its padding to `@padding`.


--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
