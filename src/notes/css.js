const cssNotes = [
  {
    title: "Margins shorthand",
    content: `
margin: 1em;
margin: -3px;                     ALL
margin: 5% auto;            T/B         L/R
margin: 1em auto 2em;       T    L/R     B
margin: 2px 1em 0 auto;     T   R    B   L

gap: 20px 40px;`,
  },
  {
    title: "Transitions",
    content: `property / duration / timing-function / delay
    visibility doesn't transition in css`,
  },

  {
    title: "Transformations",
    content: "box-shadow: hoffset voffset blur color;",
  },

  {
    title: "linear gradients:",
    content: "background-image: function(direction, color1 %, color2 %);",
  },
  {
    title: "Vendor prefixes:",
    content: "-moz-, -webkit-, -ms-, -o-",
  },

  {
    title: "Media Queries",
    content: `
@media (min-width: 2560px) { /* 4K */ }
@media (min-width: 1440px) { /* large desktops */ }
@media screen and (max-width: 1024px) { /* tablets landscape */ }
@media (max-width: 768px) { /* tablets */ }
@media (max-width: 425px) { /* large smartphones */ }
@media (max-width: 375px) { /* medium smartphones */ }
@media (max-width: 320px) { /* small smartphones */ }
@media screen and (max-width: 568px) and (max-height: 320px) { /* iPhone 5 */ }`,
  },
];

export default cssNotes;
