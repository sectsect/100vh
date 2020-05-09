# @sect/100vh

[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/SparingSoftware/nuxt-sparing-center/blob/master/LICENSE)

Lightweight JS package for easy overcoming the problem with 100vh on mobile devices :iphone:

## How does it work?
It creates the CSS variable called `--vh` at the `<html>` tag and `vh` variable in the `window`, which is changed on orientation change & **`resize` event** and stays still during scroll. This will prevent the page "jumping" on scroll, which leads to bad user experience.<br>
##### Important note:
This will stay still only on mobile devices, on desktop the value changes together with the viewport. That means that it can be used on any resolution and there is no need for additional css media queries.

## Installation
Install package in your project 
```bash
npm i @sect/100vh
```

## Initialization
Import the package and run the init function at the page start.<br>
(for Nuxt.js/Vue app it can be initialized in plugins, if you're using other technology – init the script above all the other code)

```js
import vh from '@sect/100vh';

vh.init();
```

## Browser:

```html
<!-- Include 100vh from dist -->
<script src="dist/100vh.umd.js"></script>
<!-- Initialize (you can do this whenever you want) -->
<script>
vh.init();
</script>
```

## Examples
CSS
```css
.section {
  height: var(--vh);
}
```
JS
```js
window.querySelectorAll('section').style.height = window.vh;
```

## Contributing
Want to help improve this plugin? Great!  
Project is open-source so fork repo and join us!

## License
MIT License © [Sparing Interactive](https://github.com/SparingSoftware)
