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
import '@polymer/polymer/lib/elements/custom-style.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
  <style>
    :root {
      --delightful-icons-duration: 0.2s;
      --delightful-icons-easing: cubic-bezier(0.4, 0, 0.2, 1);
    }
  </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 2 2');
Object.assign(svg.style, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '2px',
  height: '2px',
});

var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rect.setAttribute('x', '0');
rect.setAttribute('y', '0');
rect.setAttribute('width', '1');
rect.setAttribute('height', '1');
Object.assign(rect.style, {
  transform: 'translate(1px, 1px)'
});

svg.appendChild(rect);
document.body.appendChild(svg);
var supportsCSSTransform = document.elementFromPoint(1, 1) !== svg;
svg.parentNode.removeChild(svg);

if (!supportsCSSTransform) {
  var customStyle = document.createElement('custom-style');
  var style = document.createElement('style');
  // Safari disables animations at 0s, so we set them to 1ms
  style.innerHTML = 'html { --delightful-icons-duration: 1ms !important }';
  customStyle.appendChild(style);
  document.head.appendChild(customStyle);
}
