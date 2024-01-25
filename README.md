# Tailwind Utopia

> Elegantly scale type and space without breakpoints \
> [utopia.fyi](https://utopia.fyi)

A TailwindCSS plugin that generates fluid font-size and spacing utilities:

```html
<h1 class="text-fl-3xl px-fl-2xs-md">Example</h1>
```
- `text-fl-3xl`: sizes the text to `3xl`
- `px-fl-2xs-md`: applies horizontal padding; `2xs` for the smallest devices, interpolated up to `md` for the largest

## Installation
```
npm install -D @domchristie/tailwind-utopia
```

## Getting Started
Require the plugin in your `tailwind.config.js` file and reference it in the plugins section.
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ...
    }
  },
  plugins: [require('@domchristie/tailwind-utopia')]
}
```

By default, this generates a fluid type scale and a fluid space scale with the same defaults as the Utopia calculators:
* A **type scale** with 2 negative steps and 5 positive steps from a 21px base size at the minimum screen size of 320px up to a 24px base size at the maximum screen size of 1140px, with the modular scale being 1.2 (minor third) at the minimum screen size and 1.25 (major third) at the maximum screen size.
* A **spacing scale** with t-shirt sizes from 3xs up to 3xl, and utilities for each space-value pair in the scale

### Typographic Scale
The default font-size utility classes are as follows:
```
text-fl-xs
text-fl-sm
text-fl-base
text-fl-lg
text-fl-xl
text-fl-2xl
text-fl-3xl
text-fl-4xl
```

### Spacing Scale
The default spacing utility classes are as follows:
```
<utility>-fl-3xs
<utility>-fl-2xs
<utility>-fl-xs
<utility>-fl-sm
<utility>-fl-md
<utility>-fl-lg
<utility>-fl-xl
<utility>-fl-2xl
<utility>-fl-3xl
```
These work with any utility classes that depend on the the [`spacing` configuration](https://tailwindcss.com/docs/customizing-spacing), i.e. `padding`, `margin`, `width`, `height`, `maxHeight`, `gap`, `inset`, `space`, `translate`, `scrollMargin`, and `scrollPadding`.

Examples:
```
m-fl-lg
gap-fl-3xs
-space-x-fl-sm
```
#### Space Value Pairs
Utilities will be generated for any space value pairs. Separate t-shirt sizes with a `-`. Examples:
```
pt-fl-3xs-2xs // single step
m-fl-sm-lg // sm - lg step
```

## Customization
The plugin is a standard Tailwind plugin, with its defaults set using a theme object. So all the defaults can be extended within your Tailwind config file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      utopia: {
        // customization
      }
    }
  }
}
```

Below is the default theme used by the plugin:
```
minWidth: 320,
minSize: 21,
minScale: 1.2,
maxWidth: 1140,
maxSize: 24,
maxScale: 1.25,
fontSize: {
  xs: 'inherit',
  sm: 'inherit',
  base: 1.4,
  lg: 1.33,
  xl: 1.2,
  '2xl': 1.11,
  '3xl': 1,
  '4xl': 1
},
spacing: {
  '3xs': 0.25,
  '2xs': 0.5,
  xs: 0.75,
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 3,
  '2xl': 4,
  '3xl': 6
}
```
* **minWidth**: the screen size the scale starts at in px (unitless integer)
* **minSize**: the base font size at the minScreen size (unitless integer)
* **minScale**: the modular scale to use for type sizes at minScreen size (decimal)
* **minScreen**: the screen size at which the scale stops increasing in px (unitless integer)
* **maxSize**: the base font size a the maxScreen size (unitless integer)
* **maxScale**: the modular scale to use at the maxScreen size (decimal)
* **fontSize**: the names, line-heights, and min/max text size configuration. The key determines the class name that will be generated. A non-object value will be used for the line-height. Alternatively, an object can configure the `lineHeight` and `min`/`max` values. For example:
  ```
  '4xl': {
    lineHeight: 0.88,
    min: 'var(--f-3xl-min)'
  }
  ```
  This overrides the `4xl` size, bringing the min size down to that of `3xl`. Unspecified values will use the defaults. Read [Utopian CSS generator, an iteration](https://utopia.fyi/blog/a-second-generator) for more on this approach.
* **spacing**: the names and multipliers for the spacing scale

You can reference other parts of your theme config if desired (e.g. for using entries from your screens config).  An example customization could look as follows:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      utopia: theme => ({
        minWidth: theme('screens.sm'),
        maxWidth: theme('screens.xl')
      })
    }
  }
}
```

## Configuration
The plugin has the following options to configure the style of classes generated and how they are generated.

<table>
  <tr>
    <th>Option</th><th>Default</th>
  </tr>
  <tr>
    <td>prefix</td><td>'fl-'</td>
  <tr>
  <tr>
    <td>baseKey</td><td>'base'</td>
  <tr>
</table>

Apply configuration when calling the plugin in the Tailwind config:
```js
// tailwind.config.js
module.exports = {
  // …
  plugins: [
    require('@domchristie/tailwind-utopia')({
      prefix: 'f-'
    })
  ]
}
```

#### prefix
The string that prefixes the utility class's value.

#### baseKey
Internally, the plugin needs to know which steps in your scale are negative and which are positive. This is done by identifying the base step in your scale. Any entries in the sizes array before the base are considered negative, all those after are positive.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements
Utopia: [James Gilyead](https://www.hustlersquad.net/) & [Trys Mudford](https://www.trysmudford.com/) \
Original Tailwind Utopia plugin: [Chris Pymm](https://www.chrispymm.co.uk/) & [CWS Digital](https://cwsdigital.com/)
