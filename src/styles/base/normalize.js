import { createGlobalStyle } from 'styled-components'
import breakPoint from './breakpoints'
const Normalize = createGlobalStyle`
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  
  /* default browser font size is 16px set to 10 */
  font-size: 62.5%; /* 1rem = 10px; 10px/16px 0 62.5% */
  
  ${breakPoint.greaterThan("small")`
    font-size: 75%;  /* 1rem = 12px */
  `}
  ${breakPoint.greaterThan("medium")`
    font-size: 87.5%;  /* 1rem = 14px */
  `}
  ${breakPoint.greaterThan("large")`
    font-size: 100%; /* 1rem = 16px */
  `}
  ${breakPoint.greaterThan("huge")`
    font-size: 125%; /* 1rem = 18px */
  `}
  
}

*,
*::after,
*::before {
	margin: 0;
  padding: 0;
	box-sizing: inherit;
}
body {
  margin: 0;
  box-sizing: inherit;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
details {
  display: block;
}
`

export default Normalize