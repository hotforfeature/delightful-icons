import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import '../delightful-icons-style.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg name="delightful-arrow-back-arrow-forward" size="24">
  <svg>
    <defs>
      <g id="arrow-back" class="abafab">
        <style type="text/css">
          @keyframes abafab-w {
            from {
              transform: rotate(-180deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          .abafab path {
            animation-name: abafab-w;
            animation-duration: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            animation-timing-function: var(--delightful-icons-easing);
            transform-origin: 50% 50%;
          }
        </style>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </g>

      <g id="arrow-forward" class="abafaf">
        <style type="text/css">
          @keyframes abafaf-w {
            from {
              transform: rotate(-180deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          .abafaf path {
            animation-name: abafaf-w;
            animation-duration: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            animation-timing-function: var(--delightful-icons-easing);
            transform-origin: 50% 50%;
          }
        </style>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);

/**
@license
MIT License

Copyright (c) 2017 Andrew Mitchell

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
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
