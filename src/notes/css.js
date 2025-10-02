const cssNotes = `visibility doesn't transition in css

--- Margins shorthand ---
margin: 1em;
margin: -3px;                     ALL
margin: 5% auto;            T/B         L/R
margin: 1em auto 2em;       T    L/R     B
margin: 2px 1em 0 auto;     T   R    B   L

gap: 20px 40px;

--- Transitions ---
property / duration / timing-function / delay

--- Transformations ---
box-shadow: hoffset voffset blur color;

linear gradients:
background-image: function(direction, color1 %, color2 %);

Vendor prefixes:
-moz-, -webkit-, -ms-, -o-


--- Media Queries ---
@media (min-width: 2560px) { /* 4K */ }
@media (min-width: 1440px) { /* large desktops */ }
@media screen and (max-width: 1024px) { /* tablets landscape */ }
@media (max-width: 768px) { /* tablets */ }
@media (max-width: 425px) { /* large smartphones */ }
@media (max-width: 375px) { /* medium smartphones */ }
@media (max-width: 320px) { /* small smartphones */ }
@media screen and (max-width: 568px) and (max-height: 320px) { /* iPhone 5 */ }

:root is a selector for the highest-level element in the doc (<html>)
handy for declaring css variables (custom properties)
    ex:
    :root {
    --color-accent-light: #e07a5f;
    }
    some__selector {
    color: var(--color-accent-light);
    }
`;

export default cssNotes;
