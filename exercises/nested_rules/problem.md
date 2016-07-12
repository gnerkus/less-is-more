# NESTED RULES

When writing HTML you've probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn't. Here's an example of some typical styles for a site's navigation:

```less
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

You'll notice that the `ul`, `li`, and `a` selectors are nested inside the `nav` selector. This is a great way to organize your CSS and make it more readable. When you generate the CSS you'll get something like this:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

# EXERCISE
Write a stylesheet that:
- Defines a mixin `.red-text` that sets the color to `#F44336`.
- Sets the `margin` to `0` for a `ul` contained within an `aside` element using nesting.
- Adds the mixin `.red-text` to links contained within an `aside` element using nesting.

--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
