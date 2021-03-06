import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import '../delightful-icons-style.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg name="delightful-menu-arrow-back" size="24">
  <svg>
    <defs>
      <g id="arrow-back" class="mabab">
        <style type="text/css">
          @keyframes mabab-w {
            from {
              transform: rotate(0deg);
              visibility: visible;
            }
            to {
              transform: rotate(180deg);
              visibility: hidden;
            }
          }

          @keyframes mabab-a {
            from {
              transform: translate(0px, -5px) scale(9, 2);
            }
            to {
              transform: translate(3.3px, -3.3px) rotate(45deg) scale(5.75, 2);
            }
          }

          @keyframes mabab-b {
            from {
              transform: scale(9, 2);
            }
            to {
              transform: translate(0.25px, 0px) scale(7.5, 2);
            }
          }

          @keyframes mabab-c {
            from {
              transform: translate(0px, 5px) scale(9, 2);
            }
            to {
              transform: translate(3.3px, 3.3px) rotate(-45deg) scale(5.75, 2);
            }
          }

          @keyframes mabab-v {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }

          .mabab .w,
          .mabab .a,
          .mabab .b,
          .mabab .c {
            animation-duration: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            animation-timing-function: var(--delightful-icons-easing);
          }

          .mabab .w {
            animation-name: mabab-w;
          }

          .mabab .a {
            animation-name: mabab-a;
          }

          .mabab .b {
            animation-name: mabab-b;
          }

          .mabab .c {
            animation-name: mabab-c;
          }

          .mabab path {
            animation-name: mabab-v;
            animation-delay: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            visibility: var(--hidden, hidden);
          }
        </style>
        <g transform="translate(12, 12)" stroke="currentcolor">
          <g class="w">
            <line class="a" x1="-1" y1="0" x2="1" y2="0"></line>
            <line class="b" x1="-1" y1="0" x2="1" y2="0"></line>
            <line class="c" x1="-1" y1="0" x2="1" y2="0"></line>
          </g>
        </g>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </g>

      <g id="menu" class="mabm">
        <style type="text/css">
          @keyframes mabm-w {
            from {
              transform: rotate(0deg);
              visibility: visible;
            }
            to {
              transform: rotate(180deg);
              visibility: hidden;
            }
          }

          @keyframes mabm-a {
            from {
              transform: translate(-3.3px, -3.3px) rotate(-45deg) scale(5.75, 2);
            }
            to {
              transform: translate(0px, -5px) scale(9, 2);
            }
          }

          @keyframes mabm-b {
            from {
              transform: translate(0.25px, 0px) scale(7.5, 2);
            }
            to {
              transform: scale(9, 2);
            }
          }

          @keyframes mabm-c {
            from {
              transform: translate(-3.3px, 3.3px) rotate(45deg) scale(5.75, 2);
            }
            to {
              transform: translate(0px, 5px) scale(9, 2);
            }
          }

          @keyframes mabm-v {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }

          .mabm .w,
          .mabm .a,
          .mabm .b,
          .mabm .c {
            animation-duration: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            animation-timing-function: var(--delightful-icons-easing);
          }

          .mabm .w {
            animation-name: mabm-w;
          }

          .mabm .a {
            animation-name: mabm-a;
          }

          .mabm .b {
            animation-name: mabm-b;
          }

          .mabm .c {
            animation-name: mabm-c;
          }

          .mabm path {
            animation-name: mabm-v;
            animation-delay: var(--delightful-icons-duration);
            animation-fill-mode: forwards;
            visibility: var(--hidden, hidden);
          }
        </style>
        <g transform="translate(12, 12)" stroke="currentcolor">
          <g class="w">
            <line class="a" x1="-1" y1="0" x2="1" y2="0"></line>
            <line class="b" x1="-1" y1="0" x2="1" y2="0"></line>
            <line class="c" x1="-1" y1="0" x2="1" y2="0"></line>
          </g>
        </g>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
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
