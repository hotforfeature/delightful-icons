[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/hotforfeature/delightful-icons)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

_[Demo and API docs](https://www.webcomponents.org/element/hotforfeature/delightful-icons)_

## &lt;delightful-icons&gt;

Material Design: [Creative Customization](https://material.io/guidelines/motion/creative-customization.html#creative-customization-icons)

`delightful-icons` is a collection of icon sets and a helper `<delightful-icon>` element to assist transitioning between them. Each icon set is a pair of icons that can transition from one to another with an animation. These animations are part of Material Design's delightful details.

### &lt;delightful-icon&gt;

`<delightful-icon>` is a helper element that wraps any element that uses an `<iron-icon>`. You can use it to define which icons to transition to.

```html
<!-- Import transitions individually -->
<link rel="import" href="./bower_components/delightful-icons/icons/menu-arrow-back.html">
<link rel="import" href="./bower_components/delightful-icons/icons/menu-arrow-forward.html">

<!-- Or all transitions -->
<link rel="import" href="./bower_components/delightful-icons/icons/all.html">

<!-- Import transitions before <delightful-icon> element -->
<link rel="import" href="./bower_components/delightful-icons/delightful-icon.html">
```

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../paper-icon-button/paper-icon-button.html">
    <link rel="import" href="icons/add-create.html">
    <link rel="import" href="icons/menu-arrow-back.html">
    <link rel="import" href="icons/play-arrow-pause.html">
    <link rel="import" href="delightful-icon.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<delightful-icon icon="menu" next="arrow-back" toggle-on="click">
  <paper-icon-button></paper-icon-button>
</delightful-icon>

<delightful-icon icon="play-arrow" next="pause" toggle-on="click">
  <paper-icon-button></paper-icon-button>
</delightful-icon>

<delightful-icon icon="add" next="create" toggle-on="click">
  <paper-icon-button></paper-icon-button>
</delightful-icon>
```

There are two ways to trigger a transition:

1. Change the `icon` property
2. Set the `next` property and invoke `toggle()`

`<delightful-icon>` can listen to a default event from its wrapped element to toggle on by setting the `toggle-on` attribute to the event name.

By default, `<delightful-icon>` will use its first child as the wrapped element and set the `icon` property. This can be customized further with `query` and `property` attributes.

```html
<delightful-icon icon="menu" next="arrow-back" toggle-on="click"
    query=".use-this" property="displayIcon">
  <div>
    <!-- <delightful-icon> will set the displayIcon property of this element -->
    <my-custom-element class="use-this"></my-custom-element>
  </div>
</delightful-icon>
```

You can transition between several icons, provided each icon transitioned to has an imported animation for the icon it is transitioning from.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../paper-icon-button/paper-icon-button.html">
    <link rel="import" href="icons/menu-arrow-back.html">
    <link rel="import" href="icons/menu-arrow-forward.html">
    <link rel="import" href="icons/arrow-back-arrow-forward.html">
    <link rel="import" href="delightful-icon.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<!-- This button will transition between menu, arrow-back, and arrow-forward -->
<delightful-icon id="menu-arrows" icon="menu">
  <paper-icon-button></paper-icon-button>
</delightful-icon>

<script>
window.addEventListener('WebComponentsReady', function() {
  var delight = document.querySelector('#menu-arrows');
  delight.iconElement.addEventListener('click', function() {
    if (delight.icon === 'menu') {
      delight.icon = 'arrow-back';
    } else if (delight.icon === 'arrow-back') {
      delight.icon = 'arrow-forward';
    } else {
      delight.icon = 'menu';
    }
  });
});
</script>
```

### Styling

The following custom properties are available for styling:

Custom Property               | Description         | Default
------------------------------|---------------------|----------
`--delightful-icons-duration` | Transition duration | `0.2s`
`--delightful-icons-easing`   | Transition easing   | `cubic-bezier(0.4, 0, 0.2, 1)`

### Compatibility

On browsers that do not support CSS transforms, the icon will immediately change from one to another without a transition.

- **IE 11** does not support CSS transforms on SVG elements.
- [**Microsoft Edge** is considering CSS transforms for SVG](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/supportcsstransformsonsvg/).
- **Safari 9** supports CSS transforms, but [due to other maintenance complications](https://github.com/hotforfeature/delightful-icons/issues/3) I have chosen to disable animations for 9. Safari 10+ will show animations correctly.

