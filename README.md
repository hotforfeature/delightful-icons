[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/hotforfeature/delightful-icons)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

_[Demo and API docs](https://www.webcomponents.org/element/hotforfeature/delightful-icons)_

## &lt;delightful-icons&gt;

Material Design: [Creative Customization](https://material.io/guidelines/motion/creative-customization.html#creative-customization-icons)

`delightful-icons` is a series of icon sets. Each icon set is a pair of icons that can transition from one to another with an animation. These animations are part of Material Design's delightful details.

### Install

```
bower install --save delightful-icons
```

### Usage

Each animation is defined as a separate icon set. Import the icon sets you want to use, or import all of them.

```html
<!-- Individually import transitions -->
<link rel="import" href="./bower_components/delightful-icons/icons/menu-arrow-back.html">

<!-- Or all transitions! -->
<link rel="import" href="./bower_components/delightful-icons/all.html">
```

Icon sets are defined by a pair of icons that transition between each other. The icon set name is <code>delightful-<em>icon-pair</em></code> and the icon name is the icon of the pair you wish to display.

To transition to another icon, change the icon name to the other value in the pair.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../paper-icon-button/paper-icon-button.html">
    <link rel="import" href="icons/add-create.html">
    <link rel="import" href="icons/menu-arrow-back.html">
    <link rel="import" href="icons/play-arrow-pause.html">
    <next-code-block></next-code-block>

    <paper-icon-button icon="delightful-play-arrow-pause:play-arrow"></paper-icon-button>
    <paper-icon-button icon="delightful-add-create:add"></paper-icon-button>

    <script>
      var TOGGLE_MAP = {
        'delightful-add-create': ['add', 'create'],
        'delightful-play-arrow-pause': ['play-arrow', 'pause']
      };

      document.addEventListener('WebComponentsReady', function() {
        var buttons = document.querySelectorAll('paper-icon-button');
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener('click', function(e) {
            var parts = e.target.icon.split(':');
            var options = TOGGLE_MAP[parts[0]];
            if (options) {
              if (parts[1] === options[0]) {
                parts[1] = options[1];
              } else {
                parts[1] = options[0]
              }

              e.target.icon = parts.join(':');
            }
          });
        }
      });
    </script>
  </template>
</custom-element-demo>
```
-->
```html
<paper-icon-button id="button" icon="delightful-menu-arrow-back:menu"></paper-icon-button>

<script>
  window.addEventListener('WebComponentsReady', function() {
    var button = document.querySelector('#button');
    button.addEventListener('click', function() {
      if (button.icon.indexOf(':menu') > -1) {
        button.icon = button.icon.replace(':menu', ':arrow-back');
      } else {
        button.icon = button.icon.replace(':arrow-back', ':menu');
      }
    });
  });
</script>
```

You can transition from one pair of icons to another, provided the icon you're transitioning to is the opposite icon of the current pair.

```
   delightful-menu-arrow-back:arrow-back
-> delightful-menu-arrow-back:menu
-> delightful-menu-arrow-forward:arrow-forward
```

### Styling

The following custom properties are available for styling:

Custom Property               | Description         | Default
------------------------------|---------------------|----------
`--delightful-icons-duration` | Transition duration | `0.2s`
`--delightful-icons-easing`   | Transition easing   | `cubic-bezier(0.4, 0, 0.2, 1)`

### Compatibility

On browsers that do not support CSS transforms, the icon will immediately change from one to another without a transition .

- **IE 11** does not support CSS transforms on SVG elements.
- [**Microsoft Edge** is considering CSS transforms for SVG](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/supportcsstransformsonsvg/).
- **Safari 9** supports CSS transforms, but [due to other maintenance complications](https://github.com/hotforfeature/delightful-icons/issues/3) I have chosen to disable animations for 9. Safari 10+ will show animations correctly.

