If you would like to create a new icon set pair, use the following template and guidelines before submitting a pull request:

```html
<!--
@license
MIT License

Copyright (c) 2017 Andrew Mitchell, <additional contributors>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->
<link rel="import" href="../../iron-iconset-svg/iron-iconset-svg.html">
<link rel="import" href="../delightful-icons-style.html">

<!-- Icon names should exactly match their iron-icon counterpart. At the moment, only Material
Icons are being considered. Available icons and their names may be found at
https://material.io/icons/ -->
<iron-iconset-svg name="delightful-FIRST-SECOND" size="24">
  <svg>
    <defs>
      <!-- A class is used to add specificity to the selectors. This is needed for ShadyCSS
      polyfilled browsers. Format is the first letter of each word of the first and second icon
      followed by the first letter of each word of the active icon.

      ex: "Menu-Arrow-Back" for the Arrow-Back icon would be "mabab"

      If there is another icon with the same class name, use a number suffix that does not yet
      exist in the repository.

      ex: "multi-add-back" would be "mab1ab" and "mab1ma" -->
      <g id="FIRST" class="fsf">
        <!-- Ensure type="text/css" is added to the <style> tag -->
        <style type="text/css">
          /* Keyframes must use a prefix for ShadyCSS */
          /* "w" is the wrapper element. Perform rotations and visibility animations here */
          @keyframes fsf-w {
            /* Prefer simple from/to instead of 0%/100% or multi-staged animations */
            from {
              transform: rotate(0deg);
              visibility: visible;
            }
            to {
              transform: rotate(180deg);
              visibility: hidden;
            }
          }

          /* Use "a", "b", "c", etc for line points to manipulate. Try to use as few lines as
          possible */
          @keyframes fsf-a {
            from {
              /* The transformation needed to show SECOND icon (the icon we're transforming from) */
            }
            to {
              /* The transformation needed to show FIRST icon (the icon we're transforming to) */
            }
          }

          @keyframes fsf-b {
            from {
              /* The transformation needed to show SECOND icon (the icon we're transforming from) */
            }
            to {
              /* The transformation needed to show FIRST icon (the icon we're transforming to) */
            }
          }

          /* "v" is a simple visibility transformation. This should always be applied to the path */
          @keyframes fsf-v {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }

          /* Use the correct class for specificity. Add sections as needed for additional lines, but
          otherwise do not modify these values */
          .fsf .w,
          .fsf .a,
          .fsf .b {
            animation-duration: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            animation-timing-function: var(--delightful-icons-easing);
          }

          .fsf .w {
            animation-name: fsf-w;
          }

          .fsf .a {
            animation-name: fsf-a;
          }

          .fsf .b {
            animation-name: fsf-b;
          }

          .fsf path {
            animation-name: fsf-v;
            animation-delay: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            visibility: hidden;
          }
        </style>
        <g transform="translate(12, 12)" stroke="currentcolor">
          <g class="w">
            <line class="a" x1="-1" y1="0" x2="1" y2="0" />
            <line class="b" x1="-1" y1="0" x2="1" y2="0" />
            <!-- Add additional lines as needed -->
          </g>
        </g>
        <!-- Include a path displaying FIRST, the icon we're transforming to. This serves two
        purposes:
        1. On browsers without SVG animations (IE11), this will display to show the right icon
        2. On icons whose lines overlap (such as arrow-back for example), this ensures the final
           icon is completely solid whenever transparent colors are used
        -->
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </g>

      <g id="SECOND" class="fss">
        <style type="text/css">
          @keyframes fss-w {
            from {
              transform: rotate(0deg);
              visibility: visible;
            }
            to {
              transform: rotate(180deg);
              visibility: hidden;
            }
          }

          @keyframes fss-a {
            from {
              /* The transformation needed to show FIRST icon (the icon we're transforming from) */
            }
            to {
              /* The transformation needed to show SECOND icon (the icon we're transforming to) */
            }
          }

          @keyframes fsf-b {
            from {
              /* The transformation needed to show FIRST icon (the icon we're transforming from) */
            }
            to {
              /* The transformation needed to show SECOND icon (the icon we're transforming to) */
            }
          }

          @keyframes fss-v {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }

          .fss .w,
          .fss .a,
          .fss .b,
          .fss .c {
            animation-duration: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            animation-timing-function: var(--delightful-icons-easing);
          }

          .fss .w {
            animation-name: fss-w;
          }

          .fss .a {
            animation-name: fss-a;
          }

          .fss .b {
            animation-name: fss-b;
          }

          .fss path {
            animation-name: fss-v;
            animation-delay: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            visibility: hidden;
          }
        </style>
        <g transform="translate(12, 12)" stroke="currentcolor">
          <g class="w">
            <line class="a" x1="-1" y1="0" x2="1" y2="0" />
            <line class="b" x1="-1" y1="0" x2="1" y2="0" />
          </g>
        </g>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
```
