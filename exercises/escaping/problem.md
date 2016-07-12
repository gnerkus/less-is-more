# ESCAPING

Escaping allows you to use any arbitrary string as property or variable value. You escape a string by appending `~` to the beginning of the string:

**Input:**
```less
.weird-element {
  content: ~"^//* some horrible but needed css hack";
}
```

**Output:**
```css
.weird-element {
  content: ^//* some horrible but needed css hack;
}
```

# EXERCISE

Write a stylesheet that:
- Defines the ruleset `.coloured-block` which sets the `background-color` to `green` using an escaped string.

--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
