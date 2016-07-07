# VARIABLES

Variables are a way to store information (e.g padding sizes, colours) that are intended to be reused throughout a stylesheet. To create a variable, append the `@` symbol to the beginning of the variable's name. Here's an example:

**Input:**
```less
@material-pink: #E91E63;
@material-light-pink: @material-pink + #111;

#header {
  color: @material-light-pink;
}
```

When the LESS is processed, it takes the variable we define for the `@material-light-pink` and outputs normal CSS with our variable value placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.

**Output:**
```css
#header {
  color: #fa2f74;
}
```

# EXERCISE

Write a stylesheet that defines a variable `@color`, sets its value to '#000', and uses it to set the `color` style of the `body` element.

--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
