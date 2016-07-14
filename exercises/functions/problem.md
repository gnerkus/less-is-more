# FUNCTIONS

LESS provides a variety of functions which transform colors, manipulate strings and perform math. They are documented fully in the function reference.

The following example uses the `percentage` function to convert 0.5 to 50% and the `saturation` function to increase the saturation of the `@base` color by 5%:

**input**
```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width);
  color: saturate(@base, 5%);
}
```

**output**
```css
.class {
  width: 50%;
  color: #f6430f;
}
```

# EXERCISE

Write a stylesheet that:
- Defines a variable `@width` and sets its value to `0.05`.
- Defines a ruleset `.coln` and sets its `margin` property to the percentage value of `@width`. Use the `percentage` function to perform the conversion.

--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
