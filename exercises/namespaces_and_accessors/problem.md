# NAMESPACES AND ACCESSORS

LESS provides a namespaces feature that allows you to organize your mixins into groups. Namespaces allow you to avoid naming conflicts in bigger projects as well as encapsulate/isolate a group of mixins from outside world.

You define the namespace like a ruleset, with a `#` appended to the beginning of the namespace's title. You then define your mixins within the ruleset. The example below defines the `.button`, `.tab` and `.citation` mixins within the `#ns` namespace:

```less
#ns {
  .button {
    display: block;
    border: 1px solid black;
    background-color: #FAFAFA;
  }
  .tab {
    // Sample declarations
  }
  .citation {
    // Sample declarations
  }
}
```

The `.button`, `.tab` and `.citation` mixins can only be accessed via the `#ns` namespace. If we need to apply the `.button` mixin to a `#header a` ruleset, we do this:

**input**
```less
@material-orange: #FF9800;
#header a {
  color: @material-orange;
  #ns > .button;
}
```

This gives the corresponding CSS:

**output**
```css
#ns .button {
  display: block;
  border: 1px solid black;
  background-color: #FAFAFA;
}
#header a {
  color: #FF9800;
  display: block;
  border: 1px solid black;
  background-color: #FAFAFA;
}
```

# EXERCISE

Write a stylesheet that:
- Defines a namespace `#header-styles`.
- Defines the mixin `.header-lg` that sets the value of the `font-size` to `32px`. This mixin should be defined in the `#header-styles` namespace.
- Defines the ruleset `.page-header` that sets the `color` to `#111111` and uses the `.header-lg` mixin.

--
## HINTS

To make a LESS (SCSS) stylesheet, create a new file with a `.less` extension and start writing LESS. When you are done, you must run:

```sh
$ less-is-more verify stylesheet.less
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
